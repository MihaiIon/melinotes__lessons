import { QuizzQuestionWithChoicesModel } from '@/models/abstract';
import { IQuizzQuestionWithChoicesModelParams } from '@/models/abstract/quizz-question-with-choices-model';

interface IGuessNoteQuizzQuestionModelParams<NoteModel> extends IQuizzQuestionWithChoicesModelParams<NoteModel> {};

export default class GuessNoteQuizzQuestionModel<NoteModel> extends QuizzQuestionWithChoicesModel<NoteModel> {
  constructor(params: IGuessNoteQuizzQuestionModelParams<NoteModel>) {
    super(params);
  }
}
