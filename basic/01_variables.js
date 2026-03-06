const accountId = 1445543
let accountEmail = "ankit@gmail.com"
var accountPassword = "1234"
accountCity ="jind"
let accountState;

// accountId = 2 not allowed
accountEmail= "abc"
accountPassword ="12333"
accountCity = "jaipur"
/*
prefer not to use var
because of issue in block scope and functional scope

*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
