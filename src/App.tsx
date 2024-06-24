import { Field, Input, Label, Switch } from "@headlessui/react";
import { useState } from "react";
import { Controller, Path, useForm } from "react-hook-form";
import { RatingButtonGroup } from "./components/rating-button-group.tsx";
import { useRatings } from "./hooks/useRatings.ts";
import { classNames } from "./lib/utils.ts";
import { Rating, Ratings } from "./types.ts";

interface RatingGroup {
  label: string;
  id: keyof Ratings;
}

const RatingGroups: RatingGroup[] = [
  {
    id: "plot",
    label: "Plot",
  },
  {
    id: "attraction",
    label: "Attraction",
  },
  {
    id: "theme",
    label: "Theme",
  },
  {
    id: "acting",
    label: "Acting",
  },
  {
    id: "dialogue",
    label: "Dialogue",
  },
  {
    id: "cinematography",
    label: "Cinematography",
  },
  {
    id: "editing",
    label: "Editing",
  },
  {
    id: "soundtrack",
    label: "Soundtrack",
  },
  {
    id: "directing",
    label: "Directing",
  },
  {
    id: "it_factor",
    label: "IT Factor",
  },
];

function App() {
  const {
    ratings,
    setCategoryRating,
    score,
    setUseWeightedScore,
    useWeightedScore,
    weights,
    setCategoryWeight,
  } = useRatings();

  return (
    <main className="grid max-h-fit min-h-full gap-4 p-4 md:grid-cols-2">
      <section className="mb-10 flex flex-col items-center justify-start gap-2.5 md:mb-0">
        <h1 className="mb-5 text-5xl">Score</h1>
        <div className="mb-10 md:mb-0">
          <p className="mb-auto">
            <span className="text-9xl font-bold">{score.toFixed(1)}</span>
            <span className="text-3xl font-normal text-gray-500">
              /{Rating.GREAT}
            </span>
          </p>
          <Field className="mb-4 flex justify-between">
            <Label
              as="span"
              className="text-sm font-medium leading-6 text-gray-900"
              passive
            >
              {useWeightedScore ? "Weighted Score" : "Unweighted Score"}
            </Label>
            <Switch
              checked={useWeightedScore}
              onChange={setUseWeightedScore}
              className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              <span className="sr-only">Use setting</span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute h-full w-full rounded-md bg-white"
              />
              <span
                aria-hidden="true"
                className={classNames(
                  useWeightedScore ? "bg-indigo-600" : "bg-gray-200",
                  "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out",
                )}
              />
              <span
                aria-hidden="true"
                className={classNames(
                  useWeightedScore ? "translate-x-5" : "translate-x-0",
                  "pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out",
                )}
              />
            </Switch>
          </Field>
        </div>
        <div className="mt-auto flex flex-col justify-between">
          <h3
            className={classNames(
              useWeightedScore ? "mb-2 block w-80 text-lg" : "hidden",
            )}
          >
            Weights
          </h3>
          <Field
            className={classNames(
              useWeightedScore
                ? "flex min-w-80 max-w-80 flex-col gap-2.5"
                : "hidden",
            )}
          >
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
                  defaultValue={weights[id]}
                  onChange={(e) =>
                    setCategoryWeight(id, e.target.valueAsNumber)
                  }
                />
              </span>
            ))}
          </Field>
        </div>
      </section>
      <section className="flex flex-col items-center gap-2.5 pb-2.5 md:h-full md:justify-end md:pb-0">
        <h3
          className={classNames(
            useWeightedScore ? "block w-80 text-lg" : "hidden",
          )}
        >
          Category Ratings
        </h3>
        {RatingGroups.map(({ id, label }) => (
          <RatingButtonGroup
            key={id}
            id={id}
            label={label}
            rating={ratings[id]}
            setRating={(rating) => setCategoryRating(id, rating)}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
