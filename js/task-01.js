const categories = document.querySelector('#categories');
const categoriesItems = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesItems.length);

categoriesItems.forEach(element => {
    console.log('Category: ', element.querySelector('h2').textContent);
    console.log('Elements: ', element.querySelectorAll('li').length);
})