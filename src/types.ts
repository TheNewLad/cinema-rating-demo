export interface Ratings {
  plot: number | null;
  attraction: number | null;
  theme: number | null;
  acting: number | null;
  dialogue: number | null;
  cinematography: number | null;
  editing: number | null;
  soundtrack: number | null;
  directing: number | null;
  it_factor: number | null;
}

export enum Rating {
  BAD = 0,
  OK = 5,
  GOOD = 7,
  GREAT = 10,
}
