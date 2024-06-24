import { useState } from "react";
import { FormInput, Rating, Ratings } from "../types.ts";
import { ChevronDoubleUpIcon } from "./icons/chevron-double-up.icon.tsx";
import { ChevronDownIcon } from "./icons/chevron-down.icon.tsx";
import { ChevronUpIcon } from "./icons/chevron-up.icon.tsx";
import { DashIcon } from "./icons/dash.icon.tsx";
import { RatingButton } from "./rating-button.tsx";

interface RatingButtonGroupProps {
  label: string;
  id: keyof Ratings;
  rating?: number;
  setRating: (rating: number) => void;
}

export const RatingButtonGroup = ({
  label,
  id,
  rating = -1,
  setRating,
}: RatingButtonGroupProps) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id}>
        <h2>{label}</h2>
      </label>
      <span className="isolate inline-flex max-w-fit rounded-md shadow-sm">
        <RatingButton
          className="rounded-l-md"
          onClick={() => setRating(Rating.BAD)}
          selected={rating === Rating.BAD}
        >
          Bad
          <ChevronDownIcon />
        </RatingButton>
        <RatingButton
          className="-ml-px"
          onClick={() => setRating(Rating.OK)}
          selected={rating === Rating.OK}
        >
          OK
          <DashIcon />
        </RatingButton>
        <RatingButton
          className="-ml-px"
          onClick={() => setRating(Rating.GOOD)}
          selected={rating === Rating.GOOD}
        >
          Good
          <ChevronUpIcon />
        </RatingButton>
        <RatingButton
          className="-ml-px rounded-r-md"
          onClick={() => setRating(Rating.GREAT)}
          selected={rating === Rating.GREAT}
        >
          Great
          <ChevronDoubleUpIcon />
        </RatingButton>
      </span>
    </div>
  );
};
