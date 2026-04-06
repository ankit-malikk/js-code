const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 3)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
        {
        itemName: "py course",
        price: 999
    },
        {
        itemName: "mobile dev course",
        price: 5999
    },
]
const pricetoPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(pricetoPay);

// 00:02 Understanding the basics of filter map and reduce in JavaScript
// 01:59 Returning values in JavaScript
//  Explanation of filter function in JavaScript
//  Filter, map, and reduce in JavaScript
//  Filtering and printing user books in JavaScript
//  Filtering and reducing data using JavaScript filter method
//  Using the map method to add 10 to each number in the given array
//  Using filter in JavaScript
//  Using filter, map, and reduce in JavaScript
//  Filter, map, and reduce are important concepts in JavaScript
//  Reduce function in JavaScript takes in an accumulator and a current value.
//  The accumulator is used to keep track of values and perform operations on them.
//  Understanding the concept of filter, map, and reduce in JavaScript
// Exploring filter, map, and reduce functions in JavaScript


