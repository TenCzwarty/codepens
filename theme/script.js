const DURATION_ANIMATION_CIRCLE = 2500;

const createExpandingCircle = ({ x, y, size }) => {
  const previousCircles = document.querySelectorAll(
    ".page-transition-circle-wrapper"
  );
  if (previousCircles?.length % 2 === 0) {
    previousCircles[0]?.remove();
    previousCircles[1]?.remove();
  }

  const wrapper = document.createElement("div");
  wrapper.className = "page-transition-circle-wrapper";
  wrapper.style.setProperty(
    "--animation-duration-circle",
    `${DURATION_ANIMATION_CIRCLE}ms`
  );

  const circle = document.createElement("div");
  circle.className = "page-transition-circle";
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  wrapper.appendChild(circle);
  // IMPORTANT - remember to use mix-blend-mide BEFORE isolate
  document.body.insertBefore(wrapper, document.body.firstChild);
};

const createExpandingCircleOnMouseClick = (event) => {
  const x = event.clientX || 0;
  const y = event.clientY || 0;

  const size = Math.max(window.innerWidth, window.innerHeight) * 2;

  createExpandingCircle({ x, y, size });
};

document
  .querySelector("body")
  .addEventListener("click", createExpandingCircleOnMouseClick);

setTimeout(() => {
  createExpandingCircle({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    size: Math.max(window.innerWidth, window.innerHeight) * 2,
  });
}, 1000);
