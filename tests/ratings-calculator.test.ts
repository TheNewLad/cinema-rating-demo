import { describe, it, expect } from "vitest";
import {
  calculateUnweightedScore,
  calculateWeightedScore,
} from "../src/lib/utils";
import { Rating, Ratings } from "../src/types";

describe("Ratings Calculator", () => {
  const ratings = {
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
      const ratings = {};
      const expectedUnweightedScore = 0;

      expect(calculateUnweightedScore(ratings)).toBe(expectedUnweightedScore);
    });

    it("should return 0 when all ratings are BAD(0)", () => {
      const ratings = {
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
      const ratings = {
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
      const ratings = {
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
});
