import QuizzModel from "@/models/quizz-model";

import { naturalNotesBetween } from "../helpers";

export const createTrebleClefNaturalNoteQuizz = () => {
  const allChoices = naturalNotesBetween("A3", "D6");

  return new QuizzModel({ allChoices });
};
