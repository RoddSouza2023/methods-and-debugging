let menu = require('./coffee_data');


console.log('2 -------------------------------------------------------------------------------- 2');

let drinks = menu.map(item => item.name);

console.log(drinks);


console.log('3 -------------------------------------------------------------------------------- 3');

function drinksUnderFive(arr) {
    return arr.filter(item => item.price <= 5).map(element => element.name);
}

console.log(drinksUnderFive(menu));


console.log('4 -------------------------------------------------------------------------------- 4');

function evenNumberPrice(arr) {
    return arr.filter(item => item.price % 2 === 0).map(item => item.name);
}

console.log(evenNumberPrice(menu));


console.log('5 -------------------------------------------------------------------------------- 5');

function superHungry(arr) {
    totalPrice = 0;

    for (const item of arr) {
        totalPrice += item.price;
    }

    return totalPrice;
}

console.log(superHungry(menu));


console.log('6 -------------------------------------------------------------------------------- 6');

function seasonalDrinks(arr) {
    return arr.filter(item => item.seasonal).map(item => item.name);
}

console.log(seasonalDrinks(menu));


console.log('7 -------------------------------------------------------------------------------- 7');

function addImportInfo(arr) {
    return seasonalDrinks(arr).map(item => item += " with imported beans");
}

console.log(addImportInfo(menu));