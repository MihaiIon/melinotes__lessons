import Model from "@/models/quizz-model";

describe("QuizzModel", () => {
  describe("#new", () => {
    describe("when creating a quizz with an empty `choices` configuration", () => {
      it("should throw an error describing that the `choices` configuration is required", () => {
        expect(() => new Model({ choices: [] })).toThrowError("The `choices` configuration cannot be empty");
      });
    });

    describe("when creating a quizz with a valid `choices` configuration", () => {
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
