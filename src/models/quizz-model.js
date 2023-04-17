import { randomElement } from "@/utilities";

export default class QuizzModel {
  constructor(params = {}) {
    this.config = initializeConfigFromParams(params);

    validateChoices(params.choices);
    this.choices = params.choices;
    this.choicesCount = this.choices.length;

    this.answer = randomElement(this.choices);
  }

  static createFromGenerator(generator = null) {
    validateGenerator(generator);

    const { choices, allChoices } = generator.generate();

    return new QuizzModel({ choices, allChoices, generator });
  }
}

function initializeConfigFromParams(params) {
  let allChoices = params.allChoices || [];
  allChoices = allChoices.length > 0 ? allChoices : params.choices;

  return {
    allChoices,
    allChoicesCount: allChoices?.length,
    generator: params.generator || null,
  };
}

function validateChoices(choices) {
  if(!choices) {
    throw new Error("The `choices` configuration is required to create a quizz");
  }

  if(choices.length === 0) {
    throw new Error("The `choices` configuration cannot be empty");
  }
}

function validateGenerator(generator) {
  if(!generator) {
    throw new Error("The `generator` parameter is required to create a quizz");
  }
}
