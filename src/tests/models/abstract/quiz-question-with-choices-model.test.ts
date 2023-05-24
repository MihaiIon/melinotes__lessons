import { QuizQuestionSingleChoiceModel as Model } from '@/models/abstract';
import { IQuizQuestionSingleChoiceModelParams } from "@/models/abstract/quiz-question-slingle-choice-model";

class ExampleQuizQuestionSingleChoiceModel extends Model<string> {
  constructor(params: IQuizQuestionSingleChoiceModelParams<string>) {
    super(params);
  }
}

describe('QuizQuestionSingleChoiceModel (extended by ExampleQuizQuestionSingleChoiceModel)', () => {
  describe('#new', () => {
    let question: ExampleQuizQuestionSingleChoiceModel;

    beforeEach(() => {
      question = new ExampleQuizQuestionSingleChoiceModel({ choices: ['A', 'B', 'C', 'D'] });
    });

    it("should extend QuizQuestionModel", () => {
      expect(question).toBeInstanceOf(Model);
    });

    it('should have a generic question text', () => {
      expect(question.text).toBe('What is the correct answer?');
    });

    it('should have a generic question (with choices) category', () => {
      expect(question.category).toBe('make a choice');
    });

    describe("when creating a Quiz question without choices", () => {
      it("should throw an error describing that the choices are required", () => {
        expect(() => new ExampleQuizQuestionSingleChoiceModel({ choices: [] })).toThrowError("A Quiz question with choices must contain choices");
      });
    });

    describe("when creating a Quiz question with valid choices", () => {
      it("should create a Quiz with the given choices", () => {
        const choices = ["A", "B", "C", "D"];
        const question = new ExampleQuizQuestionSingleChoiceModel({ choices });

        expect(question.choices).toBe(choices);
        expect(question.choicesCount).toBe(4);

        expect(question.config.allChoices).toBe(choices);
        expect(question.config.allChoicesCount).toBe(4);
      });

      it('should select an answer from the Quiz choices (100 tries)', () => {
        let question;
        const choices = ["A", "B", "C", "D", "E", "F", "G"];
        
        for (let i = 0; i < 100; i++) {
          question = new ExampleQuizQuestionSingleChoiceModel({ choices });
          
          expect(question.choices).toContain(question.config.answer);
        }
      });
    });
  });

  describe("#setUserAnswer", () => {
    let question: ExampleQuizQuestionSingleChoiceModel;

    beforeEach(() => {
      question = new ExampleQuizQuestionSingleChoiceModel({ choices: ['A', 'B', 'C', 'D'] });
    });

    describe("when selecting an incorrect choice", () => {
      it('should mark the question as incorrectly answered', () => {
        expect(question.isCorrectlyAnswered).toBe(null);

        question.setUserAnswer('E');
        expect(question.isCorrectlyAnswered).toBe(false);
      });
    });

    describe("when selecting the correct choice", () => {
      it('should mark the question as correctly answered', () => {
        expect(question.isCorrectlyAnswered).toBe(null);

        question.setUserAnswer(question.config.answer);
        expect(question.isCorrectlyAnswered).toBe(true);
      });
    });
  });
});
