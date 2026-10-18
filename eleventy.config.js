import path from "node:path";
import { HtmlBasePlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

const MESES = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

function normalizePrefix(p) {
  if (!p || p === "/") return "/";
  if (!p.startsWith("/")) p = "/" + p;
  if (!p.endsWith("/")) p = p + "/";
  return p;
}

export default function (eleventyConfig) {
  const pathPrefix = normalizePrefix(process.env.PATH_PREFIX);

  eleventyConfig.addPlugin(HtmlBasePlugin);

  // El plugin de imágenes toma el atributo width como único ancho a generar. Este paso corre
  // antes (prioridad mayor) y quita width/height de las <img> locales para que genere todos
  // los anchos y los reescriba con las medidas reales del archivo.
  eleventyConfig.htmlTransformer.addPosthtmlPlugin("html", () => (tree) => {
    tree.match({ tag: "img" }, (node) => {
      if (node.attrs?.src?.startsWith("/assets/img/")) {
        delete node.attrs.width;
        delete node.attrs.height;
      }
      return node;
    });
    return tree;
  }, { priority: 0 });

  // Imágenes adaptables: cada <img> del HTML generado recibe srcset con varios anchos
  // (y el original), para que el teléfono no descargue la versión de escritorio.
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    extensions: "html",
    formats: ["webp"],
    widths: [400, 800, 1200, 1600, "auto"],
    urlPath: "/assets/img/r/",
    outputDir: "./_site/assets/img/r/",
    filenameFormat: (id, src, width, format) =>
      `${path.basename(src, path.extname(src))}-${width}w-${id.slice(0, 6)}.${format}`,
    sharpWebpOptions: { quality: 78 },
    defaultAttributes: { decoding: "async", sizes: "auto" },
  });

  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("page", "layouts/page.njk");
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addWatchTarget("src/assets/css/");
  eleventyConfig.addWatchTarget("src/assets/js/");

  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/*.html").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter("dateEs", (d) => {
    const dt = new Date(d);
    return `${dt.getUTCDate()} de ${MESES[dt.getUTCMonth()]} de ${dt.getUTCFullYear()}`;
  });
  eleventyConfig.addFilter("dateISO", (d) => new Date(d).toISOString());
  eleventyConfig.addFilter("dateShort", (d) => new Date(d).toISOString().slice(0, 10));
  eleventyConfig.addFilter("inCategory", (posts, slug) => posts.filter((p) => (p.data.categories || []).includes(slug)));
  eleventyConfig.addFilter("inTag", (posts, slug) => posts.filter((p) => (p.data.tags || []).includes(slug)));
  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));
  eleventyConfig.addFilter("where", (arr, key, value) => (arr || []).filter((x) => x[key] === value));
  // Temas del Cuaderno: de las categorías de una nota, solo las que son temas (en el orden de temas.json)
  eleventyConfig.addFilter("themesOf", (cats, temas) => (temas || []).filter((t) => (cats || []).includes(t.slug)));
  // Tema principal de una nota: el más específico según la prioridad de temas.json (1 = más específico)
  eleventyConfig.addFilter("mainTheme", (cats, temas) =>
    (temas || []).filter((t) => (cats || []).includes(t.slug)).sort((a, b) => a.prioridad - b.prioridad)[0]
  );
  // Minutos de lectura a 200 palabras por minuto (sin contar etiquetas HTML ni el bloque de datos)
  eleventyConfig.addFilter("readingTime", (html) => {
    const text = String(html || "").replace(/^---[\s\S]*?\n---\n/, "").replace(/<[^>]+>/g, " ");
    const words = text.split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  });
  eleventyConfig.addFilter("exclude", (arr, url) => arr.filter((p) => p.url !== url));
  eleventyConfig.addFilter("termName", (slug, terms) => {
    const t = (terms || []).find((x) => x.slug === slug);
    return t ? t.name : slug;
  });
  // La primera imagen del cuerpo de una nota suele ser la más grande en pantalla:
  // se carga sin diferir y con prioridad alta para mejorar el LCP.
  // Los enlaces que abren otra pestaña lo avisan a los lectores de pantalla
  eleventyConfig.addTransform("avisoNuevaPestana", function (content) {
    if (!(this.page.outputPath || "").endsWith(".html")) return content;
    const aviso = " (se abre en otra pestaña)";
    return content.replace(/<a\b([^>]*\btarget="_blank"[^>]*)>([\s\S]*?)<\/a>/g, (m, attrs, inner) =>
      /\baria-label="/.test(attrs)
        ? `<a${attrs.replace(/\baria-label="([^"]*)"/, `aria-label="$1${aviso}"`)}>${inner}</a>`
        : `<a${attrs}>${inner}<span class="sr-only">${aviso}</span></a>`
    );
  });

  eleventyConfig.addFilter("eagerFirstImage", (html) =>
    String(html).replace(/<img\b[^>]*>/, (tag) =>
      tag
        .replace(/\s+loading="lazy"/, "")
        .replace(/<img\b/, '<img fetchpriority="high" sizes="(min-width: 1025px) 864px, 90vw"')
    )
  );
  // Índice de las notas: ids en los h2 del cuerpo y lista de secciones
  const slugify = (t) => String(t).replace(/<[^>]+>/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "seccion";
  const headings = (html) => {
    const seen = {};
    return [...String(html).matchAll(/<h2\b([^>]*)>([\s\S]*?)<\/h2>/g)].map((m) => {
      const text = m[2].replace(/<[^>]+>/g, "").trim();
      let id = slugify(text);
      seen[id] = (seen[id] || 0) + 1;
      if (seen[id] > 1) id += "-" + seen[id];
      return { id, text, attrs: m[1] };
    });
  };
  eleventyConfig.addFilter("toc", (html) => headings(html).map(({ id, text }) => ({ id, text })));
  eleventyConfig.addFilter("headingIds", (html) => {
    const list = headings(html);
    let i = 0;
    return String(html).replace(/<h2\b([^>]*)>/g, (tag, attrs) => (/\bid=/.test(attrs) ? tag : `<h2 id="${list[i++].id}"${attrs}>`));
  });
  // Notas relacionadas: primero las del mismo tema, después las más recientes
  eleventyConfig.addFilter("relatedPosts", (posts, url, themeSlug, n) => {
    const others = posts.filter((p) => p.url !== url);
    const same = themeSlug ? others.filter((p) => (p.data.categories || []).includes(themeSlug)) : [];
    return [...same, ...others.filter((p) => !same.includes(p))].slice(0, n);
  });
  eleventyConfig.addFilter("absUrl", (url, base) => new URL(url, base).href);
  eleventyConfig.addFilter("jsonify", (v) => JSON.stringify(v).replace(/</g, "\\u003c"));
  eleventyConfig.addFilter("stripHtml", (s) => String(s || "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim());
  eleventyConfig.addFilter("xmlEscape", (s) =>
    String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
  );

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk", "html", "md"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    pathPrefix,
  };
}
