import { QuizzQuestionGeneratorModel } from "../quizz-question-generators";
import { randomElement } from "@/utilities";

type Generator<T extends QuizzQuestionGeneratorModel> = T

interface IQuizzQuestionModelConfig<T> {
  allChoices: T[];
  allChoicesCount: number;
  generator: Generator<QuizzQuestionGeneratorModel> | null;
}

export interface IQuizzQuestionModelParams<T> {
  choices: T[];
  allChoices?: T[];
  generator?: Generator<QuizzQuestionGeneratorModel>;
};

export default class QuizzQuestionModel<T> {
  answer: T;
  answered: boolean = false;
  isCorrectlyAnswered: boolean | null = null;

  choices: T[];
  choicesCount: number;
  selectedChoice: T | null = null;
  
  config: IQuizzQuestionModelConfig<T>;

  constructor(params: IQuizzQuestionModelParams<T>) {
    this.config = {} as IQuizzQuestionModelConfig<T>;
    this.initializeConfigFromParams(params);

    this.choices = params.choices;
    this.choicesCount = this.choices.length;
    this.validateChoices();

    this.answer = randomElement(this.choices);
  }

  selectChoice(choice: T): T {
    if(this.answered) return choice;

    this.selectedChoice = choice;
    this.answered = true;

    this.isCorrectlyAnswered = this.selectedChoice === this.answer;

    return choice;
  }

  private initializeConfigFromParams(params: IQuizzQuestionModelParams<T>): void {
    let allChoices = params.allChoices || [];
    allChoices = allChoices.length > 0 ? allChoices : params.choices;

    this.config = {
      allChoices,
      allChoicesCount: allChoices.length,
      generator: params.generator || null,
    };
  }

  private validateChoices(): void {
    if(this.choicesCount === 0) {
      throw new Error("A quizz question must contain choices");
    }
  }
}
