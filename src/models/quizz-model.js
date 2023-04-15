export default class QuizzModel {
  static DEFAULT_CHOICES_COUNT = 4;

  constructor(config) {
    this.config = {
      allChoices: config.allChoices || [],
      choicesCount: config.choicesCount || QuizzModel.DEFAULT_CHOICES_COUNT,
    };

    this.choices = selectRandomChoices(this.config.allChoices, this.config.choicesCount);
    this.answer = selectRandomAnswer(this.choices);
  }
}

function selectRandomChoices(choices, choicesCount) {
  const randomChoices = [];

  for (let i = 0; i < choicesCount; i++) {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];

    randomChoices.push(randomChoice);
  }

  return randomChoices;
}

function selectRandomAnswer(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);

  return choices[randomIndex];
}
