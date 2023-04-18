import QuizzModel from "@/models/quizz-model";

import TrebleClefNaturalNoteQuizzGeneratorModel from "@/models/quizz-generators/treble-clef-natural-note-quizz-generator-model";

export const createTrebleClefNaturalNoteQuizz = () => {
  const generator = new TrebleClefNaturalNoteQuizzGeneratorModel();

  return generator.generate();
};
