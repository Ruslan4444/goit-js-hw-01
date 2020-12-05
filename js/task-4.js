const credits = 23580;
const pricePerDroid = 3000;

const buyDroid = prompt('Введите число дроидов которые хотите купить');
const totalPrice = buyDroid * pricePerDroid;
const balance = credits - totalPrice;
const buyDroids = totalPrice / pricePerDroid;

if (buyDroid === null) {
    console.log('Отменено пользователем');
} else if (totalPrice > credits) {
    console.log('Недостаточно средств на счету')
} else {
    console.log(`Вы купили ${buyDroids} дроидов, на счету осталось ${balance} кредитов.`)
}