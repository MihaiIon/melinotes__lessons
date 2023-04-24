import { QuizzQuestionModelV2 as Model } from "@/models/quizz-questions";
import { IQuizzQuestionModelParams } from "@/models/quizz-questions/quizz-question-model-v2";

import { QuizzQuestionGeneratorModel } from "@/models/quizz-question-generators";

interface IExampleQuizzQuestionModelParams extends IQuizzQuestionModelParams<string> {}

class ExampleQuizzQuestionModel extends Model<string> {
  constructor(params: IExampleQuizzQuestionModelParams = {}) {
    super(params);
  }
}

describe("QuizzQuestionModel (extended by ExampleQuizzQuestionModel)", () => {
  describe("#new", () => {
    let question: ExampleQuizzQuestionModel;

    beforeEach(() => {
      question = new ExampleQuizzQuestionModel();
    });

    it("should create a new instance of QuizzQuestionModel", () => {
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

    it('should not have a question generator object in the question configuration', () => {
      expect(question.config.generator).toBe(null);
    });

    describe("when creating a quizz question with a generator", () => {
      it("should set the generator in the question configuration", () => {
        const generator = new QuizzQuestionGeneratorModel();
        question = new ExampleQuizzQuestionModel({ generator });

        expect(question.config.generator).toBe(generator);
      });
    });

    describe("when creating a quizz question with a given answer", () => {
      it("should set the answer in the question configuration", () => {
        const answer = "this_is_the_correct_answer";
        question = new ExampleQuizzQuestionModel({ answer });

        expect(question.config.answer).toBe(answer);
      });
    });
  });

  describe("#setUserAnswer", () => {
    let question: ExampleQuizzQuestionModel;
    const answer = "this_is_the_correct_answer";

    beforeEach(() => {
      question = new ExampleQuizzQuestionModel({ answer });
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
