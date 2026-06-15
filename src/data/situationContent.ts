// Each sub-vertical page gets unique long-form content.
// STATUS: STUBBED — needs niche-specific content from writer agents.

export interface SituationContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whenToCall: string[];
  process: { step: string; detail: string }[];
  costs: string;
  faqs: { q: string; a: string }[];
  closingPara: string;
  // Optional extended sections
  azContext?: string;
  realScenario?: { title: string; body: string }[];
  whatToWatchOut?: string[];
  comparison?: string;
}

export const SITUATIONS: Record<string, SituationContent> = {
  "burst-pipe": {
    metaTitle: "Burst Pipe Emergency in Arizona | Coyote 24 Plumbing",
    metaDescription: "TODO: 140-160 char meta description for burst pipe service.",
    h1: "Burst Pipe Emergency in Arizona",
    intro: "TODO: 100-150 word intro for burst pipe. What it is, who needs it, what makes our approach different.",
    whenToCall: [
      "TODO: 5-7 specific scenarios where someone needs burst pipe",
    ],
    process: [
      { step: "Phone call", detail: "TODO: what happens on the initial call" },
      { step: "Assessment", detail: "TODO: walk-through / inspection / diagnostic" },
      { step: "Written quote", detail: "TODO: when and how the quote is delivered" },
      { step: "Work + completion", detail: "TODO: typical timeline + completion criteria" },
    ],
    costs: "TODO: 50-80 words on pricing transparency. What's included, what's not, when ranges apply, how AZ regulations affect price.",
    faqs: [
      { q: "TODO: most common question we get about burst pipe", a: "TODO: 80-120 word answer." },
    ],
    closingPara: "TODO: 50-80 word call-to-action close. Phone number (602) 555-0100, what happens next.",
  },
  "water-heater": {
    metaTitle: "Water Heater Repair & Replace in Arizona | Coyote 24 Plumbing",
    metaDescription: "TODO: 140-160 char meta description for water heater service.",
    h1: "Water Heater Repair & Replace in Arizona",
    intro: "TODO: 100-150 word intro for water heater. What it is, who needs it, what makes our approach different.",
    whenToCall: [
      "TODO: 5-7 specific scenarios where someone needs water heater",
    ],
    process: [
      { step: "Phone call", detail: "TODO: what happens on the initial call" },
      { step: "Assessment", detail: "TODO: walk-through / inspection / diagnostic" },
      { step: "Written quote", detail: "TODO: when and how the quote is delivered" },
      { step: "Work + completion", detail: "TODO: typical timeline + completion criteria" },
    ],
    costs: "TODO: 50-80 words on pricing transparency. What's included, what's not, when ranges apply, how AZ regulations affect price.",
    faqs: [
      { q: "TODO: most common question we get about water heater", a: "TODO: 80-120 word answer." },
    ],
    closingPara: "TODO: 50-80 word call-to-action close. Phone number (602) 555-0100, what happens next.",
  },
  "drain-clog": {
    metaTitle: "Drain Clog & Sewer Line in Arizona | Coyote 24 Plumbing",
    metaDescription: "TODO: 140-160 char meta description for drain & sewer service.",
    h1: "Drain Clog & Sewer Line in Arizona",
    intro: "TODO: 100-150 word intro for drain & sewer. What it is, who needs it, what makes our approach different.",
    whenToCall: [
      "TODO: 5-7 specific scenarios where someone needs drain & sewer",
    ],
    process: [
      { step: "Phone call", detail: "TODO: what happens on the initial call" },
      { step: "Assessment", detail: "TODO: walk-through / inspection / diagnostic" },
      { step: "Written quote", detail: "TODO: when and how the quote is delivered" },
      { step: "Work + completion", detail: "TODO: typical timeline + completion criteria" },
    ],
    costs: "TODO: 50-80 words on pricing transparency. What's included, what's not, when ranges apply, how AZ regulations affect price.",
    faqs: [
      { q: "TODO: most common question we get about drain & sewer", a: "TODO: 80-120 word answer." },
    ],
    closingPara: "TODO: 50-80 word call-to-action close. Phone number (602) 555-0100, what happens next.",
  },
  "leak-detection": {
    metaTitle: "Slab Leak Detection in Arizona | Coyote 24 Plumbing",
    metaDescription: "TODO: 140-160 char meta description for slab leak service.",
    h1: "Slab Leak Detection in Arizona",
    intro: "TODO: 100-150 word intro for slab leak. What it is, who needs it, what makes our approach different.",
    whenToCall: [
      "TODO: 5-7 specific scenarios where someone needs slab leak",
    ],
    process: [
      { step: "Phone call", detail: "TODO: what happens on the initial call" },
      { step: "Assessment", detail: "TODO: walk-through / inspection / diagnostic" },
      { step: "Written quote", detail: "TODO: when and how the quote is delivered" },
      { step: "Work + completion", detail: "TODO: typical timeline + completion criteria" },
    ],
    costs: "TODO: 50-80 words on pricing transparency. What's included, what's not, when ranges apply, how AZ regulations affect price.",
    faqs: [
      { q: "TODO: most common question we get about slab leak", a: "TODO: 80-120 word answer." },
    ],
    closingPara: "TODO: 50-80 word call-to-action close. Phone number (602) 555-0100, what happens next.",
  },
  "gas-line": {
    metaTitle: "Gas Line Repair in Arizona | Coyote 24 Plumbing",
    metaDescription: "TODO: 140-160 char meta description for gas line service.",
    h1: "Gas Line Repair in Arizona",
    intro: "TODO: 100-150 word intro for gas line. What it is, who needs it, what makes our approach different.",
    whenToCall: [
      "TODO: 5-7 specific scenarios where someone needs gas line",
    ],
    process: [
      { step: "Phone call", detail: "TODO: what happens on the initial call" },
      { step: "Assessment", detail: "TODO: walk-through / inspection / diagnostic" },
      { step: "Written quote", detail: "TODO: when and how the quote is delivered" },
      { step: "Work + completion", detail: "TODO: typical timeline + completion criteria" },
    ],
    costs: "TODO: 50-80 words on pricing transparency. What's included, what's not, when ranges apply, how AZ regulations affect price.",
    faqs: [
      { q: "TODO: most common question we get about gas line", a: "TODO: 80-120 word answer." },
    ],
    closingPara: "TODO: 50-80 word call-to-action close. Phone number (602) 555-0100, what happens next.",
  },
  "garbage-disposal": {
    metaTitle: "Garbage Disposal Repair in Arizona | Coyote 24 Plumbing",
    metaDescription: "TODO: 140-160 char meta description for disposal service.",
    h1: "Garbage Disposal Repair in Arizona",
    intro: "TODO: 100-150 word intro for disposal. What it is, who needs it, what makes our approach different.",
    whenToCall: [
      "TODO: 5-7 specific scenarios where someone needs disposal",
    ],
    process: [
      { step: "Phone call", detail: "TODO: what happens on the initial call" },
      { step: "Assessment", detail: "TODO: walk-through / inspection / diagnostic" },
      { step: "Written quote", detail: "TODO: when and how the quote is delivered" },
      { step: "Work + completion", detail: "TODO: typical timeline + completion criteria" },
    ],
    costs: "TODO: 50-80 words on pricing transparency. What's included, what's not, when ranges apply, how AZ regulations affect price.",
    faqs: [
      { q: "TODO: most common question we get about disposal", a: "TODO: 80-120 word answer." },
    ],
    closingPara: "TODO: 50-80 word call-to-action close. Phone number (602) 555-0100, what happens next.",
  },
};
