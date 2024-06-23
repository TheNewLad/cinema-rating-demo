import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function classNames(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
export const calculateUnweightedScore = (ratings: Partial<Ratings>) => {
  return (
    Object.values(ratings).reduce((sum, rating) => {
      return sum + rating;
    }, 0) / Rating.GREAT
  );
};
}
