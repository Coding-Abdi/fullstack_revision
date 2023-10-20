const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
}

// for of
// Iteration - arrays, strings
for (item of basket) {
    console.log(item);
}

// for in - properties
// Enumerating - objects
for (item in detailedBasket) {
    console.log(item)
}