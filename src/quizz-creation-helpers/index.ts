import { QuizzModel, NoteModel } from "@/models";

import { TrebleClefNaturalNoteQuizzQuestionGeneratorModel } from "@/models/quizz-question-generators";

export const createTrebleClefNaturalNoteQuizz = (questionsCount: number = 12): QuizzModel<NoteModel> => {
  const generator = new TrebleClefNaturalNoteQuizzQuestionGeneratorModel();

  const questions = [];
  for(let i = 0; i < questionsCount; i++) {
    questions.push(generator.generate());
  }
  return new QuizzModel<NoteModel>({ questions });
};
