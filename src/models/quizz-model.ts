import { QuizzGeneratorModel } from "./quizz-generators";
import { randomElement } from "@/utilities";

type Generator<T extends QuizzGeneratorModel> = T

interface QuizzModelParams<T> {
  choices: T[];
  allChoices?: T[];
  generator?: Generator<QuizzGeneratorModel>;
};

interface QuizzModelConfig<T> {
  allChoices: T[];
  allChoicesCount: number;
  generator: Generator<QuizzGeneratorModel> | null;
}

export default class QuizzModel<T> {
  answer: T;
  choices: T[];
  choicesCount: number;
  config: QuizzModelConfig<T>;

  constructor(params: QuizzModelParams<T>) {
    this.config = {} as QuizzModelConfig<T>;
    this.initializeConfigFromParams(params);

    this.choices = params.choices;
    this.choicesCount = this.choices.length;
    this.validateChoices();

    this.answer = randomElement(this.choices);
  }

  private initializeConfigFromParams(params: QuizzModelParams<T>) {
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
      throw new Error("The `choices` configuration cannot be empty");
    }
  }
}
