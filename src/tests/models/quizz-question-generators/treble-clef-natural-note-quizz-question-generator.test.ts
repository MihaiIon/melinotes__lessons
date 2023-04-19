import { TrebleClefNaturalNoteQuizzQuestionGeneratorModel as Generator, QuizzQuestionGeneratorModel } from "@/models/quizz-question-generators";
import { QuizzQuestionModel } from "@/models";

describe("TrebleClefNaturalNoteQuizzQuestionGeneratorModel", () => {
  describe('#new', () => {
    it("should extend QuizzQuestionGeneratorModel", () => {
      const generator = new Generator();

      expect(generator).toBeInstanceOf(QuizzQuestionGeneratorModel);
    });
  });

  describe('#generate', () => {
    it("should return a QuizzQuestionModel object", () => {
      const generator = new Generator();
      const question = generator.generate();

      expect(question).toBeInstanceOf(QuizzQuestionModel);
    });

    it('should return a question containing only natural notes', () => {
      const generator = new Generator();
      const question = generator.generate();

      const allChoicesValue = question.config.allChoices.map(choice => choice.value);
      const allChoicesValueSet = new Set(allChoicesValue);

      expect(allChoicesValueSet).toEqual(new Set(["C", "D", "E", "F", "G", "A", "B"]));
    });

    it('should return a question containing only natural notes from A3 to D6', () => {
      const generator = new Generator();
      const question = generator.generate();

      const allChoicesScientificPitchNotation = question.config.allChoices.map(choice => choice.scientificPitchNotation);
      const allChoicesScientificPitchNotationSet = new Set(allChoicesScientificPitchNotation);

      expect(allChoicesScientificPitchNotationSet).toEqual(new Set(["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6", "D6"]));
    });

    it('should return a question containing 4 distinct choices (100 tries)', () => {
      const generator = new Generator();
      let question, choicesValue, choicesValueSet;

      for (let i = 0; i < 100; i++) {
        question = generator.generate();

        choicesValue = question.choices.map(choice => choice.value);
        choicesValueSet = new Set(choicesValue);

        expect(choicesValueSet.size).toBe(4);
      }
    });
  });
});
