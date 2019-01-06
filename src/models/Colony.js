import Mouse from "./Mouse";

const living = (arr) => arr.filter(m => m.alive);
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

  feedMice(food) {
    for (const mouse of this.randomizeLivingMice()) {
      mouse.feed(food);
    }
  }

  breedMice() {
    for (const mouse of this.randomizeLivingMice()) {
      const newMice = mouse.breed();
      this.mice = this.mice.concat(newMice);
    }
  }

  allUtility() {
    return this.mice.reduce(a => a.utility);
  }
}
