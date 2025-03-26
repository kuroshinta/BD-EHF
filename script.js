gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.scene img').forEach((img, index) => {
  gsap.from(img, {
    scrollTrigger: {
      trigger: img,
      start: 'top 80%',
      end: 'bottom 60%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: 'power2.out'
  });
});

gsap.to(".progress-bar", {
  height: "100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});


// Fondu pour image 3
gsap.from("#scene3 img", {
  scrollTrigger: {
    trigger: "#scene3",
    start: "top center",
    toggleActions: "play none none none"
  },
  opacity: 0,
  duration: 10
});

// Délai sur image 4 après la 3
gsap.from("#scene4 img", {
  scrollTrigger: {
    trigger: "#scene4",
    start: "top center",
    toggleActions: "play none none none"
  },
  opacity: 0,
  delay: 10,
  duration: 10
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

gsap.registerPlugin(ScrollTrigger);

gsap.to(".progress-bar", {
  height: "100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
});
