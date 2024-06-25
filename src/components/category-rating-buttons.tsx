import { useRatings } from "../hooks/useRatings.ts";
import { classNames } from "../lib/utils.ts";
import { RatingGroups, Ratings } from "../types.ts";
import { RatingButtonGroup } from "./rating-button-group.tsx";

interface Props {
  ratings: Partial<Ratings>;
  setCategoryRating: (key: keyof Ratings, rating: number) => void;
}

export const CategoryRatingButtons = ({
  ratings,
  setCategoryRating,
}: Props) => {
  return (
    <>
      <h3 className="block w-80 text-lg">Category Ratings</h3>
      {RatingGroups.map(({ id, label }) => (
        <RatingButtonGroup
          key={id}
          id={id}
          label={label}
          rating={ratings[id]}
          setRating={(rating) => setCategoryRating(id, rating)}
        />
      ))}
    </>
  );
};
