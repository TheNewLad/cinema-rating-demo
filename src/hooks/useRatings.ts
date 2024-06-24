import { useEffect, useState } from "react";
import {
  calculateUnweightedScore,
  calculateWeightedScore,
} from "../lib/utils.ts";
import { Rating, Ratings } from "../types.ts";

export const useRatings = () => {
  const [ratings, setRatings] = useState<Partial<Ratings>>({});
  const [score, setScore] = useState<number>(0);
  const [weights, setWeights] = useState<Required<Ratings>>({
    plot: 1,
    attraction: 1,
    theme: 1,
    acting: 1,
    dialogue: 1,
    cinematography: 1,
    editing: 1,
    soundtrack: 1,
    directing: 1,
    it_factor: 1,
  });
  const [useWeightedScore, setUseWeightedScore] = useState(false);

  const setCategoryRating = (key: keyof Ratings, rating: number) => {
    setRatings((prev) => ({
      ...prev,
      [key]: rating,
    }));
  };

  const setCategoryWeight = (key: keyof Ratings, weight: number) => {
    setWeights((prev) => ({
      ...prev,
      [key]: weight,
    }));
  };

  useEffect(() => {
    setScore(
      useWeightedScore
        ? calculateWeightedScore({ ratings, weights })
        : calculateUnweightedScore(ratings),
    );
  }, [ratings, useWeightedScore, weights]);

  return {
    ratings,
    score,
    setCategoryRating,
    useWeightedScore,
    setUseWeightedScore,
    weights,
    setCategoryWeight,
  };
};
