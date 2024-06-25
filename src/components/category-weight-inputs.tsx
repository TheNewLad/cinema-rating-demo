import { Field, Input, Label } from "@headlessui/react";
import { useRatings } from "../hooks/useRatings.ts";
import { classNames } from "../lib/utils.ts";
import { RatingGroups, Ratings } from "../types.ts";

interface Props {
  weights: Required<Ratings>;
  setCategoryWeight: (key: keyof Ratings, rating: number) => void;
}

export const CategoryWeightInputs = ({ weights, setCategoryWeight }: Props) => {
  return (
    <>
      <h3 className="mb-2 block w-80 text-lg">Weights</h3>
      <Field className="flex min-w-80 max-w-80 flex-col gap-2.5">
        {RatingGroups.map(({ id, label }) => (
          <span key={id} className="flex justify-between">
            <Label
              className="block text-sm font-medium leading-6 text-gray-900"
              htmlFor={id}
            >
              {label}
            </Label>
            <Input
              className="block w-1/2 rounded-md border-0 p-1.5 text-right text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name={id}
              type="number"
              value={weights[id]}
              onChange={(e) => setCategoryWeight(id, e.target.valueAsNumber)}
            />
          </span>
        ))}
      </Field>
    </>
  );
};
