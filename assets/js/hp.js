/* Hound Protocol site. Plain JavaScript, no build step, works in older browsers. */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.className = doc.className.replace("no-js", "js");
  var reduce = false;
  try { reduce = matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { /* old browser */ }
  function $(s) { return document.querySelector(s); }
  function $$(s) { return [].slice.call(document.querySelectorAll(s)); }
  function esc(t) { return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  // Boot: the slash cuts in, the hound appears, then the page
  var boot = $("#boot");
  var seen = false;
  try { seen = sessionStorage.getItem("hp-boot") === "1"; sessionStorage.setItem("hp-boot", "1"); } catch (e) { /* storage blocked */ }
  setTimeout(function () { if (boot) boot.className += " done"; reveal(); }, reduce || seen ? 0 : 1500);

  // Top bar turns solid after the hero, the current section is lit in the menu
  var top = $("#top"), links = $$(".nav a");
  function onScroll() {
    var y = window.pageYOffset || doc.scrollTop;
    top.className = "top" + (y > 40 ? " solid" : "");
    var cur = "";
    $$("section.s").forEach(function (s) { if (s.getBoundingClientRect().top < window.innerHeight * 0.4) cur = s.id; });
    links.forEach(function (a) { a.className = a.getAttribute("href") === "#" + cur ? "on" : ""; });
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();

  // Phone menu
  var mb = $("#menuBtn"), nav = $("#nav");
  if (mb) mb.addEventListener("click", function () { var open = nav.className.indexOf("open") < 0; nav.className = "nav" + (open ? " open" : ""); mb.setAttribute("aria-expanded", String(open)); });
  links.forEach(function (a) { a.addEventListener("click", function () { nav.className = "nav"; }); });

  // Reveal sections as they come into view
  function reveal() {
    var items = $$(".rv");
    if (reduce || !("IntersectionObserver" in window)) { items.forEach(function (el) { el.className += " in"; }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, d = +(el.getAttribute("data-d") || 0);
        setTimeout(function () { el.className += " in"; var m = el.querySelector(".meter i"); if (m) m.style.width = m.getAttribute("data-w"); }, d);
        io.unobserve(el);
      });
    }, { threshold: 0.15 });
    items.forEach(function (el) { io.observe(el); });
  }

  // Hero mark follows the pointer a little
  var mark = $("#heroMark");
  if (mark && !reduce && window.matchMedia && matchMedia("(pointer: fine)").matches) {
    var tx = 0, ty = 0, x = 0, y = 0, raf = 0;
    window.addEventListener("mousemove", function (e) {
      tx = (e.clientX / window.innerWidth - 0.5) * 14; ty = (e.clientY / window.innerHeight - 0.5) * 14;
      if (!raf) raf = requestAnimationFrame(step);
    });
    function step() {
      x += (tx - x) * 0.08; y += (ty - y) * 0.08;
      mark.style.transform = "translate(" + x.toFixed(2) + "px," + y.toFixed(2) + "px)";
      raf = Math.abs(tx - x) + Math.abs(ty - y) > 0.05 ? requestAnimationFrame(step) : 0;
    }
  }

  // Live project data from the Joint Operations site
  var JO = location.hostname === "hound-protocol.github.io" ? "/Joint-Operations/" : "https://hound-protocol.github.io/Joint-Operations/";
  function get(path, text) {
    return new Promise(function (ok, fail) {
      var r = new XMLHttpRequest(); r.open("GET", JO + path, true); r.timeout = 8000;
      r.onload = function () { if (r.status >= 200 && r.status < 300) { try { ok(text ? r.responseText : JSON.parse(r.responseText)); } catch (e) { fail(e); } } else fail(); };
      r.onerror = r.ontimeout = fail; r.send();
    });
  }
  if (!window.Promise) return;
  get("data/config.json").then(function (c) {
    var v = $("#joVersion"); if (v) v.textContent = c.version || "–";
  }, function () { /* offline: keep the defaults */ });
  get("content/ROADMAP.md", true).then(function (md) {
    var done = (md.match(/^\s*- \[x\]/gim) || []).length, all = done + (md.match(/^\s*- \[ \]/gm) || []).length;
    if (!all) return;
    var pct = Math.round(done / all * 100), m = $("#joMeter");
    if (m) { m.setAttribute("data-w", pct + "%"); if (m.parentNode.parentNode.className.indexOf(" in") > -1 || reduce) m.style.width = pct + "%"; }
    var t = $("#joProgress"); if (t) t.textContent = done + " of " + all + " roadmap tasks done";
  }, function () {});
  get("data/team.json").then(function (t) {
    if (!t.positions || !t.positions.length) return; // older data: keep the defaults
    var list = (t.positions || []).filter(function (p) { return p.kind === "open" || (p.kind === "seat" && p.holders.length < p.need); });
    var n = $("#openNum"), ul = $("#openList");
    if (n) n.innerHTML = list.length + "<small>positions open</small>";
    if (ul) ul.innerHTML = list.slice(0, 6).map(function (p) { return "<li>" + esc(p.title) + "<span>" + esc(p.dept) + "</span></li>"; }).join("");
  }, function () {});
})();
