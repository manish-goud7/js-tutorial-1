//const user = new Object() //singleton object
const user = {} //non singleton object
user.id="123abc"
user.name = "john"
user.isLoggedIn = false

const regularUser = {
    email : "johndoe@gmail.com",
    fullName : {
        firstName : "john",
        lastName : "doe"
    }
}
// console.log(regularUser.fullName.firstName);

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}

// // const obj3 = {obj1,obj2}
// // const obj3 = Object.assign({} , obj1,obj2) // (target,source)
// const obj3 = {...obj1,...obj2}
// console.log(obj3);

// console.log(Object.keys(user));
// console.log(Object.values(user)); // returns the values in array
// console.log(Object.entries(user)); // entries are key values pairs

// console.log(user.hasOwnProperty('isLoggedIn'))


//********************** De Structuring *******************************/
const {email} = regularUser // used when repeatedly we use email
console.log(email);
