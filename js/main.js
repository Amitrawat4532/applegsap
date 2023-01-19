// console.clear();

const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

canvas.width = 1420;
canvas.height = 810;

const frameCount = 92;
// /105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/0000.png
const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/${(
    index + 1
  )
    .toString()
    .padStart(4, "0")}.png`;
// const currentFrame = (index) =>
//   `https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/${(
//     index + 1
//   )
//     .toString()
//     .padStart(4, "0")}.png`;

const images = [];
const airpods = {
  frame: 0,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}
gsap.registerPlugin(ScrollTrigger);
gsap.to(airpods, {
  frame: frameCount - 1,
  snap: "frame",
  scrollTrigger: {
    scrub: 0.5,
  },
  onUpdate: render,
  // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
  console.log("hiii");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[airpods.frame], 0, 0);
}

gsap.from(
  [".main_container", "#hero-lightpass"],
  {
    scale: 0.7,
    duration: 0.5,
    ease: "power4",
  },
  1
);
gsap.from(
  [".textOne", "#text", "#textTwo", "#textThree", ".img"],
  {
    opacity: 0,
    duration: 0.5,
    ease: "power4",
  },
  1
);
