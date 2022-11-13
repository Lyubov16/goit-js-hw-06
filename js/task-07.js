// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input)
// і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
//  В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text')

// console.log(input);

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    span.style.fontSize = event.currentTarget.value + 'px'
// console.log(event.currentTarget.value)
};

