const accountId = 13234
let accountEmail = "asjc@gmail.com"
var accountPassword = "1234"

accountCity = "Jaipur"
let accountState;

//accountId = 2 // Not Allowed

accountEmail = "sdfsf@gmail.com"
accountPassword = "3343"
accountCity = "Mumbai"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail ,accountPassword , accountCity, accountState])
