//Quesiton 1
//Create an array of objects and sort them
const products = [
    {name: 'laptop', price: 56000},
    {name: 'phone', price: 20000},
    {name: 'tablet', price: 15000},
    {name: 'keyboard', price: 3500}
];
const sortedByName = products.sort((a, b) => a.name.localeCompare(b.name));

console.log("Sorted By Name",sortedByName);


//Question 2
//Give me the sum of the prices (try chaining methods)
//[{price: 10.99}, {price: 5.99}, {price: 29.99}]
const prices = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const sum = prices.map(price => price.price).reduce((prev, next) => prev + next, 0);
console.log("Sum of the prices",sum);