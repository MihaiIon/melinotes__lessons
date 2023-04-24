import { GuessNoteQuizzQuestionModel as Model } from '@/models/quizz-questions';
import { QuizzQuestionWithChoicesModel } from '@/models/abstract';
import { NoteModel } from '@/models';

describe('GuessNoteQuizzQuestionModel', () => {
  describe('#new', () => {
    let question: Model;

    beforeEach(() => {
      question = new Model({ choices: [NoteModel.createFromScientificPitchNotation('C4')] });
    });

    it("should extend QuizzQuestionModel", () => {
      expect(question).toBeInstanceOf(QuizzQuestionWithChoicesModel);
    });

    it('should have the expected question text', () => {
      expect(question.text).toBe('What is the name of following note?');
    });

    it('should set the clef configuration to treble', () => {
      expect(question.config.clef).toBe('treble');
    });

    describe('when creating a quizz question with a given clef', () => {
      it('should set the clef configuration to the given clef', () => {
        const clef = 'bass';
        question = new Model({ choices: [NoteModel.createFromScientificPitchNotation('C4')], clef });

        expect(question.config.clef).toBe(clef);
      });
    });
  });
});
