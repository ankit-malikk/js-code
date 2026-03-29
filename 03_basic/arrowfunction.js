const user = {
    username: "ankit",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "ankit"
//     console.log(this);
    
// }
// chai()


// const chai = function(){
//     let username = "ankit"
//     console.log(this.username);
    
// }

const chai = () => {
    let username = "ankit"
    console.log(this);
    

}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 4))

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "ankit"})


console.log(addTwo(3, 4))
// 1. This keyword global and local scope context 
// 2. Arrow function with object, without object
// 3. Arrow function with implicit context and explicit context 
// 4. This keyword with node engine and browser engine 
