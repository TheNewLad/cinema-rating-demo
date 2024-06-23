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
