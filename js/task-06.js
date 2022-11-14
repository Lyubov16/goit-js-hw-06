// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
    // якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputSpace = document.querySelector('#validation-input');
const symbols = Number(inputSpace.dataset.length);
console.log(symbols);

inputSpace.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    // console.log('інпут втратив фокус');
    // console.log(event.currentTarget.value.length);
    // event.currentTarget.value.length === symbols
    //     ? inputSpace.classList.add('valid')
    //     : inputSpace.classList.add('invalid');
    if (event.currentTarget.value.length === 0) {
        inputSpace.classList.remove('invalid');
        inputSpace.classList.remove('valid');
    } else if (event.currentTarget.value.length === symbols) {
        inputSpace.classList.add('valid');
        inputSpace.classList.remove('invalid');
    } else if(event.currentTarget.value.length !== symbols) {
        inputSpace.classList.add('invalid');
        inputSpace.classList.remove('valid');

    }
}




