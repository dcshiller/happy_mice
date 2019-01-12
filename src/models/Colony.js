import Mouse from "./Mouse";

const living = (arr) => arr.filter(m => m.alive);
const dead = (arr) => arr.filter(m => !m.alive);
const shuffle = (array) => {
  const dup = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dup[i], dup[j]] = [dup[j], dup[i]];
  }
  return dup;
}

export default class Colony {
  constructor(){
    this.mice = [new Mouse(), new Mouse()];
  }

  randomizeLivingMice() {
    const randomizedMice = shuffle(living(this.mice));
    return randomizedMice;
  }

  ageMice() {
    for (const mouse of living(this.mice)) {
      mouse.growOlder();
    }
  }

  feedMice(food) {
    for (const mouse of this.randomizeLivingMice()) {
      mouse.feedFirst(food);
    }

    for (const mouse of this.randomizeLivingMice()) {
      if (Math.random() > 0.5) mouse.feedSecond(food);
    }
  }

  breedMice() {
    for (const mouse of this.randomizeLivingMice()) {
      const newMice = mouse.breed();
      this.mice = this.mice.concat(newMice);
    }
  }

  allUtility() {
    return this.mice.reduce((accum, nextM) => accum + nextM.utility, 0);
  }

  livingMice() {
    return living(this.mice);
  }

  deadMice() {
    return dead(this.mice);
  }

  utilities() {
    return this.mice.map(a => a.utility);
  }

  distribution() {
    return this.utilities().sort((a,b) => a - b);
  }

  averageAge() {
    return Math.floor(this.mice.reduce((accum, m) => accum + m.age, 0) / this.mice.length);
  }
}
