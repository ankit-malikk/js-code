


function sayMyName(){
    console.log("A");
console.log("N");
console.log("K");
console.log("I");
console.log("T");

}
// sayMyName()// bracket for call only name is written for call

// function addTwoNummbers(number1, number2){
  // console.log(number1 + number2);//take value in function called parameters


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result// after result nothing will print

    return number1 + number2
}
const result = addTwoNumbers(3, 5)// take inputs in calling called argument

// console.log("Result: ", result);

function loginUserMessage(username){
    if(username== undefined){
     console.log("please enter a username");
     return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Ankit"))
// console.log(loginUserMessage("Ankit"));

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "Ankit",
    price: 100
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){

    return getArray[1]

}
// console.log(rewturnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

