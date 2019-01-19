const queue = [];

const soundQueue = {
  queue: (sound) => ((queue.length < 5) && queue.push(sound)),
};

const play = () => {
  const sound = queue.shift();
  new Audio(sound).play();
}

setInterval(play, 200);

export default soundQueue;
