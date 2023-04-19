import { QuizzQuestionModel as Model } from "@/models";

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

  // describe("#validateSelectedChoice", () => {
  //   describe("when validating a choice that is not in the quizz choices", () => {
  //     it("should throw an error describing that the choice is not a valid choice", () => {
  //       const choices = ["A", "B", "C", "D"];
  //       const question = new Model({ choices });

  //       expect(() => question.validateSelectedChoice("E")).toThrowError("The selected choice is not a valid choice");
  //     });
  //   });

  //   describe("when validating a choice that is wrong", () => {
  //     it("should mark the question as failed", () => {
  //       const choices = ["A", "B", "C", "D"];
  //       const question = new Model({ choices });

  //       question.validateSelectedChoice("B");

  //       expect(question.isCorrect).toBe(false);
  //     });

  //     it("should return false", () => {
  //       const choices = ["A", "B", "C", "D"];
  //       const question = new Model({ choices });

  //       expect(question.validateSelectedChoice("E")).toBe(false);
  //     });
  //   });
  // });
});
