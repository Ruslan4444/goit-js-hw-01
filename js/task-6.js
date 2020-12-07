let input;
let total = 0;

while (input !== total) {
    input = prompt('Введите число');

    if (input === null) {
        alert(`Общая сумма чисел равна ${total}`);
        break;
    }
    total += Number(input);
}