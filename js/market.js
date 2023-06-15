/* eslint-disable no-undef */
$(document).ready(() => {
  $('.slider').slick({
    arrows: false,
    slidesToShow: 3,
    // slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,

  }); // Выполнить обработчики при наведении
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
});
