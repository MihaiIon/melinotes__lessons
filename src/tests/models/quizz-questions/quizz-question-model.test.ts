import { QuizzQuestionModel as Model } from "@/models/quizz-questions";

describe("QuizzQuestionModel", () => {
  describe("#new", () => {
    describe("when creating a quizz question without choices", () => {
      it("should throw an error describing that the choices are required", () => {
        expect(() => new Model({ choices: [] })).toThrowError("A quizz question must contain choices");
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
          
          expect(question.choices).toContain(question.answer);
        }
      });
    });
  });

  describe("#selectChoice", () => {
    describe("when selecting a choice", () => {
      let question: Model<string>;

      beforeEach(() => {
        question = new Model({ choices: ['C', 'D'] });
      });

      it('should mark the question as answered', () => {
        expect(question.answered).toBe(false);
        
        question.selectChoice('C');
        expect(question.answered).toBe(true);
      });

      it('should save the selected choice', () => {
        expect(question.selectedChoice).toBe(null);

        question.selectChoice('C');
        expect(question.selectedChoice).toBe('C');
      });

      it('should not allow to select another choice', () => {
        question.selectChoice('C');
        question.selectChoice('D');

        expect(question.selectedChoice).toBe('C');
      });
    });  

    describe("when selecting an incorrect choice", () => {
      it('should mark the question as incorrectly answered', () => {
        const question = new Model({ choices: ['C', 'D'] });
        question.selectChoice('E');

        expect(question.isCorrectlyAnswered).toBe(false);
      });
    });

    describe("when selecting the correct choice", () => {
      it('should mark the question as correctly answered', () => {
        const question = new Model({ choices: ['C', 'D'] });
        question.selectChoice(question.answer);

        expect(question.isCorrectlyAnswered).toBe(true);
      });
    });
  });
});
