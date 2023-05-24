import { QuizQuestionModel } from '.';
import { IQuizQuestionModelParams, IQuizQuestionModelConfig } from './quiz-question-model';

import { randomElement } from "@/utilities";

export interface IQuizQuestionSingleChoiceModelParams<T> extends IQuizQuestionModelParams<T> {
  choices: T[];
  allChoices?: T[];
};

export interface IQuizQuestionSingleChoiceModelConfig<T> extends IQuizQuestionModelConfig<T> {
  answer: T;
  allChoices: T[];
  allChoicesCount: number;
}

export default abstract class QuizQuestionSingleChoiceModel<T> extends QuizQuestionModel<T> {
  text: string = "What is the correct answer?";
  category: string = "make a choice";

  choices: T[] = [];
  choicesCount: number = 0;

  config: IQuizQuestionSingleChoiceModelConfig<T> = {} as IQuizQuestionSingleChoiceModelConfig<T>;

  constructor(params: IQuizQuestionSingleChoiceModelParams<T>) {
    super(params);

    this.initializeConfigFromParams(params);

    this.setChoices(params.choices);
    this.setAnswer();
  }

  protected initializeConfigFromParams(params: IQuizQuestionSingleChoiceModelParams<T>): void {
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
      throw new Error("A Quiz question with choices must contain choices");
    }
  }
}
