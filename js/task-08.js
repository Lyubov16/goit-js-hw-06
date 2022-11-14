// Напиши скрипт управління формою логіна.
// 1. Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// 2. Під час відправлення форми сторінка не повинна перезавантажуватися.
// 3. Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// 4. Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт,
//  де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.
// 5. Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const form = document.querySelector('.login-form');
console.log(form);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
        event.preventDefault();
    //     const formEll = event.currentTarget.elements;
    //     // console.dir(formEll);
    //     const elements = {};
    //     elements.email = formEll.email.value;
    //     elements.password = formEll.password.value;

    // if (elements.email  === '' || elements.password === '') {
    //     return alert('Всі поля мають бути заповнені!')
    // }
    //     console.log(elements);
    //     event.currentTarget.reset();

    const { email, password } = event.currentTarget.elements;
    if (email.value === '' || password.value === '') {
        return alert('Всі поля мають бути заповнені!')
    }
    console.log({ Email: email.value, Password: password.value});
    event.currentTarget.reset();
};