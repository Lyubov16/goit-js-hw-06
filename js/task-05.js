const inputSpace = document.querySelector('#name-input');
const spanSpace = document.querySelector('#name-output');


inputSpace.addEventListener('input', onInputChanges);

function onInputChanges(event) {
    // if (inputSpace.textContent === '') {
    //     spanSpace.textContent = 'Anonymous'
    // }
    // spanSpace.textContent = event.currentTarget.value;
    event.currentTarget.value === ''
        ? spanSpace.textContent = 'Anonymous'
        : spanSpace.textContent = event.currentTarget.value;
};