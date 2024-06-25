export interface Ratings {
  plot: number;
  attraction: number;
  theme: number;
  acting: number;
  dialogue: number;
  cinematography: number;
  editing: number;
  soundtrack: number;
  directing: number;
  it_factor: number;
}

export enum Rating {
  BAD = 0,
  OK = 5,
  GOOD = 7,
  GREAT = 10,
}

interface RatingGroup {
  label: string;
  id: keyof Ratings;
  description: string;
}

export const RatingGroups: RatingGroup[] = [
  {
    id: "plot",
    label: "Plot",
    description: "Story development and how believable it is.",
  },
  {
    id: "attraction",
    label: "Attraction",
    description: "How fun and engaging the movie is.",
  },
  {
    id: "theme",
    label: "Theme",
    description: "The main ideas and messages.",
  },
  {
    id: "acting",
    label: "Acting",
    description: "How well the actors perform.",
  },
  {
    id: "dialogue",
    label: "Dialogue",
    description: "Quality of the conversations.",
  },
  {
    id: "cinematography",
    label: "Cinematography",
    description: "Visual style and camera work.",
  },
  {
    id: "editing",
    label: "Editing",
    description: "Flow and scene transitions.",
  },
  {
    id: "soundtrack",
    label: "Soundtrack",
    description: "Music and sound effects.",
  },
  {
    id: "directing",
    label: "Directing",
    description: "Creative vision and scene execution.",
  },
  {
    id: "it_factor",
    label: "IT Factor",
    description: "Unique and special qualities.",
  },
];
