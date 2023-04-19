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
        const quizz = new Model({ choices });

        expect(quizz.choices).toBe(choices);
        expect(quizz.choicesCount).toBe(4);

        expect(quizz.config.allChoices).toBe(choices);
        expect(quizz.config.allChoicesCount).toBe(4);
      });

      it('should select an answer from the quizz choices (100 tries)', () => {
        let quizz;
        const choices = ["A", "B", "C", "D", "E", "F", "G"];
        
        for (let i = 0; i < 100; i++) {
          quizz = new Model({ choices });
          
          expect(quizz.choices).toContain(quizz.answer);
        }
      });
    });
  });
});
