/* Estudio ARAR. — interacciones mínimas, sin dependencias */
(function () {
  "use strict";

  /* Menú móvil */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      document.body.classList.toggle("nav-open", open);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) toggle.click();
    });
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
    var prev = root.querySelector(".carousel__btn--prev");
    var next = root.querySelector(".carousel__btn--next");
    if (prev) prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
    if (next) next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });
    var update = function () {
      var max = track.scrollWidth - track.clientWidth - 2;
      root.classList.toggle("at-start", track.scrollLeft <= 2);
      root.classList.toggle("at-end", track.scrollLeft >= max);
    };
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });

  /* Filtro por categoría + "Cargar más" (Cuaderno) */
  document.querySelectorAll("[data-filter-grid]").forEach(function (root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll("[data-filter]"));
    var cards = Array.prototype.slice.call(root.querySelectorAll("[data-cats]"));
    var more = root.querySelector("[data-load-more]");
    var PAGE = parseInt(root.getAttribute("data-page-size") || "9", 10);
    var current = "all";
    var shown = PAGE;

    var apply = function () {
      var matched = 0;
      cards.forEach(function (card) {
        var cats = (card.getAttribute("data-cats") || "").split(" ");
        var match = current === "all" || cats.indexOf(current) !== -1;
        if (match) {
          card.hidden = matched >= shown;
          matched++;
        } else {
          card.hidden = true;
        }
      });
      if (more) more.hidden = matched <= shown;
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

    var hash = location.hash.replace("#", "");
    var initial = tabs.filter(function (t) { return t.getAttribute("data-filter") === hash; })[0];
    if (initial) { initial.click(); } else { apply(); }
  });
})();
