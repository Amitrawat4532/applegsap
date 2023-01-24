// console.clear();

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = 1420;
canvas.height = 810;

const frameCount = 92;

const currentFrame = (index) =>
  `https://www.apple.com/105/media/us/airpods-pro/2022/d2deeb8e-83eb-48ea-9721-f567cf0fffa8/anim/hero/large/${(
    index + 1
  )
    .toString()
    .padStart(4, "0")}.png`;

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
  // console.log(airpods.frame);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[airpods.frame], 0, 0);
}

//
gsap.from(
  [".main_container", "#canvas"],
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
// gsap.from(
//   [".textOne", "#text", "#textTwo", "#textThree", ".img"],
//   {
//     opacity: 0,
//     duration: 0.5,
//     ease: "power4",
//   },
//   2
// );
// gsap.registerPlugin(ScrollTrigger);
// gsap.from(
//   "#text",scrollTrigger: {
//     opacity:1,
//   }

// );

gsap.registerPlugin(ScrollTrigger);
gsap.to([".airpods"], {
  scrollTrigger: {
    trigger: ".sub_main_container",
    scrub: 0.5,
    start: "top top",
    // end: "bottom bottom",
    opacity: 1,
    // duration: 1,
  },

  opacity: 0,
  ease: "power4",
  // duration: 2,
});

gsap.registerPlugin(ScrollTrigger);
gsap.to([".all_new", ".text_containerOne", ".text_containerTwo"], {
  scrollTrigger: {
    trigger: ".sub_main_container",
    scrub: 0.5,
    start: "top top",
    end: "center center",
    opacity: 1,
    // duration: 1,
  },

  opacity: 0,
  ease: "power4",
  // duration: 2,
});

gsap.registerPlugin(ScrollTrigger);
gsap.to(".text_absolute", {
  scrollTrigger: {
    // markers: true,
    trigger: ".main_container",
    start: "center center",
    scrub: 0.5,
  },
  opacity: 1,
  scale: 1.2,
});

// gsap.fromTo("#text", { opacity: 0 }, { duration: 5 }, { opacity: 0 });
gsap.to(".all_new", {
  y: "80px",
});
