/* ==========================================================================
   Site rendering. You should not need to edit this file:
   all content lives in js/data.js.
   ========================================================================== */
(function () {
  "use strict";

  var D = window.PORTFOLIO;
  if (!D) return;
  var S = D.site, A = D.about || {};
  var FALLBACK_IMG = "images/placeholder.svg";
  var ICON_DIR = "images/icons/";

  /* ---------- helpers ---------- */
  function esc(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function $(sel) { return document.querySelector(sel); }
  function pad(n) { return n < 10 ? "0" + n : String(n); }
  function list(items, cls) {
    return '<ul' + (cls ? ' class="' + cls + '"' : "") + '>' + (items || []).map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
  }
  function iconSrc(icon) {
    if (!icon) return ICON_DIR + "generic.svg";
    return /\.(svg|png|jpe?g|webp)$/i.test(icon) ? ICON_DIR + icon : ICON_DIR + icon + ".svg";
  }

  var ICON = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21h-4V9.75Z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
    doc: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 1.5h5.5L12.5 4.5v10h-8.5z"/><path d="M9.5 1.5v3h3"/></svg>',
    down: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M8 2v9M4 7l4 4 4-4M2.5 14h11"/></svg>',
  };

  /* ---------- sidebar ---------- */
  function renderSidebar() {
    $("#sidebar").innerHTML =
      '<div class="side-inner">' +
        (A.photo ? '<img class="side-photo" src="' + esc(A.photo) + '" alt="' + esc(A.photoAlt || S.name) + '" width="240" height="240">' : "") +
        '<h1 class="side-name">' + esc(S.name) + '</h1>' +
        '<p class="side-title">' + esc(S.title) + '</p>' +
        (A.statement ? '<p class="side-statement">' + esc(A.statement) + '</p>' : "") +

        '<ul class="side-contact">' +
          '<li><a href="mailto:' + esc(S.email) + '">' + ICON.mail + '<span>' + esc(S.email) + '</span></a></li>' +
          '<li><a href="' + esc(S.linkedin) + '" target="_blank" rel="noopener noreferrer">' + ICON.linkedin + '<span>LinkedIn</span><span class="visually-hidden"> (opens in a new tab)</span></a></li>' +
          (S.location ? '<li><span class="plain">' + ICON.pin + '<span>' + esc(S.location) + '</span></span></li>' : "") +
        '</ul>' +

        '<div class="side-actions">' +
          '<a class="btn" href="' + esc(S.resume) + '" target="_blank" rel="noopener">' + ICON.doc + ' Resume</a>' +
          '<a class="btn btn-ghost" href="' + esc(S.resume) + '" download="' + esc(S.resume.split("/").pop()) + '" aria-label="Download resume PDF">' + ICON.down + ' PDF</a>' +
        '</div>' +

        ((A.education && A.education.length) ?
          '<div class="side-edu"><h2 class="eyebrow">Education</h2>' +
            A.education.map(function (e) {
              return '<div class="edu"><div class="edu-degree">' + esc(e.degree) + '</div><div class="edu-school">' + esc(e.school) + (e.date ? ' · ' + esc(e.date) : "") + '</div></div>';
            }).join("") +
          '</div>' : "") +

        '<nav class="side-nav" aria-label="Sections">' +
          '<a href="#projects">Projects</a>' +
          '<a href="#skills">Skills</a>' +
        '</nav>' +
      '</div>';
  }

  /* ---------- projects ---------- */
  function renderProjects() {
    var projects = (D.projects || []).filter(function (p) { return !p.hidden; });
    var gal = [];

    var html = projects.map(function (p, i) {
      var images = [p.cover].concat(p.gallery || []).filter(function (g) { return g && g.src; });
      var start = gal.length;
      images.forEach(function (g) { gal.push(g); });
      var main = images[0], thumbs = images.slice(1);

      var meta = [p.org, p.dates].filter(Boolean).join(" · ");
      var result = (p.outcome && p.outcome[0]) || "";

      return '<article class="project" id="' + esc(p.id) + '" aria-labelledby="t-' + esc(p.id) + '">' +
        '<div class="p-meta-row"><span class="num">' + pad(i + 1) + '</span><span class="eyebrow">' + esc(p.category) + '</span>' +
          (p.status === "in-progress" ? '<span class="badge">In progress</span>' : "") + '</div>' +
        '<h3 class="p-title" id="t-' + esc(p.id) + '">' + esc(p.title) + '</h3>' +
        (meta ? '<p class="p-org">' + esc(meta) + '</p>' : "") +
        '<p class="p-summary">' + esc(p.summary) + '</p>' +
        ((p.links && p.links.length) ? '<div class="p-links">' + p.links.map(function (l) {
          return '<a class="btn btn-ghost" href="' + esc(l.href) + '" target="_blank" rel="noopener">' + ICON.doc + ' ' + esc(l.label) + '</a>';
        }).join("") + '</div>' : "") +

        '<div class="p-media">' +
          '<button type="button" class="shot main" data-gi="' + start + '" aria-label="Enlarge image: ' + esc(main.caption || main.alt) + '">' +
            '<img src="' + esc(main.src) + '" alt="' + esc(main.alt) + '" loading="' + (i < 1 ? "eager" : "lazy") + '" decoding="async"' + ((main.position || main.fit) ? ' style="' + (main.position ? 'object-position:' + esc(main.position) + ';' : '') + (main.fit ? 'object-fit:' + esc(main.fit) + ';background:#fff;' : '') + '"' : "") + '>' +
          '</button>' +
          (thumbs.length ? '<div class="thumbs">' + thumbs.map(function (g, k) {
            return '<button type="button" class="shot' + (g.video ? " is-video" : "") + '" data-gi="' + (start + 1 + k) + '" aria-label="' + (g.video ? "Play video: " : "Enlarge image: ") + esc(g.caption || g.alt) + '">' +
              (g.video
                ? '<video src="' + esc(g.video) + '" poster="' + esc(g.src) + '" muted loop playsinline autoplay preload="metadata" aria-hidden="true"></video><span class="play-badge" aria-hidden="true">▶</span>'
                : '<img src="' + esc(g.src) + '" alt="' + esc(g.alt) + '" loading="lazy" decoding="async"' + ((g.position || g.fit) ? ' style="' + (g.position ? 'object-position:' + esc(g.position) + ';' : '') + (g.fit ? 'object-fit:' + esc(g.fit) + ';background:#fff;' : '') + '"' : "") + '>') +
              '</button>';
          }).join("") + '</div>' : "") +
        '</div>' +

        '<div class="p-details">' +
          '<div class="p-contrib">' +
            '<h4 class="eyebrow">My contributions</h4>' +
            list(p.contributions, "bullets") +
            (result ? '<p class="p-result"><span class="eyebrow">Result</span> ' + esc(result) + '</p>' : "") +
            (p.note ? '<p class="note">' + esc(p.note) + '</p>' : "") +
          '</div>' +
          '<div class="p-side">' +
            (p.role ? '<h4 class="eyebrow">My role</h4><p class="p-role">' + esc(p.role) + '</p>' : "") +
            ((p.highlights && p.highlights.length) ? '<ul class="stats">' + p.highlights.map(function (h) { return '<li><b>' + esc(h.value) + '</b><span>' + esc(h.label) + '</span></li>'; }).join("") + '</ul>' : "") +
            '<h4 class="eyebrow">Skills</h4>' +
            '<ul class="tags">' + (p.skills || []).map(function (s) { return '<li class="tag">' + esc(s) + '</li>'; }).join("") + '</ul>' +
          '</div>' +
        '</div>' +
      '</article>';
    }).join("");

    $("#projects").innerHTML =
      '<header class="section-head"><h2>Projects</h2><span class="eyebrow">' + pad(projects.length) + ' projects</span></header>' + html;

    setupLightbox(gal);
  }

  /* ---------- skills ---------- */
  function renderSkills() {
    $("#skills").innerHTML =
      '<header class="section-head"><h2>Skills</h2></header>' +
      (D.skills || []).map(function (g) {
        return '<div class="skill-group"><h3 class="eyebrow">' + esc(g.category) + '</h3><ul class="skill-grid">' +
          g.items.map(function (it) {
            var item = typeof it === "string" ? { name: it } : it;
            return '<li class="skill"><span class="skill-icon"><img src="' + esc(iconSrc(item.icon)) + '" alt="" width="40" height="40"></span><span class="skill-name">' + esc(item.name) + '</span></li>';
          }).join("") + '</ul></div>';
      }).join("");
  }

  function renderFooter() {
    $("#site-footer").innerHTML =
      '<span>© ' + new Date().getFullYear() + ' ' + esc(S.name) + '</span>' +
      '<a href="mailto:' + esc(S.email) + '">' + esc(S.email) + '</a>' +
      '<a href="' + esc(S.linkedin) + '" target="_blank" rel="noopener noreferrer">LinkedIn<span class="visually-hidden"> (opens in a new tab)</span></a>' +
      '<a class="to-top" href="#top">Back to top ↑</a>';
  }

  /* ---------- lightbox ---------- */
  function setupLightbox(items) {
    var dlg = $("#lightbox");
    if (!dlg || !items.length || typeof dlg.showModal !== "function") return;
    var im = dlg.querySelector("img"), vid = dlg.querySelector("video"), cap = dlg.querySelector("p"), cur = 0;
    function show(i) {
      cur = (i + items.length) % items.length;
      var it = items[cur];
      if (it.video && vid) {
        im.hidden = true; vid.hidden = false;
        vid.src = it.video; vid.poster = it.src || ""; vid.play && vid.play().catch(function () {});
      } else {
        if (vid) { vid.pause(); vid.removeAttribute("src"); vid.load(); vid.hidden = true; }
        im.hidden = false; im.src = it.src; im.alt = it.alt || "";
      }
      cap.textContent = it.caption || it.alt || "";
    }
    dlg.addEventListener("close", function () { if (vid) vid.pause(); });
    document.querySelectorAll(".shot").forEach(function (b) {
      b.addEventListener("click", function () { show(+b.dataset.gi); dlg.showModal(); });
    });
    dlg.querySelector(".lightbox-close").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") show(cur + 1);
      if (e.key === "ArrowLeft") show(cur - 1);
    });
  }

  /* Replace any image that fails to load (e.g. a typo in a path) with a neutral placeholder. */
  function guardImages() {
    document.querySelectorAll("img").forEach(function (im) {
      im.addEventListener("error", function onErr() {
        im.removeEventListener("error", onErr);
        im.src = im.closest(".skill-icon") ? ICON_DIR + "generic.svg" : FALLBACK_IMG;
      });
    });
  }

  /* ---------- boot ---------- */
  document.title = S.name + " · Engineering Portfolio";
  var md = document.querySelector('meta[name="description"]');
  if (md && S.metaDescription) md.setAttribute("content", S.metaDescription);

  if (document.body.getAttribute("data-page") === "home") {
    renderSidebar();
    renderProjects();
    renderSkills();
    renderFooter();
  }
  guardImages();

  /* Size each project's pictures to one shared height so they all fit on one
     centered row at the same scale (nothing is cropped). On narrow screens
     the row wraps instead of shrinking below MIN_H. */
  (function sizeMediaRows() {
    var GAP = 14;
    var rows = Array.prototype.slice.call(document.querySelectorAll(".p-media"));
    function ratio(el) {
      var w = el.naturalWidth || el.videoWidth, h = el.naturalHeight || el.videoHeight;
      return w && h ? w / h : 4 / 3;
    }
    function fit(row) {
      var media = row.querySelectorAll(".shot > img, .shot > video");
      if (!media.length) return;
      var sum = 0;
      media.forEach(function (m) { sum += ratio(m); });
      var avail = row.clientWidth - GAP * (media.length - 1) - 2 * media.length;
      var small = window.innerWidth <= 600;
      var minH = small ? 110 : 170;
      var maxH = Math.min(small ? 420 : 560, Math.round(window.innerHeight * 0.72));
      var h = Math.max(minH, Math.min(maxH, Math.floor(avail / sum)));
      row.style.setProperty("--media-h", h + "px");
    }
    function fitAll() { rows.forEach(fit); }
    rows.forEach(function (row) {
      row.querySelectorAll(".shot > img, .shot > video").forEach(function (m) {
        m.addEventListener(m.tagName === "VIDEO" ? "loadedmetadata" : "load", function () { fit(row); });
      });
    });
    var t;
    window.addEventListener("resize", function () { clearTimeout(t); t = setTimeout(fitAll, 120); });
    fitAll();
  })();

  /* Fade elements in as they scroll into view. */
  (function setupReveal() {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var els = document.querySelectorAll(".project .p-meta-row, .project .p-title, .project .p-org, .project .p-summary, .project .p-links, .project .p-media, .project .p-details, .section-head, .skill-group");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) return; // already on screen: show right away
      el.classList.add("reveal");
      io.observe(el);
    });
  })();

  // Old links to project.html?id=... jump to that project on the home page.
  if (document.body.getAttribute("data-page") === "project") {
    var id = new URLSearchParams(location.search).get("id");
    location.replace("index.html" + (id ? "#" + encodeURIComponent(id) : "#projects"));
  }
})();
