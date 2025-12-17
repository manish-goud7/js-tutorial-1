// const user = {
//     name: "john",
//     age: 35,
//     greeting: function(){
//         console.log(`${this.name} , welcome to this website`);
//         console.log(this);
        
//     }
// }

// // this refers to the current context

// user.greeting()
// user.name = "sam"
// user.greeting()

// console.log(this); // {}

// function one(){
//     console.log(this);
// }


// function one(){
//     const username = "john"
//     console.log(this.username); //undefined
// }


// const one = function (){
//     const username = "john"
//     console.log(this.username); //undefined
// }


// const one = () => {
//     const username = "john"
//     console.log(this.username); //undefined
// }


// one()

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }


// const addTwo = (num1,num2) =>  (num1 + num2)

const addTwo = (num1,num2) =>  ({name: "doe"})

console.log(addTwo(5,6));

