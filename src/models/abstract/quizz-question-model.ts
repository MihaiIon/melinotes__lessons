export interface IQuizzQuestionModelConfig<T> {
  answer: T | null;
}

export interface IQuizzQuestionModelParams<T> {
  answer?: T;
};

export default abstract class QuizzQuestionModel<T> {
  text: string = "Question";
  category: string = "Generic";
  
  userAnswer: T | null = null;
  answered: boolean = false;
  isCorrectlyAnswered: boolean | null = null;

  config: IQuizzQuestionModelConfig<T> = {} as IQuizzQuestionModelConfig<T>;

  constructor(params: IQuizzQuestionModelParams<T> = {}) {
    this.initializeConfigFromParams(params);
  }

  protected initializeConfigFromParams(params: IQuizzQuestionModelParams<T>): void {
    this.config.answer = params.answer || null;
  }

  setUserAnswer(userAnswer: T): void {
    if(this.answered) return;

    this.userAnswer = userAnswer;
    this.answered = true;

    this.isCorrectlyAnswered = this.userAnswer === this.config.answer;
  }
}
