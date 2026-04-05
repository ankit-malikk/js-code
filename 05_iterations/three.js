// for of

// [" ", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr){
   // console.log(num);
    
}

const greetings = "hello world"
for(const greet of greetings){
  //  console.log(`eacch char is ${greet}`);
    
}

//maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")


// console.log(map); //in map always unique value


for (const [key, value] of map) {// squrare bracket used for destructure of array hold the value diff
 //   console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'nfs',
    'game2': 'Spiderman'
}// object are not iterateble using map
// for (const elemen[key, value] of object) {
//     console.log(key, ':-', value);
    
// }