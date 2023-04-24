import { GuessNoteQuizQuestionModel as Model } from '@/models/quiz-questions';
import { QuizQuestionSingleChoiceModel } from '@/models/abstract';
import { NoteModel } from '@/models';

describe('GuessNoteQuizQuestionModel', () => {
  describe('#new', () => {
    let question: Model;

    beforeEach(() => {
      question = new Model({ choices: [NoteModel.createFromScientificPitchNotation('C4')] });
    });

    it("should extend QuizQuestionModel", () => {
      expect(question).toBeInstanceOf(QuizQuestionSingleChoiceModel);
    });

    it('should have the expected question text', () => {
      expect(question.text).toBe('What is the name of following note?');
    });

    it('should set the clef configuration to treble', () => {
      expect(question.config.clef).toBe('treble');
    });

    describe('when creating a Quiz question with a given clef', () => {
      it('should set the clef configuration to the given clef', () => {
        const clef = 'bass';
        question = new Model({ choices: [NoteModel.createFromScientificPitchNotation('C4')], clef });

        expect(question.config.clef).toBe(clef);
      });
    });
  });
});
