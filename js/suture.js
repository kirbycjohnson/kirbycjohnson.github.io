/* ==========================================================================
   Suturing cursor: the cursor is a needle, a thread trails behind it, and
   about a second later the thread turns into stitches that slowly fade.
   Turned off on touch screens and for people who prefer reduced motion.
   ========================================================================== */
(function () {
  "use strict";
  var fine = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var calm = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine || calm) return;

  var SPACING = 16;   // px between stitches
  var DELAY = 650;    // ms before thread becomes a stitch
  var LIFE = 3600;    // ms a stitch stays on the page
  var FADE = 900;     // ms of fade-in / fade-out
  var STITCH = 5;     // half length of a stitch, px
  var NAVY = "20,33,61", WHITE = "255,255,255";

  document.documentElement.classList.add("needle-cursor");

  var cv = document.createElement("canvas");
  cv.className = "suture-layer";
  cv.setAttribute("aria-hidden", "true");
  document.body.appendChild(cv);
  var ctx = cv.getContext("2d");
  var side = document.getElementById("sidebar");
  var dpr = 1;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.round(innerWidth * dpr);
    cv.height = Math.round(innerHeight * dpr);
    cv.style.width = innerWidth + "px";
    cv.style.height = innerHeight + "px";
  }
  resize();
  window.addEventListener("resize", resize);

  var path = [];      // recent cursor points (page coordinates) for the thread
  var stitches = [];  // {x, y, a, t}
  var last = null, carry = 0, running = false;

  function onMove(e) {
    var p = { x: e.pageX, y: e.pageY, t: performance.now() };
    if (last) {
      var dx = p.x - last.x, dy = p.y - last.y, d = Math.sqrt(dx * dx + dy * dy);
      if (d < 3) return;
      var a = Math.atan2(dy, dx);
      // Drop a stitch every SPACING px along the path.
      var s = SPACING - carry;
      while (s <= d) {
        var k = s / d;
        stitches.push({ x: last.x + dx * k, y: last.y + dy * k, a: a, t: last.t + (p.t - last.t) * k });
        s += SPACING;
      }
      carry = d - (s - SPACING);
    }
    path.push(p);
    last = p;
    if (!running) { running = true; requestAnimationFrame(draw); }
  }

  function colorAt(x, y) {
    if (!side) return NAVY;
    var r = side.getBoundingClientRect();
    return (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) ? WHITE : NAVY;
  }

  function draw() {
    var now = performance.now(), sx = window.scrollX, sy = window.scrollY;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.lineCap = "round";

    while (path.length > 1 && now - path[1].t > DELAY) path.shift();
    while (stitches.length && now - stitches[0].t > LIFE) stitches.shift();

    // Faint closed incision line running through the stitches.
    ctx.lineWidth = 1;
    for (var j = 1; j < stitches.length; j++) {
      var s0 = stitches[j - 1], s1 = stitches[j], ag = now - s1.t;
      if (ag < DELAY || s1.t - s0.t > 250) continue;
      var op = Math.min(1, (ag - DELAY) / 220) * Math.min(1, (LIFE - ag) / FADE);
      ctx.strokeStyle = "rgba(" + colorAt(s1.x - sx, s1.y - sy) + "," + (0.3 * op).toFixed(3) + ")";
      ctx.beginPath();
      ctx.moveTo(s0.x - sx, s0.y - sy);
      ctx.lineTo(s1.x - sx, s1.y - sy);
      ctx.stroke();
    }

    // Stitches: short crossings perpendicular to the direction of travel.
    ctx.lineWidth = 1.7;
    stitches.forEach(function (st) {
      var age = now - st.t;
      if (age < DELAY) return;
      var o = Math.min(1, (age - DELAY) / 220) * Math.min(1, (LIFE - age) / FADE);
      var x = st.x - sx, y = st.y - sy;
      var nx = -Math.sin(st.a) * STITCH, ny = Math.cos(st.a) * STITCH;
      var tx = Math.cos(st.a) * 1.6, ty = Math.sin(st.a) * 1.6; // slight slant, like a real suture
      ctx.strokeStyle = "rgba(" + colorAt(x, y) + "," + (0.85 * o).toFixed(3) + ")";
      ctx.beginPath();
      ctx.moveTo(x - nx - tx, y - ny - ty);
      ctx.lineTo(x + nx + tx, y + ny + ty);
      ctx.stroke();
    });

    // Thread: the last moment of movement, trailing behind the needle.
    if (path.length > 1) {
      ctx.lineWidth = 1.1;
      for (var i = 1; i < path.length; i++) {
        var p0 = path[i - 1], p1 = path[i];
        var o2 = 1 - Math.min(1, (now - p1.t) / DELAY);
        ctx.strokeStyle = "rgba(" + colorAt(p1.x - sx, p1.y - sy) + "," + (0.55 * o2).toFixed(3) + ")";
        ctx.beginPath();
        ctx.moveTo(p0.x - sx, p0.y - sy);
        ctx.lineTo(p1.x - sx, p1.y - sy);
        ctx.stroke();
      }
    }

    if (stitches.length || path.length > 1) requestAnimationFrame(draw);
    else { running = false; ctx.clearRect(0, 0, innerWidth, innerHeight); }
  }

  document.addEventListener("mousemove", onMove, { passive: true });
  document.addEventListener("mouseleave", function () { last = null; carry = 0; });
  window.addEventListener("scroll", function () { if (!running && stitches.length) { running = true; requestAnimationFrame(draw); } }, { passive: true });
})();
