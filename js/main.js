/* eslint-disable no-undef */
/* eslint-disable no-new */
$(document).ready(() => {
  $('.house-img').on('mouseover', () => {
    $('#text1').animate(
      {
        translateX: ['-10px', '10px', '-5px', '5px', '0'],
      },
      1000,
      'easeInOutQuad',
    );
  });

  $('.tree-img').on('mouseover', () => {
    $('#text2').animate(
      {
        translateX: ['-10px', '10px', '-5px', '5px', '0'],
      },
      1000,
      'easeInOutQuad',
    );
  });

  $('.vazy-img').on('mouseover', () => {
    $('#text3').animate(
      {
        translateX: ['-10px', '10px', '-5px', '5px', '0'],
      },
      1000,
      'easeInOutQuad',
    );
  });

  $('.flowers-img').on('mouseover', () => {
    $('#text4').animate(
      {
        translateX: ['-10px', '10px', '-5px', '5px', '0'],
      },
      1000,
      'easeInOutQuad',
    );
  });

  if (window.Parallax) {
    new Parallax($('#scene_house_sq1')[0], { invertX: false, invertY: false });
    new Parallax($('#scene_house_sq2')[0]);
    new Parallax($('#scene_vazy_sq1')[0], { invertX: true, invertY: true });
    new Parallax($('#scene_vazy_sq2')[0], { invertX: false, invertY: true });
    new Parallax($('#scene_tree_sq1')[0], { invertX: false, invertY: true });
    new Parallax($('#scene_tree_sq2')[0]);
    new Parallax($('#scene_flowers_sq1')[0], { invertX: false, invertY: false });
  }
});
