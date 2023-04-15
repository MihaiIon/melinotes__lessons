import { createTrebleClefNaturalNoteQuizz } from "@/quizz-creation";
import QuizzModel from "@/models/quizz-model";

describe("createTrebleClefNaturalNoteQuizz", () => {
  it("should return a QuizzModel object", () => {
    const quizz = createTrebleClefNaturalNoteQuizz();

    expect(quizz).toBeInstanceOf(QuizzModel);
  });

  describe("by default", () => {
    it('should generate 4 quizz choices', () => {
      const quizz = createTrebleClefNaturalNoteQuizz();

      expect(quizz.choices.length).toBe(4);
      expect(quizz.config.choicesCount).toBe(4);
    });

    it('should contain only natural notes', () => {
      const quizz = createTrebleClefNaturalNoteQuizz();
      const allChoicesValue = quizz.config.allChoices.map(choice => choice.value);
      const allChoicesValueSet = new Set(allChoicesValue);

      expect(allChoicesValueSet).toEqual(new Set(["C", "D", "E", "F", "G", "A", "B"]));
    });

    it('should contain natural notes from A3 to D6', () => {
      const quizz = createTrebleClefNaturalNoteQuizz();
      const allChoicesScientificPitchNotation = quizz.config.allChoices.map(choice => choice.scientificPitchNotation);
      const allChoicesScientificPitchNotationSet = new Set(allChoicesScientificPitchNotation);

      expect(allChoicesScientificPitchNotationSet).toEqual(new Set(["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6", "D6"]));
    });

    it('should select an answer from the quizz choices (100 tries)', () => {
      let quizz;
      let choicesValue;

      for (let i = 0; i < 100; i++) {
        quizz = createTrebleClefNaturalNoteQuizz();

        choicesValue = quizz.choices.map(choice => choice.value);

        expect(choicesValue).toContain(quizz.answer.value);
      }
    }); 
  });
});
