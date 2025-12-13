// array

const myArr = [0,1,2,3,4]
// const newArr = new Array(1,2,3,4,5)
// console.log(myArr[0])

// Array methods

// myArr.push(5) // Appends a new number to the array
// myArr.pop() // last number is poped
// myArr.unshift(6) // appends to the starting of the array
// myArr.shift() // removes the starting values and pops the value

// console.log((myArr))
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(2))

// const anotherArray = myArr.join() //converts the array to the string
// console.log(anotherArray)
// console.log(typeof anotherArray) //string

// slice,splice
console.log("A ",myArr)

const m = myArr.slice(1,3) // slices the portion of the array and does not change the original array
console.log(m)
console.log("B ",myArr)

const n = myArr.splice(1,3) // slices and manipulates the original array and pops the portion of values 
console.log(n)
console.log("C ",myArr)

// A  [ 0, 1, 2, 3, 4 ] // original array
// [ 1, 2 ] // sliced values
// B  [ 0, 1, 2, 3, 4 ] // after slicing
// [ 1, 2, 3 ] // spliced values
// C  [ 0, 4 ] // after splicing

