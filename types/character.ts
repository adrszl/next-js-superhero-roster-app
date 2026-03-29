export type LocalCharacter = {
    name: string;
    score: number;
    type: 'hero' | 'villain';
    weakness?: string;
};

export type CharacterAPIResponse = {
    id: string;
    name: string;
    powerstats: PowerStats;
    biography: Biography;
    appearance: Appearance;
    work: Work;
    connections: Connections;
    image: Image;
};

export type SuperheroSearchResponse = {
  response: 'success' | 'error';
  'results-for': string;
  results?: CharacterAPIResponse[];
  error?: string;
};

export type PowerStats = {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
};

export type Biography = {
    "full-name": string;
    "alter-egos": string;
    aliases: string[];
    "place-of-birth": string;
    "first-appearance": string;
    publisher: string;
    alignment: string;
};

export type Appearance = {
    gender: string;
    race: string | null;
    height: [string, string];
    weight: [string, string];
    "eye-color": string;
    "hair-color": string;
};

export type Work = {
    occupation: string;
    base: string;
};

export type Connections = {
    "group-affiliation": string;
    relatives: string;
};

export type Image = {
    url: string;
};