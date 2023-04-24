import { QuizzQuestionWithChoicesModel } from '@/models/abstract';
import { IQuizzQuestionWithChoicesModelParams, IQuizzQuestionWithChoicesModelConfig } from '@/models/abstract/quizz-question-with-choices-model';
import NoteModel from '@/models/note-model';

import { CLEF_TYPES } from '@/constants';

interface IGuessNoteQuizzQuestionModelParams<NoteModel> extends IQuizzQuestionWithChoicesModelParams<NoteModel> {
  clef?: string;
};

interface IGuessNoteQuizzQuestionModelConfig<NoteModel> extends IQuizzQuestionWithChoicesModelConfig<NoteModel> {
  clef: string;
};

export default class GuessNoteQuizzQuestionModel extends QuizzQuestionWithChoicesModel<NoteModel> {
  text: string = "What is the name of following note?";

  config: IGuessNoteQuizzQuestionModelConfig<NoteModel> = {
    ...this.config,
    clef: CLEF_TYPES.TREBLE
  };

  constructor(params: IGuessNoteQuizzQuestionModelParams<NoteModel>) {
    super(params);
  }
}
