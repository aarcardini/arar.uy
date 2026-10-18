# Re-auditoría UX/UI de arar.uy

**Fecha:** 18 de octubre de 2026 · **Alcance:** las mismas plantillas que la [primera auditoría](auditoria-ux-ui.md)
más la ficha de proyecto (13 en total), en desktop (1440 × 900), tablet (820 × 1180) y mobile (390 × 844), después
de las Fases 1 a 5 del [plan de mejoras](plan-de-mejoras.md).

**Cómo se hizo:** misma navegación automatizada con Chromium y las mismas métricas que la primera vez (desbordes,
objetivos táctiles, tipografía, caracteres por línea, encabezados, textos alternativos, posición del primer botón,
menú y filtros). Esta vez se sumaron un análisis automático de accesibilidad con **axe-core** (WCAG 2.2 AA y buenas
prácticas) y el peso de cada página.

---

## 1. Resumen

De los **51 hallazgos** de la primera auditoría:

| Estado | Cantidad |
|---|---|
| Resueltos | **40** |
| Parciales | **10** (4 dependen de material o de decisiones ya tomadas) |
| Pendientes | **1** |

Además aparecieron **6 hallazgos nuevos**, ninguno grave. El más útil de resolver es el peso de las imágenes
principales en 5 páginas (N-01).

### Lo que cambió más

- **Hay un próximo paso en la primera pantalla.** El primer botón de la home pasó de 2.187 px a 331 px en
  desktop y de 1.786 px a 311 px en mobile. En el Libro, la compra pasó de 2.345 px a 526 px. Contacto tiene un
  botón de WhatsApp a 315 px.
- **Se lee mejor.** El cuerpo de texto pasó de 14 px a 16–17 px en mobile y de 16 px a 17–18 px en desktop. El
  espaciado entre letras pasó de −0,8 px a −0,18 px. Las notas pasaron de 106–122 a 63–79 caracteres por línea,
  sin justificar.
- **Proyectos tiene profundidad.** Hay filtros con contador, una ficha por proyecto y un carrusel con nombre y
  lugar. La página bajó de 11.489 px a 4.038 px de alto en desktop.
- **La accesibilidad está sana.** axe no encuentra ningún problema crítico ni serio en las 13 páginas, incluido
  el contraste de colores. Quedan 2 avisos moderados de buenas prácticas. No hay saltos en los encabezados ni
  imágenes sin texto alternativo.
- **Una sola voz.** Voseo, el estudio en plural y el Cuaderno firmado por Alejandro, con los mismos nombres en
  todo el sitio.

### Datos medidos, antes y ahora

| Página | Primer botón antes (desktop / mobile) | Primer botón ahora (desktop / mobile) |
|---|---|---|
| Inicio | 2.187 / 1.786 px | **331 / 311 px** ("Hablemos de tu proyecto") |
| Libro | 2.345 / 2.746 px | **526 / 595 px** ("Comprar en Amazon") |
| Contacto | solo enlaces | **315 / 275 px** ("Escribinos por WhatsApp") |
| Proyectos | no tenía | filtros arriba; tarjetas que llevan a cada ficha |

| Medida | Antes (desktop / tablet / mobile) | Ahora (desktop / tablet / mobile) |
|---|---|---|
| Cuerpo de texto | 16 / 14 / 14 px | 17–18 / 16–18 / 16–17 px |
| Espaciado entre letras | −0,8 px | −0,18 px (casi neutro) |
| Caracteres por línea en notas | 106–122 / 91–122 / 53–59 | 63–79 / 63–79 / 35–41 |
| Párrafos largos justificados | sí, en notas | 0 |
| Desbordes horizontales | 0 | 0 |
| Objetivos táctiles de menos de 44 px en mobile | 65 (5 páginas) | 12 (13 páginas), casi todos del índice de las notas |
| Problemas de accesibilidad críticos o serios (axe) | no se medía | 0 |

| Peso al cargar (sin Analytics) | Desktop | Mobile |
|---|---|---|
| Inicio | ~645 KB | ~280 KB |
| Proyectos | ~910 KB | ~260 KB |
| Cuaderno | ~820 KB | ~355 KB |
| Resto de las páginas | 155–365 KB | 155–220 KB |

---

## 2. Estado de cada hallazgo

### Globales

| Código | Tema | Estado | Detalle |
|---|---|---|---|
| G-01 | Tipografía de lectura | Resuelto | 17–18 px en desktop, 16–17 px en mobile, interlineado 1,6–1,7 |
| G-02 | Texto centrado en mobile | Resuelto | 0 párrafos largos centrados; solo las bajadas cortas de cada portada |
| G-03 | Ancho de línea | Resuelto | Notas a 63–79. Libro y Privacidad en tablet llegan a 83–86 (detalle menor) |
| G-04 | Etiquetas superiores | Resuelto | Mayúsculas de 12–13 px con espaciado moderado y una sola regla |
| G-05 | Jerarquía de botones | **Parcial** | Resuelto en todo el sitio salvo Libro: "¿Dónde encontrarlo?" tiene 3 botones negros más el principal de arriba |
| G-06 | Bloque de contacto del pie | Resuelto | Oculto en Contacto y Libro; texto nuevo |
| G-07 | Menú mobile | Resuelto | Pantalla completa, bloquea el scroll, se cierra con Escape y devuelve el foco; WhatsApp y mail al pie |
| G-08 | Objetivos táctiles | **Parcial** | Quedan el índice "En esta nota" (enlaces de 20 px de alto), la firma del autor (17 px) y "Empatía" en Nosotros (21 px) |
| G-09 | Tablet | Resuelto | Navegación completa visible y columnas de texto acotadas |
| G-10 | Carruseles | **Parcial** | Nombre y lugar visibles, cada imagen lleva a su ficha y sin repetidas; falta un contador ("3 / 8") |
| G-11 | Accesibilidad | Resuelto | axe: 0 críticos o serios; textos alternativos, contraste, pestañas con `aria-pressed`, encabezados en orden |
| G-12 | Nombres, tono y ortografía | **Parcial** | Resuelto en todas las páginas. Quedan 3 notas antiguas: 2 con tuteo ("puedes", en *Japandi + Hygge* y *Komorebi*) y 1 que dice "blog" (*Eladio Dieste 01*) |
| G-13 | Taxonomía del Cuaderno | **Parcial** | Solo se ven los 5 temas, pero siguen publicadas 17 páginas de categorías viejas y 55 de etiquetas, sin redirigir |
| G-14 | Medición | Resuelto | Eventos de WhatsApp, mail y compra del libro; con el dominio activo ya registran |

### Por página

| Código | Tema | Estado | Detalle |
|---|---|---|---|
| INI-01 | Portada de la home | Resuelto | Título, bajada, dos botones y "La primera charla es sin costo" |
| INI-02 | Orden de la home | Resuelto | Proyectos en segundo lugar; libro y notas al final |
| INI-03 | Proceso | Resuelto | 4 etapas en orden y numeradas; el botón lleva a Contacto |
| INI-04 | Prueba social | Resuelto | Franja de datos (sin testimonios, por decisión) |
| INI-05 | Libro y Cuaderno en la home | Resuelto | |
| SER-01 | Título arriba en Servicios | Resuelto | Título, resumen e índice antes de la foto |
| SER-02 | Columnas angostas | Resuelto | 52–68 caracteres por línea en desktop |
| SER-03 | Cada servicio con su botón | Resuelto | WhatsApp con mensaje propio y preguntas frecuentes |
| SER-04 | Servicio diferencial | Resuelto | Corporativa desarrollada, sin "neuro" |
| SER-05 | Preguntas frecuentes | Resuelto | 4 preguntas |
| PRO-01 | Filtros en Proyectos | Resuelto | 5 pestañas con contador |
| PRO-02 | Fichas de proyecto | **Parcial** | Las fichas existen; faltan año, superficie y estado. 10 de 18 tienen una sola imagen (ver N-02) |
| PRO-03 | Texto alineado a la derecha | Resuelto | Tarjetas en grilla |
| PRO-04 | Título de Proyectos | Resuelto | `h1` visible "Proyectos" |
| PRO-05 | Criterios y tipos | Resuelto | Criterios al final, tipos y nombres unificados |
| CUA-01 | Contraste del encabezado | Resuelto | Más de 5:1 |
| CUA-02 | Pestañas del Cuaderno | **Parcial** | Los nombres coinciden. En mobile siguen desplazándose de costado (se insinúa la tercera) y no muestran cuántas notas hay por tema, como sí lo hace Proyectos |
| CUA-03 | Tarjetas | Resuelto | Tema, minutos de lectura, sin "Leer más", "Mostrando 9 de 43 notas" |
| CUA-04 | Búsqueda y suscripción | **Parcial** (por decisión) | Búsqueda funcionando y aviso cuando no hay resultados; sin suscripción por ahora; las series no se destacan |
| CUA-05 | Autor del Cuaderno | Resuelto | Firma y bajada que explica de qué tratan las notas |
| NOT-01 | Lectura en notas | Resuelto | |
| NOT-02 | Temas y tiempo de lectura | Resuelto | Automático en todas las notas |
| NOT-03 | Anterior y siguiente | Resuelto | Con título |
| NOT-04 | Notas relacionadas | Resuelto | "Más notas sobre {tema}" |
| NOT-05 | Autor, índice y libro | Resuelto | Sin suscripción, por decisión |
| NOS-01 | Trayectoria | Resuelto | Franja de datos; Graetz Nuñez como experiencia previa |
| NOS-02 | Valores | Resuelto | Textos cortos, alineados a la izquierda; "Empatía" sigue siendo el único valor con enlace |
| NOS-03 | Título repetido y subrayado | Resuelto | "Somos Karen y Alejandro" |
| LIB-01 | Compra arriba | Resuelto | |
| LIB-02 | Tapa y datos del libro | **Parcial** (espera material) | Formatos e idiomas sí; faltan la tapa plana y las reseñas |
| LIB-03 | Lista y botones | Resuelto | |
| CON-01 a CON-03 | Contacto | Resuelto | Qué contar, qué pasa después, WhatsApp con mensaje armado, sin el bloque repetido |
| OTR-01 | Privacidad | Resuelto | De vos, con la Ley 18.331, Analytics, y aclara que el sitio no guarda datos |
| OTR-02 | Pie | **Pendiente** | Sigue la columna "Legal" con un solo enlace y sin navegación secundaria |
| OTR-03 | 404, in-bio y `og:locale` | **Parcial** | 404 e in-bio resueltos; `og:locale` sigue en `es_ES` (corresponde `es_UY`) |

---

## 3. Hallazgos nuevos

### N-01 · Imágenes principales más pesadas de lo necesario · Media · esfuerzo bajo
7 imágenes que cargan de entrada tienen `sizes="auto"`, un valor que solo funciona con carga diferida. Sin carga
diferida, el navegador asume el ancho de la pantalla y baja la versión de 1600–1800 px. Pasa en las 3 primeras
tarjetas de Proyectos, la tapa del Libro, la foto de Servicios, la de Nosotros y la de in-bio. Por eso Proyectos
pesa ~910 KB en desktop, cuando cada tarjeta mide ~400 px de ancho.
→ Darles un `sizes` explícito. Proyectos bajaría a la mitad o menos, y mejoraría el tiempo de carga que mide
Google.

### N-02 · Fichas con la portada repetida · Media · esfuerzo bajo
En Gruyer y Fatimah's Home, la imagen de la galería es la misma foto que la portada, en otro tamaño o recorte.
(En Broot son dos versiones distintas de la misma vista, de día y al atardecer, y está bien.) Además, 10 de las
18 fichas tienen una sola imagen.
→ Quitar las repetidas ahora. Sumar imágenes o planos cuando lleguen los datos de cada proyecto.

### N-03 · Dos avisos de accesibilidad (axe) · Baja · esfuerzo bajo
- El bloque "¿Tenés un proyecto en mente?" queda fuera de las regiones de la página (`main`, `footer`) en 10
  páginas, así que un lector de pantalla no lo encuentra al saltar entre regiones.
- En las notas, la columna lateral (`aside`) está dentro de otra región.

→ Convertir el bloque en una región con nombre y la columna lateral en un contenedor común.

### N-04 · Servicios: "Desarrollos" sin bajada y fotos sin enlace · Baja · esfuerzo bajo
Arquitectura y Consultoría tienen una frase de entrada; Desarrollos no, y en desktop su título queda solo junto a
la foto. Las fotos de cada servicio (Casa Calma, Broot, Ouí Bistro) no llevan a su ficha.
→ Una frase de entrada para Desarrollos y el pie de cada foto enlazado a la ficha del proyecto.

### N-05 · 404 con dos llamados seguidos · Baja · esfuerzo bajo
Debajo de "Esta página no existe" y sus dos botones aparece el bloque "¿Tenés un proyecto en mente?".
→ Ocultarlo en la 404, como en Contacto y Libro.

### N-06 · Pie en mobile con alineaciones mezcladas · Baja · esfuerzo bajo
La marca y el copyright van centrados; Legal y Contacto, a la izquierda. En la página del Libro, el pie vuelve a
mostrar la tapa del libro.
→ Alinear todo a la izquierda en mobile y ocultar la tapa del pie en el Libro.

---

## 4. Próximos pasos sugeridos

| Prioridad | Qué | Hallazgos | Esfuerzo |
|---|---|---|---|
| 1 | Peso de imágenes y galerías repetidas | N-01, N-02 | bajo |
| 2 | Ajustes finos de accesibilidad y datos | G-08 (índice y firma), N-03, OTR-03 (`es_UY`) | bajo |
| 3 | Ajustes de interfaz | G-05 (botones del Libro), N-04, N-05, N-06, G-10 (contador) | bajo |
| 4 | Material que estás juntando | PRO-02 (año, superficie, estado, imágenes), Casa Calma, LIB-02 (tapa y reseñas) | depende del material |
| 5 | Para más adelante | G-13 (redirigir categorías y etiquetas viejas), CUA-02 (contador por tema), OTR-02 (pie), G-12 (3 notas antiguas) | medio |

Los puntos 1 a 3 entran en uno o dos bloques. Se pueden revisar con el mismo método de capturas antes y después,
con tu aprobación antes de subir a `main`.

---

## 5. Seguimiento

Las prioridades 1 a 3 se aplicaron en la Fase 6 del [plan de mejoras](plan-de-mejoras.md). Pasan a resueltos
N-01 a N-06, G-05, G-08, G-10 y OTR-03. Medido después de los cambios:

- axe-core: **0 hallazgos** en las 13 páginas (antes, 2 avisos moderados).
- Objetivos táctiles de menos de 44 px en mobile: **0** (antes, 12).
- Proyectos en desktop: **~370 KB** al cargar (antes, ~890 KB).
- Sin desbordes en 13 páginas × 3 anchos.

Quedan las prioridades 4 (material de proyectos y del libro) y 5 (taxonomía, contador por tema en el Cuaderno,
pie y notas antiguas).

