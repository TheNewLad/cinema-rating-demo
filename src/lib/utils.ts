import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Rating, Ratings } from "../types.ts";

export const classNames = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const calculateUnweightedScore = (ratings: Partial<Ratings>) => {
  return (
    Object.values(ratings).reduce((sum, rating) => {
      return sum + rating;
    }, 0) / Rating.GREAT
  );
};

interface CalculateWeightedScoreProps {
  ratings: Partial<Ratings>;
  weights: Required<Ratings>;
}

export const calculateWeightedScore = ({
  ratings,
  weights,
}: CalculateWeightedScoreProps) => {
  return (
    Object.keys(ratings).reduce((sum, key) => {
      return sum + ratings[key] * weights[key];
    }, 0) / Rating.GREAT
  );
};
