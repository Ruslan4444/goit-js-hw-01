const ADMIN_PASSWORD = 'jqueryismyjam'
let message;

let userInput = prompt('Введите пароль')


if (userInput === null) {
    message = 'Отменено пользователем';
    console.log(message);
} else if (userInput === ADMIN_PASSWORD) {
     message = 'Добро пожаловать!';
    console.log(message);
} else if (userInput !== ADMIN_PASSWORD) {
    message = 'Доступ запрещен, неверный пароль!';
    console.log(message);
} alert(message);