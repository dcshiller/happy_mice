const clock = {
  time: 0,
};

clock.onTick = (func) => clock.funcToCall = func;

clock.start = () => {
  clock.interval = setInterval(tickClock, 1000);
}

clock.stop = () => {
  clearInterval(clock.interval);
  clock.interval = null;
}

clock.isRunning = () => {
  return !!clock.interval;
}

clock.toggle = () => {
  clock.isRunning() ? clock.stop() : clock.start();
}

clock.reset = () => {
  clock.time = 0;
}

const tickClock = () => { clock.time++; clock.funcToCall() };


export default clock;
