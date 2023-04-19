import { QuizzQuestionGeneratorModel } from "./quizz-question-generators";
import { randomElement } from "@/utilities";

type Generator<T extends QuizzQuestionGeneratorModel> = T

interface QuizzQuestionModelParams<T> {
  choices: T[];
  allChoices?: T[];
  generator?: Generator<QuizzQuestionGeneratorModel>;
};

interface QuizzQuestionModelConfig<T> {
  allChoices: T[];
  allChoicesCount: number;
  generator: Generator<QuizzQuestionGeneratorModel> | null;
}

export default class QuizzQuestionModel<T> {
  answer: T;
  choices: T[];
  choicesCount: number;
  config: QuizzQuestionModelConfig<T>;

  constructor(params: QuizzQuestionModelParams<T>) {
    this.config = {} as QuizzQuestionModelConfig<T>;
    this.initializeConfigFromParams(params);

    this.choices = params.choices;
    this.choicesCount = this.choices.length;
    this.validateChoices();

    this.answer = randomElement(this.choices);
  }

  private initializeConfigFromParams(params: QuizzQuestionModelParams<T>) {
    let allChoices = params.allChoices || [];
    allChoices = allChoices.length > 0 ? allChoices : params.choices;

    this.config = {
      allChoices,
      allChoicesCount: allChoices.length,
      generator: params.generator || null,
    };
  }

  private validateChoices() {
    if(this.choices.length === 0) {
      throw new Error("A quizz question must contain choices");
    }
  }
}
