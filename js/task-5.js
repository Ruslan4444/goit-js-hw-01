
let cost;
let myCountry = prompt('Введите страну для доставки');

if (myCountry !== null) {
    myCountry = myCountry.toLowerCase();
} 



switch (myCountry) {
    case 'китай':
        cost = `Доставка в ${myCountry} будет стоить 100 кредитов`;;
        break;
    case 'чили':
        cost = `Доставка в ${myCountry} будет стоить 250 кредитов`;;
        break;
    case 'австралия':
        cost = `Доставка в ${myCountry} будет стоить 170 кредитов`;;
        break;
    case 'индия':
        cost = `Доставка в ${myCountry} будет стоить 80 кредитов`;;
        break;
    case 'ямайка':
        cost = `Доставка в ${myCountry} будет стоить 120 кредитов`;
        break;
    default:
        alert('В вашей стране доставка не доступна');
        
}
console.log(cost);


    

