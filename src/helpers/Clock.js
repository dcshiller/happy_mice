const clock = {
  time: 0,
};

clock.onTick = (func) => clock.funcToCall = func;

const tickClock = () => { clock.time++; clock.funcToCall() };

setInterval(tickClock, 1000);

export default clock;
