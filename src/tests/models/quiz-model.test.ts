// import { QuizModel as Model, NoteModel } from "@/models";
// import { QuizQuestionModel, NoteQuizQuestionModel } from "@/models/quiz-questions";

// describe("QuizModel", () => {
//   describe("#new", () => {
//     describe("when creating a Quiz without questions", () => {
//       it("should throw an error describing that the questions are required", () => {
//         expect(() => new Model({ questions: [] })).toThrowError("A Quiz must contain questions");
//       });
//     });

//     describe("when creating a Quiz with 4 questions of the same type", () => {
//       let questions: QuizQuestionModel<string>[];
//       let Quiz: Model<string>;

//       beforeEach(() => {
//         questions = ["A", "B", "C", "D"].map((choice) => new QuizQuestionModel({ choices: [choice] }));
//         Quiz = new Model({ questions });
//       });

//       it("should create a Quiz with the given questions", () => {
//         expect(Quiz.questions).toBe(questions);
//         expect(Quiz.questionsCount).toBe(4);

//         expect(Quiz.questions[0].choices).toStrictEqual(["A"]);
//         expect(Quiz.questions[1].choices).toStrictEqual(["B"]);
//         expect(Quiz.questions[2].choices).toStrictEqual(["C"]);
//         expect(Quiz.questions[3].choices).toStrictEqual(["D"]);
//       });

//       it("should create a Quiz with a score of 0", () => {
//         expect(Quiz.score).toBe(0);
//       });

//       describe("when answering the first question correctly", () => {
//         it("should have a score of 25% (100 / 4 questions)", () => {
//           questions[0].selectChoice("A");

//           expect(Quiz.score).toBe(25);
//         });
//       });

//       describe("when answering the first 2 questions correctly", () => {
//         it("should have a score of 50% ((100% / 4 questions) * 2 correct questions))", () => {
//           questions[0].selectChoice("A");
//           questions[1].selectChoice("B");

//           expect(Quiz.score).toBe(25);
//         });
//       });

//       describe("when answering the first 3 questions correctly", () => {
//         it("should have a score of 75% ((100% / 4 questions) * 3 correct questions))", () => {
//           questions[0].selectChoice("A");
//           questions[1].selectChoice("B");
//           questions[2].selectChoice("C");

//           expect(Quiz.score).toBe(75);
//         });
//       });

//       describe("when answering all the questions correctly", () => {
//         it("should have a score of 100% ((100% / 4 questions) * 4 correct questions))", () => {
//           questions[0].selectChoice("A");
//           questions[1].selectChoice("B");
//           questions[2].selectChoice("C");
//           questions[3].selectChoice("D");

//           expect(Quiz.score).toBe(100);
//         });
//       });

//       describe("when answering 2 questions correctly and 2 questions incorrectly", () => {
//         it("should have a score of 50% ((100% / 4 questions) * 2 correct questions))", () => {
//           questions[0].selectChoice("A");
//           questions[1].selectChoice("X");
//           questions[2].selectChoice("C");
//           questions[3].selectChoice("X");

//           expect(Quiz.score).toBe(50);
//         });
//       });
//     });

//     describe("when creating a Quiz with 4 questions of different types", () => {
//       let questions: QuizQuestionModel<string | NoteModel>[];
//       let Quiz: Model<string | NoteModel>;

//       beforeEach(() => {
//         questions = [
//           new QuizQuestionModel({ choices: ["A"] }),
//           new QuizQuestionModel({ choices: ["B"] }),
//           new QuizQuestionModel({ choices: [NoteModel.createFromScientificPitchNotation("C4")] }),
//           new QuizQuestionModel({ choices: [NoteModel.createFromScientificPitchNotation("D4")] }),
//         ];
//         Quiz = new Model({ questions });
//       });

//       it("should create a Quiz with the given questions", () => {
//         expect(Quiz.questions).toBe(questions);
//         expect(Quiz.questionsCount).toBe(4);

//         expect(Quiz.questions[0].choices).toStrictEqual(["A"]);
//         expect(Quiz.questions[1].choices).toStrictEqual(["B"]);
//         expect(Quiz.questions[2].choices).toStrictEqual([NoteModel.createFromScientificPitchNotation("C4")]);
//         expect(Quiz.questions[3].choices).toStrictEqual([NoteModel.createFromScientificPitchNotation("D4")]);
//       });
//     });
//   });
// });
