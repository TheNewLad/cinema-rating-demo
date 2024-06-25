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
  const normalizedWeights = getNormalizedWeights(weights);

  const score =
    Object.keys(ratings).reduce((sum, key) => {
      return (
        sum +
        (ratings[key as keyof Ratings] ?? 0) *
          normalizedWeights[key as keyof Ratings]
      );
    }, 0) / Rating.GREAT;

  return isNaN(score) ? 0 : score;
};

const getNormalizedWeights = (weights: Required<Ratings>) => {
  const total = Object.values(weights).reduce((sum, weight) => {
    return sum + weight;
  }, 0);

  return Object.keys(weights).reduce((normalizedWeights, key) => {
    return {
      ...normalizedWeights,
      [key]:
        weights[key as keyof Ratings] === 0
          ? 0
          : weights[key as keyof Ratings] / (total / Rating.GREAT),
    };
  }, {} as Required<Ratings>);
};
