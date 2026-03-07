const name = "ankit"
const repoCount = 500

// console.log(name + repoCount + "value");
console.log('hello my name is ${name} and my repo count is ${repocount}');

const gameName = new String('ankith')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   ankit  "
console.log(newStringOne);
console.log(newStringOne.trim());//trim remove starting and ending space
const url = "https://ankit.com/ankit%20malik"

console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))











