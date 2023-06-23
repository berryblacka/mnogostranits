/* eslint-disable no-undef */
$(document).ready(() => { // Выполнить обработчики при наведении
  $('.header__link').hover(
    function () {
      // Добавить класс белого цвета к #text1 и черного к текущему элементу при наведении
      $('#text2')
        .addClass('header__link_white')
        .removeClass('header__link_black');
      $(this)
        .addClass('header__link_black')
        .removeClass('header__link_white');
    },
    function () {
      // Удалить белый и черный класс у #text1 и текущего элемента при отведении курсора
      $('#text2')
        .removeClass('header__link_white')
        .addClass('header__link_black');
      $(this).removeClass('header__link_black');
      $('#text2').addClass('header__link_black');
    },

  );
  // $('.hover-poster1').hover(
  //   function () {
  //     $(this).attr('src', './img/events/1_colored.png');
  //   },
  //   function () {
  //     $(this).attr('src', './img/events/1.png');
  //   },
  // );

  $('.hover-poster1').on('mouseenter', function () {
    const coloredImage = './img/events/1_colored.png';
    $(this).fadeOut('fast', function () {
      $(this).attr('src', coloredImage).fadeIn('fast');
    });
  }).on('mouseleave', function () {
    const defaultImage = './img/events/1.png';
    $(this).fadeOut('fast', function () {
      $(this).attr('src', defaultImage).fadeIn('fast');
    });
  });
  $('.hover-poster2').on('mouseenter', function () {
    const coloredImage = './img/events/2_colored.png';
    $(this).fadeOut('fast', function () {
      $(this).attr('src', coloredImage).fadeIn('fast');
    });
  }).on('mouseleave', function () {
    const defaultImage = './img/events/2.png';
    $(this).fadeOut('fast', function () {
      $(this).attr('src', defaultImage).fadeIn('fast');
    });
  });
  $('.hover-poster3').on('mouseenter', function () {
    const coloredImage = './img/events/3_colored.png';
    $(this).fadeOut('fast', function () {
      $(this).attr('src', coloredImage).fadeIn('fast');
    });
  }).on('mouseleave', function () {
    const defaultImage = './img/events/3.png';
    $(this).fadeOut('fast', function () {
      $(this).attr('src', defaultImage).fadeIn('fast');
    });
  });
});
