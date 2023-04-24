// import { QuizzQuestionModel } from "@/models/quizz-questions";
// import { NoteModel } from "@/models";

// type ValidQuizzQuestionType = NoteModel

// interface QuizzModelParams<ValidQuizzQuestionType> {
//   questions: QuizzQuestionModel<ValidQuizzQuestionType>[];
// };

// export default class QuizzModel<ValidQuizzQuestionType> {
//   score: number;
//   questions: QuizzQuestionModel<ValidQuizzQuestionType>[];
//   questionsCount: number;

//   constructor(params: QuizzModelParams<ValidQuizzQuestionType>) {
//     this.score = 0;

//     this.questions = params.questions;
//     this.questionsCount = params.questions.length;
//     this.validateQuestions();
//   }

//   private validateQuestions() {
//     if(this.questionsCount === 0) {
//       throw new Error("A quizz must contain questions");
//     }
//   }
// }
