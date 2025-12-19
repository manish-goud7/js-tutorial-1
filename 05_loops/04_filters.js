// const nums = [10, 20, 30, 40, 50];

// //const values = nums.filter((num)=> num>10) // returns values
// const values = nums.filter((num)=> {
//     return num>10;
// }) // return is mandatory when using curly braces
// console.log(values);

// const books = [
//     {title: "Book A", author: "Author X", rating: 4.5},
//     {title: "Book B", author: "Author Y", rating: 3.8},
//     {title: "Book C", author: "Author Z", rating: 4.2},
//     {title: "Book D", author: "Author X", rating: 2.9},
//     {title: "Book E", author: "Author Y", rating: 4.7},
// ];

// // Filter books with rating greater than 4.0
// const highRatedBooks = books.filter((book) => book.rating > 4.0);
// console.log("High Rated Books:", highRatedBooks); 

// const myNums = [5, 12, 8, 20, 7, 3, 15];
// // const myNewNums = myNums.map((num)=> num+10)
// const myNewNums = myNums
//                     .map((num)=> num*10)
//                     .map((num)=> num+5) // chaining
//                     .filter((num)=> num>100);
// console.log(myNewNums);

// ******************************** reduce ****************************************
// const myNums = [5, 12, 8, 20, 7, 3, 15];
// const total = myNums.reduce((acc,current)=>{
//     return acc+current
// },0)
// console.log(total)

const shoppingCart = [
    { item: "Laptop", price: 1000, quantity: 1 },
    { item: "Phone", price: 500, quantity: 2 },
    { item: "Headphones", price: 100, quantity: 3 },
];

const cartTotal = shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log("Cart Total:", cartTotal);