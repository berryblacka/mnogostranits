/* eslint-disable no-lonely-if */
/* eslint-disable no-undef */
$(document).ready(() => {
  $('.slider').slick({
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: false,
    // vertical: true,
    infinite: false,
  });

  // Для каждого slider__item
  $('.slider__item').each(function () {
    // Найти соответствующий чекбокс и text-container
    const $checkbox = $(this).find("input[type='checkbox']");
    const $textContainer = $(this).find('.text-container');

    // Обработчик события клика по чекбоксу
    $checkbox.click(() => {
      // Проверка состояния чекбокса и наличия класса appear
      if ($checkbox.is(':checked')) {
        // Если чекбокс выбран и класса appear нет, добавить класс для анимации
        if (!$textContainer.hasClass('appear')) {
          $textContainer.addClass('appear');
        }
      } else {
        // Если чекбокс снят и класс appear есть, убрать класс
        if ($textContainer.hasClass('appear')) {
          $textContainer.removeClass('appear');
        }
      }
    });
  });

  // Выполнить обработчики при наведении
  $('.header__link').hover(
    function () {
      // Добавить класс белого цвета к #text1 и черного к текущему элементу при наведении
      $('#text1')
        .addClass('header__link_white')
        .removeClass('header__link_black');
      $(this)
        .addClass('header__link_black')
        .removeClass('header__link_white');
    },
    function () {
      // Удалить белый и черный класс у #text1 и текущего элемента при отведении курсора
      $('#text1')
        .removeClass('header__link_white')
        .addClass('header__link_black');
      $(this).removeClass('header__link_black');
      $('#text1').addClass('header__link_black');
    },

  );
});
