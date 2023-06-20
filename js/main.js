/* eslint-disable no-undef */
// /* eslint-disable no-undef */
// /* eslint-disable no-new */
// $(document).ready(() => {
//   $('.house-img').on('mouseover', () => {
//     $('#text1').animate(
//       {
//         translateX: ['-10px', '10px', '-5px', '5px', '0'],
//       },
//       1000,
//       'easeInOutQuad',
//     );
//   });

//   $('.tree-img').on('mouseover', () => {
//     $('#text2').animate(
//       {
//         translateX: ['-10px', '10px', '-5px', '5px', '0'],
//       },
//       1000,
//       'easeInOutQuad',
//     );
//   });

//   $('.vazy-img').on('mouseover', () => {
//     $('#text3').animate(
//       {
//         translateX: ['-10px', '10px', '-5px', '5px', '0'],
//       },
//       1000,
//       'easeInOutQuad',
//     );
//   });

//   $('.flowers-img').on('mouseover', () => {
//     $('#text4').animate(
//       {
//         translateX: ['-10px', '10px', '-5px', '5px', '0'],
//       },
//       1000,
//       'easeInOutQuad',
//     );
//   });

//   if (window.Parallax) {
//     new Parallax($('#scene_house_sq1')[0], { invertX: false, invertY: false });
//     new Parallax($('#scene_house_sq2')[0]);
//     new Parallax($('#scene_vazy_sq1')[0], { invertX: true, invertY: true });
//     new Parallax($('#scene_vazy_sq2')[0], { invertX: false, invertY: true });
//     new Parallax($('#scene_tree_sq1')[0], { invertX: false, invertY: true });
//     new Parallax($('#scene_tree_sq2')[0]);
//     new Parallax($('#scene_flowers_sq1')[0], { invertX: false, invertY: false });
//   }
// });

/* eslint-disable no-new */
const house = document.querySelector('.house-img');
const tree = document.querySelector('.tree-img');
const vazy = document.querySelector('.vazy-img');
const flowers = document.querySelector('.flowers-img');

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');

house.addEventListener('mouseover', () => {
  anime({
    targets: text1,
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
tree.addEventListener('mouseover', () => {
  anime({
    targets: text2,
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
vazy.addEventListener('mouseover', () => {
  anime({
    targets: text3,
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
flowers.addEventListener('mouseover', () => {
  anime({
    targets: text4,
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
