gsap.registerPlugin(ScrollTrigger);

// Fondu pour image 3
gsap.from("#scene3 img", {
  scrollTrigger: {
    trigger: "#scene3",
    start: "top center",
    toggleActions: "play none none none"
  },
  opacity: 0,
  duration: 1
});

// Délai sur image 4 après la 3
gsap.from("#scene4 img", {
  scrollTrigger: {
    trigger: "#scene4",
    start: "top center",
    toggleActions: "play none none none"
  },
  opacity: 0,
  delay: 1,
  duration: 1
});

// Zoom sur image 6
gsap.from("#scene6 img", {
  scrollTrigger: {
    trigger: "#scene6",
    start: "top center",
    toggleActions: "play none none none"
  },
  scale: 0.5,
  opacity: 0,
  duration: 1.2
});
