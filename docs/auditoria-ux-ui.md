# Auditoría UX/UI de arar.uy

**Fecha:** 18 de octubre de 2026 · **Alcance:** el sitio estático de este repositorio (Eleventy), 12 plantillas,
revisadas en desktop (1440 × 900), tablet (820 × 1180) y mobile (390 × 844).

Este documento es la base para la etapa siguiente: **copywriting, microcopy y UX writing**. Primero ordena la
estructura y la interfaz; al final deja un inventario de textos y las decisiones que conviene tomar antes de escribir.

---

## 1. Resumen

### Lo que conviene conservar

- **Identidad sobria y coherente.** Lora + Inter, negro sobre blanco y las formas "blob" de las imágenes son
  reconocibles. Las fotos y los renders son de muy buena calidad.
- **Base técnica sana.** Sitio estático, imágenes adaptables (400–1600 px), fuentes autoalojadas y Analytics
  diferido. Ninguna página desborda horizontalmente en ninguno de los tres anchos.
- **Accesibilidad de base.** Enlace "Ir al contenido", foco visible, menú con `aria-expanded`, la mayoría de
  las imágenes de páginas con texto alternativo.
- **Un activo de contenido poco común.** 43 notas y un libro publicado sobre arquitectura, bienestar y
  neurodiversidad. Es el mejor argumento de diferenciación del estudio y hoy casi no se usa para vender.

### Los seis problemas que más pesan

1. **La home no dice qué hacen, para quién ni dónde, y no ofrece un próximo paso.** El primer botón aparece a
   2.187 px en desktop y a 1.786 px en mobile. El diferencial real (diseño sensorial, neuroarquitectura,
   neurodiversidad, *slow living*) recién aparece en Servicios, Nosotros y el Cuaderno.
2. **Legibilidad.** Cuerpo de 14 px en mobile y tablet (16 px en desktop) con espaciado entre letras negativo
   (−0,8 px), párrafos largos centrados en mobile, y notas de 105–120 caracteres por línea con texto
   justificado en desktop.
3. **La conversión está desatendida.** Contacto es una página casi vacía (sin formulario y sin explicar qué pasa
   después) y debajo repite el bloque "Pongamos los lápices sobre el papel" con un botón que lleva a… Contacto.
   En la página del libro, el primer botón de compra está a 2.345 px (desktop) y 2.746 px (mobile).
4. **El portfolio no tiene profundidad.** 16 proyectos en una sola página de ~11.500 px, sin fichas, filtros ni
   datos básicos (año, ubicación, superficie, estado). El carrusel de la home manda todas las imágenes a la misma
   página.
5. **Nombres y tono inconsistentes.** "Trabajos" (menú) = "Proyectos" (página) = "Portfolio" (home); tú, vos y
   usted mezclados; mayúsculas irregulares; tildes faltantes en preguntas visibles.
6. **Mobile y tablet heredan el escritorio "apilado".** Todo centrado, imágenes que ocupan pantallas enteras en
   tablet, menú sin acceso a contacto que no se cierra al tocar afuera ni bloquea el scroll.

### Datos medidos

| Página | Alto desktop | Alto mobile | Primer botón de acción (desktop / mobile) |
|---|---|---|---|
| Inicio | 4.726 px | 5.085 px | 2.187 / 1.786 px ("+ sobre nuestros servicios") |
| Proyectos | 11.489 px | 11.566 px | no tiene |
| Cuaderno | 3.192 px | 5.425 px | "Cargar más" a 2.262 / 4.306 px |
| Nota (ej. *Arquitectura para cerebros intensos*) | 10.670 px | 12.496 px | no tiene (solo el bloque global) |
| Libro | 3.355 px | 4.227 px | compra a 2.345 / 2.746 px |
| Contacto | 1.465 px | 1.636 px | solo links de email y WhatsApp |

| Medida | Desktop | Tablet | Mobile | Recomendado |
|---|---|---|---|---|
| Tamaño del cuerpo de texto | 16 px | 14 px | 14 px | 17–18 px / 16–17 px |
| Espaciado entre letras del cuerpo | −0,8 px | −0,8 px | −0,8 px | 0 |
| Caracteres por línea en notas | 106–122 | 91–122 | 53–59 | 60–75 |
| Caracteres por línea en Inicio y Libro | 55–76 | 92–126 | 45–55 | 60–75 |

---

## 2. Cómo se hizo

- Build local de la rama y navegación automatizada con Chromium (Playwright) en tres anchos.
- 63 capturas (primera pantalla y página completa) + métricas automáticas: desbordes horizontales, tamaño de
  objetivos táctiles, tamaños tipográficos, caracteres por línea, jerarquía de encabezados, texto alternativo,
  posición del primer botón, comportamiento del menú mobile y de los filtros del Cuaderno.
- Revisión heurística (heurísticas de Nielsen) y de accesibilidad (WCAG 2.2 AA) sobre las plantillas y el código.

**Escala:** severidad *Crítica / Alta / Media / Baja* · esfuerzo *bajo / medio / alto*.
Los códigos (G-01, INI-01…) se usan en el plan del apartado 5.

---

## 3. Hallazgos globales (sistema de diseño)

### G-01 · Tipografía de lectura — Alta · esfuerzo bajo
- **Hoy:** `--fs-text` 16 px en desktop y 14 px por debajo de 1024 px; `letter-spacing: -0.8px` (≈ −0,05 em) en
  todo el cuerpo; `line-height: 1.5`.
- **Por qué importa:** 14 px con espaciado negativo es incómodo en teléfono, y el sitio tiene notas de 12 minutos.
- **Propuesta:** cuerpo 17–18 px en desktop y 16–17 px en mobile; espaciado 0 en texto corrido (el negativo solo
  en titulares grandes); interlineado 1,6–1,7; `max-width: 68ch` en párrafos.

### G-02 · Texto centrado en mobile y tablet — Alta · esfuerzo bajo
- **Hoy:** bajo 900 px, `.split__text` se centra; también las celdas de proceso/valores y los proyectos.
  Se midieron 10 párrafos largos centrados en Nosotros (mobile) y 7 en Proyectos.
- **Propuesta:** alinear a la izquierda todo párrafo de más de dos líneas; centrar solo titulares cortos y botones.

### G-03 · Ancho de línea en textos largos — Alta · esfuerzo bajo
- **Hoy:** notas en desktop a 106–122 caracteres por línea, justificadas con guionado; Privacidad a 110–122;
  Inicio y Libro en tablet a 92–126.
- **Propuesta:** columna de lectura de ~680–720 px, texto sin justificar; las imágenes pueden salir más anchas.

### G-04 · Etiquetas superiores ("eyebrows") — Media · esfuerzo bajo
- **Hoy:** espaciado de 7,1 px (desktop) y 4 px (mobile): "H a b l e m o s" se lee como letras sueltas.
  Mayúsculas sin criterio: "nuestros Servicios", "así es como podemos ayudarte", "Proceso de diseño".
- **Propuesta:** mayúsculas con 0,12–0,16 em, 12–13 px, y una sola regla de mayúsculas.

### G-05 · Jerarquía de botones — Alta · esfuerzo medio
- **Hoy:** casi todos los botones son de contorno fino; el único lleno es "Contacto" del header. Ningún hero
  tiene botón. El botón del header lleva ícono de teléfono pero abre una página (se espera una llamada).
  Textos ambiguos: "+ sobre nuestros servicios", "Aprender más sobre nuestro proceso de diseño" (lleva a
  Servicios, donde el proceso no está), "Ver portfolio".
- **Propuesta:** un botón principal (lleno) por pantalla y secundarios de contorno o texto; ícono coherente con
  la acción; verbos concretos que anticipen el destino.

### G-06 · Bloque de llamado a la acción del pie — Alta · esfuerzo bajo
- **Hoy:** "Hablemos / Pongamos los lápices sobre el papel / Contacto" aparece en todas las páginas: también en
  Contacto (se enlaza a sí misma), en el Libro (público lector) y en cada nota. `hideCta` existe en
  `footer.njk` pero ninguna página lo usa.
- **Propuesta:** ocultarlo en Contacto; variantes por contexto (Libro → comprar; notas → seguir leyendo o
  suscribirse, y recién después trabajar juntos).

### G-07 · Header y menú mobile — Media · esfuerzo medio
- **Hoy:** hamburguesa hasta 1024 px (también en iPad horizontal), ubicada entre la marca y el botón, no en el
  borde. El panel no bloquea el scroll del fondo (con el menú abierto la página se desplazó 600 px), no se cierra
  al tocar afuera, no tiene fondo que lo separe, los ítems son de 14 px y no ofrece WhatsApp, email ni redes.
- **Propuesta:** menú a pantalla completa o cajón lateral, ítems de 18–20 px, WhatsApp y email al pie del menú,
  bloqueo de scroll, cierre al tocar afuera; navegación completa visible desde ~900 px.

### G-08 · Objetivos táctiles — Media · esfuerzo bajo
- **Hoy:** "Leer más »" 72 × 17 px; categorías y etiquetas de las notas 17 px de alto; links del pie 17–21 px;
  redes 22 × 22 px; botón de menú 44 × 38 px. WCAG 2.2 pide 24 × 24 como mínimo; lo recomendable es 44 × 44.
- **Propuesta:** tarjetas enteras clickeables; más relleno en links del pie, redes y etiquetas.

### G-09 · Tablet (768–1024 px) — Media · esfuerzo medio
- **Hoy:** usa la columna única de mobile: imágenes de ~740 px de ancho que ocupan pantallas enteras y texto de
  14 px a ~120 caracteres por línea, centrado.
- **Propuesta:** un punto de quiebre intermedio con dos columnas reales o una columna de texto acotada a 16–17 px.

### G-10 · Carruseles — Media · esfuerzo medio
- **Hoy:** sin indicador de posición ni cantidad ("3 / 6"), flechas encima de la imagen; en la home todas las
  diapositivas llevan a `/proyectos/` y hay imágenes repetidas (Centro Cívico ×2, Mariano Arana ×2). El nombre
  del proyecto solo está en el `alt`, no se ve.
- **Propuesta:** pie visible con nombre y tipo de proyecto, contador, y cada imagen enlazada a su ficha.

### G-11 · Accesibilidad — Media · esfuerzo bajo
- 52 de 141 imágenes de las notas tienen `alt=""`, incluida la primera imagen de cada nota (la más importante).
- Cuaderno: el subtítulo blanco cae sobre la parte clara de la foto y no se lee.
- Las pestañas del Cuaderno usan `role="tab"` sin `tabpanel` ni flechas de teclado; con botones y
  `aria-pressed` alcanza.
- Nosotros: una frase subrayada con `<u>` que parece un enlace.
- Encabezados: Libro salta de `h1` a `h3`; Proyectos tiene el `h1` oculto y muestra un `h2` como título.
- Proyectos: el título sobre la imagen solo aparece con el mouse (sin equivalente táctil).

### G-12 · Nombres, tono y ortografía — Alta · esfuerzo bajo (base de la etapa de copy)
- **Sección de trabajos:** Trabajos (menú) / Proyectos (título y URL) / Portfolio y "Nuestros Trabajos" (home).
- **Blog:** Cuaderno de Notas (menú) / Cuaderno de notas (página) / Blog (in-bio) / "Nota del Cuaderno".
- **Persona gramatical:** tú ("necesitas", "Utiliza", "contigo", "¿Estás listo?"), vos ("podés", "sentís",
  "mirás") y usted (Privacidad).
- **Voz:** "nosotros" (estudio) y "yo" (Cuaderno: "mis conexiones sinápticas"; Libro) sin que se presente al autor.
- **Mayúsculas:** "Trabajemos Juntos", "Creamos Espacios Para Vivir, Trabajar Y Jugar.", "GRUYER",
  "Concurso de anteproyectos" / "Concurso de Anteproyectos", botones "Comprar En MercadoLibre"
  (por `text-transform: capitalize`).
- **Ortografía y puntuación:** "¿Que nos diferencia?", "¿Donde encontrarlo?", "te de una pausa" (dé),
  "Rio de la Plata", "etc..", "espacios de trabajos", "Nuestro objetivo, es crear…" (coma entre sujeto y verbo,
  en el pie de todas las páginas), "Lo ideal, es…", "Porque diseñar para los márgenes, eleva…".
- **Datos:** "091428436 (Whatsapp)" → "091 428 436" y "WhatsApp".

### G-13 · Taxonomía del Cuaderno — Media · esfuerzo medio
- 17 categorías heredadas de WordPress conviven con los 5 temas nuevos; 55 etiquetas (33 usadas una sola vez);
  notas con hasta 8 categorías (la nota de ejemplo muestra 5 en su encabezado).
- Las pestañas no coinciden con los nombres de categoría ("Teoría y diseño" / "Diseño y teoría",
  "Neuro(s)" / "Neuro").
- **Propuesta:** los 5 temas como única clasificación visible; ~15 etiquetas curadas; las categorías viejas
  redirigen al tema equivalente.

### G-14 · Medición — Media · esfuerzo bajo
- GA4 está instalado pero no registra conversiones: clic en WhatsApp, email, compra en Amazon o MercadoLibre,
  envío de formulario.
- **Propuesta:** definir 4–5 eventos **antes** de cambiar nada, para poder comparar antes y después.

---

## 4. Hallazgos por página

### Inicio (`/`)
- **INI-01 · Crítica.** El hero no tiene bajada ni botón. "Creamos espacios para vivir, trabajar y jugar." es
  genérico: no dice arquitectos, Montevideo ni el enfoque. En mobile, la primera pantalla es el título y dos
  imágenes. → Título + bajada (qué, para quién, dónde) + botón principal + secundario ("ver proyectos").
- **INI-02 · Alta.** Orden actual: hero → manifiesto → servicios → proceso (texto largo) → portfolio → bloque
  global. La prueba (el trabajo) llega al final. → Orden sugerido: hero → proyectos destacados → enfoque /
  diferencial → servicios (3 tarjetas con enlace) → proceso en 4 pasos numerados → prueba social → libro +
  últimas notas → contacto.
- **INI-03 · Alta.** El proceso se contradice: el texto habla de tres etapas de anteproyecto y una técnica, pero
  la grilla se lee Investigación → Ideación → Implementación → Pruebas, y "Pruebas y Feedback" termina con
  "damos comienzo al proyecto ejecutivo", que es justamente la etapa de Implementación. No hay números. El botón
  "Aprender más sobre nuestro proceso de diseño" lleva a Servicios, donde el proceso no aparece.
- **INI-04 · Alta.** Sin prueba social: testimonios, cantidad de proyectos, países (Uruguay, Venezuela, Arabia
  Saudita, Hong Kong, EE. UU.), concursos, prensa.
- **INI-05 · Media.** El libro y el Cuaderno, el mayor diferencial, no aparecen en la home. (El manifiesto,
  abstracto y largo, queda para la etapa de copy.)

### Servicios (`/servicios/`)
- **SER-01 · Media.** Arranca con una foto abstracta (lamas) a todo el ancho; el `h1` aparece a 677 px en desktop.
  → Título + resumen de los servicios arriba, con anclas a cada uno.
- **SER-02 · Media.** En desktop, las columnas de "Arquitectura Residencial / Corporativa" quedan a 27–30
  caracteres por línea (demasiado angostas) y forman bloques densos.
- **SER-03 · Alta.** Ningún servicio tiene botón ni responde "para quién es", "qué incluye", "cómo empieza",
  "plazos u honorarios orientativos". → Por servicio: para quién, qué incluye, entregables, un proyecto de
  ejemplo enlazado y un botón.
- **SER-04 · Media.** El servicio más diferencial (oficinas neuroinclusivas, ergonomía sensorial) está en un
  solo párrafo largo; "Buscador inmobiliario" y "Outsourcing" quedan en una o dos líneas.
- **SER-05 · Media.** Falta un bloque de preguntas frecuentes (¿trabajan fuera de Montevideo?, ¿cuánto cuesta?,
  ¿dirigen la obra?).

### Proyectos (`/proyectos/`)
- **PRO-01 · Alta.** Una sola página de ~11.500 px con 16 proyectos en zigzag, sin filtros por tipo
  (Residencial, Corporativo, Concursos, Desarrollos, Gastronómico).
- **PRO-02 · Alta.** Sin fichas de proyecto: no hay más imágenes (salvo dos carruseles), planos, año, ubicación,
  m², estado (construido / en obra / concurso / render) ni rol del estudio.
- **PRO-03 · Media.** En desktop, la mitad de los proyectos tiene el texto alineado a la derecha.
- **PRO-04 · Media.** El título visible "Creamos Espacios Para Vivir, Trabajar Y Jugar." repite el de la home en
  mayúsculas iniciales; el `h1` real está oculto.
- **PRO-05 · Baja.** "Trabajamos bajo los siguientes criterios" corta la lista entre el 4.º y el 5.º proyecto
  y repite contenido de Nosotros. Tipos escritos de formas distintas ("Concurso de anteproyectos" / "Concurso de
  Anteproyectos", "Caso de Estudio", "Proyectos de Inversión") y nombres que cambian entre páginas
  ("GRUYER" / "Edificio Gruyer").

### Cuaderno (`/cuaderno/`)
- **CUA-01 · Alta.** El subtítulo blanco no se lee sobre la zona clara de la foto. El hero de 520 px empuja
  las notas hacia abajo.
- **CUA-02 · Media.** En mobile las pestañas se desplazan de costado sin indicarlo; sus nombres no coinciden con
  las categorías y no muestran cuántas notas tiene cada tema.
- **CUA-03 · Media.** Tarjetas con título de 16 px y "Leer más »" redundante (el título ya es enlace); falta
  tiempo de lectura y tema; "Cargar más" sin contador ("9 de 43").
- **CUA-04 · Media.** Sin búsqueda ni suscripción (existe `/feed.xml` pero no se ofrece) y sin destacar series
  como "Jardín (1/7…7/7)".
- **CUA-05 · Media.** "Un paseo por mis conexiones sinápticas" habla en primera persona singular en un sitio que
  habla en plural, y no se presenta al autor.

### Nota del Cuaderno (ej. `/arquitectura-para-cerebros-intensos/`)
- **NOT-01 · Alta.** Lectura: ver G-01 y G-03 (justificado, 106–122 caracteres por línea, 16 px con espaciado
  negativo en desktop; 14 px en mobile).
- **NOT-02 · Media.** El encabezado muestra cinco categorías; el tiempo de lectura está escrito a mano dentro del
  cuerpo y solo 1 de las 43 notas lo tiene.
- **NOT-03 · Media.** Anterior / siguiente sin título: "Ant · Nota anterior" y "Siguiente · Siguiente nota".
- **NOT-04 · Media.** "Lecturas recomendadas" son las cuatro notas más recientes, no notas relacionadas por tema.
- **NOT-05 · Media.** Sin autor visible (foto + bio breve), sin índice en notas largas, sin suscripción al final.
  El bloque del libro usa una imagen distinta a la tapa y enlaces de texto: mejor una tarjeta con botón.

### Nosotros (`/nosotros_como_estudio_de_arquitectura/`)
- **NOS-01 · Alta.** La historia es cálida, pero falta lo que genera confianza para contratar: formación,
  años de experiencia, registro profesional, tipos de proyecto, colaboraciones. La frase "actualmente con Graetz
  Nuñez Arquitectos" puede sembrar dudas sobre la dedicación al estudio (confirmar si sigue vigente).
- **NOS-02 · Media.** Seis valores en celdas centradas con textos largos y genéricos; solo "Empatía" es enlace.
  En mobile la foto va primero y el título aparece a 621 px.
- **NOS-03 · Baja.** El título "Arquitectura + Humana" repite el de una sección de la home; hay una frase
  subrayada que parece enlace; la página termina sin un próximo paso propio (solo el bloque global).

### Libro (`/el-arte-de-habitar/`)
- **LIB-01 · Crítica.** No hay botón de compra arriba: el primero está a 2.345 px (desktop) / 2.746 px (mobile).
- **LIB-02 · Alta.** La tapa no se ve bien (es una foto de alguien sosteniéndolo) y faltan datos: formatos
  (papel / Kindle), idiomas, páginas, precio orientativo. Tampoco hay reseñas, extracto ni índice.
- **LIB-03 · Media.** La Parte II usa viñetas "•" escritas a mano y MAYÚSCULAS dentro de párrafos centrados:
  debería ser una lista. Tres botones de compra en dos bloques, con mayúsculas forzadas y 2 px de espaciado.
  El bloque "Pongamos los lápices sobre el papel" no aplica a lectores.

### Contacto (`/contacto/`)
- **CON-01 · Crítica.** La página que más importa para el negocio está casi vacía: email, WhatsApp y
  "Lunes a viernes". Sin formulario, sin horario, sin tiempo de respuesta, sin explicar qué pasa después.
- **CON-02 · Alta.** "¿Cómo podemos ayudarte?" + "Hablemos y desarrollemos proyectos juntos." no orienta: no
  sugiere qué contar (tipo de proyecto, ubicación, m², plazos, presupuesto). WhatsApp abre sin mensaje
  precargado; email y WhatsApp son enlaces chicos y no botones.
- **CON-03 · Alta.** Debajo aparece el bloque global que enlaza a esta misma página.
  Nota técnica: al ser un sitio estático, un formulario necesita un servicio externo (Formspree, Basin,
  Google Forms, etc.) o puede resolverse con WhatsApp + mensaje armado.

### Otras
- **OTR-01 · Media.** Privacidad: texto de 2023 que menciona comentarios del blog (ya no existen) y trata de
  "usted". Actualizar con referencia a la Ley 18.331.
- **OTR-02 · Media.** Pie: columna "Legal" con un solo enlace, la tapa del libro sin texto y sin navegación
  secundaria.
- **OTR-03 · Baja.** La 404 está bien resuelta (mensaje + dos salidas). In-bio usa "Web" y "Blog"; conviene
  usar los mismos nombres que el sitio y sumar contacto. `og:locale` es `es_ES`; corresponde `es_UY`.

---

## 5. Plan de trabajo

### Fase 0 · Definiciones (antes del copy y del rediseño)
- Responder las preguntas abiertas (apartado 7): público prioritario, diferencial, canal de contacto.
- Cerrar la arquitectura de información y el glosario de nombres (ver propuesta abajo).
- Voz y tono: voseo rioplatense; primera persona plural para el estudio; el Cuaderno firmado por Alejandro.
- Configurar los eventos de medición (G-14).

**Arquitectura de información propuesta**

| Menú | Página | Contenido clave |
|---|---|---|
| Proyectos | `/proyectos/` + fichas | filtros por tipo, fichas con datos |
| Servicios | `/servicios/` | para quién, qué incluye, cómo trabajamos, preguntas frecuentes |
| Estudio | `/nosotros…/` (URL actual) | quiénes somos, enfoque, trayectoria |
| Cuaderno | `/cuaderno/` | 5 temas, series, autor, suscripción |
| Libro | `/el-arte-de-habitar/` | compra arriba, datos, reseñas |
| **Hablemos** (botón) | `/contacto/` | formulario o WhatsApp, qué pasa después |

### Fase 1 · Arreglos rápidos de interfaz (bajo esfuerzo, alto impacto)
G-01 tipografía · G-02 alinear a la izquierda · G-03 ancho de lectura y sin justificar · G-04 etiquetas ·
G-06 ocultar el bloque global en Contacto · CUA-01 contraste · G-08 objetivos táctiles y tarjetas clickeables ·
G-11 `alt` y ARIA · ortografía de G-12 · NOT-03 anterior/siguiente con título · INI-03 ordenar y numerar el proceso.

### Fase 2 · Estructura y conversión
Nueva home (INI-01 a INI-05) · Contacto con formulario o WhatsApp + "qué pasa después" (CON-01 a CON-03) ·
Libro con compra arriba (LIB-01 a LIB-03) · jerarquía de botones (G-05) · menú mobile (G-07) · tablet (G-09) ·
Servicios con estructura por servicio (SER-01 a SER-05) · Nosotros con trayectoria (NOS-01 a NOS-03).

### Fase 3 · Portfolio
Plantilla de ficha de proyecto, filtros, datos por proyecto, enlaces desde el carrusel de la home y desde
Servicios (PRO-01 a PRO-05, G-10). Depende del material disponible (planos, fotos de obra, datos).

### Fase 4 · Cuaderno
Taxonomía (G-13), tarjetas (CUA-03), tiempo de lectura automático, relacionadas por tema (NOT-04), autor y
suscripción (NOT-05, CUA-04), búsqueda simple.

### Fase 5 · Copywriting, microcopy y UX writing (la próxima etapa)
1. Mensaje central y propuesta de valor (dos o tres versiones para elegir).
2. Guía de voz y tono de una página + glosario de nombres.
3. Reescritura página por página sobre la estructura nueva.
4. Microcopy: botones, formulario (etiquetas, ayudas, errores, confirmación), estados vacíos, 404, textos
   alternativos y descripciones para buscadores.

---

## 6. Inventario de microcopy (insumo para la Fase 5)

| Dónde | Texto actual | Problema | Dirección |
|---|---|---|---|
| Header, botón | "Contacto" + ícono de teléfono | el ícono promete una llamada | verbo + destino claro, ícono coherente |
| Inicio, título | "Creamos espacios para vivir, trabajar y jugar." | genérico | qué + para quién + diferencial |
| Inicio, etiqueta | "nuestros Servicios" | mayúsculas | regla única |
| Inicio, botón | "+ sobre nuestros servicios" | ambiguo | anticipar el destino ("Ver servicios") |
| Inicio, botón | "Aprender más sobre nuestro proceso de diseño" | el destino no tiene el proceso | ancla real o "Cómo trabajamos" |
| Inicio | "¿Estás listo para construir tus sueños?" | tú, género, cliché | voseo y lenguaje concreto |
| Inicio, botón | "Ver portfolio" | nombre distinto al menú | mismo nombre que el menú |
| Bloque global | "Hablemos / Pongamos los lápices sobre el papel / Agendemos una cita y pongamos manos a la obra. / Contacto" | dos metáforas seguidas y botón genérico | un mensaje + una acción concreta |
| Pie | "Nuestro objetivo, es crear espacios…" | coma entre sujeto y verbo | corregir |
| Pie y Contacto | "091428436 (Whatsapp)" | formato | "091 428 436 · WhatsApp" |
| Servicios, etiqueta | "así es como podemos ayudarte" | mayúsculas | regla única |
| Servicios | "Si encontraste… y necesitas quien…" | tú / vos | voseo |
| Servicios | "espacios de trabajos", "etc..", "Lo ideal, es…" | ortografía | corregir |
| Proyectos, título | "Creamos Espacios Para Vivir, Trabajar Y Jugar." | mayúsculas y duplicado | título propio |
| Proyectos | "Rio de la Plata" | tilde | "Río" |
| Cuaderno, bajada | "Un paseo por mis conexiones sinápticas" | yo / nosotros, sin autor | presentar al autor |
| Cuaderno, pestañas | "Teoría y diseño", "Neuro(s)", "Serie Jardín" | no coinciden con las categorías | glosario único |
| Tarjeta | "Leer más »" | redundante | quitar o "Leer nota" |
| Cuaderno, botón | "Cargar más" | sin contexto | "Ver más notas" + contador |
| Nota | "Volver" | ¿a dónde? | "Volver al Cuaderno" |
| Nota | "Ant · Nota anterior" / "Siguiente · Siguiente nota" | sin título | mostrar el título de la nota |
| Nota | "Lecturas recomendadas" | son las más recientes | "Más notas sobre {tema}" |
| Nota | "Nota del Cuaderno: Lectura (aprox. 12 minutos)." | manual y en una sola nota | automático en el encabezado |
| Nosotros | "¿Que nos diferencia?" | tilde | "¿Qué…?" |
| Nosotros | "'slow living'" | comillas rectas, minúscula | *slow living* en cursiva |
| Nosotros | "contigo" | tú | voseo |
| Libro | "¿Donde encontrarlo?" | tilde | "¿Dónde…?" |
| Libro | "Utiliza la que más cerca tuyo esté" | tú | voseo |
| Libro | "Comprar En Amazon (EE.UU.)" | mayúsculas forzadas | "Comprar en Amazon (EE. UU.)" |
| Libro | "algo que te de una pausa" | tilde | "dé" |
| Contacto, título | "Trabajemos Juntos" | mayúsculas | "Trabajemos juntos" |
| Contacto | "¿Cómo podemos ayudarte? / Hablemos y desarrollemos proyectos juntos." | no orienta | qué contar + qué pasa después |
| Contacto | "Lunes a viernes" | sin horario | horario + tiempo de respuesta |
| Privacidad | trato de "usted", mención a comentarios | desactualizado | revisar y actualizar fecha |

---

## 7. Preguntas abiertas (decidir antes de escribir)

1. ¿Cuál es el cliente prioritario para los próximos 12 meses: particulares (vivienda y reformas), empresas
   (oficinas neuroinclusivas) o desarrolladores? Define el título de la home y el orden de los servicios.
2. ¿El diferencial explícito es "arquitectura para el bienestar / neuroarquitectura / neurodiversidad"? Hoy vive
   en el Cuaderno y el libro, no en la propuesta comercial.
3. Contacto: ¿formulario (con servicio externo) o WhatsApp primero? ¿La primera conversación es sin costo?
4. ¿Hay testimonios, clientes o reconocimientos publicables? ¿Qué proyectos están construidos y cuáles son
   concurso o render?
5. ¿El Cuaderno lo firma Alejandro (yo) y el resto del sitio el estudio (nosotros)?
6. ¿Se mantienen las menciones a Bauten y Graetz Nuñez en la historia?
