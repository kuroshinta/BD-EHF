gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".step").forEach((step, index) => {
  ScrollTrigger.create({
    trigger: step,
    start: "top center",
    end: "bottom center",
    onEnter: () => activateDot(index),
    onEnterBack: () => activateDot(index),
  });
});

function activateDot(index) {
  document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active"));
  const activeDot = document.querySelector(`.dot[data-step="${index + 1}"]`);
  if (activeDot) activeDot.classList.add("active");
}
