const credits = 23580;
const pricePerDroid = 3000;

const buyDroid = prompt('Введите число дроидов которые хотите купить');
const totalPrice = buyDroid * pricePerDroid;
const balance = credits - totalPrice;
const buyDroids = totalPrice / pricePerDroid;
let message;

if (buyDroid === null) {
    message = ('Отменено пользователем');
} else if (totalPrice > credits) {
    message = ('Недостаточно средств на счету')
} else {
    message = (`Вы купили ${buyDroids} дроидов, на счету осталось ${balance} кредитов.`)
}
console.log(message);