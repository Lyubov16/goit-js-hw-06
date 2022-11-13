// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль 
// по кліку на button.change - color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.


const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color')
const bodyColor = document.querySelector('body');
// console.log(bodyColor)

btnChangeColor.addEventListener('click', onBtnChangeColorClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onBtnChangeColorClick() {
  const colors = getRandomHexColor();
  bodyColor.style.backgroundColor = colors;
  spanColor.textContent = colors;
}