// Site-wide settings. Edit these, then run `npm run build`.
export const site = {
  name: 'LendTrack',
  url: 'https://lendtrack.io',
  // The LendTrack app (partner login and broker plan) lives on lendtrack.ai.
  partnerLoginUrl: 'https://lendtrack.ai/',
  brokerUrl: 'https://lendtrack.ai/enroll',

  // iClosed booking calendar embedded on every demo section.
  // In iClosed, set the redirect after booking to https://lendtrack.io/demo/confirmed/
  iclosedUrl: 'https://app.iclosed.io/e/blb/lendtrack-demo-call',

  // YouTube video ID for the pre-call video on /demo/confirmed/ (the part after "v=").
  // Leave empty to hide the video block.
  preCallVideoId: '',

  // Shows a "draft, pending legal review" banner on the legal pages.
  // Set to false once your attorney has reviewed and approved them.
  legalDraftNotice: true,

  // Legal details used on the privacy, terms, cookie and disclaimer pages.
  // Replace every [BRACKETED] value before launch.
  legal: {
    company: '[COMPANY LEGAL NAME]',
    address: '[STREET ADDRESS, CITY, STATE ZIP]',
    email: '[PRIVACY@YOURDOMAIN.COM]',
    state: '[STATE]',
    effectiveDate: '[EFFECTIVE DATE]',
  },
};
