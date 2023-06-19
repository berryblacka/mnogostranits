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
        anime({
          targets: '.thanks',
          translateY: ['100%', '-150%'],
          opacity: 1,
          // easing: 'easeInOutQuad',
          duration: 1000,
        });
      },
    });
  });
});
