const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(  function (item) {
//     console.log(item);
    
// })

// coding.forEach(  (item)  =>{
//     console.log(item);
    
// })

// function printMe(iteam){
//     console.log(iteam);
    
// }

// coding.forEach(printMe)

// coding.forEach((iteam, index, arr ) =>{
//     console.log(iteam, index, arr);
    
// })

const mycoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFIleName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageName);
    
})

// We can use For of loop for values printing/for iterating over values directly over [[[[ Strings & Array  ]]]
// We can use For in loop for values printing/for iterating over values by Indexes/Keys over Objects and Arrays & Strings .
// We Can Use forEach loop For iterating {{Over Arrays}} and its values as well.