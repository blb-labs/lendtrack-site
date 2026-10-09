import { site } from '../config.mjs';
import { crumbs } from '../layout.mjs';

// DRAFT legal copy. Have an attorney review before launch, then set
// site.legalDraftNotice to false in config.mjs.
const L = site.legal;

const legalPage = ({ slug, name, title, description, sections }) => ({
  path: `legal/${slug}/`,
  title: `${name} | LendTrack`,
  description,
  body: (r) => `
<section class="legal-hero">
  <div class="wrap narrow">
    ${crumbs(r, [['Legal'], [name]])}
    <h1>${title}</h1>
    <p class="muted">Effective date: ${L.effectiveDate}</p>
    ${site.legalDraftNotice ? '<p class="draft-note">Draft pending legal review. This page is a template and must be reviewed by an attorney before launch.</p>' : ''}
  </div>
</section>
<section class="section-sm">
  <div class="wrap narrow legal-layout">
    <nav class="toc" aria-label="On this page">
      <p>On this page</p>
      ${sections.map((s, i) => `<a href="#s${i + 1}">${s.h}</a>`).join('')}
    </nav>
    <article class="prose">
      ${sections.map((s, i) => `<h2 id="s${i + 1}">${s.h}</h2>${s.b}`).join('\n')}
      <h2>Contact us</h2>
      <p>${L.company}<br>${L.address}<br><a href="mailto:${L.email.replace(/[[\]]/g, '')}">${L.email}</a></p>
    </article>
  </div>
</section>`,
});

const privacy = legalPage({
  slug: 'privacy',
  name: 'Privacy Policy',
  title: 'Privacy Policy',
  description: 'How LendTrack collects, uses and protects personal information.',
  sections: [
    { h: 'Who we are', b: `<p>This Privacy Policy explains how ${L.company} ("LendTrack," "we," "us") collects, uses and shares personal information when you visit lendtrack.io, book a demo call, join our partner program or apply for business funding through a partner's page.</p>` },
    { h: 'Information we collect', b: `<p><b>Information you give us.</b> When you request a demo or join the partner program, we collect your name, email, phone number, profession and details about your network. Partners may also give us banking details so we can pay commissions.</p><p><b>Information about business owners.</b> When a business owner applies for funding through a partner's page or is referred to us, we collect business and contact details, funding needs and documents such as bank statements that they choose to provide.</p><p><b>Information collected automatically.</b> We collect device and usage information such as IP address, browser type, pages visited and referring links through cookies, pixels and similar technologies. See our <a href="../cookies/">Cookie Policy</a>.</p>` },
    { h: 'How we use information', b: '<ul><li>To respond to demo requests and contact you about the partner program</li><li>To operate the partner platform, track referrals and pay commissions</li><li>To evaluate funding requests and connect business owners with lending partners</li><li>To measure and improve our website and advertising</li><li>To prevent fraud, keep the platform secure and comply with the law</li></ul>' },
    { h: 'How we share information', b: '<p>We share personal information only as described here:</p><ul><li><b>Lending partners.</b> When a business owner requests funding, we share their application information with lenders and funding providers that may be able to help.</li><li><b>Service providers.</b> Companies that help us run our business, such as hosting, email delivery, SMS, scheduling, analytics and payment processing. They may only use the information to provide services to us.</li><li><b>Advertising partners.</b> Platforms such as Google and Meta may receive information through cookies and pixels to measure and personalize ads.</li><li><b>Legal reasons.</b> When required by law or to protect our rights, users or the public.</li><li><b>Business transfers.</b> As part of a merger, acquisition or sale of assets.</li></ul><p>We do not sell personal information for money. Some state laws treat sharing data through advertising cookies as a "sale" or "sharing." You can opt out as described below.</p>' },
    { h: 'Calls, texts and email', b: '<p>If you submit a form with your phone number, you agree that we may contact you by phone, text and email about the partner program, including with automated technology. Consent is not a condition of purchase. Message and data rates may apply. Reply STOP to any text to opt out, or use the unsubscribe link in any email.</p>' },
    { h: 'Your choices and rights', b: `<p>Depending on where you live, you may have the right to access, correct, delete or get a copy of your personal information, and to opt out of targeted advertising or the "sale" or "sharing" of your information. To make a request, email <a href="mailto:${L.email.replace(/[[\]]/g, '')}">${L.email}</a>. We will verify your request and respond as required by law. We won't discriminate against you for exercising your rights.</p>` },
    { h: 'Data security and retention', b: '<p>We use administrative, technical and physical safeguards to protect personal information. No system is completely secure. We keep personal information as long as needed for the purposes above, including to meet legal, accounting and reporting requirements.</p>' },
    { h: 'Children', b: '<p>Our services are for adults and businesses. We do not knowingly collect personal information from anyone under 18.</p>' },
    { h: 'Changes to this policy', b: '<p>We may update this policy from time to time. We will post the new version on this page and update the effective date.</p>' },
  ],
});

const terms = legalPage({
  slug: 'terms',
  name: 'Terms of Use',
  title: 'Terms of Use',
  description: 'The terms that govern your use of the LendTrack website.',
  sections: [
    { h: 'Agreement to these terms', b: `<p>These Terms of Use govern your use of lendtrack.io (the "Site"), operated by ${L.company} ("LendTrack"). By using the Site, you agree to these terms. If you don't agree, please don't use the Site.</p>` },
    { h: 'The partner program', b: '<p>Participation in the LendTrack partner program, including commissions, payment terms and obligations, is governed by a separate Referral Partnership Agreement and membership terms that you accept when you join. If those documents conflict with these terms, they control.</p>' },
    { h: 'Not a lender', b: '<p>LendTrack is not a lender and does not make credit decisions. All funding is provided by third-party lenders and is subject to their review and approval. Nothing on the Site is an offer or commitment to lend, and a referral is not a guarantee of funding or commission.</p>' },
    { h: 'No guarantee of earnings', b: '<p>Any earnings figures, examples or calculators on the Site are for illustration only and are not a promise of income. See our <a href="../earnings-disclaimer/">Earnings Disclaimer</a>.</p>' },
    { h: 'Informational content', b: '<p>Content on the Site is for general information only. It is not legal, tax, financial or compliance advice. Professionals should confirm with their licensing body or compliance advisor whether they may accept referral compensation.</p>' },
    { h: 'Acceptable use', b: '<p>You agree not to misuse the Site, including by submitting false information, submitting information about another person without their permission, interfering with the Site’s security or operation, or using the Site for any unlawful purpose.</p>' },
    { h: 'Intellectual property', b: '<p>The Site and its content, including text, graphics, logos and software, belong to LendTrack or its licensors and are protected by law. You may not copy or reuse them without permission.</p>' },
    { h: 'Third-party links and services', b: '<p>The Site may link to third-party websites and services, such as scheduling tools. We are not responsible for their content or practices.</p>' },
    { h: 'Disclaimers and limitation of liability', b: '<p>The Site is provided "as is" without warranties of any kind. To the fullest extent permitted by law, LendTrack will not be liable for any indirect, incidental, special or consequential damages arising from your use of the Site.</p>' },
    { h: 'Governing law', b: `<p>These terms are governed by the laws of the State of ${L.state}, without regard to its conflict of laws rules.</p>` },
    { h: 'Changes', b: '<p>We may update these terms from time to time. Continued use of the Site after changes means you accept the updated terms.</p>' },
  ],
});

const cookies = legalPage({
  slug: 'cookies',
  name: 'Cookie Policy',
  title: 'Cookie Policy',
  description: 'How LendTrack uses cookies, pixels and similar technologies.',
  sections: [
    { h: 'What cookies are', b: '<p>Cookies are small text files stored on your device when you visit a website. Pixels and similar technologies work in a similar way. They help websites work, remember your preferences and measure how people use the site.</p>' },
    { h: 'How we use them', b: '<ul><li><b>Essential.</b> Needed for the Site to work, such as remembering form progress and keeping the Site secure.</li><li><b>Analytics.</b> Help us understand which pages people visit and how they use the Site, for example Google Analytics.</li><li><b>Advertising.</b> Help us measure our ads and show relevant ads on other platforms, for example the Google Ads tag and the Meta Pixel.</li></ul>' },
    { h: 'Managing cookies', b: '<p>You can block or delete cookies in your browser settings. Blocking some cookies may affect how the Site works. You can also opt out of personalized ads through <a href="https://adssettings.google.com" rel="noopener">Google Ad Settings</a> and your <a href="https://www.facebook.com/adpreferences" rel="noopener">Meta ad preferences</a>.</p>' },
    { h: 'Changes', b: '<p>We may update this Cookie Policy as our use of these technologies changes. We will post the new version on this page.</p>' },
  ],
});

const disclaimer = legalPage({
  slug: 'earnings-disclaimer',
  name: 'Earnings Disclaimer',
  title: 'Earnings Disclaimer',
  description: 'Important information about earnings examples and income figures on LendTrack.',
  sections: [
    { h: 'No guarantee of income', b: '<p>LendTrack does not guarantee that you will earn any money through the partner program. Any earnings or income figures on this Site, including example deals, average commission figures and the earnings calculator, are illustrations only. They are not a promise or guarantee of future earnings.</p>' },
    { h: 'Results vary', b: '<p>Your results depend on many factors, including your effort, your network, your skills, market conditions, lender approval decisions and the quality of the leads you refer. Many referrals do not result in funded deals. Commissions are paid only on deals that fund, under the terms of a signed Referral Partnership Agreement.</p>' },
    { h: 'Results shown are not typical', b: '<p>Funded deal amounts and results shown on this Site are individual examples. They are not typical, not averages and should not be relied on as a prediction of your results.</p>' },
    { h: 'Average share figures', b: '<p>Where we state that partners earn $1,000 to $2,000 per funded deal on average, this refers to the partner share on deals that fund. It does not account for referrals that do not fund, and it is not an estimate of what any individual partner will earn.</p>' },
    { h: 'Business risk', b: '<p>Business lending involves risk for business owners, and any business activity involves risk for you. Make decisions based on your own judgment and, where appropriate, advice from your own legal, tax and financial professionals.</p>' },
  ],
});

export default [privacy, terms, cookies, disclaimer];
