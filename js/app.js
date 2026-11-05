/* ==========================================================================
   Site rendering. You should not need to edit this file:
   all content lives in js/data.js.
   ========================================================================== */
(function () {
  "use strict";

  var D = window.PORTFOLIO;
  if (!D) return;
  var S = D.site;
  var FALLBACK_IMG = "images/placeholder.svg";

  /* ---------- helpers ---------- */
  function esc(v) {
    return String(v == null ? "" : v)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function $(sel) { return document.querySelector(sel); }
  function pad(n) { return n < 10 ? "0" + n : String(n); }
  function visibleProjects() { return (D.projects || []).filter(function (p) { return !p.hidden; }); }
  function projectUrl(p) { return "project.html?id=" + encodeURIComponent(p.id); }
  function paras(list) { return (list || []).map(function (t) { return "<p>" + esc(t) + "</p>"; }).join(""); }
  function img(src, alt, extra) {
    return '<img src="' + esc(src) + '" alt="' + esc(alt) + '" ' + (extra || "") + ' loading="lazy" decoding="async">';
  }

  var ICON = {
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="m3.5 6 8.5 7 8.5-7"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21h-4V9.75Z"/></svg>',
    arrow: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4"/></svg>',
    back: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M14 8H3M7 4 3 8l4 4"/></svg>',
    doc: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 1.5h5.5L12.5 4.5v10h-8.5z"/><path d="M9.5 1.5v3h3"/></svg>',
    down: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M8 2v9M4 7l4 4 4-4M2.5 14h11"/></svg>',
  };

  /* ---------- shared: header + footer ---------- */
  function renderHeader(isHome) {
    var base = isHome ? "" : "index.html";
    var el = $("#site-header");
    if (!el) return;
    el.innerHTML =
      '<div class="wrap">' +
        '<a class="brand" href="' + (isHome ? "#top" : "index.html") + '">' +
          '<span class="brand-name">' + esc(S.name) + '</span>' +
          '<span class="brand-title">' + esc(S.title) + '</span>' +
        '</a>' +
        '<nav class="nav" aria-label="Main">' +
          '<ul class="nav-links" id="nav-links">' +
            ["About", "Projects", "Skills", "Resume"].map(function (n) {
              return '<li><a href="' + base + "#" + n.toLowerCase() + '">' + n + "</a></li>";
            }).join("") +
          '</ul>' +
          '<div class="nav-contact">' +
            '<a class="contact-link" href="mailto:' + esc(S.email) + '">' + ICON.mail +
              '<span class="label-long">' + esc(S.email) + '</span><span class="label-short">Email</span>' +
              '<span class="visually-hidden"> (email ' + esc(S.name) + ')</span></a>' +
            '<a class="contact-link" href="' + esc(S.linkedin) + '" target="_blank" rel="noopener noreferrer">' + ICON.linkedin +
              '<span class="label-long">LinkedIn</span><span class="label-short">LinkedIn</span>' +
              '<span class="visually-hidden"> (opens in a new tab)</span></a>' +
          '</div>' +
        '</nav>' +
        '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links">Menu</button>' +
      '</div>';

    var btn = el.querySelector(".menu-toggle");
    var links = el.querySelector("#nav-links");
    btn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
      btn.textContent = open ? "Close" : "Menu";
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.textContent = "Menu";
      }
    });
  }

  function renderFooter() {
    var el = $("#site-footer");
    if (!el) return;
    el.innerHTML =
      '<div class="wrap">' +
        '<span class="footer-name">' + esc(S.name) + '</span>' +
        '<span class="footer-links">' +
          '<a href="mailto:' + esc(S.email) + '">' + esc(S.email) + '</a>' +
          '<a href="' + esc(S.linkedin) + '" target="_blank" rel="noopener noreferrer">LinkedIn<span class="visually-hidden"> (opens in a new tab)</span></a>' +
        '</span>' +
        '<span class="footer-copy">© ' + new Date().getFullYear() + " " + esc(S.name) + '</span>' +
        '<a class="to-top" href="#top">Back to top ↑</a>' +
      '</div>';
  }

  /* Replace any image that fails to load (e.g. a typo in a path) with a neutral placeholder. */
  function guardImages(root) {
    (root || document).querySelectorAll("img").forEach(function (im) {
      im.addEventListener("error", function onErr() {
        im.removeEventListener("error", onErr);
        im.src = FALLBACK_IMG;
      });
    });
  }

  /* ---------- home page ---------- */
  function renderHome() {
    var A = D.about;
    var projects = visibleProjects();

    // About
    $("#about").innerHTML =
      '<div class="wrap">' +
        '<div class="intro-grid">' +
          '<div>' +
            '<p class="eyebrow">' + esc(S.title) + (S.location ? " · " + esc(S.location) : "") + '</p>' +
            '<h1>' + esc(A.headline) + '</h1>' +
            '<div class="intro-text">' + paras(A.intro) + '</div>' +
            '<div class="intro-actions">' +
              '<a class="btn" href="#projects">View projects ' + ICON.arrow + '</a>' +
              '<a class="btn btn-ghost" href="' + esc(S.resume) + '" target="_blank" rel="noopener">' + ICON.doc + ' Resume (PDF)</a>' +
            '</div>' +
            '<dl class="facts">' +
              (A.facts || []).map(function (f) {
                return '<dt>' + esc(f.label) + '</dt><dd>' + esc(f.value) + (f.detail ? ' <span>· ' + esc(f.detail) + '</span>' : "") + '</dd>';
              }).join("") +
            '</dl>' +
          '</div>' +
          '<figure class="portrait">' + img(A.photo, A.photoAlt, 'width="800" height="1000" loading="eager"').replace(' loading="lazy"', "") + '</figure>' +
        '</div>' +
        ((A.experience && A.experience.length) ?
          '<div class="experience">' +
            '<h2 class="eyebrow">Experience</h2>' +
            '<ol class="exp-list">' +
              A.experience.map(function (x) {
                return '<li><div class="exp-dates">' + esc(x.dates) + '</div>' +
                  '<h3 class="exp-role">' + esc(x.role) + '</h3>' +
                  '<div class="exp-org">' + esc(x.org) + '</div>' +
                  (x.note ? '<p class="exp-note">' + esc(x.note) + '</p>' : "") + '</li>';
              }).join("") +
            '</ol>' +
            (A.publication && A.publication.title ?
              '<p class="publication"><span class="eyebrow">Publication</span>' +
                (A.publication.url ? '<a href="' + esc(A.publication.url) + '" target="_blank" rel="noopener"><em>“' + esc(A.publication.title) + '”</em></a>' : '<em>“' + esc(A.publication.title) + '”</em>') +
                ' ' + esc(A.publication.venue) + '</p>' : "") +
          '</div>' : "") +
      '</div>';

    // Projects
    $("#projects").innerHTML =
      '<div class="wrap">' +
        '<div class="section-head"><div><p class="eyebrow">Selected work</p><h2>Projects</h2></div>' +
          '<span class="eyebrow">' + pad(projects.length) + ' projects</span></div>' +
        '<ul class="project-grid">' +
          projects.map(function (p, i) {
            var shown = (p.skills || []).slice(0, 6);
            var more = (p.skills || []).length - shown.length;
            var featured = i === 0 || (i === projects.length - 1 && (projects.length - 1) % 2 === 1);
            return '<li class="card' + (featured ? " featured" : "") + '">' +
              '<div class="card-media">' + img(p.cover.src, p.cover.alt, 'width="1200" height="800"' + (p.cover.position ? ' style="object-position:' + esc(p.cover.position) + '"' : "")) + '</div>' +
              '<div class="card-body">' +
                '<div class="card-meta"><span class="card-num">' + pad(i + 1) + '</span><span class="eyebrow">' + esc(p.category) + '</span>' +
                  (p.status === "in-progress" ? '<span class="badge">In progress</span>' : "") + '</div>' +
                '<h3><a href="' + projectUrl(p) + '">' + esc(p.title) + '</a></h3>' +
                '<p class="card-summary">' + esc(p.summary) + '</p>' +
                '<p class="card-role"><b>My role:</b> ' + esc(p.role) + '</p>' +
                '<ul class="tags" aria-label="Skills and tools">' + shown.map(function (s) { return '<li class="tag">' + esc(s) + '</li>'; }).join("") +
                  (more > 0 ? '<li class="tag">+' + more + '</li>' : "") + '</ul>' +
                '<span class="card-cta" aria-hidden="true">View case study ' + ICON.arrow + '</span>' +
              '</div>' +
            '</li>';
          }).join("") +
        '</ul>' +
      '</div>';

    // Skills
    $("#skills").innerHTML =
      '<div class="wrap">' +
        '<div class="section-head"><div><p class="eyebrow">Capabilities</p><h2>Technical skills</h2></div></div>' +
        '<div class="skills-grid">' +
          (D.skills || []).map(function (g) {
            return '<div class="skill-group"><h3>' + esc(g.category) + '</h3><ul>' +
              g.items.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join("") + '</ul></div>';
          }).join("") +
        '</div>' +
      '</div>';

    // Resume
    var fileName = S.resume.split("/").pop();
    $("#resume").innerHTML =
      '<div class="wrap resume-band">' +
        '<div><p class="eyebrow">Resume</p><h2 class="section-title" style="font-size:clamp(28px,3.4vw,40px)">Full experience, education, and publications.</h2>' +
          '<p>One page, PDF.</p></div>' +
        '<div class="resume-actions">' +
          '<a class="btn" href="' + esc(S.resume) + '" target="_blank" rel="noopener">' + ICON.doc + ' View resume</a>' +
          '<a class="btn btn-ghost" href="' + esc(S.resume) + '" download="' + esc(fileName) + '">' + ICON.down + ' Download PDF</a>' +
        '</div>' +
      '</div>';

    highlightNav();
  }

  function highlightNav() {
    if (!("IntersectionObserver" in window)) return;
    var links = document.querySelectorAll(".nav-links a");
    var map = {};
    links.forEach(function (a) { map[a.getAttribute("href").replace(/^.*#/, "")] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && map[en.target.id]) {
          links.forEach(function (a) { a.removeAttribute("aria-current"); });
          map[en.target.id].setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["about", "projects", "skills", "resume"].forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* ---------- project page ---------- */
  function renderProject() {
    var id = new URLSearchParams(location.search).get("id");
    var list = visibleProjects();
    var idx = list.findIndex(function (p) { return p.id === id; });
    var main = $("#main");

    if (idx < 0) {
      document.title = "Project not found · " + S.name;
      main.innerHTML = '<div class="wrap not-found"><h1>Project not found</h1><p>This project may have moved.</p><a class="btn" href="index.html#projects">See all projects</a></div>';
      return;
    }

    var p = list[idx];
    var prev = list[idx - 1], next = list[idx + 1];
    document.title = p.title + " · " + S.name;
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", p.summary);

    var sections = [];
    var n = 0;
    function section(title, body, wide) {
      n++;
      sections.push('<section class="p-section" aria-labelledby="s' + n + '"><header><span class="card-num">' + pad(n) + '</span><h2 id="s' + n + '">' + esc(title) + '</h2></header><div class="content' + (wide ? " wide" : "") + '">' + body + '</div></section>');
    }

    if (p.overview && p.overview.length) section("Overview", paras(p.overview));
    if (p.process && p.process.length) section("Design process", '<ol class="steps">' + p.process.map(function (s) {
      return '<li><div><h3>' + esc(s.title) + '</h3><p>' + esc(s.text) + '</p></div></li>';
    }).join("") + '</ol>');
    if ((p.contributions && p.contributions.length) || (p.teamOutcomes && p.teamOutcomes.length)) {
      section("My contributions", '<div class="split">' +
        '<div class="mine"><h3>What I did</h3><p class="sub">My individual responsibilities</p><ul>' + (p.contributions || []).map(function (c) { return '<li>' + esc(c) + '</li>'; }).join("") + '</ul></div>' +
        ((p.teamOutcomes && p.teamOutcomes.length) ? '<div class="team"><h3>What the team accomplished</h3><p class="sub">' + esc(p.team || "Team results") + '</p><ul>' + p.teamOutcomes.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join("") + '</ul></div>' : "") +
      '</div>', true);
    }
    if (p.skills && p.skills.length) section("Skills & tools", '<ul class="tags">' + p.skills.map(function (s) { return '<li class="tag">' + esc(s) + '</li>'; }).join("") + '</ul>');
    if (p.outcome && p.outcome.length) section("Outcome", paras(p.outcome) + (p.note ? '<p class="note">' + esc(p.note) + '</p>' : ""));
    else if (p.note) section("Note", '<p class="note">' + esc(p.note) + '</p>');
    if (p.gallery && p.gallery.length) section("Gallery", '<ul class="gallery">' + p.gallery.map(function (g, gi) {
      return '<li><figure><button type="button" data-gi="' + gi + '" aria-label="Enlarge image: ' + esc(g.caption || g.alt) + '">' + img(g.src, g.alt, 'width="800" height="600"') + '</button>' +
        (g.caption ? '<figcaption>' + esc(g.caption) + '</figcaption>' : "") + '</figure></li>';
    }).join("") + '</ul>', true);

    function meta(label, val, cls) { return val ? '<div class="' + (cls || "") + '"><dt class="eyebrow">' + label + '</dt><dd>' + esc(val) + '</dd></div>' : ""; }

    main.innerHTML =
      '<div class="wrap">' +
        '<a class="back-link" href="index.html#projects">' + ICON.back + ' All projects</a>' +
        '<header class="p-head">' +
          '<div class="card-meta"><span class="card-num">' + pad(idx + 1) + '</span><span class="eyebrow">' + esc(p.category) + '</span>' +
            (p.status === "in-progress" ? '<span class="badge">In progress</span>' : "") + '</div>' +
          '<h1>' + esc(p.title) + '</h1>' +
          '<p class="p-lead">' + esc(p.summary) + '</p>' +
          '<dl class="p-meta">' + meta("My role", p.role, "role") + meta("Organization", p.org) + meta("Timeline", p.dates) + meta("Team", p.team) + '</dl>' +
        '</header>' +
        '<figure class="p-hero">' + img(p.cover.src, p.cover.alt, 'width="1600" height="900"' + (p.cover.position ? ' style="object-position:' + esc(p.cover.position) + '"' : "")).replace(' loading="lazy"', ' fetchpriority="high"') + '</figure>' +
        ((p.highlights && p.highlights.length) ? '<ul class="p-stats">' + p.highlights.map(function (h) { return '<li><b>' + esc(h.value) + '</b><span>' + esc(h.label) + '</span></li>'; }).join("") + '</ul>' : "") +
        sections.join("") +
        '<nav class="p-nav" aria-label="More projects">' +
          (prev ? '<a class="prev" href="' + projectUrl(prev) + '"><span class="eyebrow">← Previous</span><span class="t">' + esc(prev.title) + '</span></a>' : "") +
          (next ? '<a class="next" href="' + projectUrl(next) + '"><span class="eyebrow">Next →</span><span class="t">' + esc(next.title) + '</span></a>' : "") +
        '</nav>' +
      '</div>';

    setupLightbox(p.gallery || []);
  }

  function setupLightbox(items) {
    var dlg = $("#lightbox");
    if (!dlg || !items.length || typeof dlg.showModal !== "function") return;
    var im = dlg.querySelector("img"), cap = dlg.querySelector("p"), cur = 0;
    function show(i) {
      cur = (i + items.length) % items.length;
      im.src = items[cur].src; im.alt = items[cur].alt;
      cap.textContent = items[cur].caption || "";
    }
    document.querySelectorAll(".gallery button").forEach(function (b) {
      b.addEventListener("click", function () { show(+b.dataset.gi); dlg.showModal(); });
    });
    dlg.querySelector(".lightbox-close").addEventListener("click", function () { dlg.close(); });
    dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
    dlg.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") show(cur + 1);
      if (e.key === "ArrowLeft") show(cur - 1);
    });
  }

  /* ---------- boot ---------- */
  var page = document.body.getAttribute("data-page");
  renderHeader(page === "home");
  if (page === "home") {
    document.title = S.name + " · " + S.title;
    var md = document.querySelector('meta[name="description"]');
    if (md && S.metaDescription) md.setAttribute("content", S.metaDescription);
    renderHome();
  } else if (page === "project") {
    renderProject();
  }
  renderFooter();
  guardImages();
})();
