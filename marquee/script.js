const ANIMATION_DURATION = 100; //in seconds
const ANIMATE_CLASSNAME = "animate";
const TEXT_NODE_ID = "text-node";

const setAnimationDelay = (element, delay) =>
  element.setAttribute("style", `animation-delay: ${delay}s`);

const initNode = (element) => {
  element.classList.add(ANIMATE_CLASSNAME);
  setAnimationDelay(element, 0);
};

const cloneAndDelay = (element, delay) => {
  const span = element.cloneNode(true);
  setAnimationDelay(span, delay);
  return span;
};

const reset = (element) => {
  const parent = element.parentNode;
  parent.innerHTML = "";
  parent.appendChild(element);
  initNode(element);
};

const onWindowResize = (element) => {
  reset(element);

  const textWidth = element.getBoundingClientRect().width;
  const repeat = Math.ceil(window.innerWidth / textWidth);
  const v = (textWidth * (repeat + 1)) / ANIMATION_DURATION;
  const t = textWidth / v;

  for (let i = 1; i <= repeat; i++) {
    element.parentNode.appendChild(cloneAndDelay(element, -i * t)); // use positive delay if you need the initial text entry
  }
};

const textNode = document.getElementById(TEXT_NODE_ID);

onWindowResize(textNode);

window.addEventListener("resize", () => {
  onWindowResize(textNode);
});
