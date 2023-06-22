/* eslint-disable no-undef */
$(document).ready(() => {
  $('.slider').slick({
    arrows: false,
    slidesToShow: 1,
    // slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    // infinite: false,

  });
  $('.slider2').slick({
    arrows: false,
    slidesToShow: 1,
    // slidesToScroll: 1,
    variableWidth: true,
    autoplay: false,
    infinite: false,

  });
  $('.header__link').hover(
    function () {
      // Добавить класс белого цвета к #text1 и черного к текущему элементу при наведении
      $('#text3')
        .addClass('header__link_white')
        .removeClass('header__link_black');
      $(this)
        .addClass('header__link_black')
        .removeClass('header__link_white');
    },
    function () {
      // Удалить белый и черный класс у #text1 и текущего элемента при отведении курсора
      $('#text3')
        .removeClass('header__link_white')
        .addClass('header__link_black');
      $(this).removeClass('header__link_black');
      $('#text3').addClass('header__link_black');
    },

  );
  $('.slider__item-hover').hover(
    () => {
      $('.merch-absolute').css('opacity', '0');
      $('.merch-absolute').css('display', 'block');
      anime({
        targets: '.merch-absolute',
        opacity: [0, 1],
        duration: 400,
        easing: 'linear',
        // begin() {

        // },
        complete() {
          // $('.merch-absolute').css('opacity', '1');
          $('.merch-absolute').css('display', 'block');
        },
      });
    },
    () => {
      anime({
        targets: '.merch-absolute',
        opacity: [1, 0],
        duration: 400,
        easing: 'linear',
        complete() {
          $('.merch-absolute').css('opacity', '0');
          $('.merch-absolute').css('display', 'none');
        },
      });
    },
  );
});
