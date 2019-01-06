let mouseCount = 0;

export default class Mouse {
  constructor() {
    this.age = 0;
    this.robustness = 0;
    this.id = mouseCount++;
    this.alive = true;
    this.utility = 0;
  }

  feed(food){
    if (food.amount === 0) {
      if (this.robustness < 3) { this.die(); }
      this.robustness--;
      this.utility--;
      return;
    } else if (food.amount > 1) {
      this.robustness < 10 && this.robustness++;
      food.amount--;
      this.utility++;
    };
    food.amount--;
    this.utility++;
  }

  breed(){
    if (this.robustness < 6) {
      return [];
    }
    const newMice = [];
    if (Math.random() > 0.5) {
      if (Math.random() > 0.7) newMice.push(new Mouse());
      if (Math.random() > 0.7) newMice.push(new Mouse());
      if (Math.random() > 0.7) newMice.push(new Mouse());
      this.robustness = this.robustness - 3;
    }
    return newMice;
  }

  die() {
    this.alive = false;
    this.utility = this.utility - 5;
  }
}
