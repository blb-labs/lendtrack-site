import { products } from '../data/products.mjs';
import { pageHero, finalCta, productCards } from '../layout.mjs';

const hub = {
  path: 'funding/',
  title: 'Funding Products You Can Refer | LendTrack',
  description: 'Working capital, lines of credit, equipment financing, SBA loans, 0% intro financing, invoice factoring and real estate investor loans. See what LendTrack partners can refer.',
  body: (r) => `
${pageHero(r, {
  crumbs: [['Funding']],
  eyebrow: 'What you can refer',
  title: 'A funding option for <span class="grad">almost every business owner you know.</span>',
  sub: 'You never have to pick the product. Make the introduction and our funding team matches your client with the right fit from a full lending network.',
})}
<section class="section">
  <div class="wrap">
    ${productCards(r)}
  </div>
</section>
<section class="section soft">
  <div class="wrap">
    <p class="eyebrow">At a glance</p>
    <h2 class="h2-sm">Compare funding products</h2>
    <div class="table-wrap">
      <table class="compare">
        <thead><tr><th scope="col">Product</th><th scope="col">Amount</th><th scope="col">Speed</th><th scope="col">Key requirement</th></tr></thead>
        <tbody>
          ${products.map((p) => `<tr><th scope="row"><a href="${r}funding/${p.slug}/">${p.name}</a></th><td>${p.amount}</td><td>${p.speed}</td><td>${p.requirements[0]}</td></tr>`).join('')}
        </tbody>
      </table>
    </div>
    <p class="disclaimer-sm">Products, amounts, speeds and requirements are typical ranges and can change. All funding is subject to lender review and approval.</p>
  </div>
</section>
${finalCta(r, 'Know a business owner who needs capital? <span class="grad">Let’s talk.</span>')}`,
};

const productPage = (p) => ({
  path: `funding/${p.slug}/`,
  title: `${p.name} Referrals | LendTrack`,
  description: `${p.headline}. ${p.amount}, ${p.speed.toLowerCase()}. Learn who it fits, what to listen for and what to say, then refer clients to LendTrack and earn 30% of the commission.`,
  body: (r) => `
${pageHero(r, {
  crumbs: [['Funding', 'funding/'], [p.name]],
  eyebrow: p.name,
  title: p.headline,
  sub: p.intro,
  ctas: `<a href="#what-to-say" class="btn btn-quiet btn-lg">What to say</a>`,
})}

<section class="section-sm">
  <div class="wrap">
    <dl class="proof three">
      <div><dt>${p.amount}</dt><dd>typical funding amount</dd></div>
      <div><dt>${p.speed}</dt><dd>typical timeline</dd></div>
      <div><dt>30%</dt><dd>of the commission is yours when it funds</dd></div>
    </dl>
  </div>
</section>

<section class="section tight-top">
  <div class="wrap fit-grid">
    <div class="fit-card yes">
      <h3>Great fit for</h3>
      <ul>${p.idealFor.map((x) => `<li>${x}</li>`).join('')}</ul>
    </div>
    <div class="fit-card plain">
      <h3>Typical requirements</h3>
      <ul>${p.requirements.map((x) => `<li>${x}</li>`).join('')}</ul>
    </div>
  </div>
</section>

<section class="section soft">
  <div class="wrap">
    <p class="eyebrow">Listen for</p>
    <h2 class="h2">When you hear this, <span class="dim">make the introduction.</span></h2>
    <div class="sig-grid">
      ${p.signals.map((s) => `<div class="sig-card"><span aria-hidden="true">❝</span><p>${s}</p></div>`).join('')}
    </div>
  </div>
</section>

<section class="section" id="what-to-say">
  <div class="wrap two-col">
    <div>
      <p class="eyebrow">What to say</p>
      <h2 class="h2-sm">A talk track that works</h2>
      <p class="sub">Keep it simple and honest. You never need to promise an approval or explain the terms. Our funding team does that.</p>
    </div>
    <div class="talk">
      <p class="talk-k">${p.name} talk track</p>
      <blockquote>"${p.talkTrack}"</blockquote>
      <button class="copy-btn" type="button" data-copy="${p.talkTrack.replace(/"/g, '&quot;')}">Copy text</button>
    </div>
  </div>
</section>

<section class="section soft">
  <div class="wrap story-grid">
    <div class="story">
      <p class="eyebrow">Example</p>
      <p class="story-text">${p.story}</p>
    </div>
    <div class="good-to-know">
      <h3>Good to know</h3>
      <p>${p.considerations}</p>
      <p class="muted small">All funding is subject to lender review and approval. Ranges and timelines are typical and can change.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <p class="eyebrow">Other products you can refer</p>
    ${productCards(r, products.filter((x) => x.slug !== p.slug).slice(0, 3).map((x) => x.slug))}
    <p class="note-center"><a href="${r}funding/">See all funding products →</a></p>
  </div>
</section>

${finalCta(r, 'Know a business owner who fits? <span class="grad">Start earning from it.</span>', 'Book a demo call to see how LendTrack partners refer clients and get paid.')}`,
});

export default [hub, ...products.map(productPage)];
