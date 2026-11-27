(function () {
  var C = CONTENT, N = C.notes, main = document.getElementById("main");
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x !== undefined) e.textContent = x; return e; }
  function safe(u) { return /^(https?:\/\/|mailto:|[\w\/.#-]+$)/i.test(u || "") ? u : ""; }
  function tags(l) { var u = el("ul", "tags"); (l || []).forEach(function (t) { u.appendChild(el("li", "", t)); }); return u; }

  document.title = N.title + " | " + C.name;
  main.appendChild(el("h1", "", N.title));
  if (N.intro) main.appendChild(el("p", "intro", N.intro));

  var bar = el("div", "tabs"), tabs = [], panels = [];
  bar.setAttribute("role", "tablist"); main.appendChild(bar);

  N.tracks.forEach(function (t) {
    var tab = el("button", "tab", t.title); tab.type = "button"; tab.id = "tab-" + t.id;
    tab.setAttribute("role", "tab"); tab.setAttribute("aria-controls", "panel-" + t.id);
    var panel = el("section", "panel"); panel.id = "panel-" + t.id; panel.setAttribute("role", "tabpanel"); panel.setAttribute("aria-labelledby", tab.id);
    if (t.intro) panel.appendChild(el("p", "panel-intro", t.intro));
    var opened = false;
    t.topics.forEach(function (topic) {
      var d = el("details", "topic"), sm = el("summary"), n = topic.entries.length;
      sm.appendChild(el("span", "", topic.name)); sm.appendChild(el("span", "count", n ? n + (n === 1 ? " entry" : " entries") : "coming soon"));
      d.appendChild(sm);
      if (n) {
        if (!opened) { d.open = true; opened = true; }
        topic.entries.forEach(function (e) {
          var it = el("div", "entry"); it.appendChild(el("h3", "", e.title)); if (e.summary) it.appendChild(el("p", "", e.summary)); it.appendChild(tags(e.tags));
          if (e.link) { var a = el("a", "", "Read more →"); a.href = safe(e.link); it.appendChild(a); }
          d.appendChild(it);
        });
      } else { d.appendChild(el("p", "soon", "Nothing here yet. The first one is on its way.")); }
      panel.appendChild(d);
    });
    tab.addEventListener("click", function () { select(t.id, true); });
    bar.appendChild(tab); main.appendChild(panel); tabs.push([t.id, tab]); panels.push([t.id, panel]);
  });

  function select(id, push) {
    if (!tabs.some(function (x) { return x[0] === id; })) id = tabs[0][0];
    tabs.forEach(function (x) { var on = x[0] === id; x[1].setAttribute("aria-selected", on); x[1].tabIndex = on ? 0 : -1; });
    panels.forEach(function (x) { x[1].hidden = x[0] !== id; });
    if (push) { try { history.replaceState(null, "", "#" + id); } catch (e) {} }
  }
  select(location.hash.slice(1));
  window.addEventListener("hashchange", function () { select(location.hash.slice(1)); });
})();
