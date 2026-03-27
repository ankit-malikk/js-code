//singleton
//Objet.create

//object literals

const mysym = Symbol("key1")

const JsUser ={
    name: "Ankit",
    "Full name": "Ankit Malik",
    [mysym]: "myKey1",//declare a  symbol
    age: 21,
    Location: "Dheradun",
    email : "ankit@123",
    isLoggedIn: false,
    lastLoginDays: ["monday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["Full name"])//square bracket for string
console.log(JsUser[mysym])


JsUser.email = "ankit@gmail.com"//change the value
//Object.freeze(JsUser)
JsUser.email = "ankit@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js user ");
  
}

  JsUser.greetingtwo = function(){
    console.log(`Hello js user, ${this.name}`);
  }
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());