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
  eleventyConfig.addFilter("eagerFirstImage", (html) =>
    String(html).replace(/<img\b[^>]*>/, (tag) =>
      tag
        .replace(/\s+loading="lazy"/, "")
        .replace(/<img\b/, '<img fetchpriority="high" sizes="(min-width: 1025px) 864px, 90vw"')
    )
  );
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
