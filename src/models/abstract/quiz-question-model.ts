export interface IQuizQuestionModelConfig<T> {
  answer: T | null;
}

export interface IQuizQuestionModelParams<T> {
  answer?: T;
};

export default abstract class QuizQuestionModel<T> {
  text: string = "Question";
  category: string = "Generic";
  
  userAnswer: T | null = null;
  answered: boolean = false;
  isCorrectlyAnswered: boolean | null = null;

  config: IQuizQuestionModelConfig<T> = {} as IQuizQuestionModelConfig<T>;

  constructor(params: IQuizQuestionModelParams<T> = {}) {
    this.initializeConfigFromParams(params);
  }

  protected initializeConfigFromParams(params: IQuizQuestionModelParams<T>): void {
    this.config.answer = params.answer || null;
  }

  setUserAnswer(userAnswer: T): void {
    if(this.answered) return;

    this.userAnswer = userAnswer;
    this.answered = true;

    this.isCorrectlyAnswered = this.userAnswer === this.config.answer;
  }
}
