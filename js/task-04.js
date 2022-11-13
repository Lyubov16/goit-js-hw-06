const refs = {
    valueEll: document.querySelector('#value'),
    incrBtn: document.querySelector('button[data-action="increment"]'),
    decrBtn: document.querySelector('button[data-action="decrement"]'),
    counterValue: 0,
}

const onIncrement = () => {
    refs.counterValue += 1;
    return refs.valueEll.textContent = refs.counterValue;
}

const onDecrement = () => {
    refs.counterValue -= 1;
    return refs.valueEll.textContent = refs.counterValue;
}

refs.incrBtn.addEventListener('click', onIncrement);
refs.decrBtn.addEventListener('click', onDecrement);




