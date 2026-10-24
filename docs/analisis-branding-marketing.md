# Análisis de branding y marketing de arar.uy

**Fecha:** 19 de octubre de 2026 · **Alcance:** la marca y el sitio como herramienta comercial, después de las
Fases 1 a 6 del [plan de mejoras](plan-de-mejoras.md). La interfaz y los textos ya se revisaron en la
[auditoría UX/UI](auditoria-ux-ui.md) y la [re-auditoría](reauditoria-ux-ui.md); acá la pregunta es otra:
**¿el sitio le habla a quien puede contratar al estudio y lo lleva a escribir?**

**Fuentes:**

- El sitio (este repositorio).
- La exportación de Google Analytics 4 y Search Console del **21 de septiembre al 18 de octubre de 2026**
  (28 días).
- Lo que contó Alejandro: Instagram está casi inactivo y el LinkedIn es su perfil personal, porque tiene más
  experiencia trabajando para otros estudios que con proyectos propios.
- Una búsqueda rápida de competencia en la web.

> **Sobre los datos.** El sitio nuevo se publicó el 17 y 18 de octubre, así que casi todo el período corresponde
> al sitio anterior en WordPress. Estos números sirven como **línea de base** (el "antes") para medir el efecto
> de los cambios. Tampoco reflejan las consultas que llegan por recomendación o directo por WhatsApp sin pasar
> por el sitio.

Plan de trabajo: [`plan-de-marketing.md`](plan-de-marketing.md). Las decisiones del 24 de octubre y lo que
cambian de este análisis están en la [sección 10](#10-decisiones-y-lo-que-cambian).

---

## 1. Resumen

### Lo que conviene conservar

- **Una identidad sobria y reconocible.** Lora + Inter, negro sobre blanco, las formas "blob" y fotos de buena
  calidad. No hace falta rediseñar la marca.
- **Una promesa clara y cálida.** "Arquitectura que te hace bien" habla de un beneficio y no de una técnica. La
  [guía de voz](guia-de-voz.md) le da al sitio una sola forma de hablar.
- **Un activo de autoridad que pocos estudios tienen.** Un libro publicado en papel y Kindle, en español e
  inglés, y 43 notas en el Cuaderno. El Cuaderno trae **el 68 % de las visitas** y **10.622 apariciones en
  Google** en 28 días.
- **La trayectoria de Alejandro.** Dovat Arquitectos, VS Arquitectos (Barcelona), Bauten, Graetz Nuñez y la
  alianza con IEZ Arquitectura dan una credibilidad que el portfolio propio todavía no alcanza a mostrar.
- **Una base técnica lista para medir.** Datos estructurados, sitio rápido y clics en WhatsApp, email y compra
  del libro ya programados.

### Lo que más pesa

1. **El sitio atrae lectores, no clientes** (PUB-01). Casi 9 de cada 10 usuarios están fuera de Uruguay y
   llegan a leer una nota. En 28 días hubo **3 clics en WhatsApp**, todos desde Uruguay y todos en visitas que
   entraron por la home. **Ninguna visita que entró por una nota terminó en contacto.**
2. **Las páginas que venden casi no se ven** (EMB-01, CAN-02). En 28 días Servicios tuvo 9 vistas, Contacto 18
   y el Libro 10. En Google, Servicios aparece en la **posición 57**. Las búsquedas tipo "estudio de
   arquitectura Montevideo" ubican al sitio en las posiciones 12 a 18, o sea en la segunda página.
3. **El diferencial más fuerte queda escondido justo para quien más lo busca** (PUB-02). Las 4 notas sobre
   neurodiversidad tienen el 14 % de las visitas y uno de los mejores porcentajes de clics del Cuaderno. A
   Google llegan preguntas de empresas sobre oficinas para personas neurodivergentes, y el sitio aparece en las
   posiciones 3 a 8. La propuesta comercial evita esa palabra y presenta el servicio como "Arquitectura corporativa".
4. **No está ordenada la relación entre la marca del estudio y la de Alejandro** (MAR-03). El Cuaderno, el libro,
   LinkedIn y la página *in bio* son de Alejandro, y el sitio vende "Estudio ARAR". Instagram, casi inactivo,
   aparece enlazado en tres lugares.
5. **Hay poca prueba de confianza para quien no conoce al estudio** (CONF-01). No hay testimonios ni reseñas,
   las fichas de proyecto no tienen año ni superficie, y 5 de los 18 proyectos son propuestas para
   concursos. Casi nadie busca la marca por su nombre ("arar" es también un verbo y una ciudad).
6. **La medición se cortó con la migración** (MED-01). En GA4 el único evento clave es `click_whatsapp`, que
   mandaba el sitio anterior. El sitio nuevo manda `clic_whatsapp`, `clic_email` y `clic_compra_libro`, que no
   están marcados como clave. Desde que se publicó el sitio nuevo, **GA4 va a mostrar cero conversiones**
   aunque la gente escriba.

### Datos medidos

| Medida (28 días) | Valor |
|---|---|
| Usuarios activos | 383 (376 nuevos, 68 recurrentes) |
| Sesiones | 540, el 45 % con interacción |
| Vistas de página | 698 (1,8 por usuario) |
| Clics en WhatsApp (único evento clave) | **3** (0,56 % de las sesiones) |
| Apariciones en Google / clics | 10.622 / 168 (**1,6 %** de clics) |

| De dónde llegan | Sesiones | % |
|---|---|---|
| Google y otros buscadores | 395 | 73 % |
| Directo (sin origen) | 116 | 21 % |
| Facebook, LinkedIn y Reddit | 8 | 1,5 % |
| Asistentes de IA (ChatGPT, Gemini, Perplexity) | 8 | 1,5 % |
| Google Classroom | 10 | 2 % |

| Dónde están los usuarios | Usuarios | % |
|---|---|---|
| México | 88 | 23 % |
| **Uruguay** (39 en Montevideo) | **48** | **12,5 %** |
| Argentina | 45 | 12 % |
| España | 34 | 9 % |
| Chile y Perú | 46 | 12 % |
| Estados Unidos, China y sin dato (muchos son robots) | 53 | 14 % |

| Qué miran | Vistas | % |
|---|---|---|
| Notas del Cuaderno (y sus temas) | 476 | 68 % |
| Home | 127 | 18 % |
| Proyectos y fichas | 38 | 5 % |
| Nosotros, Contacto y Servicios | 46 | 7 % |
| Libro | 10 | 1,4 % |

---

## 2. Marca

### MAR-01 · Tres frases compiten por ser el lema

Hoy conviven tres frases. **"Arquitectura que te hace bien"** es el título de la home y la promesa. **"Espacios
con significado"** es el manifiesto de la home y está en el pie. **"Arquitectura + humana"** es la etiqueta de
Servicios y el título de Nosotros. Cada una está bien, pero juntas diluyen la idea.

**Recomendación:** una jerarquía fija:

- **Promesa:** Arquitectura que te hace bien.
- **Cómo lo hacemos:** luz, sonido, recorridos, materiales; diseño pensado desde cómo se siente un espacio.
- **Manifiesto:** Espacios con significado.

"Arquitectura + humana" puede quedar como nombre del enfoque en Nosotros, pero no como segundo lema.

### MAR-02 · El nombre: "ARAR" se confunde y "Estudio ARAR." lleva un punto que en Google parece un error

- **"arar" es un verbo y una ciudad.** La búsqueda "arar" tuvo 112 apariciones en posición 3,8 y **ningún
  clic**: casi nadie que escribe "arar" busca al estudio. "arar studio" y "ara r" sumaron un clic cada una.
  Hoy casi nadie busca la marca por su nombre.
- **El punto final del nombre** sirve en el logo, pero en Google y en las pestañas del navegador se lee
  "La penumbra - Estudio ARAR.", como si sobrara el punto. Está en todos los títulos del sitio.
- **El sitio no cuenta de dónde viene el nombre, y la historia es buena.** ARAR son las iniciales de Alejandro
  Ramón Arcardini Ravera, y arar es preparar la tierra para lo que viene: el estudio crea la base, una casa o una
  oficina, donde las personas crecen. Contarla en Nosotros ayuda a recordar el nombre y le da sentido.

**Recomendación:** escribir siempre "Estudio ARAR" (o "ARAR arquitectura") y nunca "ARAR" solo, para que el
nombre se pueda buscar. Sacar el punto de los títulos y dejarlo solo en el logo.

### MAR-03 · Estudio, autor y libro: tres marcas sin un orden claro

| | Estudio ARAR | Alejandro Arcardini | *El arte de habitar lo que somos* |
|---|---|---|---|
| Qué es | La marca que vende proyectos | La voz: autor, arquitecto, trayectoria | El producto de autoridad |
| Dónde aparece | Home, Servicios, Proyectos, Contacto | Cuaderno, libro, LinkedIn, *in bio* | Libro, pie, notas |
| Quién lo conoce | Muy poca gente (casi nadie busca la marca) | Lectores del Cuaderno, colegas, LinkedIn | Lectores, en Amazon y Mercado Libre |

Que el LinkedIn sea personal **no es un problema: es lo correcto**. Alejandro tiene más trayectoria trabajando
con otros estudios que con proyectos propios, así que su perfil es lo que da credibilidad, sobre todo ante
empresas y otros estudios. Lo que falta es conectar las dos marcas en los dos sentidos.

**Recomendación:** una marca de estudio **respaldada por sus fundadores**. Estudio ARAR vende y Alejandro (con
Karen) le pone cara y voz. En la práctica:

- **El perfil de LinkedIn** presenta a Alejandro como cofundador de Estudio ARAR y autor del libro, y destaca el
  sitio, el libro y el servicio para empresas.
- **En Nosotros y en las notas**, LinkedIn aparece como "el LinkedIn de Alejandro" y no como el del estudio.
- **En los datos estructurados**, el LinkedIn pasa del estudio (`ArchitectureFirm.sameAs`) a Alejandro como
  fundador (`Person.sameAs`).

### MAR-04 · La imagen que se ve al compartir el sitio es un restaurante en Caracas

Cuando alguien comparte arar.uy por WhatsApp o LinkedIn, la vista previa usa `site.ogImage`, que es la portada
de **Ouí** (un bistró en Caracas). La primera imagen de la home es **Casa Calma** (Punta del Este), que
representa mucho mejor la promesa del estudio. WhatsApp es el canal principal de contacto, así que esta es la
imagen que más gente va a ver del estudio.

**Recomendación:** usar Casa Calma como imagen para compartir la home y las páginas comerciales.

### MAR-05 · La identidad visual y la voz están bien; falta llevar la voz a Google

- **La identidad visual no necesita cambios.** Sí conviene que cada canal use las mismas fotos y la misma
  tipografía.
- **Las descripciones de las notas para buscadores** son anteriores a la guía de voz. Usan tú ("Explora",
  "Descubre"), mayúsculas de título ("La Confluencia de Espacio, Ser y Tiempo"), un emoji y frases como "Se
  aborda la relación…". Son lo primero que alguien lee del estudio en Google (ver CAN-01).

---

## 3. Públicos y propuesta de valor

### PUB-01 · Tres públicos con necesidades distintas, y el sitio les ofrece lo mismo

El plan de mejoras definió dos públicos al mismo nivel: particulares y empresas. Los datos muestran un tercero,
que hoy es el más grande: **lectores de habla hispana fuera de Uruguay**, muchos de ellos estudiantes. 25
usuarios de León (México), todos desde el celular, y 10 sesiones desde Google Classroom sugieren que algunas
notas se usan como material de clase.

| | Particulares en Uruguay | Empresas | Lectores (sobre todo fuera de Uruguay) |
|---|---|---|---|
| Qué buscan | Una casa o reforma que les haga bien, confianza, saber cuánto cuesta | Oficinas donde la gente trabaje mejor y se quede | Entender un concepto (komorebi, habitar, terceros lugares) |
| Cuántos son hoy | 48 usuarios; los **3 contactos** salieron de acá | Pocos, pero aparecen en Google con preguntas concretas | ~255 usuarios, el 66 % |
| Por dónde llegan | Home, Google, recomendación | Notas sobre neurodiversidad | Notas del Cuaderno desde Google |
| Qué les puede vender el estudio | Proyecto, reforma, interiorismo | Proyecto y diagnóstico de espacios de trabajo | **El libro** (Amazon, en papel y Kindle, en español e inglés) |
| Qué ven hoy al final de una nota | "¿Tenés un proyecto en mente?" | Lo mismo | Lo mismo |

**Recomendación:** dejar de tratar el Cuaderno como un canal para conseguir clientes de arquitectura en
general. Cada público necesita su propio recorrido:

- **Particulares:** Google local + home + Proyectos → WhatsApp. Lo que más pesa es la confianza (sección 6).
- **Empresas:** notas sobre neurodiversidad + LinkedIn → una página de servicio propia → WhatsApp o mail.
- **Lectores:** nota → libro. Para alguien en México o Perú, el próximo paso lógico es comprar el libro, no
  pedir una charla por un proyecto.

### PUB-02 · Para empresas, "bienestar" es demasiado general: lo que buscan es más concreto

La guía de voz decidió no usar "neuro" en la propuesta comercial. Para las casas esa decisión tiene sentido:
"bienestar" se entiende sin explicación, y "neuro" puede sonar técnico o clínico. Para las empresas, los datos
dicen otra cosa:

- **Las 4 notas sobre neurodiversidad sumaron 101 vistas**, el 14 % del sitio (*Arquitectura, autismo y altas
  capacidades*, *Diseñar para la neurodivergencia*, *Arquitectura para cerebros intensos* y *Diseño
  arquitectónico neuro-inclusivo*). La de autismo tiene el mejor porcentaje de clics entre las notas con más de
  400 apariciones en Google (3,6 %).
- **A Google llegan preguntas de empresas**, por ejemplo "¿cómo diseñar espacios de trabajo inclusivos para
  empleados neurodivergentes (TDAH, autismo, sensibilidades sensoriales)?" o "¿qué muebles y configuraciones
  espaciales ayudan a los empleados neurodivergentes a concentrarse?". El sitio aparece en las posiciones 3 y 8.
- **El texto de Servicios ya lo dice sin nombrarlo** ("quienes procesan la información de otra manera"), bajo el
  título genérico "Arquitectura corporativa".
- **Es una tendencia que recién empieza en el diseño de oficinas.** Un informe de HOK estima que entre el 15 y
  el 20 % de las personas son neurodivergentes y dice que el tema apenas empieza a influir en el diseño de
  oficinas ([BDC Network](https://www.bdcnetwork.com/building-sector-reports/office-buildings/news/55162738/a-new-hok-report-focuses-on-designing-offices-for-a-neurodiverse-workforce)).
  JLL plantea lo mismo como diseño universal e inclusivo
  ([JLL](https://www.jll.com/es-es/insights/diseno-de-oficinas-al-servicio-de-la-inclusion)).
- **En una búsqueda rápida no apareció ningún estudio de Montevideo que ofrezca este servicio.** Sí aparece la
  neuroarquitectura en la prensa local, en una nota de Montevideo Portal con una arquitecta especializada
  ([Montevideo Portal](https://www.montevideo.com.uy/Modo-saludable/Neuroarquitectura-que-es-y-como-aplicarla-en-tu-casa-sin-gastar-de-mas-uc951087)).
  Es una señal, no una conclusión: falta un relevamiento ordenado (ver sección 8).

**Recomendación (a decidir):** mantener "bienestar" como paraguas de la marca y para las casas, y **nombrar la
especialidad en la línea para empresas**: *espacios de trabajo neuroinclusivos* o *oficinas para todas las
formas de pensar*. Es lo que buscan las empresas, lo que el estudio sabe hacer (más de 10 años en proyectos
corporativos grandes, un libro y varias notas sobre el tema) y algo que, por lo que se ve, casi nadie ofrece en
Uruguay.

### PUB-03 · Consultoría para el exterior: un público que ya conoce el trabajo de Alejandro

"Proyectos para otros estudios" (desde Uruguay, para clientes de otros países) es la línea que mejor aprovecha la
trayectoria de Alejandro y el público internacional. Hoy es una línea de texto en Servicios. Los arquitectos y
estudiantes que leen el Cuaderno, y los colegas de LinkedIn, son exactamente quienes contratan este servicio o
recomiendan a quien lo hace.

---

## 4. Embudo y conversión

### EMB-01 · Del lector al contacto hay un salto que casi nadie da

| Paso (28 días) | Cantidad |
|---|---|
| Sesiones | 540 |
| Sesiones con interacción | 245 |
| Vistas de páginas comerciales (sin contar la home) | 84 |
| Vistas de Contacto | 18 |
| Clics en WhatsApp | **3** |

- **Las 3 conversiones salieron de visitas que entraron por la home** (2,7 % de esas sesiones). Las sesiones
  que entraron por una nota no tuvieron ninguna.
- **Proyectos es la página donde más tiempo se queda la gente** (82 segundos en promedio). Es lo que más
  convence, y en la home queda a un clic.
- **Servicios tuvo 9 vistas**, con 19 segundos en promedio. La home resume bien los servicios, pero la página
  de Servicios no recibe tráfico ni desde Google ni desde las notas.

### EMB-02 · Las notas no llevan a ninguna parte del estudio

Ninguna de las 43 notas tiene, en el texto, un enlace a Servicios, Proyectos, Nosotros o Contacto. Al
final de cada nota hay tres bloques: el autor ("Conocé el estudio"), el libro y el llamado general "¿Tenés un
proyecto en mente?". Ninguno está adaptado al tema de la nota.

**Recomendación:** un bloque al final de cada nota **según de qué trata**:

| Notas sobre… | Próximo paso |
|---|---|
| Neurodiversidad y trabajo: autismo, neurodivergencia, cerebros intensos, diseño neuroinclusivo | Espacios de trabajo neuroinclusivos (servicio para empresas) |
| La casa y la experiencia del espacio: penumbra, komorebi, habitar, wabi-sabi, Serie Jardín | El libro y, en segundo lugar, Arquitectura residencial |
| Teoría, cultura y arquitectos: Rovaniemi, Vilamajó, Dieste, la poética del espacio | El libro |

### EMB-03 · Todos los WhatsApp llegan con el mismo mensaje y no se sabe de dónde vienen

Fuera de Servicios, el mensaje armado siempre es "Hola, quiero consultar por un proyecto.". GA4 registra el
clic pero no si la persona después escribió, y el estudio no sabe desde qué página llegó.

**Recomendación:** un mensaje armado por tipo de página. Por ejemplo, "Hola, leí sobre espacios de trabajo
neuroinclusivos y quiero consultar por una oficina." No guarda datos en el sitio y le dice al estudio de dónde
viene cada consulta.

---

## 5. Canales

### CAN-01 · Google: el Cuaderno aparece mucho y se elige poco

Las 8 notas con más apariciones sumaron **7.119 apariciones y 73 clics (1,0 %)**, casi siempre entre las
posiciones 4 y 10. Muchas búsquedas preguntan qué significa algo ("komorebi significado", "qué es habitar",
"qué es la materialidad en arquitectura"), y los títulos no prometen responderlo.

| Nota | Apariciones | Clics | Posición | Qué falla |
|---|---|---|---|---|
| Komorebi, shibui y yūgen | 2.044 | 6 (0,3 %) | 8,4 | Buscan "qué significa komorebi"; el título no lo promete. La descripción usa tú y un emoji |
| Los terceros lugares | 1.454 | 11 (0,8 %) | 5,8 | Buscan "qué son los terceros espacios" y la teoría de Ray Oldenburg. Quien entra se queda 6 segundos |
| Habitar | 852 | 10 (1,2 %) | 9,9 | Buscan "qué es habitar" y "significado de habitar". Título con mayúsculas de título. **Es el puente natural al libro** |
| El lugar, la materialidad y la forma | 768 | 15 (2,0 %) | 4,8 | Buscan "materialidad en arquitectura"; el título no empieza por ahí |
| Superkilen | 641 | 12 (1,9 %) | 7,7 | El título para buscadores dice "Diseño centrado en el ser humano": es de otra nota |
| La penumbra | 460 | 3 (0,7 %) | 5,3 | "La penumbra" a secas es ambiguo (astronomía, cine) |
| Biofilia en arquitectura | 451 | 0 | 24,8 | Muy competida; nota de 2023 que necesita actualizarse |
| La poética del espacio | 384 | 4 (1,0 %) | 4,1 | Buscan a Bachelard ("Gaston Bachelard la poética del espacio", posición 1,6, sin clics); el título no lo nombra |

Otro caso: "julio vilamajó" aparece en la **posición 1,2** sin ningún clic, y la nota se llama *Las valijas de
Vilamajó*, sin el nombre completo.

**Qué se puede esperar:** si esas 8 notas pasan del 1 % al 3 % de clics, serían unas **210 visitas cada 28 días
en vez de 73**. La mayoría van a ser lectores de fuera de Uruguay: suman al libro y a la autoridad del estudio, no a
las consultas por proyectos. Por eso es una prioridad media.

### CAN-02 · Google: casi no aparece en las búsquedas que traen clientes

| Búsqueda | Apariciones | Clics | Posición |
|---|---|---|---|
| estudio de arquitectos | 37 | 0 | 12,3 |
| estudio de arquitectura | 31 | 1 | 16,8 |
| despacho de arquitectos / de arquitectura | 52 | 0 | 11,0 |
| servicio de arquitectura | 25 | 0 | 13,2 |
| estudios de arquitectura montevideo | 5 | 2 | 17,8 |
| estudio arquitectura uruguay | 3 | 2 | 7,3 |

- **Menos del 4 % de las apariciones con búsqueda visible son búsquedas de un estudio o de un servicio.**
  "Despacho" es una palabra de México y España: esas apariciones no son clientes posibles.
- **La home es la página comercial que trabaja** (551 apariciones, 46 clics, 8,3 %, posición 11,4). Servicios
  está en la posición 57. Las búsquedas "servicio de diseño de masterplan" o "servicio de dirección
  arquitectónica" (posiciones 44 a 66) vienen de la página de servicios anterior.
- **En las búsquedas locales ("arquitecto en Montevideo", "reforma de apartamento") suele aparecer primero el
  mapa de Google**, que sale del Perfil de Empresa de Google y de sus reseñas, no del sitio. No sabemos si el
  estudio tiene uno.

**Recomendación:** un Perfil de Empresa de Google completo (categoría, fotos de obra, servicios, sitio y
WhatsApp) y reseñas de clientes anteriores. Además, que Servicios use las palabras con que la gente busca:
"reformas de casas y apartamentos en Montevideo", "arquitectura en Punta del Este", "diseño de oficinas".

### CAN-03 · LinkedIn: el canal correcto para empresas y estudios, casi sin usar

LinkedIn trajo 2 sesiones en 28 días. El perfil de Alejandro es el mejor canal para dos de las tres líneas:
empresas (espacios de trabajo) y consultoría para otros estudios. Ahí está su trayectoria, que es su principal
argumento de venta.

**Recomendación:**

- **Titular del perfil:** "Arquitecto · Cofundador de Estudio ARAR · Autor de *El arte de habitar lo que somos*".
- **Sección "Destacado":** el sitio, el libro y el servicio para empresas.
- **Una publicación cada dos semanas**, adaptando una nota del Cuaderno: una idea, una imagen y un enlace. Las
  notas sobre neurodiversidad y neuroarquitectura dan para más de tres meses.

### CAN-04 · Instagram y Facebook: un canal inactivo enlazado es peor que no tenerlo

Facebook trajo 4 sesiones e Instagram ninguna medible. Aun así, los dos están enlazados en el pie de todas las
páginas, en *in bio* y en los datos estructurados. Es común que quien busca un estudio para su casa mire su
Instagram para ver obra y ver si está activo. Si encuentra una cuenta casi vacía, el mensaje es que no lo está.

**Recomendación (a decidir):**

- **A. Sacar los enlaces** a Instagram y Facebook del sitio hasta que haya contenido.
- **B. Reactivar Instagram en versión mínima:** 9 publicaciones fijas con los mejores proyectos y después dos
  por mes. El material ya existe: 18 proyectos y 43 notas alcanzan para un año.

Si no hay tiempo para sostener B, conviene A. Un canal que se abandona otra vez vuelve al problema de hoy.

### CAN-05 · Prensa, charlas y asistentes de IA: canales chicos pero baratos

- **La prensa local ya escribe sobre neuroarquitectura** (Montevideo Portal, sección Modo saludable). Alejandro,
  como autor de un libro sobre bienestar y espacio, puede ser fuente para notas como esa. Es visibilidad sin
  costo y con credibilidad.
- **El Cuaderno se usa en clases** (sesiones desde Google Classroom, el grupo de León). Las charlas en
  facultades y las presentaciones del libro suman autoridad, libros vendidos y contactos con colegas.
- **Los asistentes de IA** (ChatGPT, Gemini, Perplexity) ya trajeron 8 sesiones. El sitio tiene datos
  estructurados y textos claros; por ahora no hace falta más.
- **Uruguay XXI tiene un directorio de servicios exportables** donde figuran estudios de arquitectura
  ([ejemplo](https://www.uruguayxxi.gub.uy/es/directorio-servicio/estudio-jorge-moran/)). Encaja con
  "Proyectos para otros estudios".

---

## 6. Confianza y prueba social

### CONF-01 · Para alguien que no conoce al estudio, hay poco que lo tranquilice

Alguien que llega desde Google y no conoce al estudio encuentra un sitio lindo y bien escrito, pero pocas
pruebas:

- **Sin testimonios ni reseñas**, por decisión del plan de mejoras.
- **Fichas de proyecto incompletas:** ninguno de los 18 proyectos tiene año ni superficie, y 5 no tienen
  ubicación. Quedó pendiente en la Fase 3.
- **5 de los 18 proyectos son propuestas para concursos** y 1 es un caso de estudio. Muestran forma de pensar,
  pero no obra construida.
- **Varios proyectos residenciales son un ambiente** (un dormitorio, una cocina, un estudio). Están bien, pero
  no muestran una casa entera.
- **La obra en la que Alejandro participó con otros estudios** solo aparece como lista de nombres en Nosotros.

**Recomendación:**

- **Reseñas en Google** (Perfil de Empresa). Las escribe el cliente fuera del sitio, así que el sitio sigue sin
  guardar datos personales.
- **Completar las fichas** con año, superficie, estado y ubicación, y convertir 1 o 2 en **caso**: qué pedía el
  cliente, qué decidimos y cómo quedó. Casa Calma primero.
- **Una frase de un cliente con nombre** en esas fichas, si 2 o 3 aceptan. Es revisar una decisión tomada: hoy
  es el cambio de confianza con más efecto por menos trabajo.
- **"Proyectos en los que participamos"**: obra hecha con otros estudios, con crédito y con su permiso.
- **Las reseñas del libro en Amazon** también cuentan: el libro es parte de la marca.

---

## 7. Medición

### MED-01 · Los eventos clave quedaron con otro nombre

| Evento | Quién lo manda | ¿Es clave en GA4? | En los 28 días |
|---|---|---|---|
| `click_whatsapp` | el sitio anterior | sí | 3 |
| `clic_whatsapp` | el sitio nuevo | **no** | — |
| `clic_email` | el sitio nuevo | **no** | — |
| `clic_compra_libro` | el sitio nuevo | **no** | — |

**Recomendación:** en GA4 (Administrar → Eventos), marcar `clic_whatsapp`, `clic_email` y `clic_compra_libro`
como eventos clave. Para comparar con el período anterior, sumar `click_whatsapp` (sitio anterior) y
`clic_whatsapp` (sitio nuevo).

### MED-02 · GA4 no sabe de dónde salen los clientes

Un clic en WhatsApp no es una consulta, y una consulta no es un proyecto. Muchos clientes llegan por
recomendación y nunca pasan por el sitio. La única forma de saber qué funciona es **una planilla simple de
consultas**: fecha, cómo nos conoció, qué quiere hacer, si pasó a propuesta y si se concretó.

### MED-03 · Indicadores para seguir cada mes

| Indicador | Línea de base (21/9–18/10) | Meta orientativa a 3 meses |
|---|---|---|
| **Consultas reales (planilla)** | **0 por mes** | **las primeras: 1 o 2 por mes** |
| Clics en WhatsApp + email | 3 (solo WhatsApp) | 8 a 10 por mes |
| Vistas de Servicios | 9 | 40 por mes |
| Clics de las 8 notas con más apariciones | 73 (1,0 %) | 2,5 a 3 % |
| Posición en búsquedas de "estudio de arquitectura" | 12 a 18 | menos de 10 |
| Reseñas en Google | 0 | según D4 (a criterio de Alejandro) |
| Libro: ventas en Amazon | unas 10 por mes | 15 por mes |
| Libro: ventas en Mercado Libre | 0 | las primeras |
| Libro: clics en "Comprar" del sitio | sin dato | medir desde ya |

Las metas son orientativas: con este volumen, unos pocos clics mueven mucho los porcentajes. Lo importante es la
tendencia de un mes a otro, con el mismo período de 28 días.

---

## 8. Competencia (búsqueda preliminar)

Esta sección se basa en una búsqueda rápida; no es un relevamiento completo.

- **No apareció ningún estudio de Montevideo** que ofrezca diseño de espacios de trabajo neuroinclusivos como
  servicio.
- **La neuroarquitectura sí aparece en la prensa local**, en una nota de Montevideo Portal con una arquitecta
  especializada. El tema ya tiene voces en Uruguay, aunque enfocadas en la casa.
- **A nivel internacional, empresas grandes del sector** (HOK, JLL) publican sobre oficinas para la
  neurodiversidad y lo presentan como una tendencia que recién empieza.
- **Hay muchos estudios de reformas e interiorismo residencial en Montevideo y Punta del Este.** "Bienestar"
  solo, sin decir cómo, es fácil de copiar. Lo que diferencia a ARAR es poder explicarlo: luz, sonido,
  recorridos, el libro y el Cuaderno.

**Próximo paso:** relevar 6 a 8 estudios locales (sitio, Instagram, reseñas en Google, cómo se presentan y qué
prometen) para confirmar dónde hay lugar libre. Está en el plan.

---

## 9. Lo que faltaba saber (respondido el 24 de octubre)

| Pregunta | Respuesta |
|---|---|
| ¿Cuál es el objetivo principal? | Más consultas de proyectos en Uruguay, de empresas y de particulares. El libro, en paralelo y con prioridad media a baja |
| ¿Cuántas consultas llegan por mes, y por qué canal? | **Ninguna** |
| ¿El estudio tiene Perfil de Empresa de Google? ¿Tiene reseñas? | Tiene perfil, sin reseñas |
| ¿Se puede mostrar obra hecha con otros estudios? | Está en LinkedIn y queda ahí; no va en el sitio del estudio |
| ¿Hay clientes dispuestos a dejar una reseña o una frase? | Los testimonios que hay son de proyectos hechos por Upwork y ya no representan al estudio |
| ¿Cuántos libros se venden y dónde? | Unos 10 por mes en Amazon, ninguno en Mercado Libre por ahora y unos 80 en papel vendidos en Uruguay |
| ¿De dónde viene el nombre ARAR? | Las iniciales de Alejandro Ramón Arcardini Ravera, y la idea de preparar la tierra para lo que viene |

---

## 10. Decisiones y lo que cambian

Las decisiones completas están en el [plan](plan-de-marketing.md#decisiones-tomadas-24-de-octubre-de-2026).
Lo que cambian de este análisis:

- **El problema es más grande de lo que mostraba GA4.** Los 3 clics en WhatsApp no se convirtieron en consultas:
  hoy no llega ninguna. Por eso el plan suma contactos directos con empresas y con la red propia, además de los
  cambios en el sitio.
- **PUB-01 y EMB-02 · El libro no gana lugar en el sitio** (D1). Los lectores de afuera siguen teniendo el bloque
  del libro que ya muestran las notas. Las notas sobre la casa llevan a Arquitectura residencial; las de teoría y
  cultura quedan como están. Las ventas del libro se trabajan fuera del sitio, en Amazon y Mercado Libre.
- **PUB-02 · "Neuro" solo para empresas, y sin hablar como expertos** (D2). El servicio describe lo que hace un
  arquitecto (acústica, luz, zonas, recorridos), muestra sus fuentes y nunca usa "expertos" ni promesas clínicas.
- **CAN-04 · Instagram y Facebook se quedan** (D3). Instagram se alimenta de las fichas de proyecto a medida que
  se completan.
- **CONF-01 · Sin testimonios ni obra de otros estudios en el sitio** (D4, D5). La confianza se construye con
  fichas completas, casos, el Perfil de Google y el enlace al LinkedIn de Alejandro para ver su trayectoria.
- **CAN-01 · Las notas de afuera bajan de prioridad.** Mejorar sus títulos sigue valiendo, pero primero van las
  notas que llevan a un servicio.
