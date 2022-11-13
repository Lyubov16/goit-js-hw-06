const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

// const createIngredientsItems = itemsEl => {
//   const itemElement = document.createElement('li');
//   itemElement.textContent = itemsEl;
//   itemElement.classList.add('item');
//   console.log(itemElement);
//   return itemElement;
// }; 

// const listOfItems = ingredients.map(createIngredientsItems);
// console.log(listOfItems);
// ingredientsList.append(...listOfItems);
// console.log(ingredientsList);

const markup = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList.add('item');
  console.log(li);
  return li;
});
console.log(markup);
ingredientsList.append(...markup);
console.log(ingredientsList);