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
