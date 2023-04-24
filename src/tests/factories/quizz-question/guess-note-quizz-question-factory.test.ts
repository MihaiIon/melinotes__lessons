import { GuessNoteQuizzQuestionFactory } from '@/factories/quizz-question';
import { GuessNoteQuizzQuestionModel } from "@/models/quizz-questions";
import { NoteModel } from '@/models';

describe('GuessNoteQuizzQuestionFactory', () => {
  describe(".createForTrebleClef", () => {
    let question: GuessNoteQuizzQuestionModel;

    beforeEach(() => {
      question = GuessNoteQuizzQuestionFactory.createForTrebleClef();
    });

    it('should return an instance of the GuessNoteQuizzQuestionModel class', () => {
      expect(question).toBeInstanceOf(GuessNoteQuizzQuestionModel);
    });

    it("should return a quizz question configured for the treble clef", () => {
      expect(question.config.clef).toBe('treble');
    });

    it("should return a quizz question with a question text", () => {});

    it('should return a quizz question containing only natural notes', () => {
      const allChoicesValue = question.config.allChoices.map(choice => choice.value);
      const allChoicesValueSet = new Set(allChoicesValue);

      expect(allChoicesValueSet).toEqual(new Set(["C", "D", "E", "F", "G", "A", "B"]));
    });

    it('should return a question containing only natural notes from A3 to D6', () => {
      const allChoicesScientificPitchNotation = question.config.allChoices.map(choice => choice.scientificPitchNotation);
      const allChoicesScientificPitchNotationSet = new Set(allChoicesScientificPitchNotation);

      expect(allChoicesScientificPitchNotationSet).toEqual(new Set(["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6", "D6"]));
    });
  });
});
