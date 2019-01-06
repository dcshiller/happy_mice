import Colony from "./Colony.js";

export default class Game {
  constructor() {
    this.colony = new Colony();
    this.food = { amount: 100 };
    this.addFood = () => this.food.amount = this.food.amount + 20;
  }

  tick() {
    this.colony.ageMice();
    this.colony.feedMice(this.food);
    this.colony.breedMice();
  }

  utility() {
    return this.colony.allUtility();
  }

  averageTimeUtility(time) {
    return Math.floor(this.colony.allUtility() / time);
  }

  averageMouseUtility() {
    return Math.floor(this.colony.allUtility() / this.colony.mice.length);
  }
}
