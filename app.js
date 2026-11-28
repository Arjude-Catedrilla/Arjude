(function () {
  var C = CONTENT, root = document.documentElement;
  root.classList.add("js");
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x !== undefined) e.textContent = x; return e; }
  function safe(u) { return /^(https?:\/\/|mailto:|[\w\/.#-]+$)/i.test(u || "") ? u : ""; }
  function link(x, u, c) { var a = el("a", c, x); a.href = safe(u); if (/^https?:/i.test(u)) { a.target = "_blank"; a.rel = "noopener noreferrer"; } return a; }
  function tags(l) { var u = el("ul", "tags"); (l || []).forEach(function (t) { u.appendChild(el("li", "", t)); }); return u; }
  // Icons from Lucide (lucide.dev, ISC license), 24x24 grid. See LICENSE-lucide.txt
  var ICONS = {"headset":[["path",{"d":"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"}],["path",{"d":"M21 16v2a4 4 0 0 1-4 4h-5"}]],"wifi":[["path",{"d":"M12 20h.01"}],["path",{"d":"M2 8.82a15 15 0 0 1 20 0"}],["path",{"d":"M5 12.859a10 10 0 0 1 14 0"}],["path",{"d":"M8.5 16.429a5 5 0 0 1 7 0"}]],"server":[["rect",{"width":"20","height":"8","x":"2","y":"2","rx":"2","ry":"2"}],["rect",{"width":"20","height":"8","x":"2","y":"14","rx":"2","ry":"2"}],["line",{"x1":"6","x2":"6.01","y1":"6","y2":"6"}],["line",{"x1":"6","x2":"6.01","y1":"18","y2":"18"}]],"cctv":[["path",{"d":"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"}],["path",{"d":"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"}],["path",{"d":"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"}],["path",{"d":"M2 21v-4"}],["path",{"d":"M7 9h.01"}]],"monitor":[["rect",{"width":"20","height":"14","x":"2","y":"3","rx":"2"}],["line",{"x1":"8","x2":"16","y1":"21","y2":"21"}],["line",{"x1":"12","x2":"12","y1":"17","y2":"21"}]],"gamepad":[["line",{"x1":"6","x2":"10","y1":"11","y2":"11"}],["line",{"x1":"8","x2":"8","y1":"9","y2":"13"}],["line",{"x1":"15","x2":"15.01","y1":"12","y2":"12"}],["line",{"x1":"18","x2":"18.01","y1":"10","y2":"10"}],["path",{"d":"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]],"code":[["path",{"d":"m18 16 4-4-4-4"}],["path",{"d":"m6 8-4 4 4 4"}],["path",{"d":"m14.5 4-5 16"}]],"shield":[["path",{"d":"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{"d":"m9 12 2 2 4-4"}]],"drive":[["path",{"d":"M10 16h.01"}],["path",{"d":"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{"d":"M21.946 12.013H2.054"}],["path",{"d":"M6 16h.01"}]],"wrench":[["path",{"d":"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"}]],"router":[["rect",{"width":"20","height":"8","x":"2","y":"14","rx":"2"}],["path",{"d":"M6.01 18H6"}],["path",{"d":"M10.01 18H10"}],["path",{"d":"M15 10v4"}],["path",{"d":"M17.84 7.17a4 4 0 0 0-5.66 0"}],["path",{"d":"M20.66 4.34a8 8 0 0 0-11.31 0"}]],"network":[["rect",{"x":"16","y":"16","width":"6","height":"6","rx":"1"}],["rect",{"x":"2","y":"16","width":"6","height":"6","rx":"1"}],["rect",{"x":"9","y":"2","width":"6","height":"6","rx":"1"}],["path",{"d":"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{"d":"M12 12V8"}]],"cpu":[["path",{"d":"M12 20v2"}],["path",{"d":"M12 2v2"}],["path",{"d":"M17 20v2"}],["path",{"d":"M17 2v2"}],["path",{"d":"M2 12h2"}],["path",{"d":"M2 17h2"}],["path",{"d":"M2 7h2"}],["path",{"d":"M20 12h2"}],["path",{"d":"M20 17h2"}],["path",{"d":"M20 7h2"}],["path",{"d":"M7 20v2"}],["path",{"d":"M7 2v2"}],["rect",{"x":"4","y":"4","width":"16","height":"16","rx":"2"}],["rect",{"x":"8","y":"8","width":"8","height":"8","rx":"1"}]],"cloud":[["path",{"d":"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]],"window":[["rect",{"x":"2","y":"4","width":"20","height":"16","rx":"2"}],["path",{"d":"M10 4v4"}],["path",{"d":"M2 8h20"}],["path",{"d":"M6 4v4"}]],"remote":[["path",{"d":"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"}],["path",{"d":"M8 21h8"}],["path",{"d":"M12 17v4"}],["path",{"d":"m17 8 5-5"}],["path",{"d":"M17 3h5v5"}]],"graphics":[["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2","ry":"2"}],["circle",{"cx":"9","cy":"9","r":"2"}],["path",{"d":"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]],"windows":{"vb":"0 0 24 24","fill":true,"items":[["path",{"d":"M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"}]]},"backup":[["ellipse",{"cx":"12","cy":"5","rx":"9","ry":"3"}],["path",{"d":"M3 12a9 3 0 0 0 5 2.69"}],["path",{"d":"M21 9.3V5"}],["path",{"d":"M3 5v14a9 3 0 0 0 6.47 2.88"}],["path",{"d":"M12 12v4h4"}],["path",{"d":"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"}]],"drone":{"vb":"0 39 330 330","fill":true,"items":[["path",{"d":"M-73 0a73 53 0 1 0 146 0a73 53 0 1 0 -146 0zM-61 0a61 41 0 1 0 122 0a61 41 0 1 0 -122 0z","fill-rule":"evenodd","transform":"translate(186 154) rotate(22)"}],["path",{"d":"M-46 0a46 32 0 1 0 92 0a46 32 0 1 0 -92 0zM-37 0a37 23 0 1 0 74 0a37 23 0 1 0 -74 0z","fill-rule":"evenodd","transform":"translate(50 207) rotate(25)"}],["path",{"d":"M-67 0a67 34 0 1 0 134 0a67 34 0 1 0 -134 0zM-58 0a58 26 0 1 0 116 0a58 26 0 1 0 -116 0z","fill-rule":"evenodd","transform":"translate(258 268) rotate(-8)"}],["path",{"d":"M-41 0a41 24 0 1 0 82 0a41 24 0 1 0 -82 0zM-33 0a33 16 0 1 0 66 0a33 16 0 1 0 -66 0z","fill-rule":"evenodd","transform":"translate(125 281) rotate(-5)"}],["path",{"d":"M148 224a24 18 0 1 0 48 0a24 18 0 1 0-48 0z"}],["path",{"d":"M183 227.1L183 166.5L173 165.5L161 224.9z"}],["path",{"d":"M151.6 214.1L52.7 203.5L51.3 212.5L148.4 233.9z"}],["path",{"d":"M189.9 223.3L248.2 262.1L243.8 269.9L180.1 240.7z"}],["path",{"d":"M166.9 240.8L129.1 278.6L122.9 273.4L153.1 229.2z"}],["path",{"d":"M-16 0a16 14 0 1 0 32 0a16 14 0 1 0 -32 0z","transform":"translate(178 164) rotate(-10)"}],["path",{"d":"M-9 0a9 7 0 1 0 18 0a9 7 0 1 0 -18 0z","transform":"translate(50 210) rotate(20)"}],["path",{"d":"M-14 0a14 10 0 1 0 28 0a14 10 0 1 0 -28 0z","transform":"translate(248 267) rotate(-8)"}],["path",{"d":"M-9 0a9 7 0 1 0 18 0a9 7 0 1 0 -18 0z","transform":"translate(124 279) rotate(0)"}]]},"mobile":[["rect",{"width":"14","height":"20","x":"5","y":"2","rx":"2","ry":"2"}],["path",{"d":"M12 18h.01"}]],"opensource":{"vb":"0 0 24 24","fill":true,"items":[["path",{"d":"M11.959.447A11.938 11.938 0 000 12.407c0 5.576 3.874 10.097 7.783 11.114.193.05.392-.05.467-.234l2.771-6.822a.396.396 0 00-.246-.528C9.365 15.47 8.53 14.32 8.48 12.4c-.024-1.828 1.5-3.45 3.561-3.447 1.931.003 3.479 1.632 3.479 3.453 0 .966-.203 1.687-.575 2.238-.371.552-.922.951-1.695 1.239a.396.396 0 00-.23.515l2.685 6.903a.396.396 0 00.465.24C20.163 22.534 24 18.062 24 12.406 24 5.804 18.603.447 11.959.447zm0 .791c6.22 0 11.25 4.997 11.25 11.168 0 5.138-3.423 9.208-6.895 10.272L13.9 16.47c.703-.308 1.302-.79 1.702-1.384.477-.708.709-1.602.709-2.68 0-2.266-1.898-4.24-4.27-4.244-2.48-.004-4.382 1.976-4.352 4.25.023 1.995.934 3.492 2.451 4.13L7.648 22.66C4.251 21.592.791 17.458.791 12.406A11.13 11.13 0 0111.959 1.238zm10.617 20.149a1.03 1.03 0 000 2.058 1.03 1.03 0 000-2.058zm0 .162c.48 0 .865.388.865.867a.856.856 0 01-.271.623l-.172-.342a.847.847 0 00-.111-.178.263.263 0 00-.114-.084.301.301 0 00.17-.117.356.356 0 00.061-.21c0-.13-.038-.227-.113-.292-.076-.064-.192-.095-.346-.095h-.41v1.343h.181v-.568h.2c.072 0 .128.015.17.045a.48.48 0 01.129.18l.171.343.157.001a.878.878 0 01-.567.216.865.865 0 010-1.732zm-.26.322h.229c.088 0 .155.018.2.059.044.04.066.099.066.177 0 .079-.022.14-.067.18-.044.04-.111.06-.2.06h-.228z"}]]},"dji":{"vb":"0 0 24 24","fill":true,"items":[["path",{"d":"M19.2 7.8a716.856 716.856 0 0 0-1.232 4.63c-.202.772-.401 1.544-.634 2.308-.226.743-.504 1.535-.91 2.21-.422.703-.969 1.253-1.726 1.604-.3.137-.615.24-.939.306-.46.09-.926.146-1.394.165-1.163.065-3.628.056-4.79.056l.713-2.64c.539 0 1.078.002 1.617-.013.52-.014 1.092-.042 1.605-.163.56-.133.984-.36 1.355-.817.337-.416.564-.935.75-1.424.34-.893.688-2.173.934-3.093.277-1.041.544-2.085.812-3.129zm4.8 0-2.072 7.68h-3.84l2.073-7.68ZM11.339 4.92h3.84c-.403 1.5-.805 2.999-1.212 4.496-.283 1.044-.565 2.088-.872 3.124-.135.452-.269.903-.445 1.342-.141.352-.3.666-.591.93a1.908 1.908 0 0 1-.734.405c-.356.112-.717.154-1.085.184-.53.043-1.06.054-1.591.063-1.991.02-3.983.02-5.974-.001a21.408 21.408 0 0 1-.954-.034 5.319 5.319 0 0 1-.632-.07 1.851 1.851 0 0 1-.412-.119c-.44-.192-.664-.575-.677-1.043 0-.263.032-.525.093-.78.076-.367.171-.728.265-1.09.179-.691.506-1.966.762-2.638.2-.526.464-1.05.966-1.382.28-.186.576-.285.901-.35.241-.05.483-.075.728-.093.41-.03.82-.04 1.23-.047.582-.01 1.165-.013 1.748-.015L8.148 7.8h1.454l-.518 1.92c-.864 0-1.728-.002-2.593.003-.252.001-.504 0-.756.016a.968.968 0 0 0-.264.042c-.113.04-.17.11-.22.213-.073.15-.115.31-.162.468a84.804 84.804 0 0 0-.503 1.857c-.035.14-.07.28-.1.42-.022.099-.04.197-.05.298-.01.11-.014.242.053.345.068.103.182.127.29.143.12.018.241.021.363.025.199.006.398.007.597.008.544.003 1.089.003 1.633 0 .25-.002.501-.004.752-.014.173-.007.343-.013.513-.054.13-.031.23-.08.318-.186.056-.071.1-.15.133-.235.088-.209.15-.425.213-.641.245-.83.466-1.665.692-2.499l.675-2.503.67-2.505h3.84z"}]]}};
  function icon(name) {
    var NS = "http://www.w3.org/2000/svg", v = document.createElementNS(NS, "svg"), spec = ICONS[name] || ICONS.monitor, vb = "0 0 24 24";
    if (!Array.isArray(spec)) { vb = spec.vb; if (spec.fill) v.setAttribute("class", "ico-fill"); spec = spec.items; }   // filled brand logo
    v.setAttribute("viewBox", vb); v.setAttribute("aria-hidden", "true");
    spec.forEach(function (n) { var e = document.createElementNS(NS, n[0]); for (var k in n[1]) e.setAttribute(k, n[1][k]); v.appendChild(e); });
    return v;
  }

  var main = document.getElementById("main"), navItems = [];
  function section(id, title, label, cls) { var s = el("section", "reveal" + (cls ? " " + cls : "")); s.id = id; s.appendChild(el("h2", "", title)); main.appendChild(s); if (label) navItems.push([id, label]); return s; }

  document.title = C.name + " | " + C.title.split(",")[0].trim();
  var brand = document.getElementById("brand"); brand.textContent = C.name.split(" ")[0]; brand.setAttribute("aria-label", C.name);
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
  var ul = el("ul", "do do-flex");
  C.whatIDo.forEach(function (w) {
    var li = el("li", "do-item reveal"), ic = el("div", "do-ico"); li.style.transitionDelay = (ul.children.length % 4) * 90 + "ms";
    ic.appendChild(icon(w.icon));
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
  if (C.aboutLinkText && C.contact.linkedin) { var lp = el("p"); lp.appendChild(document.createTextNode(C.aboutLinkText)); lp.appendChild(link(C.aboutLinkLabel || "LinkedIn", C.contact.linkedin)); ab.appendChild(lp); }
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
  navItems.forEach(function (n, k) { (k < half ? navL : navR).appendChild(link(n[1], "#" + n[0])); });

  // Theme switch (checked = dark). Starts from the saved choice, else the device setting.
  var tgl = document.getElementById("tg");
  try { var t = localStorage.getItem("theme"); if (t) root.setAttribute("data-theme", t); } catch (e) {}
  var attr = root.getAttribute("data-theme");
  tgl.checked = attr ? attr === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  tgl.addEventListener("change", function () {
    var n = tgl.checked ? "dark" : "light"; root.setAttribute("data-theme", n);
    try { localStorage.setItem("theme", n); } catch (e) {}
  });
})();
