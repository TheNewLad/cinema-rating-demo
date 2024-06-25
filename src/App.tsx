import { Field, Input, Label, Switch } from "@headlessui/react";
import { useState } from "react";
import { Controller, Path, useForm } from "react-hook-form";
import { CategoryRatingButtons } from "./components/category-rating-buttons.tsx";
import { CategoryWeightInputs } from "./components/category-weight-inputs.tsx";
import { RatingButtonGroup } from "./components/rating-button-group.tsx";
import { Score } from "./components/score.tsx";
import { useRatings } from "./hooks/useRatings.ts";
import { classNames } from "./lib/utils.ts";
import { Rating, RatingGroups, Ratings } from "./types.ts";

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
    <>
      {/* Mobile Layout */}
      <main className="flex max-h-fit min-h-full flex-col gap-4 p-4 md:hidden md:grid-cols-2">
        <section className="flex max-h-fit justify-center md:col-start-1 md:col-end-2 md:row-start-1">
          <h1 className="mb-5 text-5xl">Score</h1>
        </section>
        <section className="sticky top-0 z-50 flex justify-center bg-white md:relative md:col-start-1 md:col-end-2 md:row-start-2">
          <Score
            score={score}
            useWeightedScore={useWeightedScore}
            onChangeUseWeightedScore={setUseWeightedScore}
          />
        </section>
        <section
          className={classNames(
            "flex flex-col items-center gap-2.5 md:mb-0",
            useWeightedScore || "hidden",
          )}
        >
          <CategoryWeightInputs
            setCategoryWeight={setCategoryWeight}
            weights={weights}
          />
        </section>
        <section className="md:row-span-auto flex flex-col items-center gap-2.5 pb-2.5 md:col-start-2 md:col-end-3 md:row-span-2 md:row-start-1 md:h-full md:justify-end md:pb-0">
          <CategoryRatingButtons
            setCategoryRating={setCategoryRating}
            ratings={ratings}
          />
        </section>
      </main>

      {/* Desktop Layout */}
      <main className="hidden max-h-fit min-h-full flex-col gap-4 p-4 md:grid md:grid-cols-2">
        <section className="col-end-2 row-start-1 flex max-h-fit flex-col md:col-start-1">
          <h1 className="mb-5 flex justify-center text-5xl">Score</h1>
          <div className="flex justify-center bg-white">
            <Score
              score={score}
              useWeightedScore={useWeightedScore}
              onChangeUseWeightedScore={setUseWeightedScore}
            />
          </div>
          <div
            className={classNames(
              "flex flex-col items-center gap-2.5 md:mb-0",
              useWeightedScore || "hidden",
            )}
          >
            <CategoryWeightInputs
              setCategoryWeight={setCategoryWeight}
              weights={weights}
            />
          </div>
        </section>
        <section className="flex flex-col items-center gap-2.5 pb-2.5">
          <CategoryRatingButtons
            setCategoryRating={setCategoryRating}
            ratings={ratings}
          />
        </section>
      </main>
    </>
  );
}

export default App;
