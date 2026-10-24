/* Estudio ARAR. — interacciones mínimas, sin dependencias */
(function () {
  "use strict";

  /* Menú móvil */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    var header = toggle.closest(".site-header");
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      document.body.classList.toggle("nav-open", open);
      // Con el menú abierto, la página de atrás queda inactiva para el teclado y los lectores de pantalla
      Array.prototype.forEach.call(document.body.children, function (el) {
        if (el !== header && el.tagName !== "SCRIPT") el.inert = open;
      });
    };
    toggle.addEventListener("click", function () { setOpen(!nav.classList.contains("is-open")); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) { setOpen(false); toggle.focus(); }
    });
    // Al elegir un enlace (o abrir WhatsApp en otra pestaña) el menú se cierra
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) setOpen(false); });
    // Si la ventana pasa a ancho de tablet o escritorio, el menú abierto se cierra
    if (window.matchMedia) {
      var wide = window.matchMedia("(min-width: 768px)");
      var onChange = function () { if (wide.matches) setOpen(false); };
      if (wide.addEventListener) wide.addEventListener("change", onChange); else if (wide.addListener) wide.addListener(onChange);
    }
  }

  /* Carruseles (scroll-snap + flechas) */
  document.querySelectorAll("[data-carousel]").forEach(function (root) {
    var track = root.querySelector(".carousel__track");
    if (!track) return;
    var step = function () {
      var slide = track.querySelector(".carousel__slide");
      if (!slide) return track.clientWidth;
      var gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "0") || 0;
      return slide.getBoundingClientRect().width + gap;
    };
    var motion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    var prev = root.querySelector(".carousel__btn--prev");
    var next = root.querySelector(".carousel__btn--next");
    if (prev) prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: motion }); });
    if (next) next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: motion }); });
    var count = root.parentNode.querySelector("[data-carousel-count]");
    var total = track.querySelectorAll(".carousel__slide").length;
    var update = function () {
      var max = track.scrollWidth - track.clientWidth - 2;
      root.classList.toggle("at-start", track.scrollLeft <= 2);
      root.classList.toggle("at-end", track.scrollLeft >= max);
      if (count && total) {
        var s = step();
        var visible = Math.max(1, Math.floor((track.clientWidth + 2) / s + 0.1));
        var first = track.scrollLeft >= max ? total - visible + 1 : Math.round(track.scrollLeft / s) + 1;
        var last = Math.min(total, first + visible - 1);
        count.textContent = (first === last ? first : first + "–" + last) + " de " + total;
      }
    };
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });

  /* Filtro por tema, búsqueda y "Ver más" (Cuaderno y Proyectos) */
  var normalize = function (t) {
    return (t || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };
  document.querySelectorAll("[data-filter-grid]").forEach(function (root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll("[data-filter]"));
    var cards = Array.prototype.slice.call(root.querySelectorAll("[data-cats]"));
    var more = root.querySelector("[data-load-more]");
    var search = root.querySelector("[data-filter-search]");
    var count = root.querySelector("[data-filter-count]");
    var empty = root.querySelector("[data-filter-empty]");
    var PAGE = parseInt(root.getAttribute("data-page-size") || "9", 10);
    var current = "all";
    var query = "";
    var shown = PAGE;
    cards.forEach(function (card) { card._text = normalize(card.getAttribute("data-search")); });

    var apply = function () {
      var matched = 0;
      cards.forEach(function (card) {
        var cats = (card.getAttribute("data-cats") || "").split(" ");
        var match = (current === "all" || cats.indexOf(current) !== -1) && (!query || card._text.indexOf(query) !== -1);
        if (match) {
          card.hidden = matched >= shown;
          matched++;
        } else {
          card.hidden = true;
        }
      });
      if (more) more.hidden = matched <= shown;
      if (count) count.textContent = matched ? "Mostrando " + Math.min(shown, matched) + " de " + matched + (matched === 1 ? " nota" : " notas") : "";
      if (empty) empty.hidden = matched !== 0;
    };

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        tabs.forEach(function (t) {
          var on = t === tab;
          t.classList.toggle("is-active", on);
          t.setAttribute("aria-pressed", on ? "true" : "false");
        });
        current = tab.getAttribute("data-filter");
        shown = PAGE;
        apply();
        if (history.replaceState) {
          history.replaceState(null, "", current === "all" ? location.pathname : location.pathname + "#" + current);
        }
      });
    });
    if (more) more.addEventListener("click", function () { shown += PAGE; apply(); });
    if (search) search.addEventListener("input", function () { query = normalize(search.value.trim()); shown = PAGE; apply(); });

    var hash = location.hash.replace("#", "");
    var initial = tabs.filter(function (t) { return t.getAttribute("data-filter") === hash; })[0];
    if (initial) { initial.click(); } else { apply(); }
  });

  /* Contacto guiado: las respuestas arman el texto del WhatsApp y del mail. No se guarda nada. */
  document.querySelectorAll("[data-mensaje]").forEach(function (root) {
    var texto = root.querySelector("[data-mensaje-texto]");
    var wa = root.querySelector("[data-mensaje-wa]");
    var mail = root.querySelector("[data-mensaje-mail]");
    var valor = function (name) {
      var el = root.querySelector('input[name="' + name + '"]:checked');
      return el ? el.value : "";
    };
    var update = function () {
      var espacio = valor("espacio") || "un proyecto";
      var resolver = valor("resolver");
      var msg = "Hola, quiero consultar por " + espacio + ".";
      if (resolver === "cero") msg += " Empezamos de cero.";
      else if (resolver) msg += " Lo que más quiero resolver: " + resolver + ".";
      texto.textContent = msg;
      wa.href = root.getAttribute("data-wa") + "?text=" + encodeURIComponent(msg);
      mail.href = "mailto:" + root.getAttribute("data-mail") + "?subject=" + encodeURIComponent("Consulta por " + espacio) + "&body=" + encodeURIComponent(msg);
    };
    root.addEventListener("change", update);
  });

  /* Medición (GA4): clics en WhatsApp, email y compra del libro. Solo registra si Analytics está cargado. */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a || typeof window.gtag !== "function") return;
    var href = a.getAttribute("href");
    var params = { ubicacion: location.pathname };
    var name = null;
    if (/wa\.me\//.test(href)) name = "clic_whatsapp";
    else if (/^mailto:/.test(href)) name = "clic_email";
    else if (/amazon\.|amzn\.|\/\/a\.co\/|mercadolibre\./.test(href)) {
      name = "clic_compra_libro";
      params.tienda = /mercadolibre/.test(href) ? "mercadolibre" : "amazon";
    }
    if (name) window.gtag("event", name, params);
  });
})();
