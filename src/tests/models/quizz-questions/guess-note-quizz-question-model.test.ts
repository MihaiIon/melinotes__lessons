import { GuessNoteQuizzQuestionModel as Model } from '@/models/quizz-questions';
import { QuizzQuestionWithChoicesModel } from '@/models/abstract';
import { NoteModel } from '@/models';

describe('NoteQuizzQuestionModel', () => {
  describe('#new', () => {
    it("should extend QuizzQuestionModel", () => {
      const question = new Model({ choices: [NoteModel.createFromScientificPitchNotation('C4')] });

      expect(question).toBeInstanceOf(QuizzQuestionWithChoicesModel);
    });
  });

  // describe("#selectChoice", () => {
  //   describe("when selecting an incorrect choice", () => {
  //     it('should mark the question as incorrectly answered', () => {
  //       const choices = [NoteModel.createFromScientificPitchNotation('C4'), NoteModel.createFromScientificPitchNotation('D4')];
  //       const question = new Model({ choices });

  //       question.selectChoice(NoteModel.createFromScientificPitchNotation('E4'));
  //       expect(question.isCorrectlyAnswered).toBe(false);
  //     });
  //   });

  //   describe("when selecting the correct choice", () => {
  //     it('should mark the question as correctly answered', () => {
  //       const choices = [NoteModel.createFromScientificPitchNotation('C4'), NoteModel.createFromScientificPitchNotation('D4')];
  //       const question = new Model({ choices });

  //       question.selectChoice(question.answer);
  //       expect(question.isCorrectlyAnswered).toBe(true);
  //     });
  //   });
  // });
});
