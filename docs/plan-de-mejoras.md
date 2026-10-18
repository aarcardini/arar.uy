# Plan de mejoras: decisiones y avance

Seguimiento paso a paso del plan de [`auditoria-ux-ui.md`](auditoria-ux-ui.md). Cada bloque se revisa con
capturas antes/después y se publica en `main` solo después de aprobarlo.

## Decisiones tomadas

| Tema | Decisión |
|---|---|
| Publicación | Cada bloque aprobado va directo a `main` |
| Ritmo | Por bloques de hallazgos relacionados |
| Público prioritario | Particulares y empresas, al mismo nivel |
| Voz | Voseo; el estudio habla en plural ("nosotros"); el Cuaderno y el Libro los firma Alejandro en primera persona |
| Nombres | Menú: Servicios · Proyectos · Cuaderno · Nosotros · Libro; botón principal "Hablemos" (sin ícono de teléfono) |
| Contacto | WhatsApp primero (con mensaje armado), email como alternativa; la primera charla es sin costo |
| Diferencial | Bienestar: espacios que hacen bien, calma, *slow living*; sin usar la palabra "neuro" en la propuesta |
| Prueba social | Sin testimonios por ahora: datos (proyectos, países, concursos, años) |

## Fase 1 · Arreglos rápidos de interfaz (completa)

- [x] **Bloque 1 · Tipografía y lectura** (G-01, G-03, NOT-01): texto de 17 px en desktop y 16 px en tablet y
  mobile, espaciado casi neutro, interlineado 1,6; notas a 18/17 px con columna de ~70 caracteres y sin
  justificar; columnas de texto acotadas en tablet; título de las tarjetas más grande que el extracto; arreglo
  de dos desbordes horizontales (nota con tabla y enlace largo en Privacidad).
- [x] **Bloque 2 · Alineación y etiquetas** (G-02, G-04): en una columna (mobile y tablet) el texto se alinea a la
  izquierda; las celdas de proceso, valores y "tres escalas" también, en todos los anchos; las etiquetas sobre
  los títulos pasan a mayúsculas de 12–13 px con espaciado moderado (resuelve "nuestros Servicios",
  "así es como podemos ayudarte", etc.); el tipo de cada proyecto usa el mismo estilo.
- [x] **Bloque 3 · Contacto y contraste del Cuaderno** (G-06, CUA-01): el bloque "Pongamos los lápices sobre el
  papel" deja de aparecer en Contacto (se enlazaba a sí misma) y en el Libro (ya tiene sus botones de compra);
  el subtítulo del Cuaderno pasa de 2,2:1 a más de 5:1 de contraste en los tres anchos; el encabezado del
  Cuaderno baja de 520 a 420 px de alto en desktop.
- [x] **Bloque 4 · Zonas táctiles y accesibilidad** (G-08, G-11): tarjetas de notas clickeables en toda su
  superficie; en pantallas táctiles, enlaces del pie, contacto, etiquetas, "Volver", marca, menú y redes de al
  menos 44 px (los objetivos chicos en mobile bajan de 65 a 13, todos "Leer más" dentro de tarjetas ya
  clickeables); filtros del Cuaderno como botones con `aria-pressed`; jerarquía de encabezados en Libro y
  Proyectos; sin subrayado falso en Nosotros; textos alternativos en las 52 imágenes de notas que no tenían.
- [x] **Bloque 5 · Ortografía y nombres** (G-12): menú con "Proyectos" y "Cuaderno"; botón "Hablemos";
  "Portfolio" y "Nuestros Trabajos" pasan a "Proyectos" / "Nuestros proyectos"; mayúsculas de oración en
  títulos y tipos de proyecto; tildes ("¿Qué…?", "¿Dónde…?", "Río", "dé"); puntuación ("Nuestro objetivo es…",
  "etc."); voseo en Servicios, Nosotros y Libro; *slow living* en cursiva; teléfono "091 428 436 (WhatsApp)";
  "Volver al Cuaderno" en las notas; botones de compra sin mayúsculas forzadas. Las notas del Cuaderno y la
  página de Privacidad quedan para la Fase 5.
- [x] **Bloque 6 · Proceso y navegación de notas** (INI-03, NOT-03): las cuatro etapas del proceso quedan en
  orden (Investigación → Ideación → Pruebas → Implementación), numeradas y marcadas como anteproyecto o proyecto
  ejecutivo, igual que dice el texto; el botón del proceso lleva a Contacto ("Hablemos de tu proyecto") en vez de
  a Servicios, donde el proceso no está; al final de cada nota, "Nota anterior" y "Nota siguiente" muestran el
  título de la nota.

## Fase 2 · Estructura y conversión

- [x] **Bloque 1 · Contacto** (CON-01 a CON-03, G-14): botón principal de WhatsApp con mensaje armado y email
  con asunto; qué conviene contar; qué pasa después (respuesta en uno o dos días hábiles, primera charla sin
  costo, propuesta con alcance, etapas y honorarios); medición de clics en WhatsApp, email y compra del libro.
- [ ] **Bloque 2 · Home** (INI-01, INI-02, INI-04, INI-05): bajada con quiénes son, dónde y el enfoque en el
  bienestar, botones "Hablemos de tu proyecto" y "Ver proyectos" y la nota "La primera charla es sin costo" en la
  primera pantalla; los proyectos suben al segundo lugar; Servicios lista las tres líneas con enlace a cada una;
  franja de datos (+10 años, 5 países, 5 concursos, libro y notas); libro y últimas tres notas del Cuaderno.
- [ ] Bloque 3 · Libro (LIB-01 a LIB-03)
- [ ] Bloque 4 · Menú mobile y botones (G-07, G-05)
- [ ] Bloque 5 · Tablet, Servicios y Nosotros (G-09, SER-01 a SER-05, NOS-01 a NOS-03)

## Fases siguientes

- Fase 3 · Portfolio
- Fase 4 · Cuaderno
- Fase 5 · Copywriting, microcopy y UX writing
