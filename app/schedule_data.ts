export type Speaker = {
  name: string;
  href?: string;
};

const SPEAKERS = {
  crosby: { name: "Phillip M Crosby" },
  pai: { name: "Sanjana Pai" },
  mitra: { name: "Arpan Mitra" },
  verheul: { name: "Pascal Verheul" },
  chan: { name: "Jonathan Chan" },
  lind: { name: "Anja H Lind" },
  frost: { name: "Victor Frost" },
  jerreat: { name: "Jerri Jerreat" },
  jam: { name: "Jam" },
  amaduzzi: { name: "Lee Amaduzzi" },
  wittman: { name: "Dustin Wittman" },
  serbanescu: {
    name: "Anca Serbanescu",
    href: "https://www.solarpunkconference.com/about#:~:text=Anca%20Serbanescu",
  },
  valsechi: {
    name: "Charles Valsechi",
    href: "https://www.solarpunkconference.com/about#:~:text=Charles%20Valsechi",
  },
  schuller: {
    name: "Kees Schuller",
    href: "https://www.solarpunkconference.com/about#:~:text=Kees%20Schuller",
  },
  khan: { name: "Alina Khan" },
  larochelle: { name: "Marie-Piere Larochelle" },
} satisfies Record<string, Speaker>;

export type EventData = {
  name?: string;
  speakers?: Speaker[];
  eventType?: string;
  span?: number;
  durationMinutes?: number;
  track?: string;
};

export const TRACK_1 = "Track A";
export const TRACK_2 = "Track B";

export const EVENTS = {
  opening: {
    eventType: "Opening",
    durationMinutes: 15,
  },
  break15: {
    durationMinutes: 15,
    eventType: "Break",
  },
  keynote: {
    name: "Housing As An Urban Commons: Cooperative Housing in the Solarpunk City",
    durationMinutes: 75,
    speakers: [SPEAKERS.crosby],
    eventType: "Keynote",
  },
  landack: {
    eventType: "Land Acknowledgement",
    durationMinutes: 15,
  },
  transformation_ecosystems: {
    name: "Making Solarpunk a Reality: Growing Ecosystems of Transformation",
    speakers: [SPEAKERS.pai],
    track: TRACK_1,
  },
  listening_nature: {
    name: "Listening to Nature: Past, Present and Future",
    speakers: [SPEAKERS.chan],
    track: TRACK_1,
  },
  weaving_future: {
    name: "Weaving the Future Together: Collective Care in <em>Woman on the Edge of Time</em>",
    speakers: [SPEAKERS.mitra],
    track: TRACK_2,
  },
  eco_futures: {
    name: "Eco-Futures and The Anthropocenic Encroachment: Contemporary Reflections on <em>Nausicaä of the Valley of the Wind</em>",
    speakers: [SPEAKERS.verheul],
    track: TRACK_2,
  },
  ecotopia: {
    name: "The Ecotopia and the Commune Form",
    speakers: [SPEAKERS.lind],
    track: TRACK_2,
  },
  repair: {
    name: "The Continuity of Repair: Keeping is Caring",
    speakers: [SPEAKERS.frost],
    durationMinutes: 30,
    track: TRACK_1,
  },
  fiction_workshop: {
    name: "Come and play at creating Solarpunk fiction!",
    eventType: "Workshop",
    speakers: [SPEAKERS.jerreat],
    span: 2,
    durationMinutes: 60,
    track: TRACK_2,
  },
  speculative_tech: {
    durationMinutes: 30,
    name: "Speculative Technology for Solarpunk Fiction",
    speakers: [SPEAKERS.jam],
    track: TRACK_1,
  },
  lunch_break: {
    durationMinutes: 75,
    eventType: "Lunch Break & Social",
  },
  utopian_realism: {
    durationMinutes: 15,
    name: "Solarpunk: utopian realism as a degrowth aesthetic",
    speakers: [SPEAKERS.amaduzzi],
  },
  aviation: {
    durationMinutes: 15,
    name: "Aviation in Solarpunk",
    speakers: [SPEAKERS.wittman],
  },
  arcane: {
    durationMinutes: 60,
    name: "Solarpunk and Arcane",
    eventType: "Panel Discussion",
    speakers: [SPEAKERS.serbanescu, SPEAKERS.valsechi, SPEAKERS.schuller],
  },
  rest: {
    durationMinutes: 60,
    name: "Reclaiming Rest: Anti-Capitalist Approaches to Burnout",
    speakers: [SPEAKERS.khan],
  },
  arcology: {
    durationMinutes: 30,
    name: "Arcology: a genealogy of utopias",
    speakers: [SPEAKERS.larochelle],
  },
  closing: {
    durationMinutes: 15,
    eventType: "Closing Ceremony",
  },
  afterparty: {
    durationMinutes: 60,
    eventType: "After Party",
  },
} satisfies Record<string, EventData>;
