(function () {
  var C = CONTENT, root = document.documentElement;
  root.classList.add("js");
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x !== undefined) e.textContent = x; return e; }
  function safe(u) { return /^(https?:\/\/|mailto:|[\w\/.#-]+$)/i.test(u || "") ? u : ""; }
  function link(x, u, c) { var a = el("a", c, x); a.href = safe(u); if (/^https?:/i.test(u)) { a.target = "_blank"; a.rel = "noopener noreferrer"; } return a; }
  function tags(l) { var u = el("ul", "tags"); (l || []).forEach(function (t) { u.appendChild(el("li", "", t)); }); return u; }
  // Icons from Lucide (lucide.dev, ISC license), 24x24 grid. See LICENSE-lucide.txt
  var ICONS = {"headset":[["path",{"d":"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"}],["path",{"d":"M21 16v2a4 4 0 0 1-4 4h-5"}]],"wifi":[["path",{"d":"M12 20h.01"}],["path",{"d":"M2 8.82a15 15 0 0 1 20 0"}],["path",{"d":"M5 12.859a10 10 0 0 1 14 0"}],["path",{"d":"M8.5 16.429a5 5 0 0 1 7 0"}]],"server":[["rect",{"width":"20","height":"8","x":"2","y":"2","rx":"2","ry":"2"}],["rect",{"width":"20","height":"8","x":"2","y":"14","rx":"2","ry":"2"}],["line",{"x1":"6","x2":"6.01","y1":"6","y2":"6"}],["line",{"x1":"6","x2":"6.01","y1":"18","y2":"18"}]],"cctv":[["path",{"d":"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"}],["path",{"d":"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"}],["path",{"d":"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"}],["path",{"d":"M2 21v-4"}],["path",{"d":"M7 9h.01"}]],"monitor":[["rect",{"width":"20","height":"14","x":"2","y":"3","rx":"2"}],["line",{"x1":"8","x2":"16","y1":"21","y2":"21"}],["line",{"x1":"12","x2":"12","y1":"17","y2":"21"}]],"gamepad":[["line",{"x1":"6","x2":"10","y1":"11","y2":"11"}],["line",{"x1":"8","x2":"8","y1":"9","y2":"13"}],["line",{"x1":"15","x2":"15.01","y1":"12","y2":"12"}],["line",{"x1":"18","x2":"18.01","y1":"10","y2":"10"}],["path",{"d":"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]],"code":[["path",{"d":"m16 18 6-6-6-6"}],["path",{"d":"m8 6-6 6 6 6"}]],"shield":[["path",{"d":"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{"d":"m9 12 2 2 4-4"}]],"drive":[["path",{"d":"M10 16h.01"}],["path",{"d":"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{"d":"M21.946 12.013H2.054"}],["path",{"d":"M6 16h.01"}]],"wrench":[["path",{"d":"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"}]],"router":[["rect",{"width":"20","height":"8","x":"2","y":"14","rx":"2"}],["path",{"d":"M6.01 18H6"}],["path",{"d":"M10.01 18H10"}],["path",{"d":"M15 10v4"}],["path",{"d":"M17.84 7.17a4 4 0 0 0-5.66 0"}],["path",{"d":"M20.66 4.34a8 8 0 0 0-11.31 0"}]],"network":[["rect",{"x":"16","y":"16","width":"6","height":"6","rx":"1"}],["rect",{"x":"2","y":"16","width":"6","height":"6","rx":"1"}],["rect",{"x":"9","y":"2","width":"6","height":"6","rx":"1"}],["path",{"d":"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{"d":"M12 12V8"}]],"cpu":[["path",{"d":"M12 20v2"}],["path",{"d":"M12 2v2"}],["path",{"d":"M17 20v2"}],["path",{"d":"M17 2v2"}],["path",{"d":"M2 12h2"}],["path",{"d":"M2 17h2"}],["path",{"d":"M2 7h2"}],["path",{"d":"M20 12h2"}],["path",{"d":"M20 17h2"}],["path",{"d":"M20 7h2"}],["path",{"d":"M7 20v2"}],["path",{"d":"M7 2v2"}],["rect",{"x":"4","y":"4","width":"16","height":"16","rx":"2"}],["rect",{"x":"8","y":"8","width":"8","height":"8","rx":"1"}]],"cloud":[["path",{"d":"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]],"window":[["rect",{"x":"2","y":"4","width":"20","height":"16","rx":"2"}],["path",{"d":"M10 4v4"}],["path",{"d":"M2 8h20"}],["path",{"d":"M6 4v4"}]],"remote":[["path",{"d":"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{"d":"M8 21h8"}],["path",{"d":"M12 17v4"}],["path",{"d":"m17 8 5-5"}],["path",{"d":"M17 3h5v5"}]],"graphics":[["path",{"d":"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"}],["circle",{"cx":"13.5","cy":"6.5","r":".5","fill":"currentColor"}],["circle",{"cx":"17.5","cy":"10.5","r":".5","fill":"currentColor"}],["circle",{"cx":"6.5","cy":"12.5","r":".5","fill":"currentColor"}],["circle",{"cx":"8.5","cy":"7.5","r":".5","fill":"currentColor"}]]};
  function icon(name) {
    var NS = "http://www.w3.org/2000/svg", v = document.createElementNS(NS, "svg");
    v.setAttribute("viewBox", "0 0 24 24"); v.setAttribute("aria-hidden", "true");
    (ICONS[name] || ICONS.monitor).forEach(function (n) { var e = document.createElementNS(NS, n[0]); for (var k in n[1]) e.setAttribute(k, n[1][k]); v.appendChild(e); });
    return v;
  }

  var main = document.getElementById("main"), navItems = [];
  function section(id, title, label, cls) { var s = el("section", "reveal" + (cls ? " " + cls : "")); s.id = id; s.appendChild(el("h2", "", title)); main.appendChild(s); if (label) navItems.push([id, label]); return s; }

  document.title = C.name + " | " + C.title.split(",")[0].trim();
  document.getElementById("brand").textContent = C.name;
  // Footer: small LinkedIn logo (bottom left) and credits. Logo: Devicon (MIT), see LICENSE-devicon.txt
  var footer = document.querySelector("footer"); footer.textContent = "";
  var row = el("div", "foot-row"), li = link("", C.contact.linkedin, "foot-in");
  li.setAttribute("aria-label", "LinkedIn profile (opens in a new tab)"); li.title = "LinkedIn";
  var NSF = "http://www.w3.org/2000/svg", lg = document.createElementNS(NSF, "svg"), lp = document.createElementNS(NSF, "path");
  lg.setAttribute("viewBox", "0 0 128 128"); lg.setAttribute("aria-hidden", "true"); lp.setAttribute("d", "M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"); lg.appendChild(lp); li.appendChild(lg);
  var credit = el("p", "", "© " + new Date().getFullYear() + " " + C.name + " · " + C.location + " · Icons by ");
  credit.appendChild(link("Lucide", "https://lucide.dev")); credit.appendChild(document.createTextNode(" and ")); credit.appendChild(link("Devicon", "https://devicon.dev"));
  row.appendChild(li); row.appendChild(credit); footer.appendChild(row);

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
  hero.appendChild(txt);
  if (C.deck) hero.appendChild(buildDeck(C.deck));
  main.appendChild(hero);

  // What I do
  var wd = section("do", "What I Do", "What I Do");
  if (C.whatIDoIntro) wd.appendChild(el("p", "intro", C.whatIDoIntro));
  var ul = el("ul", "do");
  C.whatIDo.forEach(function (w) {
    var li = el("li", "do-item reveal"), ic = el("div", "do-ico"); li.style.transitionDelay = (ul.children.length % 4) * 90 + "ms"; ic.appendChild(icon(w.icon));
    li.appendChild(ic); li.appendChild(el("h3", "", w.title)); li.appendChild(el("p", "", w.text)); ul.appendChild(li);
  });
  wd.appendChild(ul);

  // Field Notes: two tiles that open the notes page
  var N = C.notes, nt = section("notes", N.title, N.title);
  if (N.intro) nt.appendChild(el("p", "intro", N.intro));
  var nu = el("ul", "do two");
  N.tracks.forEach(function (t) {
    var li = el("li", "do-item reveal"); li.style.transitionDelay = nu.children.length * 90 + "ms";
    var a = link("", "notes.html#" + t.id, "do-link"), ic = el("div", "do-ico"); ic.appendChild(icon(t.icon));
    a.appendChild(ic); a.appendChild(el("h3", "", t.title)); a.appendChild(el("p", "", t.teaser)); li.appendChild(a); nu.appendChild(li);
  });
  nt.appendChild(nu);

  // Certifications (optional, hidden if empty)
  if (C.certifications.length) {
    var ce = section("certifications", "Certifications"), cl = el("div", "list");
    C.certifications.forEach(function (x) { var d = el("div", "item"); d.appendChild(el("h3", "", x.name)); d.appendChild(el("p", "", x.issuer + (x.year ? " · " + x.year : ""))); cl.appendChild(d); });
    ce.appendChild(cl);
  }

  // About
  var ab = section("about", "About me", "About", "about");
  if (C.aboutImage && C.aboutImage.src) { var im = el("img", "about-img"); im.src = safe(C.aboutImage.src); im.alt = C.aboutImage.alt || ""; im.width = 200; im.height = 200; im.loading = "lazy"; ab.appendChild(im); }
  C.about.forEach(function (p) { ab.appendChild(el("p", "", p)); });
  var ob = el("div", "btns"); ob.appendChild(link("Contact me", "#contact", "btn primary")); ab.appendChild(ob);

  // Contact
  var ct = section("contact", "Say hello", "Contact", "contact");
  ct.appendChild(el("p", "sub", "Have a question or need help? Let me know."));
  ct.appendChild(link(C.contact.email, "mailto:" + C.contact.email, "big-mail"));

  // Fade sections in as they scroll into view
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });
    items.forEach(function (i) { io.observe(i); });
  } else { items.forEach(function (i) { i.classList.add("in"); }); }

  var navL = document.getElementById("navL"), navR = document.getElementById("navR"), half = Math.ceil(navItems.length / 2);
  navItems.forEach(function (n, k) { (k < half ? navL : navR).appendChild(link(n[1], n[0] === "notes" ? "notes.html" : "#" + n[0])); });

  var btn = document.getElementById("theme");
  try { var t = localStorage.getItem("theme"); if (t) root.setAttribute("data-theme", t); } catch (e) {}
  btn.addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") === "dark" || (!root.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
    var n = dark ? "light" : "dark"; root.setAttribute("data-theme", n); try { localStorage.setItem("theme", n); } catch (e) {}
  });
})();
