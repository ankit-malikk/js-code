const userEmail = []

if(userEmail){
    console.log("Got user email");
    
} else{
    console.log("don't have user email");
    
}

// falsy values
// false, 0, -0, bigInt 0n, "", null, undefined, Nan

// truthy values
//"0", 'false', " ",, [], {}, function(){}4

// if (userEmail.length === 0) {
//     console.log("array is empty");
    
    
// }
const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    

}

// nullish coalescing operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15


console.log(val1);

// terniary operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")









// summary //


// 00:28 🧠 Understanding data types and execution in JavaScript is crucial for building a strong foundation in programming.
// 00:57 💡 The video aims to cover control flow comprehensively within a single video, focusing on syntax and avoiding unnecessary repetition.
// 01:54 🌐 Creating files within the "04" folder, starting with a file named "$1.js" for organizing the code.
// 02:09 👀 Checking the code files to ensure that functions, scopes, and other components are correctly set up for execution.
// 02:36 🔄 Control flow or logical flow in programming should dictate when specific portions of code run based on conditions, enhancing overall program control.
// 03:05 🔄 When writing conditions, open the scope after it. The internal code inside the scope will execute only if the condition is true.
// 03:31 ⚠️ Be cautious about statements like "if false, later false." Only execute the code inside the scope if the condition is true.
// 04:10 ⚖️ Basic conditions involve checking if a value is equal, greater than, or less than another. Understand how comparisons work.
// 05:00 🔄 When comparing values, operators like "greater than," "greater than or equal to," and "equal to" help define conditions in your code.
// 05:56 🔄 Understand the difference between single and double equals. Single equals assigns a value, while double equals checks for equality.
// 06:10 🔄 Use "==" for checking equality in conditions, and "=" for assignment. Clarify the purpose of operators to avoid confusion.
// 06:24 ❌ Be cautious with negative statements in conditions. Verify that your negations and checks provide the expected results.
// 06:38 🔄 Conditional statements in JavaScript can be implemented using if conditions.
// 07:09 📝 Triple equals (`===`) in JavaScript checks both value and type equality.
// 07:25 🚀 Executing code based on strict type checking can be achieved using strict equality (`===`).
// 09:17 🌡️ Implementing a basic temperature check using if conditions and strict equality in JavaScript.
// 10:17 🧐 To check conditions in JavaScript, use keywords like `if` and `else`. Ensure that the conditions are correctly formulated.
// 11:51 🧮 Scope is essential; understanding global and function scope helps prevent variable conflicts and ensures code functions as intended.
// 15:22 🛠️ Use "direct" to execute code directly within the scope. Be cautious with implicit scopes; one-line execution is automatic.
// 15:50 📄 Write multi-line conditions by using common practices, and execute tests for verification.
// 16:32 ❌ Avoid impractical practices for the sake of impressing others; prioritize clean and readable code over unnecessary complexity.
// 16:45 🔑 Understanding the basics of how "if-else" conditions work in JavaScript; focus on nesting and executing conditions as needed.
// 16:59 🔄 Introduction to nesting in JavaScript; the importance of checking multiple conditions and handling scenarios with multiple conditions.
// 17:27 🛠️ Using if-else statements with greater than (>) condition to execute code.
// 18:01 🧐 Implementing multiple conditions using else-if statements.
// 18:54 🧠 Using the else statement for a final execution when no conditions are met.
// 19:24 🤔 Discussing the application of multiple conditions in real-life scenarios, such as online shopping.
// 20:08 💳 Exploring the concept of multiple conditions for user access and transaction authorization.
// 21:22 🔄 Using multiple if statements for handling various conditions.
// 22:03 📝 Implementing conditional rendering based on user details like email format, day availability, and having a debit card.
// 23:19 ✔️ Simplifying conditions by combining multiple checks, ensuring at least one condition is true.
// 23:46 🛑 Dynamically changing UI elements based on user conditions (e.g., showing login/logout buttons).
// 24:14 📂 Introduction to creating a new file and exploring different formats in JavaScript control flow.
// 25:37 🔄 Demonstrating the use of the `switch` statement with a practical example of checking values against different months.
// 26:04 🔄 Explaining the importance of using a `break` statement in each `case` to avoid fall-through in the `switch` statement.
// 26:44 🔄 Demonstrating the use of the `break` statement to prevent fall-through in a `switch` statement.
// 27:14 🔄 Discussing the default case in a `switch` statement and how it can be used to handle unmatched conditions or execute default code.
// 27:42 🔄 Understanding how control flow works in JavaScript, especially with break statements in loops.
// 28:10 🐍 Modern languages like Swift handle control flow differently, in contrast to older languages like JavaScript.
// 29:05 🚧 Demonstrating the importance of sensitivity when matching values and utilizing exact matches with the `===` operator.
// 29:35 🔄 Simplifying value comparison by using brackets and the equality operator (`===`), reducing the need for additional comparison operators.
// 30:45 📁 Creating a new file named "truth-and-error.js" for error and truth values.
// 31:30 🖨️ Discussing the challenge of printing on the web based on conditions.
// 32:00 🔄 Handling scenarios where an email is present, and the code runs successfully, exploring behind-the-scenes of the code execution.
// 32:14 ❓ Discussing an interesting situation where no comparison is made, and the code runs without checking the condition.
// 32:28 🔍 Demonstrating how to check for the existence of a true value within a string.
// 32:43 🚫 Handling scenarios where the email value is an empty string and ensuring the code works with different situations.
// 33:10 📝 Summarizing the types of truth and false values present in the code.
// 33:23 ✔️ Listing the values, including true, false, obvious false, zero, and handling special cases.
// 33:50 🚧 Clarifying that negative zero is generally considered as a false value, except in specific scenarios.
// 34:18 🔄 Null and Undefined are considered false values in JavaScript.
// 34:47 🕵️ When dealing with error values, pay attention to the "False Values" and "True Values" within the code.
// 35:29 🚀 Some error values may surprise you, so being subscribed to the channel helps in staying informed.
// 35:42 📝 When writing code within a string, be cautious about how zero and other values are interpreted as error values.
// 35:56 🔍 White spaces within strings can also be interpreted as error values, so be mindful of them.
// 36:24 📜 Function declarations without parameters or execution code inside are also considered error values.
// 36:38 🧐 Understanding how various values, including objects, are recognized as error values is crucial for developers.
// 37:04 🤯 Error values become more apparent when working on projects, emphasizing the importance of checking conditions effectively.
// 38:30 🕵️‍♂️ Detect if an object is empty by comparing its length property with zero after converting it to a string.
// 38:58 🛠️ Demonstrate the practical application of object detection in a scenario where you want to check if an object is empty.
// 39:11 🤔 Understand the basic principles of object detection and apply them to improve code efficiency.
// 39:38 🔄 Clarify the distinction between "==" and "===" operators when comparing values, and be aware of their implications.
// 39:52 🧠 Understand the outcomes of equality comparisons with "===" and "==" operators to handle truthy and falsy values effectively.
// 41:18 🛠️ The "nullish coalescing" operator checks specifically for null and undefined, providing a concise way to handle default values.
// 41:36 📝 Use the nullish coalescing operator (??) to assign a default value if a variable is null or undefined.
// 44:14 🔄 Avoid confusion between undefined and null by using nullish coalescing operator (`??`).
// 44:58 ➡️ Nullish coalescing operator is designed specifically for null and undefined, providing a convenient solution.
// 45:40 🚧 Handle errors effectively and assign values with a fundamental understanding of the process.
// 46:06 🔀 Differentiate between nullish coalescing operator, nullish collation operator, and ternary operator.
// 47:40 🔄 Basics of conditional statements in JavaScript are demonstrated, using operators like greater than (`>`).
// 47:53 📏 Comparison of values using conditional statements, emphasizing the importance of checking conditions correctly.
// 48:08 🔄 Introduction to conditional flow control with a basic example of checking if the price is less than 80.
// 48:20 📝 Summary of controlling code execution based on conditions and the need for control in different situations.
// 48:49 🤔 Understanding conditional execution based on various conditions like user ratings and temperature.
// 51:10 🎭 Introducing the concept of Nullish Coalescing Operator (`??`) for handling multiple function calls and addressing potential issues with direct value display.
// 51:39 ⚠️ Demonstrating the use of the question mark (`?`) and flag values to handle scenarios where functions may return `null` or `undefined`.