// Stack(Primitives) vs Heap(Non-Primitive) Memory Allocation in JavaScript

// let name = "John" // Primitive type (string) stored in stack memory
// let newName = name // Copying the duplicate value of 'name' to 'newName' 
// newName = "John Doe"

// console.log(name); // Output: John
// console.log(newName); // Output: John Doe

// let userOne = { 
//     name: "Alice",
//     age: 25
// }
// let userTwo = userOne // Copying the reference of 'userOne' to 'userTwo'
// userTwo.age = 30
// console.log(userOne.age); // output is 30 ,Since both are pointing to the same reference if the value is changed in second object it affects the original value as well