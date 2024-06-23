import { useEffect, useState } from "react";
import { calculateUnweightedScore } from "../lib/utils.ts";
import { Rating, Ratings } from "../types.ts";

export const useRatings = () => {
  const [ratings, setRatings] = useState<Partial<Ratings>>({});
  const [score, setScore] = useState<number>(0);

  const setCategoryRating = (key: keyof Ratings, rating: number) => {
    setRatings((prev) => ({
      ...prev,
      [key]: rating,
    }));
  };

  useEffect(() => {
    setScore(calculateUnweightedScore(ratings) / Rating.GREAT);
  }, [ratings]);

  return { ratings, setCategoryRating, score };
};
