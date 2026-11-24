(function () {
  var C = CONTENT, root = document.documentElement;
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x !== undefined) e.textContent = x; return e; }
  function safe(u) { return /^(https?:\/\/|mailto:|[\w\/.#-]+$)/i.test(u || "") ? u : ""; }
  function link(x, u, c) { var a = el("a", c, x); a.href = safe(u); if (/^https?:/i.test(u)) { a.target = "_blank"; a.rel = "noopener noreferrer"; } return a; }
  function tags(l) { var u = el("ul", "tags"); (l || []).forEach(function (t) { u.appendChild(el("li", "", t)); }); return u; }
  // Simple line icons (64x64), drawn here so no outside files or libraries are needed
  var ICONS = {
    headset: "M12 38v-6a20 20 0 0 1 40 0v6 M8 36h10v14H8z M46 36h10v14H46z M52 50v2a6 6 0 0 1-6 6H36",
    wifi: "M6 26a36 36 0 0 1 52 0 M15 35a23 23 0 0 1 34 0 M24 44a10 10 0 0 1 16 0 M32 54h.01",
    server: "M10 8h44a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2z M10 26h44a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V28a2 2 0 0 1 2-2z M10 44h44a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V46a2 2 0 0 1 2-2z M46 15h.01 M46 33h.01 M46 51h.01",
    camera: "M8 20h32a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V24a4 4 0 0 1 4-4z M44 25l16-7v22l-16-7 M24 38v12 M14 54h20",
    monitor: "M12 10h40a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4z M24 54h16 M32 44v10",
    gamepad: "M18 18h28a12 12 0 0 1 12 12v8a8 8 0 0 1-14 5l-4-5H24l-4 5a8 8 0 0 1-14-5v-8a12 12 0 0 1 12-12z M22 28v10 M17 33h10 M42 29h.01 M48 35h.01"
  };
  function icon(name) {
    var NS = "http://www.w3.org/2000/svg", v = document.createElementNS(NS, "svg");
    v.setAttribute("viewBox", "0 0 64 64"); v.setAttribute("aria-hidden", "true");
    var pa = document.createElementNS(NS, "path"); pa.setAttribute("d", ICONS[name] || ICONS.monitor); v.appendChild(pa); return v;
  }

  var main = document.getElementById("main"), navItems = [];
  function section(id, title, label, cls) { var s = el("section", cls || ""); s.id = id; s.appendChild(el("h2", "", title)); main.appendChild(s); if (label) navItems.push([id, label]); return s; }

  document.title = C.name + " | " + C.title.split(",")[0].trim();
  document.getElementById("brand").textContent = C.name;
  document.getElementById("foot").textContent = "© " + new Date().getFullYear() + " " + C.name + " · " + C.location;

  // Line-art handheld (SVG), drawn after a reference. Screen is exactly 426x266 at (227,61), so images always fit.
  function buildDeck(D) {
    var NS = "http://www.w3.org/2000/svg", SX = 227, SY = 61, SW = 426, SH = 266, VIEW = "0 0 850 370";
    function s(tag, attrs, parent) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; }
    function M(x, w) { return 880 - x - (w || 0); }
    var fig = el("figure"), svg = s("svg", { viewBox: VIEW, role: "img", "aria-label": D.alt || "" }, fig);
    var defs = s("defs", {}, svg), cp = s("clipPath", { id: "scr" }, defs); s("rect", { x: SX, y: SY, width: SW, height: SH, rx: 3 }, cp);
    var gr = s("linearGradient", { id: "sheen", x1: 0, y1: 0, x2: 1, y2: 1 }, defs);
    s("stop", { offset: 0, "stop-color": "#fff", "stop-opacity": 0.14 }, gr); s("stop", { offset: 0.45, "stop-color": "#fff", "stop-opacity": 0 }, gr);
    function L(tag, a) { a["class"] = "d-line"; return s(tag, a, svg); }
    function F(tag, a) { a["class"] = "d-line d-faint"; return s(tag, a, svg); }
    // body, glass, grip contours, shoulder lines
    s("path", { d: "M78 36H802C830 36 842 64 842 110C842 200 836 262 790 316C765 342 740 348 700 348H180C140 348 115 342 90 316C44 262 38 200 38 110C38 64 50 36 78 36Z", "class": "d-body" }, svg);
    L("path", { d: "M41 150H80C96 150 102 170 102 200C102 262 130 312 166 347" }); L("path", { d: "M839 150H800C784 150 778 170 778 200C778 262 750 312 714 347" });
    F("path", { d: "M70 44H205" }); F("path", { d: "M675 44H810" });
    s("rect", { x: 208, y: 52, width: 462, height: 288, rx: 4, "class": "d-glass" }, svg);
    s("circle", { cx: 281, cy: 52, r: 2.5, "class": "d-acc" }, svg); s("circle", { cx: 600, cy: 52, r: 2.5, "class": "d-acc" }, svg);
    // left: shoulder pill, d-pad, stick, trackpad, button, grills
    L("rect", { x: 120, y: 52, width: 24, height: 11, rx: 5.5 }); L("rect", { x: M(120, 24), y: 52, width: 24, height: 11, rx: 5.5 });
    L("path", { d: "M-10 -29h20v19h19v20h-19v19h-20v-19h-19v-20h19z", transform: "translate(88 92)" });
    [168, 712].forEach(function (cx) { F("circle", { cx: cx, cy: 99, r: 34 }); L("circle", { cx: cx, cy: 99, r: 24 }); F("circle", { cx: cx, cy: 99, r: 14 }); });
    L("rect", { x: 114, y: 150, width: 84, height: 84, rx: 10 }); L("rect", { x: M(114, 84), y: 150, width: 84, height: 84, rx: 10 });
    L("rect", { x: 157, y: 250, width: 42, height: 17, rx: 8.5 }); L("rect", { x: M(157, 42), y: 250, width: 42, height: 17, rx: 8.5 });
    for (var r = 0; r < 3; r++) for (var c = 0; c < 4; c++) { L("rect", { x: 158 + c * 11, y: 283 + r * 8, width: 9, height: 4, rx: 2 }); L("rect", { x: M(158 + c * 11, 9), y: 283 + r * 8, width: 9, height: 4, rx: 2 }); }
    // right: face buttons, Xbox layout (Y top, X left, B right, A bottom in accent orange)
    [["Y", 793, 66], ["X", 770, 90], ["B", 816, 90], ["A", 793, 113]].forEach(function (b) {
      var hot = b[0] === "A";
      s("circle", { cx: b[1], cy: b[2], r: 13, "class": "d-line" + (hot ? " d-hot" : "") }, svg);
      var t = s("text", { x: b[1], y: b[2] + 0.5, "text-anchor": "middle", "dominant-baseline": "central", "class": "d-txt" + (hot ? " d-dark" : "") }, svg);
      t.textContent = b[0];
    });
    // screen
    var g = s("g", { "clip-path": "url(#scr)" }, svg);
    s("rect", { x: SX, y: SY, width: SW, height: SH, fill: "#06080c" }, g);
    var slides = (D.games || []).map(function (x) { return s("image", { href: safe(x.src), x: SX, y: SY, width: SW, height: SH, preserveAspectRatio: "xMidYMid slice", "class": "slide" }, g); });
    s("rect", { x: SX, y: SY, width: SW, height: SH, fill: "url(#sheen)" }, g);
    s("rect", { x: SX, y: SY, width: SW, height: SH, rx: 3, "class": "d-line" }, svg);
    if (slides.length) {
      var cur = -1, timer = null;
      var show = function () {
        var n; do { n = Math.floor(Math.random() * slides.length); } while (slides.length > 1 && n === cur);
        if (cur >= 0) {
          var o = slides[cur]; o.classList.remove("on"); o.classList.add("out");   // old image slides out to the right
          setTimeout(function () { o.classList.add("reset"); o.classList.remove("out"); o.getBoundingClientRect(); o.classList.remove("reset"); }, 1000);
        }
        slides[n].classList.add("on"); cur = n;                                    // new image slides in from the left
      };
      show();
      if (slides.length > 1 && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
        var start = function () { if (!timer) timer = setInterval(show, 3500); };
        var stop = function () { clearInterval(timer); timer = null; };
        start(); document.addEventListener("visibilitychange", function () { document.hidden ? stop() : start(); });
      }
    }
    return fig;
  }

  // Hero
  var hero = el("section", "hero"), txt = el("div");
  txt.appendChild(el("h1", "", C.greeting)); txt.appendChild(el("p", "role", C.title)); txt.appendChild(el("p", "lead", C.tagline));
  var b = el("div", "btns"); b.appendChild(link("See my work", "#work", "btn primary")); b.appendChild(link("Contact me", "#contact", "btn"));
  if (C.resume) b.appendChild(link("Resume", C.resume, "btn"));
  txt.appendChild(b); hero.appendChild(txt);
  if (C.deck) hero.appendChild(buildDeck(C.deck));
  main.appendChild(hero);

  // What I do
  var wd = section("do", "What I Do");
  if (C.whatIDoIntro) wd.appendChild(el("p", "intro", C.whatIDoIntro));
  var ul = el("ul", "do");
  C.whatIDo.forEach(function (w) {
    var li = el("li", "do-item"), ic = el("div", "do-ico"); ic.appendChild(icon(w.icon));
    li.appendChild(ic); li.appendChild(el("h3", "", w.title)); li.appendChild(el("p", "", w.text)); ul.appendChild(li);
  });
  wd.appendChild(ul);

  // Work
  var wk = section("work", "Work", "Work");
  var feat = C.projects.filter(function (p) { return p.featured; })[0], rest = C.projects.filter(function (p) { return p !== feat; });
  if (feat) {
    var f = el("div", "featured"); f.appendChild(el("h3", "", feat.title)); f.appendChild(el("p", "", feat.summary));
    var o = el("ul", "out"); (feat.outcomes || []).forEach(function (x) { o.appendChild(el("li", "", x)); }); f.appendChild(o); f.appendChild(tags(feat.tags));
    if (feat.link) { var w = el("div", "btns"); w.appendChild(link(feat.linkLabel || "Read more", feat.link, "btn primary")); f.appendChild(w); }
    wk.appendChild(f);
  }
  var lst = el("div", "list");
  rest.forEach(function (p) {
    var d = el("div", "item"); d.appendChild(el("h3", "", p.title)); d.appendChild(el("p", "", p.summary)); d.appendChild(tags(p.tags));
    if (p.link) { var q = el("p"); q.appendChild(link(p.linkLabel || "View", p.link)); d.appendChild(q); }
    lst.appendChild(d);
  });
  wk.appendChild(lst);

  // Experience
  var ex = section("experience", "Experience", "Experience");
  C.experience.forEach(function (j) {
    var d = el("div", "job"); d.appendChild(el("h3", "", j.role)); d.appendChild(el("p", "meta", j.org + " · " + j.period));
    var u = el("ul"); j.points.forEach(function (p) { u.appendChild(el("li", "", p)); }); d.appendChild(u); ex.appendChild(d);
  });

  // Skills
  var sk = section("skills", "Skills", "Skills"), dl = el("dl", "skills");
  C.skills.forEach(function (s) { var d = el("div"); d.appendChild(el("dt", "", s.group)); d.appendChild(el("dd", "", s.items.join(", "))); dl.appendChild(d); });
  sk.appendChild(dl);

  // About
  var ab = section("about", "About me", "About", "about");
  C.about.forEach(function (p) { ab.appendChild(el("p", "", p)); });

  // Optional sections
  if (C.certifications.length) {
    var ce = section("certifications", "Certifications"), l2 = el("div", "list");
    C.certifications.forEach(function (x) { var d = el("div", "item"); d.appendChild(el("h3", "", x.name)); d.appendChild(el("p", "", x.issuer + (x.year ? " · " + x.year : ""))); l2.appendChild(d); });
    ce.appendChild(l2);
  }
  if (C.guides.length) {
    var gd = section("guides", "Guides", "Guides"), l3 = el("div", "list");
    C.guides.forEach(function (x) { var d = el("div", "item"); d.appendChild(el("h3", "", x.title)); d.appendChild(el("p", "", x.category)); d.appendChild(tags(x.tags)); if (x.link) { var q = el("p"); q.appendChild(link("Read guide", x.link)); d.appendChild(q); } l3.appendChild(d); });
    gd.appendChild(l3);
  }
  var ed = section("education", "Education"), l4 = el("div", "list");
  C.education.forEach(function (x) { var d = el("div", "item"); d.appendChild(el("h3", "", x.name)); d.appendChild(el("p", "", x.school + " · " + x.period)); l4.appendChild(d); });
  ed.appendChild(l4);

  // Contact
  var ct = section("contact", "Say hello", "Contact", "contact");
  ct.appendChild(el("p", "", "Have a question or a role in mind? Send me a message."));
  var cb = el("div", "btns"); cb.appendChild(link("Email me", "mailto:" + C.contact.email, "btn primary"));
  if (C.contact.linkedin) cb.appendChild(link("LinkedIn", C.contact.linkedin, "btn"));
  if (C.contact.github) cb.appendChild(link("GitHub", C.contact.github, "btn"));
  ct.appendChild(cb);

  var nav = document.getElementById("nav"); navItems.forEach(function (n) { nav.appendChild(link(n[1], "#" + n[0])); });

  var btn = document.getElementById("theme");
  try { var t = localStorage.getItem("theme"); if (t) root.setAttribute("data-theme", t); } catch (e) {}
  btn.addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") === "dark" || (!root.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
    var n = dark ? "light" : "dark"; root.setAttribute("data-theme", n); try { localStorage.setItem("theme", n); } catch (e) {}
  });
})();
