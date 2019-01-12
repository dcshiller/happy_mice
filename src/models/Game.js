import Colony from "./Colony.js";

export default class Game {
  constructor() {
    this.colony = new Colony();
    this.colony.ageMice();
    this.colony.ageMice();
    this.colony.ageMice();
    this.food = { amount: 100 };
    this.addFood = () => this.food.amount = this.food.amount + 20;
  }

  tick() {
    this.colony.ageMice();
    this.colony.feedMice(this.food);
    if (!window.location.search.includes("megan")) this.colony.breedMice();
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

  medianMouseUtility(percent) {
    const sorted = this.colony.orderedByUtility();
    return sorted[Math.floor(sorted.length * percent)].utility;
  }
}
