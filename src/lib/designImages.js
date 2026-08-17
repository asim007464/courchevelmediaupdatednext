const U = (name) => `/design/uploads/${encodeURIComponent(name)}`;
const A = (name) => `/design/assets/${name}`;

/** Prefer real photography over UI screenshots */
const PHOTOS = [
  "2039bf96-f8e3-4198-8f08-ccd554a1d5c6.jpg",
  "2c9da581-829d-43a6-a0ba-de7e2089a7fd.jpg",
  "2cfda312-a80e-457a-8fc2-5c9b489bfb92.jpg",
  "4293dc9c-522c-438c-ace9-4505b46f790e.jpg",
  "51429256-e173-4778-813e-1c6b55746786.jpg",
  "79a0a0d3-cc0e-44b2-bd82-eac64ac267a6.jpg",
  "831cb3d6-1387-43c3-a8fe-1f8436c606d5.jpg",
  "8b276cc9-beaa-4563-9d83-392a2fe716af.jpg",
  "db65f735-ce93-40fc-a4aa-3991f715b2c6.jpg",
  "e9c9477a-7677-4618-bafa-308419d5ca17.jpg",
  "fb5c6799-1f54-4643-a422-94f212d19f26-1.jpg",
  "2039bf96-f8e3-4198-8f08-ccd554a1d5c6-86d89113.jpg",
  "79a0a0d3-cc0e-44b2-bd82-eac64ac267a6-155fe200.jpg",
  "db65f735-ce93-40fc-a4aa-3991f715b2c6-a3f83d18.jpg",
  "831cb3d6-1387-43c3-a8fe-1f8436c606d5.jpg",
  "2cfda312-a80e-457a-8fc2-5c9b489bfb92.jpg",
  "4293dc9c-522c-438c-ace9-4505b46f790e.jpg",
  "51429256-e173-4778-813e-1c6b55746786.jpg",
];

const photo = (i) => U(PHOTOS[i % PHOTOS.length]);

const BRANDS = [
  "272418c2-b411-44b5-bad0-05b79432375d.png",
  "66ffa88a-6a9b-4235-9f73-8472433eb49e.png",
  "bce1e208-7371-4718-b79a-a6f4cc9d3ffb.png",
  "66ffa88a-6a9b-4235-9f73-8472433eb49e-0cf88c4c.png",
  "272418c2-b411-44b5-bad0-05b79432375d.png",
  "bce1e208-7371-4718-b79a-a6f4cc9d3ffb.png",
  "66ffa88a-6a9b-4235-9f73-8472433eb49e.png",
  "272418c2-b411-44b5-bad0-05b79432375d.png",
];

export const DESIGN_LOGO = "/image-removebg-preview.png";
export const DESIGN_LOGO_MARK = "/image-removebg-preview.png";

/** Map every design image-slot id → public path */
export const DESIGN_IMAGES = {
  "home-showreel-ski": photo(0),
  "home-showreel-events": photo(5),
  "home-mood": photo(1),
  "brand-1": U(BRANDS[0]),
  "brand-2": U(BRANDS[1]),
  "brand-3": U(BRANDS[2]),
  "brand-4": U(BRANDS[3]),
  "brand-5": U(BRANDS[4]),
  "brand-6": U(BRANDS[5]),
  "brand-7": U(BRANDS[6]),
  "brand-8": U(BRANDS[7]),
  "google-logo": U("bce1e208-7371-4718-b79a-a6f4cc9d3ffb.png"),
  "guide-featured": photo(2),
  "article-hero": photo(3),
  "article-wide-1": photo(4),
  "article-gal-1": photo(6),
  "article-gal-2": photo(7),
  "article-inline-1": photo(8),
  "ab-hero-img": photo(9),
  "ab-portrait": photo(10),
  "ab-slope": photo(0),
  "ab-lifestyle": photo(5),
  "ab-closing": photo(1),
  "journal-cover": photo(2),
};

for (let i = 1; i <= 9; i += 1) {
  DESIGN_IMAGES[`pf-ski-${i}`] = photo(i - 1);
  DESIGN_IMAGES[`pf-ev-${i}`] = photo(i + 4);
  DESIGN_IMAGES[`guide-${i}`] = photo(i + 2);
}

export function designImage(slotId, fallbackIndex = 0) {
  return DESIGN_IMAGES[slotId] || photo(fallbackIndex);
}

export const DESIGN_PORTFOLIO = {
  "Ski Holidays": Array.from({ length: 9 }, (_, i) => ({
    id: `pf-ski-${i + 1}`,
    size: [0, 6].includes(i) ? "tall" : i === 3 ? "wide" : "std",
    src: designImage(`pf-ski-${i + 1}`),
    alt: `Ski portfolio ${i + 1}`,
  })),
  "Private Events": Array.from({ length: 9 }, (_, i) => ({
    id: `pf-ev-${i + 1}`,
    size: [0, 6].includes(i) ? "tall" : i === 3 ? "wide" : "std",
    src: designImage(`pf-ev-${i + 1}`),
    alt: `Events portfolio ${i + 1}`,
  })),
};

export const DESIGN_GUIDES = [
  {
    category: "Planning Your Experience",
    title: "When to book your photographer for the Courchevel season",
    description:
      "How availability moves through December, February and Easter, and the weeks worth planning around.",
    minutes: 6,
    slug: "when-to-book-your-photographer",
    slot: "guide-1",
  },
  {
    category: "Behind the Scenes",
    title: "A day following a family in Courchevel 1850",
    description:
      "First lift, a long lunch at altitude, and the run home. How a full experience actually unfolds.",
    minutes: 10,
    slug: "a-day-following-a-family",
    slot: "guide-2",
  },
  {
    category: "How We Capture It",
    title: "Why overcast days often make the better photographs",
    description:
      "Soft light, even snow and no harsh shadow. What flat light gives you that bluebird cannot.",
    minutes: 7,
    slug: "why-overcast-days-often-make-better-photographs",
    slot: "guide-3",
  },
  {
    category: "Experiences",
    title: "Sunrise on the slopes before the lifts open",
    description:
      "Empty pistes, blue-hour light and the short window that makes it possible.",
    minutes: 5,
    slug: "sunrise-on-the-slopes",
    slot: "guide-4",
  },
  {
    category: "Planning Your Experience",
    title: "What to wear when your ski day is being filmed",
    description:
      "Colour, layering and small choices that read well on camera without dressing for the camera.",
    minutes: 6,
    slug: "what-to-wear-when-filmed",
    slot: "guide-5",
  },
  {
    category: "Behind the Scenes",
    title: "Filming a surprise proposal at altitude",
    description:
      "How we stay invisible until the moment happens, and what we agree in advance.",
    minutes: 8,
    slug: "filming-a-surprise-proposal",
    slot: "guide-6",
  },
  {
    category: "How We Capture It",
    title: "When we fly the drone, and when we do not",
    description:
      "Conditions, airspace and discretion. The reasoning behind aerial coverage in the Trois Vallées.",
    minutes: 7,
    slug: "when-we-fly-the-drone",
    slot: "guide-7",
  },
  {
    category: "Experiences",
    title: "Après-ski, photographed properly",
    description:
      "Low light, warm interiors and long tables. Capturing the end of the day as it feels.",
    minutes: 5,
    slug: "apres-ski-photographed-properly",
    slot: "guide-8",
  },
  {
    category: "Planning Your Experience",
    title: "Half day or full day: choosing your coverage",
    description:
      "What each covers on the mountain, and how families usually decide between them.",
    minutes: 6,
    slug: "half-day-or-full-day",
    slot: "guide-9",
  },
];

export const FEATURED_GUIDE = {
  category: "How We Capture It",
  title: "How we film a ski day without ever getting in the way",
  description:
    "Positioning, lenses and timing on the mountain. The quiet method behind a full day of coverage, from first lift to the last light on the Saulire.",
  minutes: 9,
  slug: "how-we-film-a-ski-day",
  slot: "guide-featured",
};

export const DESIGN_PACKAGES = {
  Ski: [
    {
      title: "Half Experience",
      price: "€1,000",
      description:
        "Four hours of photography and filmmaking, designed to capture the highlights of your day on the mountain.",
      features: [
        "Up to four hours of coverage",
        "Professionally curated photo gallery",
        "Individual cinematic ski clips",
        "Highlight film (up to one minute)",
        "Drone footage, when conditions allow",
      ],
    },
    {
      title: "Full Experience",
      price: "€1,500",
      description:
        "A complete day of photography and filmmaking, from your first runs on the slopes to après-ski.",
      features: [
        "From first lift to après-ski",
        "Professionally curated photo gallery",
        "Individual cinematic ski clips",
        "Highlight film (up to two minutes)",
        "Drone footage, when conditions allow",
        "Après-ski coverage",
      ],
    },
    {
      title: "Signature Experience",
      price: "€15,000",
      description:
        "A private production team dedicated exclusively to documenting every unforgettable moment of your holiday.",
      features: [
        "Dedicated photographer & filmmaker throughout your stay",
        "From private jet arrival to your final evening",
        "Skiing, family moments and lifestyle",
        "Après-ski, dinners and private events",
        "Creative planning before your arrival",
        "A bespoke cinematic film of your holiday",
      ],
      ctaLabel: "By enquiry only",
    },
  ],
  Events: [
    {
      title: "Private Event",
      price: "€1,500",
      description:
        "Discreet photography and filmmaking for private celebrations, dinners and special occasions, tailored to your schedule.",
      features: [
        "Photography and filmmaking coverage",
        "Professionally curated photo gallery",
        "Highlight film",
        "Tailored to your event",
        "Delivery within days",
      ],
    },
    {
      title: "DJ Event",
      price: "€1,500",
      description:
        "High-energy photography and filmmaking, capturing the atmosphere, crowd and unforgettable moments of your event.",
      features: [
        "Dynamic event photography",
        "Professionally curated photo gallery",
        "Individual cinematic event clips",
        "Highlight aftermovie",
        "Drone footage, when conditions allow",
      ],
    },
    {
      title: "Bespoke Experience",
      price: "Custom quote",
      description:
        "Designed for clients whose plans go beyond a single event, whether it is a destination celebration, luxury wedding, multi-day holiday or any occasion requiring dedicated coverage tailored around your experience.",
      features: [
        "Dedicated photographer and filmmaker",
        "Multi-day or international coverage",
        "Weddings, celebrations and private experiences",
        "Creative planning before your event",
        "Tailored photography and cinematic films",
        "Worldwide availability",
      ],
      ctaLabel: "By enquiry only",
    },
  ],
};
