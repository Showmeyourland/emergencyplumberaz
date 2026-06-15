// Per-city unique content. Each city has its own opener, neighborhoods,
// case studies, and FAQ — to defeat thin-doorway detection.
// Each city page must have 30%+ unique content not on any other city page.
//
// STATUS: STUBBED — needs niche-specific content from writer agents.

export interface CityContent {
  opener: string;
  marketNote: string;
  neighborhoods: string[];
  caseStudies: { situation: string; outcome: string }[];
  cityFaqs: { q: string; a: string }[];
  // Optional deep-fill sections for high-priority cities
  marketStats?: { medianPrice?: string; avgDOM?: string; ourClosesPerYear?: string; commonProperty?: string };
  processDetail?: string;
  whyCallUs?: string;
  commonZips?: string[];
}

export const CITY_CONTENT: Record<string, CityContent> = {
  "phoenix": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Phoenix, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Phoenix unique for our trade.",
    marketNote: "TODO: market context for Phoenix — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Phoenix neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Phoenix job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Phoenix-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "mesa": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Mesa, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Mesa unique for our trade.",
    marketNote: "TODO: market context for Mesa — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Mesa neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Mesa job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Mesa-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "tucson": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Tucson, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Tucson unique for our trade.",
    marketNote: "TODO: market context for Tucson — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Tucson neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Tucson job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Tucson-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "chandler": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Chandler, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Chandler unique for our trade.",
    marketNote: "TODO: market context for Chandler — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Chandler neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Chandler job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Chandler-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "scottsdale": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Scottsdale, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Scottsdale unique for our trade.",
    marketNote: "TODO: market context for Scottsdale — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Scottsdale neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Scottsdale job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Scottsdale-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "gilbert": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Gilbert, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Gilbert unique for our trade.",
    marketNote: "TODO: market context for Gilbert — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Gilbert neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Gilbert job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Gilbert-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "glendale": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Glendale, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Glendale unique for our trade.",
    marketNote: "TODO: market context for Glendale — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Glendale neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Glendale job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Glendale-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "tempe": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Tempe, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Tempe unique for our trade.",
    marketNote: "TODO: market context for Tempe — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Tempe neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Tempe job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Tempe-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "peoria": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Peoria, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Peoria unique for our trade.",
    marketNote: "TODO: market context for Peoria — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Peoria neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Peoria job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Peoria-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "surprise": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Surprise, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Surprise unique for our trade.",
    marketNote: "TODO: market context for Surprise — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Surprise neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Surprise job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Surprise-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "yuma": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Yuma, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Yuma unique for our trade.",
    marketNote: "TODO: market context for Yuma — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Yuma neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Yuma job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Yuma-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "buckeye": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Buckeye, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Buckeye unique for our trade.",
    marketNote: "TODO: market context for Buckeye — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Buckeye neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Buckeye job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Buckeye-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "avondale": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Avondale, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Avondale unique for our trade.",
    marketNote: "TODO: market context for Avondale — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Avondale neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Avondale job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Avondale-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "goodyear": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Goodyear, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Goodyear unique for our trade.",
    marketNote: "TODO: market context for Goodyear — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Goodyear neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Goodyear job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Goodyear-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "casa-grande": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Casa Grande, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Casa Grande unique for our trade.",
    marketNote: "TODO: market context for Casa Grande — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Casa Grande neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Casa Grande job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Casa Grande-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "flagstaff": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Flagstaff, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Flagstaff unique for our trade.",
    marketNote: "TODO: market context for Flagstaff — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Flagstaff neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Flagstaff job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Flagstaff-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "prescott": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Prescott, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Prescott unique for our trade.",
    marketNote: "TODO: market context for Prescott — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Prescott neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Prescott job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Prescott-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "sierra-vista": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Sierra Vista, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Sierra Vista unique for our trade.",
    marketNote: "TODO: market context for Sierra Vista — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Sierra Vista neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Sierra Vista job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Sierra Vista-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "kingman": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Kingman, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Kingman unique for our trade.",
    marketNote: "TODO: market context for Kingman — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Kingman neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Kingman job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Kingman-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "apache-junction": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Apache Junction, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Apache Junction unique for our trade.",
    marketNote: "TODO: market context for Apache Junction — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Apache Junction neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Apache Junction job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Apache Junction-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "queen-creek": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Queen Creek, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Queen Creek unique for our trade.",
    marketNote: "TODO: market context for Queen Creek — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Queen Creek neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Queen Creek job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Queen Creek-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "lake-havasu-city": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Lake Havasu City, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Lake Havasu City unique for our trade.",
    marketNote: "TODO: market context for Lake Havasu City — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Lake Havasu City neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Lake Havasu City job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Lake Havasu City-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "bullhead-city": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Bullhead City, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Bullhead City unique for our trade.",
    marketNote: "TODO: market context for Bullhead City — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Bullhead City neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Bullhead City job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Bullhead City-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "anthem": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Anthem, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Anthem unique for our trade.",
    marketNote: "TODO: market context for Anthem — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Anthem neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Anthem job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Anthem-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "fountain-hills": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Fountain Hills, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Fountain Hills unique for our trade.",
    marketNote: "TODO: market context for Fountain Hills — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Fountain Hills neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Fountain Hills job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Fountain Hills-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
  "litchfield-park": {
    opener: "TODO: Coyote 24 Plumbing writes a 100-150 word opener about working in Litchfield Park, AZ as a emergency plumbing business. Cover: typical service volume, common job types, what makes Litchfield Park unique for our trade.",
    marketNote: "TODO: market context for Litchfield Park — typical pricing band, response time expectations, seasonal factors specific to this part of AZ.",
    neighborhoods: ["TODO: 8-12 real Litchfield Park neighborhoods we serve"],
    caseStudies: [
      {
        situation: "TODO: real recent Litchfield Park job (anonymized): customer situation, what was wrong, scope of work.",
        outcome: "TODO: what we did, timeline, outcome.",
      },
    ],
    cityFaqs: [
      { q: "TODO: a real Litchfield Park-specific question we get from customers.", a: "TODO: honest, specific answer (60-100 words)." },
    ],
  },
};
