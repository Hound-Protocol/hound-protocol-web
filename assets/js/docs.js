/* Hound Protocol documentation library. Plain JavaScript, no build step.
   Reads docs/index.json, lists the documents by group, and renders the chosen one from Markdown. */
(function () {
  "use strict";
  var doc = document.documentElement;
  doc.className = doc.className.replace("no-js", "js");
  function $(s) { return document.querySelector(s); }
  function esc(t) { return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  var list = $("#docList"), view = $("#docView"), index = null, byPath = {};
  var BOOT = $("#boot"); if (BOOT) BOOT.className += " done";

  function get(url, json) {
    return fetch(url, { cache: "no-cache" }).then(function (r) { if (!r.ok) throw new Error(r.status); return json ? r.json() : r.text(); });
  }

  /* ---------- Markdown: headings, paragraphs, lists, tables, quotes, code, links, emphasis ---------- */
  function slug(t) { return t.toLowerCase().replace(/<[^>]+>/g, "").replace(/[^\w\- ]+/g, "").trim().replace(/\s+/g, "-"); }
  function inline(t, from) {
    var codes = [];
    t = t.replace(/`([^`]+)`/g, function (_, c) { codes.push(c); return "\u0000" + (codes.length - 1) + "\u0000"; });
    t = esc(t);
    t = t.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, function (_, alt, src) { return '<img alt="' + alt + '" src="' + src + '">'; });
    t = t.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, label, href) { return link(label, href.replace(/&amp;/g, "&"), from); });
    t = t.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>").replace(/(^|[^*])\*([^*\s][^*]*)\*/g, "$1<i>$2</i>");
    t = t.replace(/\u0000(\d+)\u0000/g, function (_, i) { return "<code>" + esc(codes[+i]) + "</code>"; });
    return t;
  }
  function link(label, href, from) {
    if (/^[a-z]+:/i.test(href)) return '<a href="' + esc(href) + '" target="_blank" rel="noopener noreferrer">' + label + "</a>";
    if (href.charAt(0) === "#") return '<a href="#' + esc(currentId + ":" + href.slice(1)) + '">' + label + "</a>";
    var parts = href.split("#"), base = from.split("/").slice(0, -1), segs = parts[0].split("/");
    segs.forEach(function (s) { if (s === "..") base.pop(); else if (s && s !== ".") base.push(s); });
    var target = byPath[base.join("/")];
    if (target) return '<a href="#' + target.id + (parts[1] ? ":" + esc(parts[1]) : "") + '">' + label + "</a>";
    return '<a href="https://github.com/Hound-Protocol/hound-protocol-web/blob/main/' + esc(base.join("/")) + '" target="_blank" rel="noopener noreferrer">' + label + "</a>";
  }
  function render(md, from) {
    md = md.replace(/\r/g, "").replace(/<!--[\s\S]*?-->/g, "");
    var lines = md.split("\n"), out = [], i = 0;
    function isTableRow(l) { return /^\s*\|.*\|\s*$/.test(l); }
    while (i < lines.length) {
      var l = lines[i];
      if (/^```/.test(l)) {
        var code = []; i++;
        while (i < lines.length && !/^```/.test(lines[i])) code.push(lines[i++]);
        i++; out.push("<pre><code>" + esc(code.join("\n")) + "</code></pre>"); continue;
      }
      var h = /^(#{1,6})\s+(.*)$/.exec(l);
      if (h) { var txt = inline(h[2], from); out.push("<h" + h[1].length + ' id="' + esc(currentId + ":" + slug(h[2])) + '">' + txt + "</h" + h[1].length + ">"); i++; continue; }
      if (/^\s*(-{3,}|\*{3,})\s*$/.test(l)) { out.push("<hr>"); i++; continue; }
      if (isTableRow(l) && i + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
        var row = function (s) { return s.trim().replace(/^\||\|$/g, "").split("|").map(function (c) { return inline(c.trim(), from); }); };
        var head = row(l); i += 2; var body = [];
        while (i < lines.length && isTableRow(lines[i])) body.push(row(lines[i++]));
        out.push('<div class="tbl"><table><thead><tr>' + head.map(function (c) { return "<th>" + c + "</th>"; }).join("") + "</tr></thead><tbody>" +
          body.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</tbody></table></div>");
        continue;
      }
      if (/^>\s?/.test(l)) {
        var q = [];
        while (i < lines.length && /^>\s?/.test(lines[i])) q.push(lines[i++].replace(/^>\s?/, ""));
        out.push("<blockquote>" + render(q.join("\n"), from) + "</blockquote>"); continue;
      }
      if (/^\s*([-*]|\d+\.)\s+/.test(l)) {
        var stack = [];
        while (i < lines.length && (/^\s*([-*]|\d+\.)\s+/.test(lines[i]) || (/^\s{2,}\S/.test(lines[i]) && stack.length))) {
          var m = /^(\s*)([-*]|\d+\.)\s+(.*)$/.exec(lines[i]);
          if (!m) { out.push(" " + inline(lines[i].trim(), from)); i++; continue; }
          var depth = Math.floor(m[1].length / 2), tag = /\d/.test(m[2]) ? "ol" : "ul";
          while (stack.length > depth + 1) out.push("</li></" + stack.pop() + ">");
          if (stack.length === depth + 1) out.push("</li>");
          else while (stack.length < depth + 1) { out.push("<" + tag + ">"); stack.push(tag); }
          var task = /^\[( |x)\]\s+(.*)$/i.exec(m[3]);
          out.push("<li>" + (task ? '<span class="box' + (task[1] === " " ? "" : " on") + '"></span>' + inline(task[2], from) : inline(m[3], from)));
          i++;
        }
        while (stack.length) out.push("</li></" + stack.pop() + ">");
        continue;
      }
      if (!l.trim()) { i++; continue; }
      var p = [];
      while (i < lines.length && lines[i].trim() && !/^(#{1,6}\s|```|>|\s*([-*]|\d+\.)\s+|\s*\|)/.test(lines[i])) p.push(lines[i++]);
      if (!p.length) p.push(lines[i++]);
      out.push("<p>" + p.map(function (s) { return inline(s.replace(/\s{2,}$/, ""), from); }).join(" ") + "</p>");
    }
    return out.join("\n");
  }

  /* ---------- Library ---------- */
  var currentId = "";
  function drawList(active) {
    var groups = {}, order = [];
    index.docs.forEach(function (d) { if (!groups[d.group]) { groups[d.group] = []; order.push(d.group); } groups[d.group].push(d); });
    var html = order.map(function (g) {
      return '<div class="d-group"><h4>' + esc(g) + "</h4><ul>" + groups[g].map(function (d) {
        return '<li><a href="#' + d.id + '"' + (d.id === active ? ' class="on" aria-current="page"' : "") + ">" + esc(d.title) + "</a></li>";
      }).join("") + "</ul></div>";
    }).join("");
    html += '<div class="d-group"><h4>Projects</h4><ul>' + (index.projects || []).map(function (p) {
      return '<li><a href="' + esc(p.url) + '">' + esc(p.title) + ' <span aria-hidden="true">&#8599;</span></a><small>' + esc(p.text) + "</small></li>";
    }).join("") + "</ul></div>";
    list.innerHTML = html;
  }
  function show() {
    var hash = decodeURIComponent(location.hash.replace(/^#/, "")), id = hash.split(":")[0], anchor = hash.indexOf(":") > 0 ? hash : "";
    var d = null;
    index.docs.forEach(function (x) { if (x.id === id) d = x; });
    if (!d) d = index.docs[0];
    currentId = d.id;
    drawList(d.id);
    document.title = d.title + " · Hound Protocol";
    view.innerHTML = '<p class="note">Loading…</p>';
    get(d.path).then(function (md) {
      view.innerHTML = '<div class="d-meta"><span>' + esc(d.group) + '</span><a href="https://github.com/Hound-Protocol/hound-protocol-web/blob/main/' + esc(d.path) + '" target="_blank" rel="noopener noreferrer">Source on GitHub</a></div>' + render(md, d.path);
      var el = anchor && document.getElementById(anchor);
      if (el) el.scrollIntoView(); else window.scrollTo(0, 0);
    }).catch(function () {
      view.innerHTML = '<p class="note">This document could not be loaded. Read it on <a href="https://github.com/Hound-Protocol/hound-protocol-web/blob/main/' + esc(d.path) + '">GitHub</a>.</p>';
    });
  }
  get("docs/index.json", true).then(function (data) {
    index = data;
    index.docs.forEach(function (d) { byPath[d.path] = d; });
    window.addEventListener("hashchange", show);
    show();
  }).catch(function () {
    view.innerHTML = '<p class="note">The library could not be loaded. The documents are on <a href="https://github.com/Hound-Protocol/hound-protocol-web/tree/main/docs">GitHub</a>.</p>';
  });

  // Phone menu
  var mb = $("#menuBtn"), nav = $("#nav");
  if (mb) mb.addEventListener("click", function () { var open = nav.className.indexOf("open") < 0; nav.className = "nav" + (open ? " open" : ""); mb.setAttribute("aria-expanded", String(open)); });
  var top = $("#top"); if (top) top.className = "top solid";
})();
