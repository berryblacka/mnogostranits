$(document).ready(() => {
  let i = 1;
  $('#next').click(() => {
    if (i < 15) {
      i += 2;
      $('#left_page').attr('src', `./img/book/page_${i}.jpg`);
      $('#right_page').attr('src', `./img/book/page_${i + 1}.jpg`);
    }
  });
  $('#previous').click(() => {
    if (i > 2) {
      i -= 2;
      $('#left_page').attr('src', `./img/book/page_${i}.jpg`);
      $('#right_page').attr('src', `./img/book/page_${i + 1}.jpg`);
    }
  });
});
