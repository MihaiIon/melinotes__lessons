import { QuizzModel as Model, QuizzQuestionModel, NoteModel } from "@/models";
import { TrebleClefNaturalNoteQuizzQuestionGeneratorModel } from "@/models/quizz-question-generators";

describe("QuizzModel", () => {
  describe("#new", () => {
    describe("when creating a quizz without questions", () => {
      it("should throw an error describing that the questions are required", () => {
        expect(() => new Model({ questions: [] })).toThrowError("A quizz must contain questions");
      });
    });

    describe("when creating a quizz with 4 questions", () => {
      let questions: QuizzQuestionModel<NoteModel>[];

      beforeEach(() => {
        const generator = new TrebleClefNaturalNoteQuizzQuestionGeneratorModel();
        questions = [generator.generate(), generator.generate(), generator.generate(), generator.generate()];
      });

      it("should create a quizz with the given questions", () => {
        const quizz = new Model({ questions });

        expect(quizz.questions).toBe(questions);
        expect(quizz.questionsCount).toBe(4);
      });

      it("should create a quizz with a score of 0", () => {
        const quizz = new Model({ questions });

        expect(quizz.score).toBe(0);
      });
    });
  });
});
