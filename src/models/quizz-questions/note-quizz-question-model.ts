import { QuizzQuestionModel } from '.';

import { IQuizzQuestionModelParams } from './quizz-question-model';

interface INoteQuizzQuestionModelParams<NoteModel> extends IQuizzQuestionModelParams<NoteModel> {
  choices: NoteModel[];
  allChoices?: NoteModel[];
};

export default class NoteQuizzQuestionModel<NoteModel> extends QuizzQuestionModel<NoteModel> {
  constructor(params: INoteQuizzQuestionModelParams<NoteModel>) {
    super(params);
  }
}
