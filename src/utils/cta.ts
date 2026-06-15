import { SITE } from '../config';

// Deterministic CTA rotation — stable per page slug so rebuilds don't shuffle
export function rotateCTA(pageSlug: string): string {
  let hash = 0;
  for (let i = 0; i < pageSlug.length; i++) {
    hash = (hash * 31 + pageSlug.charCodeAt(i)) >>> 0;
  }
  return SITE.ctaBank[hash % SITE.ctaBank.length];
}
