import { partners } from '../data/partners.mjs';
import { productBySlug } from '../data/products.mjs';
import { pageHero, faqList, finalCta, productCards, partnerCards, demoForm } from '../layout.mjs';

const hub = {
  path: 'partners/',
  title: 'Who It’s For | LendTrack Partner Programs',
  description: 'LendTrack partner programs for CPAs, bookkeepers, insurance agents, realtors, financial advisors and business consultants. Refer business owners and earn 30% of the commission.',
  body: (r) => `
${pageHero(r, {
  crumbs: [["Who it's for"]],
  eyebrow: "Who it's for",
  title: 'If business owners trust you, <span class="grad">you can earn with LendTrack.</span>',
  sub: 'Our best partners already have trusted conversations with business owners every week. Pick your profession to see how the program fits your work.',
})}
<section class="section">
  <div class="wrap">
    ${partnerCards(r)}
    <div class="callout">
      <div>
        <h3>Don't see your profession?</h3>
        <p>Bankers, attorneys, payroll providers, merchant services reps, equipment sales reps and franchise consultants make great partners too. If business owners trust you, let's talk.</p>
      </div>
      <a href="${r}demo/" class="btn btn-dark">Book a demo call</a>
    </div>
  </div>
</section>
${finalCta(r)}`,
};

const partnerPage = (p) => ({
  path: `partners/${p.slug}/`,
  title: `${p.title} | LendTrack`,
  description: `${p.headline} ${p.headlineAccent} Refer business owners to LendTrack and earn 30% of the commission when the deal funds. Built for ${p.audience}.`,
  body: (r) => `
${pageHero(r, {
  crumbs: [["Who it's for", 'partners/'], [p.name]],
  eyebrow: `For ${p.name}`,
  title: `${p.headline} <span class="grad">${p.headlineAccent}</span>`,
  sub: p.sub,
  ctas: `<a href="#how" class="btn btn-quiet btn-lg">See how it works</a>`,
})}

<section class="section">
  <div class="wrap">
    <p class="eyebrow">Moments you'll recognize</p>
    <h2 class="h2">You already hear these. <span class="dim">Each one is a funding deal.</span></h2>
    <div class="sit-grid">
      ${p.moments.map((m) => {
        const prod = productBySlug[m.p];
        return `
      <article class="sit">
        <p class="quote">${m.q}</p>
        <p>${prod.tagline}. ${prod.amount}, ${prod.speed.toLowerCase()}.</p>
        <a class="sit-meta" href="${r}funding/${prod.slug}/"><b>${prod.name} <span aria-hidden="true">→</span></b><span>See who it fits and what to say</span></a>
      </article>`;
      }).join('')}
    </div>
  </div>
</section>

<section class="section soft">
  <div class="wrap">
    <p class="eyebrow">Why ${p.audience} make great partners</p>
    <h2 class="h2">${p.whyHeading}</h2>
    <div class="why-grid">
      ${p.why.map((w, i) => `<div class="why"><span class="why-n">0${i + 1}</span><h3>${w.t}</h3><p>${w.d}</p></div>`).join('')}
    </div>
  </div>
</section>

<section class="section" id="how">
  <div class="wrap">
    <p class="eyebrow">How it works</p>
    <h2 class="h2">You make the introduction. <span class="dim">We do everything else.</span></h2>
    <ol class="flow three">
      <li><span class="flow-n">1</span><h3>Introduce your client</h3><p>Share your funding page or submit a client from your dashboard. It takes a few minutes.</p></li>
      <li><span class="flow-n">2</span><h3>We handle the funding</h3><p>A specialist calls within 24 hours, collects documents, underwrites and matches the right lender.</p></li>
      <li><span class="flow-n">3</span><h3>You earn 30%</h3><p>When the deal funds, 30% of the commission is yours. On average, $1,000 to $2,000 per funded deal.</p></li>
    </ol>
    <p class="note-center"><a href="${r}how-it-works/">See the full referral journey →</a></p>
  </div>
</section>

<section class="section soft">
  <div class="wrap two-col">
    <div>
      <p class="eyebrow">What to say</p>
      <h2 class="h2-sm">A natural way to bring it up</h2>
      <p class="sub">No pitch needed. Here's a line that works for ${p.audience}. Your dashboard has talk tracks for every funding product.</p>
    </div>
    <div class="talk">
      <p class="talk-k">Try this with your next client</p>
      <blockquote>"${p.talkTrack}"</blockquote>
      <button class="copy-btn" type="button" data-copy="${p.talkTrack.replace(/"/g, '&quot;')}">Copy text</button>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <p class="eyebrow">What your clients can get funded for</p>
    <h2 class="h2-sm">The products ${p.audience} refer most</h2>
    ${productCards(r, p.products)}
    <p class="note-center"><a href="${r}funding/">See all seven funding products →</a></p>
  </div>
</section>

<section class="section earnings slim">
  <div class="wrap mini-earn">
    <div>
      <p class="eyebrow light">Your earnings</p>
      <h2 class="h2-sm">30% of every commission. <span class="dim">No cap.</span></h2>
      <p class="sub">Partners earn $1,000 to $2,000 per funded deal on average. Refer as many clients as you like.</p>
    </div>
    <a href="${r}earnings/" class="btn btn-primary btn-lg">See how you get paid <span aria-hidden="true">→</span></a>
  </div>
</section>

<section class="section">
  <div class="wrap two-col">
    <div><p class="eyebrow">FAQ</p><h2 class="h2-sm">Questions ${p.audience} ask</h2></div>
    ${faqList([
      ...p.faq,
      { q: 'Do I need lending experience?', a: 'No. You make the introduction. Our in-house funding team handles the calls, documents, underwriting and closing.' },
      { q: 'What does it cost to join?', a: 'We cover membership options on your demo call, once we understand your network and goals.' },
    ])}
  </div>
</section>

<section class="section demo">
  <div class="wrap demo-grid">
    <div class="demo-copy">
      <p class="eyebrow">Book your demo call</p>
      <h2 class="h2">See how ${p.audience} earn with LendTrack</h2>
      <p class="sub">We'll tour the platform, look at the clients you already serve and show you exactly how referrals turn into commissions.</p>
      <ol class="agenda">
        <li><b>Tour the platform.</b> Your funding page, dashboard and AI fundability check.</li>
        <li><b>Map your client base.</b> Spot the clients who need capital right now.</li>
        <li><b>Find out if you qualify.</b> If it's a fit, we'll walk you through membership options.</li>
      </ol>
    </div>
    ${demoForm(r, `partners-${p.slug}`)}
  </div>
</section>

<section class="section-sm">
  <div class="wrap">
    <p class="eyebrow">Other partner programs</p>
    ${partnerCards(r, p.slug)}
  </div>
</section>`,
});

export default [hub, ...partners.map(partnerPage)];
