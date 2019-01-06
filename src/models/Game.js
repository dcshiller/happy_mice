import Colony from "./Colony.js";

export default class Game {
  constructor() {
    this.colony = new Colony();
    this.food = { amount: 100 };
  }

  tick() {
    this.colony.feedMice(this.food);
    this.colony.breedMice();
  }

  utility() {
    return this.colony.allUtility();
  }
}
