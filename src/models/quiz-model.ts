// import { QuizQuestionModel } from "@/models/quiz-questions";
// import { NoteModel } from "@/models";

// type ValidQuizQuestionType = NoteModel

// interface QuizModelParams<ValidQuizQuestionType> {
//   questions: QuizQuestionModel<ValidQuizQuestionType>[];
// };

// export default class QuizModel<ValidQuizQuestionType> {
//   score: number;
//   questions: QuizQuestionModel<ValidQuizQuestionType>[];
//   questionsCount: number;

//   constructor(params: QuizModelParams<ValidQuizQuestionType>) {
//     this.score = 0;

//     this.questions = params.questions;
//     this.questionsCount = params.questions.length;
//     this.validateQuestions();
//   }

//   private validateQuestions() {
//     if(this.questionsCount === 0) {
//       throw new Error("A Quiz must contain questions");
//     }
//   }
// }
