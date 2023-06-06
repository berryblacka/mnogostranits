function copyAndMoveElement(elementId, offset, targetValue) {
  const originalElement = document.getElementById(elementId);
  const container = originalElement.parentNode;

  let currentOffset = 0;
  let time = 500;
  while (currentOffset <= targetValue) {
    const copiedElement = originalElement.cloneNode(true);
    copiedElement.style.position = 'absolute';
    copiedElement.style.top = `${currentOffset}px`;
    setTimeout(() => {
      container.appendChild(copiedElement);
    }, time);
    time += 70;
    currentOffset += offset;
  }
}

// const house = document.querySelector('.house-img');

// house.addEventListener('click', () => {
//   copyAndMoveElement('text', 50, window.innerHeight);
// });

// function copyAndMoveElement(elementId, offset, targetValue) {
//   const originalElement = document.getElementById(elementId);
//   const container = originalElement.parentNode;

//   let currentOffset = 0;
//   let time = 500;
//   const copiedElements = [];

//   while (currentOffset <= targetValue) {
//     const copiedElement = originalElement.cloneNode(true);
//     copiedElement.style.position = 'absolute';
//     copiedElement.style.top = `${currentOffset}px`;
//     container.appendChild(copiedElement);
//     copiedElements.push(copiedElement);
//     currentOffset += offset;
//     time += 70;
//   }

//   container.addEventListener('mouseout', () => {
//     // eslint-disable-next-line no-restricted-syntax
//     for (const element of copiedElements) {
//       container.removeChild(element);
//     }
//   });
// }

const house = document.querySelector('.house-img');

house.addEventListener('click', () => {
  copyAndMoveElement('text', 50, window.innerHeight);
  house.style.filter = 'grayscale(0)';
});
