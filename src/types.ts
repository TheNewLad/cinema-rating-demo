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
}

export const RatingGroups: RatingGroup[] = [
  {
    id: "plot",
    label: "Plot",
  },
  {
    id: "attraction",
    label: "Attraction",
  },
  {
    id: "theme",
    label: "Theme",
  },
  {
    id: "acting",
    label: "Acting",
  },
  {
    id: "dialogue",
    label: "Dialogue",
  },
  {
    id: "cinematography",
    label: "Cinematography",
  },
  {
    id: "editing",
    label: "Editing",
  },
  {
    id: "soundtrack",
    label: "Soundtrack",
  },
  {
    id: "directing",
    label: "Directing",
  },
  {
    id: "it_factor",
    label: "IT Factor",
  },
];
