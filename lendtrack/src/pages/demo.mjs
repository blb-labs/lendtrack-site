import { site } from '../config.mjs';
import { demoForm, faqList } from '../layout.mjs';

const demo = {
  path: 'demo/',
  title: 'Book Your Demo Call | LendTrack Partner Program',
  description: 'See the LendTrack partner platform live, map the business owners in your network and find out if you qualify for the partner program.',
  body: (r) => `
<section class="page-hero demo-hero">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="wrap demo-grid">
    <div class="demo-copy">
      <p class="pill"><span class="pill-tag">Partner Program</span> Limited spots each month</p>
      <h1>See LendTrack live. <span class="grad">Leave with a plan.</span></h1>
      <p class="lead">A short call with our partner team. We'll show you the platform, help you spot the business owners in your network who need capital, and find out if the program is a fit.</p>
      <ol class="agenda">
        <li><b>Tour the platform.</b> Your funding page, dashboard and AI fundability check, live.</li>
        <li><b>Map your network.</b> We'll help you spot who you know that needs capital right now.</li>
        <li><b>See how you get paid.</b> Exactly how referrals are tracked and commissions are paid.</li>
        <li><b>Find out if you qualify.</b> If it's a fit, we'll walk you through licensing options.</li>
      </ol>
    </div>
    ${demoForm(r, 'demo-page')}
  </div>
</section>

<section class="section-sm">
  <div class="wrap">
    <dl class="proof">
      <div><dt>30%</dt><dd>of the commission on every deal you refer that funds</dd></div>
      <div><dt>$1K to $5K</dt><dd>average partner share per funded deal</dd></div>
      <div><dt>24 hours</dt><dd>for a funding specialist to contact your client</dd></div>
      <div><dt>0</dt><dd>underwriting or lending experience required</dd></div>
    </dl>
  </div>
</section>

<section class="section">
  <div class="wrap two-col">
    <div>
      <p class="eyebrow">Before you book</p>
      <h2 class="h2-sm">Quick answers</h2>
      <p class="sub">Everything else, we'll cover on the call.</p>
    </div>
    ${faqList([
      { q: 'Is the demo call free?', a: 'Yes. There’s no cost and no obligation. It’s a conversation to see if the partner program is right for you.' },
      { q: 'Who will I talk to?', a: 'A member of our partner team who knows the platform and the funding products inside out.' },
      { q: 'Do I need to prepare anything?', a: 'Not much. It helps to think about the business owners you talk to regularly. After you book, we’ll send a short checklist.' },
      { q: 'What does the program cost?', a: 'We cover licensing options on the call, once we understand your network and goals. We only bring on partners we believe can succeed.' },
    ])}
  </div>
</section>`,
};

const confirmed = {
  path: 'demo/confirmed/',
  noindex: true,
  title: 'You’re Booked | LendTrack',
  description: 'Your LendTrack demo call is booked. Here’s how to get the most out of it.',
  body: (r) => `
<section class="page-hero center">
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="wrap ph-inner">
    <span class="booked-ico" aria-hidden="true">✓</span>
    <h1>You're booked. <span class="grad">Let's make this call count.</span></h1>
    <p class="lead">Your demo call is on the calendar. Take 5 minutes to go through the steps below. Partners who prepare get far more out of the call.</p>
  </div>
</section>

<section class="section-sm">
  <div class="wrap narrow">
    <ol class="prep">
      <li>
        <span class="prep-n">1</span>
        <div>
          <h3>Confirm it on your calendar</h3>
          <p>Check your inbox for the confirmation email and add the call to your calendar. Don't see it? Check your spam or promotions folder.</p>
        </div>
      </li>
      ${site.preCallVideoId ? `
      <li>
        <span class="prep-n">2</span>
        <div>
          <h3>Watch this short video before the call</h3>
          <p>It explains how the partner program works, so we can spend the call on you and your network.</p>
          <div class="video"><iframe src="https://www.youtube-nocookie.com/embed/${site.preCallVideoId}" title="LendTrack partner program overview" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        </div>
      </li>` : ''}
      <li>
        <span class="prep-n">${site.preCallVideoId ? 3 : 2}</span>
        <div>
          <h3>Make a quick list</h3>
          <p>Jot down 5 to 10 business owners you know. We'll use it on the call to show you exactly where the opportunities are.</p>
          <ul class="checks">
            <li>Clients, customers or friends who own a business</li>
            <li>Anyone who's mentioned cash flow, equipment, hiring or expansion</li>
            <li>Anyone a bank recently turned down</li>
          </ul>
        </div>
      </li>
      <li>
        <span class="prep-n">${site.preCallVideoId ? 4 : 3}</span>
        <div>
          <h3>Show up ready</h3>
          <p>Join from a computer in a quiet spot so you can see the platform on screen. Think about your goal: extra income on the side, or building a real second income stream?</p>
        </div>
      </li>
    </ol>
    <p class="resched">Can't make it? Use the reschedule link in your confirmation email so your spot goes to someone on the waitlist.</p>
  </div>
</section>

<section class="section-sm soft">
  <div class="wrap">
    <p class="eyebrow">While you wait</p>
    <h2 class="h2-sm">Get a head start</h2>
    <div class="link-cards">
      <a href="${r}how-it-works/"><b>How it works</b><span>The full referral journey, from introduction to funded deal.</span></a>
      <a href="${r}earnings/"><b>How you get paid</b><span>The 30% model and an earnings calculator.</span></a>
      <a href="${r}funding/"><b>What you can refer</b><span>Seven funding products and who each one fits.</span></a>
    </div>
  </div>
</section>`,
};

export default [demo, confirmed];
