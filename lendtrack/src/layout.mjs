import { site } from './config.mjs';
import { partners } from './data/partners.mjs';
import { products } from './data/products.mjs';

const chev = '<svg class="chev" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

export function nav(r) {
  const partnerLinks = partners.map((p) => `<a href="${r}partners/${p.slug}/">${p.navLabel}</a>`).join('');
  const productLinks = products.map((p) => `<a href="${r}funding/${p.slug}/"><b>${p.name}</b><small>${p.tagline}</small></a>`).join('');
  return `
<div class="announce">
  <a href="${r}demo/"><span class="live-dot" aria-hidden="true"></span>Now accepting a limited number of new partners. <u>Book a demo to see if you qualify</u> <span aria-hidden="true">→</span></a>
</div>
<header class="nav" id="top">
  <div class="wrap nav-inner">
    <a href="${r}" class="brand" aria-label="LendTrack home">
      <img src="${r}assets/logo-mark.svg" alt="" width="28" height="28">
      <span>lendtrack</span>
    </a>
    <nav class="nav-links" aria-label="Primary">
      <a href="${r}how-it-works/">How it works</a>
      <a href="${r}earnings/">Earnings</a>
      <div class="dd">
        <button class="dd-btn" aria-expanded="false" aria-haspopup="true">Who it's for ${chev}</button>
        <div class="dd-menu">
          <p class="dd-k">Partner programs</p>
          ${partnerLinks}
          <a href="${r}partners/" class="dd-all">See all partner types →</a>
        </div>
      </div>
      <div class="dd">
        <button class="dd-btn" aria-expanded="false" aria-haspopup="true">Funding ${chev}</button>
        <div class="dd-menu wide">
          <p class="dd-k">What you can refer</p>
          <div class="dd-grid">${productLinks}</div>
          <a href="${r}funding/" class="dd-all">All funding products →</a>
        </div>
      </div>
      <a href="${r}#faq">FAQ</a>
    </nav>
    <div class="nav-cta">
      <a href="${site.partnerLoginUrl}" class="link-login">Partner login</a>
      <a href="${r}demo/" class="btn btn-dark btn-sm">Book a demo</a>
    </div>
    <button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span></span><span></span></button>
  </div>
  <div class="mobile-menu" id="mobile-menu" hidden>
    <a href="${r}how-it-works/">How it works</a>
    <a href="${r}earnings/">Earnings</a>
    <details><summary>Who it's for</summary><div>${partnerLinks}<a href="${r}partners/">All partner types</a></div></details>
    <details><summary>Funding</summary><div>${products.map((p) => `<a href="${r}funding/${p.slug}/">${p.name}</a>`).join('')}<a href="${r}funding/">All funding products</a></div></details>
    <a href="${r}#faq">FAQ</a>
    <a href="${site.partnerLoginUrl}">Partner login</a>
    <a href="${r}demo/" class="btn btn-primary">Book a demo call</a>
  </div>
</header>`;
}

export function footer(r) {
  const l = site.legal;
  return `
<footer class="footer">
  <div class="wrap foot-grid">
    <div>
      <a href="${r}" class="brand"><img src="${r}assets/logo-mark.svg" alt="" width="24" height="24"><span>lendtrack</span></a>
      <p>The referral partner program for business funding. You make the introduction. We close the deal.</p>
      <a href="${r}demo/" class="btn btn-primary btn-sm foot-cta">Book a demo call</a>
    </div>
    <div>
      <h4>Program</h4>
      <a href="${r}how-it-works/">How it works</a><a href="${r}earnings/">Earnings</a><a href="${r}#results">Results</a><a href="${r}#faq">FAQ</a><a href="${r}demo/">Book a demo</a><a href="${site.partnerLoginUrl}">Partner login</a>
    </div>
    <div>
      <h4>Who it's for</h4>
      ${partners.map((p) => `<a href="${r}partners/${p.slug}/">${p.navLabel}</a>`).join('')}
      <a href="${site.brokerUrl}">Loan brokers</a>
    </div>
    <div>
      <h4>Funding</h4>
      ${products.map((p) => `<a href="${r}funding/${p.slug}/">${p.name}</a>`).join('')}
    </div>
  </div>
  <div class="wrap foot-legal">
    <p><b>Earnings disclaimer:</b> Figures on this site, including the earnings calculator and dashboard examples, are for illustration only. They are not a guarantee of income or earnings. Your actual results will vary and depend on many factors, including your effort, market conditions and the quality of the leads you refer. Business lending involves risk. <a href="${r}legal/earnings-disclaimer/">Read the full earnings disclaimer</a>.</p>
    <p>LendTrack is not a lender and does not make credit decisions. All funding is subject to lender review and approval. A referral is not a guarantee of funding or commission. Commissions are paid only on funded deals under the terms of a signed referral partnership agreement.</p>
    <div class="foot-bottom">
      <p>© <span id="yr">2026</span> ${l.company.startsWith('[') ? site.name : l.company}. All rights reserved.</p>
      <nav aria-label="Legal"><a href="${r}legal/privacy/">Privacy</a><a href="${r}legal/terms/">Terms</a><a href="${r}legal/cookies/">Cookies</a><a href="${r}legal/earnings-disclaimer/">Earnings disclaimer</a></nav>
    </div>
  </div>
</footer>`;
}

// iClosed booking calendar. Used everywhere a visitor can book a demo call.
export function demoForm(r, source = 'website', heading = 'LendTrack Demo Call') {
  return `
<div class="booking-card" data-source="${source}">
  <div class="df-head">
    <img src="${r}assets/logo-mark.svg" alt="" width="34" height="34">
    <div><b>${heading}</b><small>Pick a time that works for you</small></div>
  </div>
  <!-- iClosed inline widget begin -->
  <div class="iclosed-widget" data-url="${site.iclosedUrl}" title="LendTrack Demo Call" style="width: 100%; height: 620px"></div>
  <script type="text/javascript" src="https://app.iclosed.io/assets/widget.js" async></script>
  <!-- iClosed inline widget end -->
</div>`;
}

export function finalCta(r, h = 'Your network is already worth something. <span class="grad">Start getting paid for it.</span>', p = 'Book a demo call and see exactly how LendTrack partners earn.') {
  return `
<section class="final">
  <div class="final-bg" aria-hidden="true"></div>
  <div class="wrap final-inner">
    <h2>${h}</h2>
    <p>${p}</p>
    <a href="${r}demo/" class="btn btn-primary btn-lg">Book your demo call <span aria-hidden="true">→</span></a>
  </div>
</section>`;
}

export function crumbs(r, items) {
  const parts = [`<a href="${r}">Home</a>`, ...items.map(([label, href]) => (href ? `<a href="${r}${href}">${label}</a>` : `<span aria-current="page">${label}</span>`))];
  return `<nav class="crumbs" aria-label="Breadcrumb">${parts.join('<i aria-hidden="true">/</i>')}</nav>`;
}

export function pageHero(r, { crumbs: c, eyebrow, title, sub, ctas = true, center = false }) {
  return `
<section class="page-hero${center ? ' center' : ''}">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="wrap ph-inner">
    ${c ? crumbs(r, c) : ''}
    ${eyebrow ? `<p class="pill"><span class="pill-tag">${eyebrow}</span></p>` : ''}
    <h1>${title}</h1>
    ${sub ? `<p class="lead">${sub}</p>` : ''}
    ${ctas ? `<div class="hero-ctas"><a href="${r}demo/" class="btn btn-primary btn-lg">Book your demo call <span aria-hidden="true">→</span></a>${typeof ctas === 'string' ? ctas : ''}</div>` : ''}
  </div>
</section>`;
}

export function productCards(r, slugs) {
  const list = slugs ? slugs.map((s) => products.find((p) => p.slug === s)) : products;
  return `<div class="prod-grid">${list.map((p) => `
    <a class="prod-card" href="${r}funding/${p.slug}/">
      <span class="pc-k">${p.speed}</span>
      <h3>${p.name}</h3>
      <p class="pc-amt">${p.amount}</p>
      <p>${p.tagline}</p>
      <span class="pc-more">Learn more <span aria-hidden="true">→</span></span>
    </a>`).join('')}</div>`;
}

export function partnerCards(r, exclude) {
  return `<div class="partner-grid">${partners.filter((p) => p.slug !== exclude).map((p) => `
    <a class="partner-card" href="${r}partners/${p.slug}/">
      <h3>${p.name}</h3>
      <p>${p.headline}</p>
      <span class="pc-more">See the program <span aria-hidden="true">→</span></span>
    </a>`).join('')}</div>`;
}

export function faqList(items) {
  return `<div class="faq-list">${items.map((f) => `
    <details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('')}</div>`;
}

export function page({ path, title, description, body, noindex = false, schema = '' }) {
  const depth = path.split('/').filter(Boolean).length;
  const r = '../'.repeat(depth);
  const canonical = `${site.url}/${path}`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonical}">
  ${noindex ? '<meta name="robots" content="noindex">' : ''}
  <link rel="icon" type="image/svg+xml" href="${r}assets/logo-mark.svg">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="${canonical}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${r}styles.css">
  ${schema ? `<script type="application/ld+json">${schema}</script>` : ''}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
${nav(r)}
<main id="main">
${typeof body === 'function' ? body(r) : body}
</main>
${footer(r)}
<script src="${r}main.js" defer></script>
</body>
</html>
`;
}
