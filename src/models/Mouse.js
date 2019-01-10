let mouseCount = 0;


const COLORS = ["peru", "saddlebrown", "sienna", "rgb(160,95,45)",
"rgb(150,42,25)",
"rgb(120,90,38)",
"rgb(120,90,38)","rgb(150,100,47)","rgb(150,80,40)",
];

const randomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

export default class Mouse {
  constructor() {
    this.age = 0;
    this.robustness = 0;
    this.id = mouseCount++;
    this.alive = true;
    this.utility = 0;
    this.color = randomColor();
  }

  growOlder() {
    this.age++;
    if (this.age > 52 && Math.random() > 0.98) this.die();
  }

  feedFirst(food){
    if (food.amount === 0) {
      if (this.robustness < 3) { this.die(); }
      if (this.robustness < 5) { this.utility--; }
      this.robustness--;
      return;
    }
    this.utility++;
    food.amount--;
  }

  feedSecond(food){
    if (food.amount === 0) {
      return;
    }
    this.robustness < 10 && this.robustness++;
    food.amount--;
    this.utility++;
  }

  breed(){
    if (this.robustness < 6) {
      return [];
    }
    const litterSize = 4 + Math.floor(Math.random() * 10);
    const newMice = [];
    while (newMice.length < litterSize) {
      newMice.push(new Mouse());
    }
    this.robustness = this.robustness - 3;
    return newMice;
  }

  die() {
    this.alive = false;
    this.utility = this.utility - 10;
  }
}
