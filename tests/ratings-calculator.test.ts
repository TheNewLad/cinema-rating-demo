import { describe, it, expect } from "vitest";
import {
  calculateUnweightedScore,
  calculateWeightedScore,
} from "../src/lib/utils";
import { Rating, Ratings } from "../src/types";

describe("Ratings Calculator", () => {
  const ratings: Ratings = {
    plot: Rating.GREAT,
    attraction: Rating.GOOD,
    theme: Rating.BAD,
    acting: Rating.GOOD,
    dialogue: Rating.OK,
    cinematography: Rating.GREAT,
    editing: Rating.BAD,
    soundtrack: Rating.BAD,
    directing: Rating.OK,
    it_factor: Rating.OK,
  };
  const expectedUnweightedScore = 4.9;

  describe("calculateUnweightedScore", () => {
    it("should calculate the unweighted score correctly", () => {
      expect(calculateUnweightedScore(ratings)).toBe(expectedUnweightedScore);
    });

    it("should return 0 when no ratings are provided", () => {
      const ratings: Ratings = {};
      const expectedUnweightedScore = 0;

      expect(calculateUnweightedScore(ratings)).toBe(expectedUnweightedScore);
    });

    it("should return 0 when all ratings are BAD(0)", () => {
      const ratings: Ratings = {
        plot: Rating.BAD,
        attraction: Rating.BAD,
        theme: Rating.BAD,
        acting: Rating.BAD,
        dialogue: Rating.BAD,
        cinematography: Rating.BAD,
        editing: Rating.BAD,
        soundtrack: Rating.BAD,
        directing: Rating.BAD,
        it_factor: Rating.BAD,
      };
      const expectedUnweightedScore = 0;

      expect(calculateUnweightedScore(ratings)).toBe(expectedUnweightedScore);
    });

    it("should return 10 when all ratings are GREAT(10)", () => {
      const ratings: Ratings = {
        plot: Rating.GREAT,
        attraction: Rating.GREAT,
        theme: Rating.GREAT,
        acting: Rating.GREAT,
        dialogue: Rating.GREAT,
        cinematography: Rating.GREAT,
        editing: Rating.GREAT,
        soundtrack: Rating.GREAT,
        directing: Rating.GREAT,
        it_factor: Rating.GREAT,
      };
      const expectedUnweightedScore = 10;

      expect(calculateUnweightedScore(ratings)).toBe(expectedUnweightedScore);
    });

    it("should return 5 when all ratings are OK(5)", () => {
      const ratings: Ratings = {
        plot: Rating.OK,
        attraction: Rating.OK,
        theme: Rating.OK,
        acting: Rating.OK,
        dialogue: Rating.OK,
        cinematography: Rating.OK,
        editing: Rating.OK,
        soundtrack: Rating.OK,
        directing: Rating.OK,
        it_factor: Rating.OK,
      };
      const expectedUnweightedScore = 5;

      expect(calculateUnweightedScore(ratings)).toBe(expectedUnweightedScore);
    });
  });

  describe("calculateWeightedScore", () => {
    const ratings: Ratings = {
      plot: Rating.GREAT,
      attraction: Rating.BAD,
      theme: Rating.BAD,
      acting: Rating.BAD,
      dialogue: Rating.BAD,
      cinematography: Rating.BAD,
      editing: Rating.BAD,
      soundtrack: Rating.BAD,
      directing: Rating.BAD,
      it_factor: Rating.BAD,
    };
    const expectedUnweightedScore = 1;
    it("should calculate the weighted score to be the same as the unweighted score when the weights are all the same", () => {
      const weights: Required<Ratings> = {
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
      };

      const actualWeightedScore = calculateWeightedScore({ ratings, weights });
      const actualUnweightedScore = calculateUnweightedScore(ratings);

      expect(actualWeightedScore).toBe(expectedUnweightedScore);
      expect(actualWeightedScore).toBe(actualUnweightedScore);
    });

    it("should return 10 when only one weight is 10 and the rest of the weights are 0 regardless of the other category ratings", () => {
      const weights: Required<Ratings> = {
        plot: 10,
        attraction: 0,
        theme: 0,
        acting: 0,
        dialogue: 0,
        cinematography: 0,
        editing: 0,
        soundtrack: 0,
        directing: 0,
        it_factor: 0,
      };

      const expectedUnweightedScore = 10;

      expect(calculateWeightedScore({ ratings, weights })).toBe(
        expectedUnweightedScore,
      );
    });

    it("should return 0 when only one weight is 0 and the rest of the weights are 10 regardless of the other category ratings", () => {
      const weights: Required<Ratings> = {
        plot: 0,
        attraction: 10,
        theme: 10,
        acting: 10,
        dialogue: 10,
        cinematography: 10,
        editing: 10,
        soundtrack: 10,
        directing: 10,
        it_factor: 10,
      };

      const expectedUnweightedScore = 0;

      expect(calculateWeightedScore({ ratings, weights })).toBe(
        expectedUnweightedScore,
      );
    });

    it("should return 10 when all weights are 10 and all ratings are GREAT(10)", () => {
      const weights: Required<Ratings> = {
        plot: 10,
        attraction: 10,
        theme: 10,
        acting: 10,
        dialogue: 10,
        cinematography: 10,
        editing: 10,
        soundtrack: 10,
        directing: 10,
        it_factor: 10,
      };

      const ratings: Ratings = {
        plot: Rating.GREAT,
        attraction: Rating.GREAT,
        theme: Rating.GREAT,
        acting: Rating.GREAT,
        dialogue: Rating.GREAT,
        cinematography: Rating.GREAT,
        editing: Rating.GREAT,
        soundtrack: Rating.GREAT,
        directing: Rating.GREAT,
        it_factor: Rating.GREAT,
      };
      const expectedWeightedScore = 10;

      expect(calculateWeightedScore({ ratings, weights })).toBe(
        expectedWeightedScore,
      );
    });

    it("should return 0 when all weights are 0 and all ratings are GREAT(10)", () => {
      const weights: Required<Ratings> = {
        plot: 0,
        attraction: 0,
        theme: 0,
        acting: 0,
        dialogue: 0,
        cinematography: 0,
        editing: 0,
        soundtrack: 0,
        directing: 0,
        it_factor: 0,
      };

      const ratings: Ratings = {
        plot: Rating.GREAT,
        attraction: Rating.GREAT,
        theme: Rating.GREAT,
        acting: Rating.GREAT,
        dialogue: Rating.GREAT,
        cinematography: Rating.GREAT,
        editing: Rating.GREAT,
        soundtrack: Rating.GREAT,
        directing: Rating.GREAT,
        it_factor: Rating.GREAT,
      };
      const expectedWeightedScore = 0;

      expect(calculateWeightedScore({ ratings, weights })).toBe(
        expectedWeightedScore,
      );
    });

    it("should return 5 when all weights are 10 and all ratings are OK(5)", () => {
      const weights: Required<Ratings> = {
        plot: 10,
        attraction: 10,
        theme: 10,
        acting: 10,
        dialogue: 10,
        cinematography: 10,
        editing: 10,
        soundtrack: 10,
        directing: 10,
        it_factor: 10,
      };

      const ratings: Ratings = {
        plot: Rating.OK,
        attraction: Rating.OK,
        theme: Rating.OK,
        acting: Rating.OK,
        dialogue: Rating.OK,
        cinematography: Rating.OK,
        editing: Rating.OK,
        soundtrack: Rating.OK,
        directing: Rating.OK,
        it_factor: Rating.OK,
      };
      const expectedWeightedScore = 5;

      expect(calculateWeightedScore({ ratings, weights })).toBe(
        expectedWeightedScore,
      );
    });

    it("should return 0 when all weights are 10 and all ratings are BAD(0)", () => {
      const weights: Required<Ratings> = {
        plot: 10,
        attraction: 10,
        theme: 10,
        acting: 10,
        dialogue: 10,
        cinematography: 10,
        editing: 10,
        soundtrack: 10,
        directing: 10,
        it_factor: 10,
      };

      const ratings: Ratings = {
        plot: Rating.BAD,
        attraction: Rating.BAD,
        theme: Rating.BAD,
        acting: Rating.BAD,
        dialogue: Rating.BAD,
        cinematography: Rating.BAD,
        editing: Rating.BAD,
        soundtrack: Rating.BAD,
        directing: Rating.BAD,
        it_factor: Rating.BAD,
      };
      const expectedWeightedScore = 0;

      expect(calculateWeightedScore({ ratings, weights })).toBe(
        expectedWeightedScore,
      );
    });

    it("should return 0 when all weights are 0 and all ratings are BAD(0)", () => {
      const weights: Required<Ratings> = {
        plot: 0,
        attraction: 0,
        theme: 0,
        acting: 0,
        dialogue: 0,
        cinematography: 0,
        editing: 0,
        soundtrack: 0,
        directing: 0,
        it_factor: 0,
      };

      const ratings: Ratings = {
        plot: Rating.BAD,
        attraction: Rating.BAD,
        theme: Rating.BAD,
        acting: Rating.BAD,
        dialogue: Rating.BAD,
        cinematography: Rating.BAD,
        editing: Rating.BAD,
        soundtrack: Rating.BAD,
        directing: Rating.BAD,
        it_factor: Rating.BAD,
      };
      const expectedWeightedScore = 0;

      expect(calculateWeightedScore({ ratings, weights })).toBe(
        expectedWeightedScore,
      );
    });

    it("should return 0 when all weights are 0 and all ratings are GREAT(10)", () => {
      const weights: Required<Ratings> = {
        plot: 0,
        attraction: 0,
        theme: 0,
        acting: 0,
        dialogue: 0,
        cinematography: 0,
        editing: 0,
        soundtrack: 0,
        directing: 0,
        it_factor: 0,
      };

      const ratings: Ratings = {
        plot: Rating.GREAT,
        attraction: Rating.GREAT,
        theme: Rating.GREAT,
        acting: Rating.GREAT,
        dialogue: Rating.GREAT,
        cinematography: Rating.GREAT,
        editing: Rating.GREAT,
        soundtrack: Rating.GREAT,
        directing: Rating.GREAT,
        it_factor: Rating.GREAT,
      };
      const expectedWeightedScore = 0;

      expect(calculateWeightedScore({ ratings, weights })).toBe(
        expectedWeightedScore,
      );
    });
  });
});
