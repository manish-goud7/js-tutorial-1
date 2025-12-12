const accountId = 1234567
let accountEmail = "manishgoud@mail.com"
var accountPassword = "12334"
accountCity = "Kurnool" // variables can also be initailized with a value but it is not a good practice
let accountState
// accountId =223443 not valid as const variables cannot be changed
accountEmail = "maneeshgoud@mail.com"
accountPassword = "121221"
accountCity = "Hyderabad"


/*
prefer let over var because of issues in block scope and functional scope 
*/

// console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])