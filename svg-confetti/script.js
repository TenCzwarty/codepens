// example svgs are from https://shapes.framer.website/
// remember to set width and height to 100%
const SVGs = [
  '<svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M122.363 90.3495C117.674 95.9288 117.674 104.071 122.363 109.65L160.767 155.349C168.968 165.108 162.031 180 149.284 180H51.0288C38.2821 180 31.3446 165.108 39.5454 155.349L77.9499 109.65C82.6386 104.071 82.6386 95.9288 77.9498 90.3495L39.5453 44.6504C31.3446 34.8921 38.2821 20 51.0288 20L149.284 20C162.03 20 168.968 34.8921 160.767 44.6504L122.363 90.3495Z" fill="url(#paint0_linear_105_736)"/> <defs> <linearGradient id="paint0_linear_105_736" x1="149.557" y1="20" x2="39.7213" y2="117.692" gradientUnits="userSpaceOnUse"> <stop stop-color="#B0B9FF"/> <stop offset="1" stop-color="#E7E9FF"/> </linearGradient> </defs> </svg>',
  '<svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M170 129.496C170 168.434 138.66 200 100 200C61.3401 200 30 168.434 30 129.496C30 92.6391 65.8392 48.2064 95.1126 6.95421C97.5122 3.57266 102.538 3.53875 104.974 6.89421C135.351 48.7369 170 92.5911 170 129.496Z" fill="url(#paint0_linear_105_517)"/> <defs> <linearGradient id="paint0_linear_105_517" x1="44.35" y1="20.0459" x2="138.831" y2="176.559" gradientUnits="userSpaceOnUse"> <stop stop-color="#ACAAFF"/> <stop offset="1" stop-color="#C0E8FF"/> </linearGradient> </defs> </svg>',
  '<svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_104_40)"> <path d="M100.254 200C97.0998 200 94.4337 197.716 93.6699 194.656C91.2352 184.903 86.5744 174.531 79.6875 163.542C71.5278 150.347 59.8958 138.108 44.7917 126.823C31.6549 116.894 18.5181 110.123 5.38138 106.511C2.27005 105.656 0 102.897 0 99.6702V99.6702C0 96.5066 2.18273 93.7795 5.22473 92.9109C18.1045 89.2335 30.5122 83.2631 42.4479 75C56.1632 65.4514 67.6215 53.993 76.8229 40.625C84.9629 28.7165 90.5507 16.9388 93.5863 5.29207C94.3815 2.24095 97.0676 0 100.221 0V0C103.409 0 106.114 2.29058 106.89 5.3833C108.642 12.3654 111.38 19.512 115.104 26.8229C119.792 35.8507 125.781 44.5312 133.073 52.8646C140.538 61.0243 148.872 68.4028 158.073 75C170.097 83.5231 182.32 89.5111 194.744 92.964C197.792 93.8109 200 96.5244 200 99.6874V99.6874C200 102.898 197.725 105.634 194.629 106.483C186.754 108.642 178.648 112.124 170.313 116.927C160.243 122.83 150.868 129.861 142.187 138.021C133.507 146.007 126.389 154.427 120.833 163.281C113.933 174.293 109.267 184.745 106.837 194.639C106.083 197.708 103.413 200 100.254 200V200Z" fill="url(#paint0_linear_104_40)"/> </g> <defs> <linearGradient id="paint0_linear_104_40" x1="27.5" y1="19" x2="149" y2="174.5" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFD9A0"/> <stop offset="1" stop-color="#FFF5F1"/> </linearGradient> <clipPath id="clip0_104_40"> <rect width="100%" height="100%" fill="white"/> </clipPath> </defs> </svg>',
  '<svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M199.06 140.014C199.605 145.51 195.075 150 189.552 150H153.302C147.779 150 143.42 145.463 142.173 140.083C137.681 120.698 120.304 106.25 99.5522 106.25C78.8007 106.25 61.4237 120.698 56.931 140.083C55.6841 145.463 51.325 150 45.8022 150H9.55217C4.02932 150 -0.500355 145.51 0.0445342 140.014C5.0553 89.4741 47.6939 50 99.5522 50C151.41 50 194.049 89.4741 199.06 140.014Z" fill="url(#paint0_linear_104_151)"/> <defs> <linearGradient id="paint0_linear_104_151" x1="156.795" y1="66" x2="111.742" y2="157.282" gradientUnits="userSpaceOnUse"> <stop offset="0.0509862" stop-color="#FFB6E1"/> <stop offset="1" stop-color="#FBE3EA"/> </linearGradient> </defs> </svg>',
  '<svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_105_553)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M58.658 147.786C57.3447 144.947 55.0568 142.659 52.2173 141.345C30.1168 131.123 12.6336 116.382 3.3014 107.542C-1.10048 103.372 -1.10046 96.6313 3.30141 92.4614C12.6336 83.621 30.1168 68.8801 52.2172 58.6581C55.0568 57.3447 57.3447 55.0568 58.658 52.2173C68.8801 30.1169 83.621 12.6336 92.4614 3.3014C96.6313 -1.10047 103.372 -1.10046 107.542 3.30141C116.382 12.6336 131.123 30.1169 141.345 52.2173C142.659 55.0568 144.947 57.3447 147.786 58.658C169.887 68.8801 187.37 83.621 196.702 92.4614C201.104 96.6313 201.104 103.372 196.702 107.542C187.37 116.382 169.887 131.123 147.786 141.345C144.947 142.659 142.659 144.947 141.345 147.786C131.123 169.887 116.382 187.37 107.542 196.702C103.372 201.104 96.6313 201.104 92.4614 196.702C83.621 187.37 68.8801 169.887 58.658 147.786ZM100.002 136.761C120.303 136.761 136.761 120.303 136.761 100.002C136.761 79.7002 120.303 63.2426 100.002 63.2426C79.7003 63.2426 63.2428 79.7002 63.2428 100.002C63.2428 120.303 79.7003 136.761 100.002 136.761Z" fill="url(#paint0_linear_105_553)"/> </g> <defs> <linearGradient id="paint0_linear_105_553" x1="100.002" y1="0" x2="100.002" y2="200.003" gradientUnits="userSpaceOnUse"> <stop stop-color="#B8DBFC"/> <stop offset="1" stop-color="#F8FBFE"/> </linearGradient> <clipPath id="clip0_105_553"> <rect width="100%" height="100%" fill="white"/> </clipPath> </defs> </svg>',
  '<svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clip-path="url(#clip0_104_178)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M112.548 87.4518C121.709 83.5318 135.093 81.0606 150 81.0606C177.614 81.0606 200 89.5401 200 100C200 110.46 177.614 118.939 150 118.939C135.093 118.939 121.709 116.468 112.548 112.548C116.468 121.709 118.939 135.093 118.939 150C118.939 177.614 110.46 200 100 200C89.5401 200 81.0606 177.614 81.0606 150C81.0606 135.093 83.5318 121.709 87.4518 112.548C78.2912 116.468 64.9075 118.939 50 118.939C22.3858 118.939 0 110.46 0 100C0 89.5401 22.3858 81.0606 50 81.0606C64.9075 81.0606 78.2912 83.5318 87.4518 87.4518C83.5318 78.2912 81.0606 64.9075 81.0606 50C81.0606 22.3858 89.5401 0 100 0C110.46 0 118.939 22.3858 118.939 50C118.939 64.9075 116.468 78.2912 112.548 87.4518Z" fill="url(#paint0_linear_104_178)"/> </g> <defs> <linearGradient id="paint0_linear_104_178" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse"> <stop stop-color="#B8DBFC"/> <stop offset="1" stop-color="#F8FBFE"/> </linearGradient> <clipPath id="clip0_104_178"> <rect width="100%" height="100%" fill="white"/> </clipPath> </defs> </svg>',
];

const NUMBER_OF_PIECES = 3;
const [MIN_SCALE, MAX_SCALE] = [0.25, 0.75];
const [MIN_POS_X, MAX_POS_X] = [-50, 50]; // %
const [MIN_POS_Y, MAX_POS_Y] = [-50, 50]; // %
const [MIN_ROTATION, MAX_ROTATION] = [-180, 180]; // deg

const card = document.getElementById("card");

const shuffle = (array) => array.toSorted(() => 0.5 - Math.random());
const getRandom = (min, max) => min + Math.random() * (max - min);

const createRandomSVGs = () =>
  (card.innerHTML = shuffle(SVGs).slice(0, NUMBER_OF_PIECES).join(""));

card.addEventListener("click", () => {
  createRandomSVGs();
  setTimeout(createTransition, 250);
});

const createTransition = () => {
  card.querySelectorAll("svg").forEach((svg) => {
    const s = getRandom(MIN_SCALE, MAX_SCALE);
    const x = getRandom(MIN_POS_X, MAX_POS_X);
    const y = getRandom(MIN_POS_Y, MAX_POS_Y);
    const r = getRandom(MIN_ROTATION, MAX_ROTATION);

    svg.style.transform = `translate(calc(50% + ${x}%), calc(50% + ${y}%)) scale(${s}) rotate(${r}deg)`;
  });
};
