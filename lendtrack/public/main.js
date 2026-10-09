(function () {
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };

  // Mobile menu
  var burger = $('.burger');
  var menu = $('#mobile-menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-expanded', String(!open));
      menu.hidden = open;
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { burger.setAttribute('aria-expanded', 'false'); menu.hidden = true; }
    });
  }

  // Desktop dropdowns
  var dds = $$('.dd');
  function closeAll(except) {
    dds.forEach(function (d) {
      if (d === except) return;
      d.classList.remove('open');
      $('.dd-btn', d).setAttribute('aria-expanded', 'false');
    });
  }
  dds.forEach(function (d) {
    var btn = $('.dd-btn', d);
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = !d.classList.contains('open');
      closeAll(d);
      d.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    });
  });
  document.addEventListener('click', function (e) { if (!e.target.closest('.dd')) closeAll(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeAll(); });

  // Product tabs
  var tabs = $$('[role="tab"]');
  function select(tab) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { select(t); });
    t.addEventListener('keydown', function (e) {
      var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return;
      var next = tabs[(i + d + tabs.length) % tabs.length];
      select(next); next.focus();
    });
  });

  // Copy buttons for talk tracks
  $$('.copy-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      var done = function () { b.textContent = 'Copied ✓'; setTimeout(function () { b.textContent = 'Copy text'; }, 1800); };
      if (navigator.clipboard) navigator.clipboard.writeText(b.dataset.copy).then(done, function () {});
    });
  });

  // Earnings calculator: cumulative estimate over 12 months
  var deals = $('#deals'), share = $('#share'), svg = $('#calc-chart'), tip = $('#calc-tip');
  if (deals && share && svg) {
    var NS = 'http://www.w3.org/2000/svg';
    var W = 640, H = 220, L = 56, R = 8, T = 28, B = 28;
    var money = function (n) { return '$' + Math.round(n).toLocaleString('en-US'); };
    var short = function (n) { return n >= 1000 ? '$' + (Math.round(n / 100) / 10).toString().replace(/\.0$/, '') + 'K' : '$' + n; };
    var el = function (name, attrs) {
      var n = document.createElementNS(NS, name);
      for (var k in attrs) n.setAttribute(k, attrs[k]);
      svg.appendChild(n);
      return n;
    };
    var niceMax = function (v) {
      var steps = [5000, 10000, 20000, 25000, 50000, 75000, 100000, 150000, 200000, 250000];
      for (var i = 0; i < steps.length; i++) if (v <= steps[i]) return steps[i];
      return Math.ceil(v / 50000) * 50000;
    };
    var fill = function (input) {
      input.style.setProperty('--fill', ((input.value - input.min) / (input.max - input.min) * 100) + '%');
    };
    var render = function () {
      fill(deals); fill(share);
      var d = +deals.value, s = +share.value, monthly = d * s;
      $('#deals-out').textContent = d;
      $('#share-out').textContent = money(s);
      $('#per-month').textContent = money(monthly);
      $('#per-year').textContent = money(monthly * 12);

      while (svg.firstChild) svg.removeChild(svg.firstChild);
      var max = niceMax(monthly * 12);
      var y = function (v) { return T + (1 - v / max) * (H - T - B); };
      var slot = (W - L - R) / 12, bw = slot - 10;
      [0, max / 2, max].forEach(function (v) {
        el('line', { x1: L, x2: W - R, y1: y(v), y2: y(v), class: 'gl' });
        el('text', { x: L - 10, y: y(v) + 4, 'text-anchor': 'end', class: 'axis-t' }).textContent = short(v);
      });
      var bars = [];
      for (var m = 1; m <= 12; m++) {
        var v = monthly * m, x = L + (m - 1) * slot + 5;
        bars.push(el('rect', { x: x, y: y(v), width: bw, height: Math.max(H - B - y(v), 2), rx: 4, class: 'b' + (m === 12 ? ' last' : '') }));
        if (m === 1 || m % 3 === 0) el('text', { x: x + bw / 2, y: H - 8, 'text-anchor': 'middle', class: 'axis-t' }).textContent = 'Mo ' + m;
      }
      el('text', { x: L + 11 * slot + 5 + bw, y: y(monthly * 12) - 8, 'text-anchor': 'end', class: 'val' }).textContent = money(monthly * 12);

      bars.forEach(function (b, i) {
        var hit = el('rect', { x: L + i * slot, y: T, width: slot, height: H - T - B, class: 'hit' });
        var show = function () {
          bars.forEach(function (o) { o.classList.remove('on'); });
          b.classList.add('on');
          tip.innerHTML = '<b>Month ' + (i + 1) + '</b>Total so far<span>' + money(monthly * (i + 1)) + '</span>';
          var scale = svg.getBoundingClientRect().width / W;
          var wrapW = svg.parentNode.clientWidth;
          tip.style.left = Math.min(Math.max((L + i * slot + slot / 2) * scale, 90), wrapW - 90) + 'px';
          tip.style.top = (y(monthly * (i + 1)) * scale - 8) + 'px';
          tip.hidden = false;
        };
        hit.addEventListener('mouseenter', show);
        hit.addEventListener('touchstart', show, { passive: true });
      });
    };
    svg.addEventListener('mouseleave', function () {
      tip.hidden = true;
      $$('rect.b', svg).forEach(function (b) { b.classList.remove('on'); });
    });
    deals.addEventListener('input', render);
    share.addEventListener('input', render);
    render();
  }

  var yr = $('#yr');
  if (yr) yr.textContent = new Date().getFullYear();
})();
