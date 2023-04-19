import { createTrebleClefNaturalNoteQuizz } from "@/quizz-creation-helpers";
import QuizzModel from "@/models/quizz-model";

describe("createTrebleClefNaturalNoteQuizz", () => {
  it("should return a QuizzModel object", () => {
    const quizz = createTrebleClefNaturalNoteQuizz();

    expect(quizz).toBeInstanceOf(QuizzModel);
  });

  describe("by default", () => {
    it("should return a quizz with 12 questions", () => {
      const quizz = createTrebleClefNaturalNoteQuizz();

      expect(quizz.questions.length).toBe(12);
    });
  });
});
