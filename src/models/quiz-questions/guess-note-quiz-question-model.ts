import { QuizQuestionSingleChoiceModel } from '@/models/abstract';
import { IQuizQuestionSingleChoiceModelParams, IQuizQuestionSingleChoiceModelConfig } from '@/models/abstract/quiz-question-slingle-choice-model';
import NoteModel from '@/models/note-model';

import { CLEF_TYPES } from '@/constants';

interface IGuessNoteQuizQuestionModelParams extends IQuizQuestionSingleChoiceModelParams<NoteModel> {
  clef?: string;
};

interface IGuessNoteQuizQuestionModelConfig extends IQuizQuestionSingleChoiceModelConfig<NoteModel> {
  clef: string;
};

export default class GuessNoteQuizQuestionModel extends QuizQuestionSingleChoiceModel<NoteModel> {
  text: string = "What is the name of following note?";

  config: IGuessNoteQuizQuestionModelConfig = {
    ...this.config,
    clef: CLEF_TYPES.TREBLE
  };

  constructor(params: IGuessNoteQuizQuestionModelParams) {
    super(params);

    this.initializeConfigFromParams(params);
  }

  protected initializeConfigFromParams(params: IGuessNoteQuizQuestionModelParams): void {
    super.initializeConfigFromParams(params);

    this.config.clef = params.clef || this.config.clef;
  }
}
