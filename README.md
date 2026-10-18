# arar.uy — sitio de Estudio ARAR.

Versión estática del sitio [arar.uy](https://arar.uy), migrada desde WordPress + Elementor a
[Eleventy](https://www.11ty.dev/) y publicada con GitHub Pages. Sin base de datos, sin plugins,
sin comentarios: HTML, CSS y un JavaScript mínimo.

## Estructura

```
src/
├── _data/            site.json (datos globales: menú, contacto, redes, libro), categorías y etiquetas
├── _includes/
│   ├── layouts/      base.njk (head, header, footer), page.njk, post.njk (nota del cuaderno)
│   ├── partials/     header, footer, llamado a la acción, tarjeta de nota
│   └── icons/        SVG en línea
├── assets/
│   ├── css/style.css hoja de estilos (tokens del kit original: Lora + Inter, #101010)
│   ├── js/main.js    menú móvil, carruseles, filtro del cuaderno
│   ├── fonts/        Lora e Inter autoalojadas (woff2)
│   └── img/          imágenes optimizadas (WebP), misma ruta que en WordPress (año/mes/nombre)
│                     (al compilar, cada <img> recibe versiones de 400/800/1200/1600 px en assets/img/r/)
├── pages/            las páginas del sitio (inicio, servicios, proyectos, cuaderno, nosotros, libro, contacto…)
└── posts/            las 43 notas del cuaderno, una por archivo, con su contenido en HTML
```

## Cómo trabajar

```bash
npm install        # una sola vez
npm start          # servidor local con recarga automática en http://localhost:8080
npm run build      # genera el sitio en _site/
```

### Publicar

Cada `push` a `main` ejecuta `.github/workflows/deploy.yml`, que construye el sitio y lo publica.
La primera vez hay que activar Pages en el repositorio: **Settings → Pages → Build and deployment →
Source: GitHub Actions**.

Mientras el sitio viva en `https://aarcardini.github.io/arar.uy/` lleva `noindex` automáticamente
(para no competir con arar.uy en Google). Al apuntar el dominio propio, el prefijo desaparece y el sitio
pasa a indexarse solo.

### Escribir una nota nueva

1. Copiar cualquier archivo de `src/posts/` y renombrarlo `AAAA-MM-DD-slug.html`.
2. Ajustar el bloque JSON del principio: `title`, `date`, `permalink` (`/slug/`), `categories`, `tags`,
   `excerpt`, `description` e `image` (ruta dentro de `/assets/img/`).
3. Escribir el cuerpo en HTML debajo del bloque (`<p>`, `<h2>`, `<figure><img …><figcaption>…`).
4. Guardar las imágenes nuevas en `src/assets/img/AAAA/MM/` (idealmente WebP, máx. 1800 px de ancho).

Las pestañas del cuaderno filtran por categoría: `diseno-y-teoria`, `arquitectura-experiencia-humana`,
`neuro`, `cultura-y-proyectos` y `jardin`.

### Dominio propio (cuando se decida)

1. Crear el archivo `src/CNAME` con el contenido `arar.uy` y agregarlo como passthrough en
   `eleventy.config.js` (o configurarlo desde Settings → Pages → Custom domain).
2. En el DNS del dominio: registros `A` apuntando a `185.199.108.153`, `185.199.109.153`,
   `185.199.110.153` y `185.199.111.153`, y un `CNAME` de `www` a `aarcardini.github.io`.
3. El correo `@arar.uy` no depende del hosting web: basta con mantener (o mover) los registros `MX`.

## URLs conservadas

Todas las rutas públicas de WordPress se mantienen: páginas, las 43 notas (`/slug/`), categorías
(`/category/slug/`) y etiquetas (`/tag/slug/`). `/cuaderno-3/` redirige a `/cuaderno/`.
El feed RSS está en `/feed.xml` y el mapa del sitio en `/sitemap.xml`.
