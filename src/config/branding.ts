/**
 * Global Brand & Logo Configuration for Navadoy Seva Niketan
 * 
 * SWAP LOGO HERE:
 * Simply change `LOGO_CONFIG.url` to any image path or URL.
 * Examples:
 *   - Local SVG emblem: '/nsn-logo.svg'
 *   - Local PNG image:  '/logo.png' or '/assets/logo.png'
 *   - Neutral placeholder: '/nsn-placeholder-logo.svg'
 *   - Remote CDN / Cloud URL: 'https://example.org/nsn-official-logo.png'
 */
export const LOGO_CONFIG = {
  // Primary logo URL used in Navbar, Footer, and Receipt Modals
  url: '/nsn-logo.svg',
  
  // Neutral placeholder fallback if custom file is missing
  placeholderUrl: '/nsn-placeholder-logo.svg',

  // Descriptive alt tag for SEO & Accessibility (WCAG compliant)
  alt: 'Navadoy Seva Niketan (NSN) Official Logo',

  // Short monogram for compact badges
  shortName: 'NSN',

  // Registered entity title
  fullRegisteredName: 'Howrah Danesh Sk Lane Navaday Seva Niketan',
} as const;
