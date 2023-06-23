/* eslint-disable no-new */
/* eslint-disable no-undef */
// /* eslint-disable no-undef */
// /* eslint-disable no-new */
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

$(document).ready(() => {
  // ScrollSmoother.create({
  //   wrapper: '.wrapper',
  //   content: 'main',
  //   smooth: 2,
  //   normalizeScroll: true,
  // });
  $('.house-img').on('mouseover', () => {
    anime({
      targets: '#text1',
      translateX: [
        { value: -10 },
        { value: 10 },
        { value: -5 },
        { value: 5 },
        { value: 0 },
      ],
      easing: 'easeInOutQuad',
      duration: 1000,
    });
  });
  $('.tree-img').on('mouseover', () => {
    anime({
      targets: '#text2',
      translateX: [
        { value: -10 },
        { value: 10 },
        { value: -5 },
        { value: 5 },
        { value: 0 },
      ],
      easing: 'easeInOutQuad',
      duration: 1000,
    });
  });
  $('.vazy-img').on('mouseover', () => {
    anime({
      targets: '#text3',
      translateX: [
        { value: -10 },
        { value: 10 },
        { value: -5 },
        { value: 5 },
        { value: 0 },
      ],
      easing: 'easeInOutQuad',
      duration: 1000,
    });
  });
  $('.flowers-img').on('mouseover', () => {
    anime({
      targets: '#text4',
      translateX: [
        { value: -10 },
        { value: 10 },
        { value: -5 },
        { value: 5 },
        { value: 0 },
      ],
      easing: 'easeInOutQuad',
      duration: 1000,
    });
  });

  if (window.Parallax) {
    new Parallax(document.getElementById('scene_house_sq1'), { invertX: false, invertY: false });
    new Parallax(document.getElementById('scene_house_sq2'));
    new Parallax(document.getElementById('scene_vazy_sq1'), { invertX: true, invertY: true });
    new Parallax(document.getElementById('scene_vazy_sq2'), { invertX: false, invertY: true });
    new Parallax(document.getElementById('scene_tree_sq1'), { invertX: false, invertY: true });
    new Parallax(document.getElementById('scene_tree_sq2'));
    new Parallax(document.getElementById('scene_flowers_sq1'), { invertX: false, invertY: false });
  }
});
