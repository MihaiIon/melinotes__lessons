import { QuizzQuestionModel } from '.';
import { IQuizzQuestionModelParams, IQuizzQuestionModelConfig } from './quizz-question-model';

import { randomElement } from "@/utilities";

export interface IQuizzQuestionWithChoicesModelParams<T> extends IQuizzQuestionModelParams<T> {
  choices: T[];
  allChoices?: T[];
};

export interface IQuizzQuestionWithChoicesModelConfig<T> extends IQuizzQuestionModelConfig<T> {
  answer: T;
  allChoices?: T[];
  allChoicesCount: number;
}

export default abstract class QuizzQuestionWithChoicesModel<T> extends QuizzQuestionModel<T> {
  text: string = "What is the correct answer?";
  category: string = "make a choice";

  choices: T[] = [];
  choicesCount: number = 0;

  config: IQuizzQuestionWithChoicesModelConfig<T> = {} as IQuizzQuestionWithChoicesModelConfig<T>;

  constructor(params: IQuizzQuestionWithChoicesModelParams<T>) {
    super(params);

    this.initializeConfigFromParams(params);

    this.setChoices(params.choices);
    this.setAnswer();
  }

  protected initializeConfigFromParams(params: IQuizzQuestionWithChoicesModelParams<T>): void {
    let allChoices = params.allChoices || [];
    allChoices = allChoices.length > 0 ? allChoices : params.choices;

    this.config = {
      ...this.config,
      allChoices,
      allChoicesCount: allChoices.length,
    };
  }

  private setAnswer(): void {
    this.config.answer = randomElement(this.choices);
  }

  private setChoices(choices: T[]): void {
    this.choices = choices;
    this.choicesCount = this.choices.length;
    this.validateChoices();
  }

  private validateChoices(): void {
    if(this.choicesCount === 0) {
      throw new Error("A quizz question with choices must contain choices");
    }
  }
}
