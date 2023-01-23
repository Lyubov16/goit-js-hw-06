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
const input = document.querySelector('#controls input');




function createBoxes(amount) {
for (let i = 0; i < amount; i+=1) {
  const box = document.createElement('div');

  box.style.width = 30 + (10 * i) +'px';
  box.style.height = 30 + (10 * i) +'px';
  box.style.backgroundColor = getRandomHexColor();

  boxEll.append(box);
}
}

input.addEventListener('input', onInputClear);

function onInputClear(event) {
  console.log(event.currentTarget.value)
  // event.currentTarget.value;
  console.log(input.textContent)
  
};

btnCreate.addEventListener('click', function onBtnClick() {
  const amount = input.value;
  if (amount > 0) {
    createBoxes(amount);
  }

}
)

btnDestroy.addEventListener('click', function destroyBoxes() {
  boxEll.innerHTML = '';
}) 


// btnCreate.addEventListener('click', onBtnCreateClick);

// function onBtnCreateClick() {
//      amount = input.value 
//   console.log(amount);
//   createBoxes()
// }

// // let basicSize = 30
// // const items = [];
  
// function createBoxes(amount) {
  
  // console.log(input.value);

  //   basicSize += 10;

  // const boxes = items.map(item => {
  //   const div = document.createElement('div');
  //   div.style.backgroundColor = getRandomHexColor();
  //   div.style.width = basicSize + (10 * item) + 'px';
  //   div.style.height = basicSize + 'px';
  //   div.style.margin = '5px';
  //   console.log(div);
  //   // return div;
  //     boxEll.append(boxes);

  // });
  



// for (let box = 0; box <= amount; box += 1) {
//   const box = document.createElement('div');
//   box.style.backgroundColor = getRandomHexColor();
//   box.style.width = basicSize + 'px';
//   box.style.height = basicSize + 'px';
//   box.style.margin = '5px';
  
// }
// }

