// import { QuizzModel as Model, NoteModel } from "@/models";
// import { QuizzQuestionModel, NoteQuizzQuestionModel } from "@/models/quizz-questions";

// describe("QuizzModel", () => {
//   describe("#new", () => {
//     describe("when creating a quizz without questions", () => {
//       it("should throw an error describing that the questions are required", () => {
//         expect(() => new Model({ questions: [] })).toThrowError("A quizz must contain questions");
//       });
//     });

//     describe("when creating a quizz with 4 questions of the same type", () => {
//       let questions: QuizzQuestionModel<string>[];
//       let quizz: Model<string>;

//       beforeEach(() => {
//         questions = ["A", "B", "C", "D"].map((choice) => new QuizzQuestionModel({ choices: [choice] }));
//         quizz = new Model({ questions });
//       });

//       it("should create a quizz with the given questions", () => {
//         expect(quizz.questions).toBe(questions);
//         expect(quizz.questionsCount).toBe(4);

//         expect(quizz.questions[0].choices).toStrictEqual(["A"]);
//         expect(quizz.questions[1].choices).toStrictEqual(["B"]);
//         expect(quizz.questions[2].choices).toStrictEqual(["C"]);
//         expect(quizz.questions[3].choices).toStrictEqual(["D"]);
//       });

//       it("should create a quizz with a score of 0", () => {
//         expect(quizz.score).toBe(0);
//       });

//       describe("when answering the first question correctly", () => {
//         it("should have a score of 25% (100 / 4 questions)", () => {
//           questions[0].selectChoice("A");

//           expect(quizz.score).toBe(25);
//         });
//       });

//       describe("when answering the first 2 questions correctly", () => {
//         it("should have a score of 50% ((100% / 4 questions) * 2 correct questions))", () => {
//           questions[0].selectChoice("A");
//           questions[1].selectChoice("B");

//           expect(quizz.score).toBe(25);
//         });
//       });

//       describe("when answering the first 3 questions correctly", () => {
//         it("should have a score of 75% ((100% / 4 questions) * 3 correct questions))", () => {
//           questions[0].selectChoice("A");
//           questions[1].selectChoice("B");
//           questions[2].selectChoice("C");

//           expect(quizz.score).toBe(75);
//         });
//       });

//       describe("when answering all the questions correctly", () => {
//         it("should have a score of 100% ((100% / 4 questions) * 4 correct questions))", () => {
//           questions[0].selectChoice("A");
//           questions[1].selectChoice("B");
//           questions[2].selectChoice("C");
//           questions[3].selectChoice("D");

//           expect(quizz.score).toBe(100);
//         });
//       });

//       describe("when answering 2 questions correctly and 2 questions incorrectly", () => {
//         it("should have a score of 50% ((100% / 4 questions) * 2 correct questions))", () => {
//           questions[0].selectChoice("A");
//           questions[1].selectChoice("X");
//           questions[2].selectChoice("C");
//           questions[3].selectChoice("X");

//           expect(quizz.score).toBe(50);
//         });
//       });
//     });

//     describe("when creating a quizz with 4 questions of different types", () => {
//       let questions: QuizzQuestionModel<string | NoteModel>[];
//       let quizz: Model<string | NoteModel>;

//       beforeEach(() => {
//         questions = [
//           new QuizzQuestionModel({ choices: ["A"] }),
//           new QuizzQuestionModel({ choices: ["B"] }),
//           new QuizzQuestionModel({ choices: [NoteModel.createFromScientificPitchNotation("C4")] }),
//           new QuizzQuestionModel({ choices: [NoteModel.createFromScientificPitchNotation("D4")] }),
//         ];
//         quizz = new Model({ questions });
//       });

//       it("should create a quizz with the given questions", () => {
//         expect(quizz.questions).toBe(questions);
//         expect(quizz.questionsCount).toBe(4);

//         expect(quizz.questions[0].choices).toStrictEqual(["A"]);
//         expect(quizz.questions[1].choices).toStrictEqual(["B"]);
//         expect(quizz.questions[2].choices).toStrictEqual([NoteModel.createFromScientificPitchNotation("C4")]);
//         expect(quizz.questions[3].choices).toStrictEqual([NoteModel.createFromScientificPitchNotation("D4")]);
//       });
//     });
//   });
// });
