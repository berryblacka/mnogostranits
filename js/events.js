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
});
