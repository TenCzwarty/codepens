const WOOD_LOG_ROLLING_SPEED = 0.5;
const WOOD_GRAIN_LENGTH_MIN = 3;
const WOOD_GRAIN_LENGTH_MAX = 15;
const WOOD_GRAIN_DENSITY = 10;

const wood_log_roll_time = 1000 / WOOD_LOG_ROLLING_SPEED;

const random = (min, max) => Math.random() * max + min;
const coinToss = () => Math.random() > 0.5;

const randomInterval = (callback, min = 0, max = 1000) => {
  let intervalId = null;

  function tick() {
    intervalId = setTimeout(() => {
      callback();
      tick();
    }, random(min, max));
  }

  tick();

  return () => clearTimeout(intervalId);
};

const createRandomWoodGrain = () => {
  const element = document.getElementById("grain");

  if (!element) return;

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  path.setAttribute(
    "d",
    `M -26.034107,0.50079 h ${random(
      WOOD_GRAIN_LENGTH_MIN,
      WOOD_GRAIN_LENGTH_MAX
    )}`
  );

  path.classList.add("grain");

  if (coinToss()) {
    path.classList.add("reversed");
  }

  if (coinToss()) {
    path.style.setProperty("offset-anchor", `-${random(10, 90)}% 0`);
  }

  element.appendChild(path);

  setTimeout(() => path.remove(), wood_log_roll_time);
};

const log = document.getElementById("log");

if (log) {
  log.style.setProperty("--roll-animation-duration", `${wood_log_roll_time}ms`);
}

randomInterval(
  createRandomWoodGrain,
  0,
  wood_log_roll_time / WOOD_GRAIN_DENSITY
);
