const TRANSFORMS = [
  "top: 100%; left: 100%; transform: translate(-100%, -100%);", // bottom right
  "top: 100%; left:  50%; transform: translate( -50%, -100%);", // bottom center
  "top: 100%; left:   0%; transform: translate(   0%, -100%);", // bottom left

  "top:  50%; left: 100%; transform: translate(-100%,  -50%);", // mid right
  "top:  50%; left:  50%; transform: translate( -50%,  -50%);", // mid center
  "top:  50%; left:   0%; transform: translate(   0%,  -50%);", // mid left

  "top:   0%; left: 100%; transform: translate(-100%,   -0%);", // top right
  "top:   0%; left:  50%; transform: translate( -50%,   -0%);", // top center
  "top:   0%; left:   0%; transform: translate(   0%,   -0%);", // top left
];

const wrapper = document.getElementById("wrapper");

TRANSFORMS.forEach((t) => {
  const div = document.createElement("div");

  div.setAttribute("style", t);

  wrapper.appendChild(div);
});
