import { readFileSync } from 'node:fs';
import { demoForm, finalCta } from '../layout.mjs';

const tpl = readFileSync(new URL('./home.html', import.meta.url), 'utf8');

export default [{
  path: '',
  title: 'LendTrack | Get Paid for the Business Owners You Already Know',
  description: 'Refer business owners who need funding. LendTrack’s in-house team handles the calls, paperwork, underwriting and close. When the deal funds, you keep 30% of the commission. Book a demo call.',
  schema: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'LendTrack', url: 'https://lendtrack.io/', description: 'Referral partner program for business funding.' }),
  body: (r) => tpl
    .replaceAll('{{R}}', r)
    .replace('{{DEMO_FORM}}', demoForm(r, 'home'))
    .replace('{{FINAL_CTA}}', finalCta(r)),
}];
