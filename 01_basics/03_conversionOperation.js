let score = "33"

console.log(typeof score) // string

let value = Number(score) // conversion from string to number
console.log(typeof value)

// "33" => 33
// "33abc" => NaN(Not a Number)
// true => 1
// false => 0

let isLoggedIn = 1
let booleanValue = Boolean(isLoggedIn) // conversion from number to boolean
console.log(booleanValue) // true

// "" => false
// "abc" => true
// 0 => false
// 1 => true

let num = 55
let str = String(num) // conversion from number to string
console.log(typeof str) // string

// 55 => "55"
// true => "true"
// false => "false"