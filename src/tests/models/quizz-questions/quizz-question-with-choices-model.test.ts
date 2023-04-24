import { QuizzQuestionWithChoicesModel as Model, QuizzQuestionModel } from '@/models/quizz-questions';

describe('QuizzQuestionWithChoicesModel', () => {
  describe('#new', () => {
    let question: Model<string>;

    beforeEach(() => {
      question = new Model({ choices: ['A', 'B', 'C', 'D'] });
    });

    it("should extend QuizzQuestionModel", () => {
      expect(question).toBeInstanceOf(QuizzQuestionModel);
    });

    it('should have a generic question text', () => {
      expect(question.text).toBe('What is the correct answer?');
    });

    it('should have a generic question (with choices) category', () => {
      expect(question.category).toBe('make a choice');
    });

    describe("when creating a quizz question without choices", () => {
      it("should throw an error describing that the choices are required", () => {
        expect(() => new Model({ choices: [] })).toThrowError("A quizz question with choices must contain choices");
      });
    });

    describe("when creating a quizz question with valid choices", () => {
      it("should create a quizz with the given choices", () => {
        const choices = ["A", "B", "C", "D"];
        const question = new Model({ choices });

        expect(question.choices).toBe(choices);
        expect(question.choicesCount).toBe(4);

        expect(question.config.allChoices).toBe(choices);
        expect(question.config.allChoicesCount).toBe(4);
      });

      it('should select an answer from the quizz choices (100 tries)', () => {
        let question;
        const choices = ["A", "B", "C", "D", "E", "F", "G"];
        
        for (let i = 0; i < 100; i++) {
          question = new Model({ choices });
          
          expect(question.choices).toContain(question.config.answer);
        }
      });
    });
  });

  describe("#setUserAnswer", () => {
    let question: Model<string>;

    beforeEach(() => {
      question = new Model({ choices: ['A', 'B', 'C', 'D'] });
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
