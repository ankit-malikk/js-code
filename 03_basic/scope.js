// var c = 300// ousite bracket globel scope 

let a = 300
if(true){
let a = 10
const b = 20// in the bracket is block scope
//  console.log("INNer: ", a)
}
/// when we inspect the global scope by broswer is diffnent and in node also diff

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "ankit"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);

    two()
    
}
// one()

if(true) {
    const username = "ankit"
    if(username == "ankit"){
        const website ="youtube"
        // console.log(username + website);

    }
    // console.log(website);
    
}
// console.log(username);


//+++++++++++++++++++++++instersting++++++++++++++++
console.log(addone(5))
function addone(num){
    return num + 1
}



const addtwo = function(num){
    return num +2
}

addtwo(5)