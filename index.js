//index.js file
const coffeeMenu = require("./coffee_data.js")

console.log(coffeeMenu)

console.log("\ncofee price five and under==>\n")
console.log(coffeeMenu.filter(coffee => coffee.price <= 5))

console.log("\ncofee that are priced at an even number==>\n")
console.log(coffeeMenu.filter(coffee => coffee.price % 2 === 0))

console.log("\nprint the total if I was to order one of every drink==>\n")
//first, create new array of prices only
const newArr = coffeeMenu.map(x => x.price);
const initPrice = 0;
const total = newArr.reduce(
    (accuPrice, currPrice) => accuPrice + currPrice,
    initPrice);
console.log(total);

console.log("\nprint array of coffee that are seasonal==>\n")
console.log(coffeeMenu.filter(coffee => coffee.seasonal ))


console.log("\nprint array of coffee that are seasonal with words with imported beans after item name==>\n")
const seasonCoffee = coffeeMenu.filter(coffee => coffee.seasonal); 
console.log(seasonCoffee.map(coffee => coffee.name + " with imported beans") )


