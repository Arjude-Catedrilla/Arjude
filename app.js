(function () {
  var C = CONTENT;
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function safe(url) { return /^(https?:\/\/|mailto:|[\w\/.#-]+$)/i.test(url || "") ? url : ""; }
  function link(text, url, cls) {
    var a = el("a", cls, text); a.href = safe(url);
    if (/^https?:/i.test(url)) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    return a;
  }
  function tags(list) {
    var ul = el("ul", "tags");
    (list || []).forEach(function (t) { ul.appendChild(el("li", "", t)); });
    return ul;
  }
  var main = document.getElementById("main"), navItems = [];
  function section(id, title, label) {
    var s = el("section"); s.id = id;
    s.appendChild(el("h2", "", title));
    main.appendChild(s); navItems.push([id, label || title]); return s;
  }

  document.title = C.name + " | " + C.title.split("|")[0].trim();
  document.getElementById("brand").textContent = C.name;
  document.getElementById("foot").textContent = "© " + new Date().getFullYear() + " " + C.name;

  // Hero
  var hero = el("section", "hero"); hero.appendChild(el("h1", "", C.name));
  hero.appendChild(el("p", "role", C.title));
  hero.appendChild(el("p", "", C.tagline));
  var b = el("div", "btns");
  b.appendChild(link("Contact me", "#contact", "btn primary"));
  if (C.resume) b.appendChild(link("Download resume", C.resume, "btn"));
  hero.appendChild(b); main.appendChild(hero);

  // About
  var about = section("about", "About");
  C.about.forEach(function (p) { about.appendChild(el("p", "", p)); });
  if (C.location) about.appendChild(el("p", "", "📍 " + C.location));

  // What I do
  var wid = section("services", "What I do");
  var g = el("div", "grid");
  C.whatIDo.forEach(function (w) {
    var c = el("div", "card"); c.appendChild(el("div", "icon", w.icon));
    c.appendChild(el("h3", "", w.title)); c.appendChild(el("p", "", w.text)); g.appendChild(c);
  });
  wid.appendChild(g);

  // Experience
  var ex = section("experience", "Experience");
  C.experience.forEach(function (j) {
    var d = el("div", "job"); d.appendChild(el("h3", "", j.role));
    d.appendChild(el("p", "meta", j.org + " · " + j.period));
    var ul = el("ul"); j.points.forEach(function (p) { ul.appendChild(el("li", "", p)); });
    d.appendChild(ul); ex.appendChild(d);
  });

  // Skills
  var sk = section("skills", "Skills"); g = el("div", "grid");
  C.skills.forEach(function (s) {
    var c = el("div", "card"); c.appendChild(el("h3", "", s.group)); c.appendChild(tags(s.items)); g.appendChild(c);
  });
  sk.appendChild(g);

  // Projects
  if (C.projects.length) {
    var pr = section("projects", "Projects"); g = el("div", "grid");
    C.projects.forEach(function (p) {
      var c = el("div", "card"); c.appendChild(el("h3", "", p.title)); c.appendChild(el("p", "", p.summary));
      c.appendChild(tags(p.tags));
      if (p.link) { var w = el("p"); w.style.marginTop = "12px"; w.appendChild(link(p.linkLabel || "View", p.link)); c.appendChild(w); }
      g.appendChild(c);
    });
    pr.appendChild(g);
  }

  // Guides (hidden until you add some)
  if (C.guides.length) {
    var gd = section("guides", "Guides"); g = el("div", "grid");
    C.guides.forEach(function (x) {
      var c = el("div", "card"); c.appendChild(el("h3", "", x.title));
      c.appendChild(el("p", "", x.category)); c.appendChild(tags(x.tags));
      if (x.link) { var w = el("p"); w.style.marginTop = "12px"; w.appendChild(link("Read guide", x.link)); c.appendChild(w); }
      g.appendChild(c);
    });
    gd.appendChild(g);
  }

  // Certifications and education (hidden if empty)
  if (C.certifications.length) {
    var ce = section("certifications", "Certifications"); g = el("div", "grid");
    C.certifications.forEach(function (x) {
      var c = el("div", "card"); c.appendChild(el("h3", "", x.name));
      c.appendChild(el("p", "", x.issuer + (x.year ? " · " + x.year : "")));
      if (x.link) { var w = el("p"); w.appendChild(link("Verify", x.link)); c.appendChild(w); }
      g.appendChild(c);
    });
    ce.appendChild(g);
  }
  var ed = section("education", "Education"); g = el("div", "grid");
  C.education.forEach(function (x) {
    var c = el("div", "card"); c.appendChild(el("h3", "", x.name));
    c.appendChild(el("p", "", x.school + " · " + x.period)); g.appendChild(c);
  });
  ed.appendChild(g);

  // Contact
  var ct = section("contact", "Contact");
  ct.appendChild(el("p", "", "Have a question or an opportunity? I’d like to hear from you."));
  var bb = el("div", "btns");
  bb.appendChild(link("Email me", "mailto:" + C.contact.email, "btn primary"));
  if (C.contact.linkedin) bb.appendChild(link("LinkedIn", C.contact.linkedin, "btn"));
  if (C.contact.github) bb.appendChild(link("GitHub", C.contact.github, "btn"));
  ct.appendChild(bb);

  // Nav
  var nav = document.getElementById("nav");
  navItems.forEach(function (n) { nav.appendChild(link(n[1], "#" + n[0])); });

  // Theme toggle (remembered per visitor, safe if storage is blocked)
  var root = document.documentElement, btn = document.getElementById("theme");
  try { var t = localStorage.getItem("theme"); if (t) root.setAttribute("data-theme", t); } catch (e) {}
  btn.addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") === "dark" ||
      (!root.getAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
    var next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();
