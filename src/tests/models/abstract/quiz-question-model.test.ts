import { QuizQuestionModel as Model } from "@/models/abstract";
import { IQuizQuestionModelParams } from "@/models/abstract/quiz-question-model";

class ExampleQuizQuestionModel extends Model<string> {
  constructor(params: IQuizQuestionModelParams<string> = {}) {
    super(params);
  }
}

describe("QuizQuestionModel (extended by ExampleQuizQuestionModel)", () => {
  describe("#new", () => {
    let question: ExampleQuizQuestionModel;

    beforeEach(() => {
      question = new ExampleQuizQuestionModel();
    });

    it("should create a new instance of QuizQuestionModel", () => {
      expect(question).toBeInstanceOf(Model);
    });

    it("should set a generic text asking the user to answer the question", () => {
      expect(question.text).toBe("Question");
    });

    it("should set a generic category", () => {
      expect(question.category).toBe("Generic");
    });

    it('should not be answered', () => {
      expect(question.userAnswer).toBeNull();
      expect(question.answered).toBe(false);
      expect(question.isCorrectlyAnswered).toBeNull();
    });

    describe("when creating a Quiz question with a given answer", () => {
      it("should set the answer in the question configuration", () => {
        const answer = "this_is_the_correct_answer";
        question = new ExampleQuizQuestionModel({ answer });

        expect(question.config.answer).toBe(answer);
      });
    });
  });

  describe("#setUserAnswer", () => {
    let question: ExampleQuizQuestionModel;
    const answer = "this_is_the_correct_answer";

    beforeEach(() => {
      question = new ExampleQuizQuestionModel({ answer });
    });

    it("should set the answer of the question", () => {
      const userAnswer = "user_answer";

      question.setUserAnswer(userAnswer);
      expect(question.userAnswer).toBe(userAnswer);
    });

    it('should mark the question as answered', () => {
      expect(question.answered).toBe(false);
      
      question.setUserAnswer(answer);
      expect(question.answered).toBe(true);
    });

    describe("when the user's answer is already set", () => {
      it("should not change the user's answer", () => {
        const userAnswer = "user_answer";

        question.setUserAnswer(userAnswer);
        question.setUserAnswer("some_other_answer");

        expect(question.userAnswer).toBe(userAnswer);
      });
    });

    describe("when the user's answer is wrong", () => {
      it('should mark the question as incorrectly answered', () => {
        expect(question.isCorrectlyAnswered).toBe(null);

        question.setUserAnswer('wrong_answer');
        expect(question.isCorrectlyAnswered).toBe(false);
      });
    });

    describe("when selecting the correct choice", () => {
      it('should mark the question as correctly answered', () => {
        expect(question.isCorrectlyAnswered).toBe(null);

        question.setUserAnswer(answer);
        expect(question.isCorrectlyAnswered).toBe(true);
      });
    });
  });
});
