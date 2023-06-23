$(document).ready(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',

    smooth: 1,
    normalizeScroll: true,
  });
});
