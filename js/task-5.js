
let cost;
let myCountry = prompt('Введите страну для доставки');

if (myCountry !== null) {
    myCountry = myCountry.toLowerCase();
} 



switch (myCountry) {
    case 'китай':
        cost = 100;
        break;
    case 'чили':
        cost = 250;
        break;
    case 'австралия':
        cost = 170;
        break;
    case 'индия':
        cost = 80;
        break;
    case 'ямайка':
        cost = 120;
        break;
    default:
        alert('В вашей стране доставка не доступна');
        
}
if (cost) {
console.log(`Доставка в ${myCountry} будет стоить ${cost} кредитов`);
}


    

