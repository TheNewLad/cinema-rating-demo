import { useEffect, useState } from "react";
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
    const calculateScore = () => {
      return Object.values(ratings).reduce((acc, rating) => {
        return acc + (rating ?? 0);
      }, 0);
    };

    setScore(calculateScore() / Rating.GREAT);
  }, [ratings]);

  return { ratings, setCategoryRating, score };
};
