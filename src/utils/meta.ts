/**
 * Compose a clean meta description that's word-boundary safe and
 * targets Google's ~155-char display cap.
 *
 * The old approach (substring(0, 90)) chopped mid-word, producing strings
 * like "DOM is 25-40 days typical. Our ca. Close in 7-21 days." across
 * every city page. That's a programmatic-doorway content signal that
 * Google penalizes hard during indexation review for new sites.
 *
 * Strategy:
 *   1. Take the first complete sentence of marketNote
 *   2. If first sentence > maxLen, truncate at the last word boundary + "..."
 *   3. Compose: "Cash offers on {City}, AZ homes. {sentence} Close in 7-21 days."
 *   4. If composed string > 160, drop the closing clause.
 */
export function buildCityMetaDescription(cityName: string, marketNote: string): string {
  const opener = `Cash offers on ${cityName}, AZ homes.`;
  const closer = ` Close in 7-21 days.`;
  const budgetFromComposed = 160 - opener.length - closer.length - 1; // -1 for joining space

  // Extract first sentence of marketNote
  let firstSentence = '';
  const periodIdx = marketNote.indexOf('. ');
  if (periodIdx > 0) {
    firstSentence = marketNote.substring(0, periodIdx + 1);
  } else {
    firstSentence = marketNote.endsWith('.') ? marketNote : marketNote + '.';
  }

  // If first sentence fits within budget, use it whole
  if (firstSentence.length <= budgetFromComposed) {
    return `${opener} ${firstSentence}${closer}`;
  }

  // Otherwise truncate at last word boundary within budget
  const truncated = firstSentence.substring(0, budgetFromComposed);
  const lastSpace = truncated.lastIndexOf(' ');
  const safeEnd = lastSpace > 0 ? firstSentence.substring(0, lastSpace) : truncated;
  // Strip any trailing punctuation we'd duplicate, then add ellipsis
  const cleaned = safeEnd.replace(/[.,;:—–-]+$/, '');
  return `${opener} ${cleaned}…${closer}`;
}
