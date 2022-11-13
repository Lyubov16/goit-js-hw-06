// ------------------------НЕ ЗРОБИЛА ----------------

// Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і
//  натискає кнопку Створити, після чого рендериться колекція.
//  Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
//  Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//  Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи. */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxEll = document.querySelector('#boxes');
const input = document.querySelector('#controls > input')

btnCreate.addEventListener('click', createBoxes);

// function onBtnCreateClick() {
//   //   let amount = input.value 
//   // console.log(amount);
//   createBoxes()
// }

let basicSize = 30
const items = [];
  
function createBoxes(amount) {
  input.value ===  amount;
  // console.log(input.value);
  const items = [];
    basicSize += 10;

  const boxes = items.map(item => {
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = basicSize + 'px';
    div.style.height = basicSize + 'px';
    div.style.margin = '5px';
    console.log(div);
    // return div;
      boxEll.append(boxes);

  });
  



// for (let box = 0; box <= amount; box += 1) {
//   basicSize += 10;
//   const box = document.createElement('div');
//   box.style.backgroundColor = getRandomHexColor();
//   box.style.width = basicSize + 'px';
//   box.style.height = basicSize + 'px';
//   box.style.margin = '5px';
  
// }
}

function destroyBoxes() {
  boxes.innerHTML = '';
}