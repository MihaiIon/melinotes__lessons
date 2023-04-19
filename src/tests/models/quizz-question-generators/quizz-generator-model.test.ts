import { QuizzQuestionGeneratorModel as Generator } from "@/models/quizz-question-generators";

describe("QuizzQuestionGeneratorModel", () => {
  it("should throw an error when calling the `generate` method", () => {
    const generator = new Generator();
    expect(() => generator.generate()).toThrowError('Not implemented');
  });
});
