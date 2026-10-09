import { pageHero, faqList, finalCta, partnerCards } from '../layout.mjs';

const steps = [
  {
    when: 'Day 0',
    title: 'You make the introduction',
    you: 'Share your funding page link, hand over a flyer or submit a client you already have in mind.',
    client: 'Answers a few quick questions in minutes. Checking their options has no impact on their credit.',
    us: 'The lead lands in our pipeline, tagged to you, and shows up in your dashboard.',
  },
  {
    when: 'Within 24 hours',
    title: 'A funding specialist calls your client',
    you: 'Nothing to do. You can see the status change in your dashboard.',
    client: 'Talks through what they need the money for, how much and how fast.',
    us: 'A dedicated specialist learns the business and qualifies the deal.',
  },
  {
    when: 'Days 1 to 3',
    title: 'Documents and underwriting',
    you: 'Watch for updates. If documents are missing, we handle the follow-up.',
    client: 'Uploads bank statements through a secure link. No paperwork piles.',
    us: 'Our AI and underwriters analyze the file and match it with the right lenders.',
  },
  {
    when: 'Offers',
    title: 'Your client compares real offers',
    you: 'See when your referral is approved.',
    client: 'Reviews options with clear costs and terms, then chooses the best fit. No obligation.',
    us: 'Negotiates with lenders and explains every offer in plain language.',
  },
  {
    when: 'Funded',
    title: 'The deal funds. You get paid.',
    you: 'Your 30% share is paid by direct deposit under the terms of your partner agreement.',
    client: 'Gets the capital, often in as little as 1 to 3 business days depending on the program.',
    us: 'Closes the deal, collects the commission and pays your share.',
  },
];

export default [{
  path: 'how-it-works/',
  title: 'How It Works | LendTrack Partner Program',
  description: 'See the full LendTrack referral journey: what you do, what your client experiences and what our funding team handles, from introduction to funded deal.',
  body: (r) => `
${pageHero(r, {
  crumbs: [['How it works']],
  eyebrow: 'How it works',
  title: 'One introduction. <span class="grad">We handle the rest.</span>',
  sub: 'Here’s exactly what happens after you refer a business owner: what you do, what your client experiences and what our funding team takes care of.',
  ctas: `<a href="${r}earnings/" class="btn btn-quiet btn-lg">See how you get paid</a>`,
})}

<section class="section">
  <div class="wrap">
    <p class="eyebrow">The referral journey</p>
    <h2 class="h2">From introduction to funded deal. <span class="dim">Three points of view.</span></h2>
    <div class="lane-key" aria-hidden="true"><span class="k-you">You</span><span class="k-client">Your client</span><span class="k-us">LendTrack team</span></div>
    <ol class="journey">
      ${steps.map((s, i) => `
      <li class="j-step">
        <div class="j-head"><span class="j-n">${String(i + 1).padStart(2, '0')}</span><span class="j-when">${s.when}</span><h3>${s.title}</h3></div>
        <div class="j-lanes">
          <div class="lane you"><b>You</b><p>${s.you}</p></div>
          <div class="lane client"><b>Your client</b><p>${s.client}</p></div>
          <div class="lane us"><b>LendTrack team</b><p>${s.us}</p></div>
        </div>
      </li>`).join('')}
    </ol>
  </div>
</section>

<section class="section soft">
  <div class="wrap">
    <p class="eyebrow">Your reputation is protected</p>
    <h2 class="h2">You're putting your name on the line. <span class="dim">We take that seriously.</span></h2>
    <div class="trust-grid">
      <div class="trust"><h3>No credit impact to explore</h3><p>Your client can see their options without a hit to their credit score.</p></div>
      <div class="trust"><h3>A dedicated specialist</h3><p>One person guides your client from first call to funding. No call centers.</p></div>
      <div class="trust"><h3>Clear costs, no pressure</h3><p>Every offer is explained in plain language before your client accepts anything. There's no obligation.</p></div>
      <div class="trust"><h3>You never promise an approval</h3><p>Your job is the introduction. Lenders make the decisions, and we set honest expectations.</p></div>
      <div class="trust"><h3>You stay in the loop</h3><p>Live status in your dashboard means you're never caught off guard when your client calls.</p></div>
      <div class="trust"><h3>The right product, not the easiest one</h3><p>A full lending network means we match your client with what fits, from working capital to SBA loans.</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap two-col">
    <div>
      <p class="eyebrow">What to say</p>
      <h2 class="h2-sm">The introduction takes one sentence</h2>
      <p class="sub">You don't need a pitch. You need a natural way to bring it up. Your dashboard includes talk tracks for every funding product.</p>
    </div>
    <div class="talk">
      <p class="talk-k">A simple opener that works</p>
      <blockquote>"I work with a funding team that helps businesses like yours find capital, often in a few days. Checking your options won't affect your credit. Would it help if I introduced you?"</blockquote>
      <button class="copy-btn" type="button" data-copy="I work with a funding team that helps businesses like yours find capital, often in a few days. Checking your options won't affect your credit. Would it help if I introduced you?">Copy text</button>
    </div>
  </div>
</section>

<section class="section soft">
  <div class="wrap">
    <p class="eyebrow">Your toolkit</p>
    <h2 class="h2">Everything you need is ready on day one</h2>
    <div class="tool-grid">
      <div class="tool"><span class="tool-ico" aria-hidden="true">◎</span><h3>Your funding page</h3><p>A done-for-you page with your name on it. Every application is tracked to you.</p></div>
      <div class="tool"><span class="tool-ico" aria-hidden="true">▤</span><h3>Partner dashboard</h3><p>Page views, leads, live deal status and your commissions in one place.</p></div>
      <div class="tool"><span class="tool-ico" aria-hidden="true">✦</span><h3>AI fundability check</h3><p>Upload bank statements and see how fundable a deal is in minutes.</p></div>
      <div class="tool"><span class="tool-ico" aria-hidden="true">▣</span><h3>Flyers &amp; QR codes</h3><p>One-click branded flyers and QR codes for your desk, events and emails.</p></div>
      <div class="tool"><span class="tool-ico" aria-hidden="true">❝</span><h3>Talk tracks</h3><p>Short, natural scripts for every funding product so you always know what to say.</p></div>
      <div class="tool"><span class="tool-ico" aria-hidden="true">▶</span><h3>Training center</h3><p>Strategies for finding business owners who need capital and positioning your introduction.</p></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <p class="eyebrow">Built for your profession</p>
    <h2 class="h2-sm">See how the program works for people like you</h2>
    ${partnerCards(r)}
  </div>
</section>

<section class="section soft">
  <div class="wrap two-col">
    <div><p class="eyebrow">FAQ</p><h2 class="h2-sm">Questions about the process</h2></div>
    ${faqList([
      { q: 'What if my client doesn’t qualify?', a: 'Our specialist will tell them clearly and, where possible, suggest what would improve their chances. There’s no cost to your client for exploring options.' },
      { q: 'How fast do clients get funded?', a: 'It depends on the product. Working capital can fund in 1 to 3 business days. SBA loans take longer because they require more documentation.' },
      { q: 'Can I submit a client directly instead of sending a link?', a: 'Yes. From your dashboard you can submit a client you have in mind, and our team reaches out to them.' },
      { q: 'Will I know what’s happening with my referral?', a: 'Yes. Every referral shows its live status in your dashboard, and the funding team sends updates when something changes.' },
    ])}
  </div>
</section>

${finalCta(r, 'Ready to make your first introduction? <span class="grad">Let’s talk.</span>')}`,
}];
