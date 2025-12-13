// Singleton
// object.create

// Object literals

const mySym = Symbol("key1")

const user = {
    name : "Maneesh",
    "full-name":"Maneesh Goud",
    age : 18,
    location : "Kurnool",
    email : "maneesh@google.com",
    isLoggedIn : false,
    [mySym] : "myKey1"
    
}
// console.log(user.email)
// console.log(user["email"]) // another way of accesing methods in the object
// console.log(user["full-name"]) // another way of accesing methods in the object
// console.log(user[mySym])

// user.email = "maneesh@chatgpt.com"
// Object.freeze(user) // freezes the object no changes allowed
// user.email = "maneesh@microsoft.com"
// console.log(user.email)

user.greeting = function(){
    console.log("Hello user");
    
}
user.greetingTwo = function(){
    console.log(`Hello user, ${user["full-name"]}`);
    
}

console.log(user.greeting())
console.log(user.greetingTwo())