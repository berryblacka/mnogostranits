$(document).ready(() => {
  $('.form').submit((event) => {
    event.preventDefault();
    anime({
      targets: '.form',
      translateY: '-100%',
      opacity: 0,
      easing: 'easeInOutQuad',
      duration: 1000,
      complete() {
        $('.thanks').css('display', 'block');
        $('.form').css('display', 'none');
        anime({
          targets: '.thanks',
          translateY: ['100%', '0%'],
          opacity: 1,
          // easing: 'easeInOutQuad',
          duration: 1000,
        });
      },
    });
  });
  $('.header__link').hover(
    function () {
      // Добавить класс белого цвета к #text1 и черного к текущему элементу при наведении
      $('#text4')
        .addClass('header__link_white')
        .removeClass('header__link_black');
      $(this)
        .addClass('header__link_black')
        .removeClass('header__link_white');
    },
    function () {
      // Удалить белый и черный класс у #text1 и текущего элемента при отведении курсора
      $('#text4')
        .removeClass('header__link_white')
        .addClass('header__link_black');
      $(this).removeClass('header__link_black');
      $('#text4').addClass('header__link_black');
    },

  );
});
