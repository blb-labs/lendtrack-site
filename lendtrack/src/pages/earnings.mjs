import { pageHero, faqList, finalCta } from '../layout.mjs';

export default [{
  path: 'earnings/',
  title: 'How Partners Get Paid | LendTrack Earnings',
  description: 'LendTrack partners keep 30% of the commission on every referral that funds, averaging $1,000 to $2,000 per funded deal. See how commissions work and estimate your earnings.',
  body: (r) => `
${pageHero(r, {
  crumbs: [['Earnings']],
  eyebrow: 'Earnings',
  title: 'You brought the relationship. <span class="grad">You keep 30%.</span>',
  sub: 'Every time a business owner you refer gets funded, you earn 30% of the total commission. No selling, no paperwork and no cap on how many introductions you make.',
  ctas: `<a href="#calculator" class="btn btn-quiet btn-lg">Estimate your earnings</a>`,
})}

<section class="section-sm">
  <div class="wrap">
    <dl class="proof">
      <div><dt>30%</dt><dd>of the total commission on every funded referral</dd></div>
      <div><dt>$1K to $2K</dt><dd>average partner share per funded deal</dd></div>
      <div><dt>No cap</dt><dd>on how many business owners you refer</dd></div>
      <div><dt>Direct deposit</dt><dd>commissions paid straight to your bank</dd></div>
    </dl>
  </div>
</section>

<section class="section earnings" id="calculator">
  <div class="wrap">
    <div class="sec-head">
      <div>
        <p class="eyebrow light">The math</p>
        <h2 class="h2">What your introductions could add up to</h2>
      </div>
      <p class="sub">Our team does the heavy lifting: calling the client, gathering documents, underwriting and closing. Because you provided the lead, you get 30% of the total commission generated.</p>
    </div>
    <div class="math-grid">
      <div class="share-card">
        <p class="share-k">Example funded deal</p>
        <div class="share-big"><span class="grad">$1,260</span><small>your share</small></div>
        <div class="split-bar" role="img" aria-label="Commission split: 30% to you, 70% to the LendTrack funding team">
          <i class="you" style="width:30%"><span>You 30%</span></i>
          <i class="us" style="width:70%"><span>Funding team 70%</span></i>
        </div>
        <div class="share-facts">
          <div><b>You</b><span>Made one introduction</span></div>
          <div><b>Our team</b><span>Called, underwrote and closed</span></div>
        </div>
        <ul class="share-list">
          <li><span>Rivera HVAC, working capital</span><b>$70,000</b></li>
          <li><span>Total commission</span><b>$4,200</b></li>
          <li><span>Funding team (calls, underwriting, closing)</span><b>$2,940</b></li>
          <li class="hl"><span>Your 30% share</span><b>$1,260</b></li>
        </ul>
      </div>
      <figure class="calc">
        <figcaption>
          <b>Estimate your earnings</b>
          <span>Move the sliders to see what your introductions could add up to over 12 months.</span>
        </figcaption>
        <div class="calc-controls">
          <label class="ctl"><span>Funded referrals per month <output id="deals-out">2</output></span><input type="range" id="deals" min="1" max="10" step="1" value="2"></label>
          <label class="ctl"><span>Average share per deal <output id="share-out">$1,500</output></span><input type="range" id="share" min="1000" max="2000" step="250" value="1500"></label>
        </div>
        <div class="calc-totals">
          <div><span>Per month</span><strong id="per-month">$3,000</strong></div>
          <div><span>First 12 months</span><strong id="per-year">$36,000</strong></div>
        </div>
        <div class="chart-wrap">
          <svg id="calc-chart" viewBox="0 0 640 220" role="img" aria-label="Bar chart of estimated cumulative earnings by month over 12 months"></svg>
          <div class="tip" id="calc-tip" hidden></div>
        </div>
        <p class="calc-disclaimer">Illustration only. Not a promise of income. Many referrals don't fund, and your results depend on your effort, your network, market conditions and the quality of the leads you refer.</p>
      </figure>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <p class="eyebrow">From funded deal to your bank</p>
    <h2 class="h2">How a commission reaches you</h2>
    <ol class="flow">
      <li><span class="flow-n">1</span><h3>The deal funds</h3><p>Your client accepts an offer and the lender sends the money.</p></li>
      <li><span class="flow-n">2</span><h3>The commission is paid</h3><p>The lender pays the commission on the funded deal to LendTrack.</p></li>
      <li><span class="flow-n">3</span><h3>Your share is calculated</h3><p>30% of the total commission is credited to you and shown in your dashboard.</p></li>
      <li><span class="flow-n">4</span><h3>You get paid</h3><p>Your share goes to your bank by direct deposit under the terms of your partner agreement.</p></li>
    </ol>
  </div>
</section>

<section class="section soft">
  <div class="wrap">
    <div class="two-col top">
      <div>
        <p class="eyebrow">What affects your share</p>
        <h2 class="h2-sm">Bigger deals, bigger commissions</h2>
        <p class="sub">Commissions are a percentage of each funded deal, so your share depends on the deal itself.</p>
      </div>
      <div class="factor-list">
        <div class="factor"><h3>Deal size</h3><p>A $150K line of credit generates more commission than a $25K advance.</p></div>
        <div class="factor"><h3>Funding product</h3><p>Commission rates differ by product and lender. Your dashboard shows the details for every deal.</p></div>
        <div class="factor"><h3>Whether it funds</h3><p>Commissions are only paid on deals that fund. Referrals that don't fund don't earn a commission.</p></div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <p class="eyebrow">Grow your earnings</p>
    <h2 class="h2">How top partners earn more</h2>
    <div class="trust-grid">
      <div class="trust"><h3>Put your link everywhere</h3><p>Your email signature, your website, your invoices and your social profiles. Every place clients already see you.</p></div>
      <div class="trust"><h3>Ask at natural moments</h3><p>Annual reviews, tax season, renewals and planning meetings are perfect openings.</p></div>
      <div class="trust"><h3>Refer the same client again</h3><p>Growing businesses need capital more than once. There's no limit on repeat referrals.</p></div>
      <div class="trust"><h3>Use the flyers</h3><p>A flyer on your front desk or at an event works for you while you're busy.</p></div>
      <div class="trust"><h3>Think beyond your clients</h3><p>Friends, family, your gym owner, your mechanic. Every business owner you know counts.</p></div>
      <div class="trust"><h3>Stay close to your deals</h3><p>When a referral is waiting on documents, a friendly nudge from you often gets it moving.</p></div>
    </div>
  </div>
</section>

<section class="section soft">
  <div class="wrap two-col">
    <div><p class="eyebrow">FAQ</p><h2 class="h2-sm">Questions about getting paid</h2></div>
    ${faqList([
      { q: 'How much do I earn per funded deal?', a: '30% of the total commission generated. On average, that’s $1,000 to $2,000 per funded deal, depending on deal size and product.' },
      { q: 'When do I get paid?', a: 'After the deal funds and the commission is received. Exact payment timing is set out in the referral partnership agreement you sign when you join.' },
      { q: 'How do I get paid?', a: 'By direct deposit to your bank account. You add your banking details securely in your dashboard.' },
      { q: 'Is there a limit on how much I can earn?', a: 'No. There’s no cap on referrals or commissions.' },
      { q: 'Are commissions taxable?', a: 'Commission income is generally taxable. Talk to your tax professional about how to report it.' },
    ])}
  </div>
</section>

<section class="section-sm">
  <div class="wrap">
    <div class="disclaimer-box">
      <b>Earnings disclaimer</b>
      <p>The figures on this page, including the example deal and the earnings calculator, are for illustration only. They are not a guarantee of income or earnings. Your actual results will vary and depend on many factors, including your effort, your network, market conditions and the quality of the leads you refer. Many referrals do not fund. Business lending involves risk. <a href="${r}legal/earnings-disclaimer/">Read the full earnings disclaimer</a>.</p>
    </div>
  </div>
</section>

${finalCta(r, 'See exactly how much your network is worth. <span class="grad">Book a demo call.</span>', 'We’ll map the business owners you know and show you how partners earn.')}`,
}];
