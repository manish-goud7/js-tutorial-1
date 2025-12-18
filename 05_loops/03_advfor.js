// for of
// const colors = ["red", "green", "blue", "yellow"];

// for (const color of colors) {
//     console.log(color);
// }

// const string = "Hello World";

// for (const char of string) {
//     console.log(char);
// }

//maps - no duplicates and holds key value pairs
// const myMap = new Map();
// myMap.set(1, "one");
// myMap.set(2, "two");
// myMap.set(3, "three");

// console.log(myMap)

// for (const [key, value] of myMap) {
//     console.log(`Key: ${key}, Value: ${value}`);
// }


// const obj = {
//     game1 : "chess",
//     game2 : "football",
//     game3 : "cricket"
// }
// for (const [key, value] of Object.entries(obj)) {
//     console.log(`Key: ${key}, Value: ${value}`);
// }

// for (const key in obj) {
//     console.log(`Key: ${key}, Value: ${obj[key]}`);
// }

const coding = ["JavaScript", "Python", "Java", "C++"];

// coding.forEach( function (language){
//     console.log(language);
// })

// coding.forEach((language)=>{
//     console.log(language);
// })

// coding.forEach((language, index)=>{
//     console.log(`${index} : ${language}`);
// });

const myCoding = [{lang:"JavaScript", level:"advanced"},{lang:"Python", level:"intermediate"},{lang:"Java", level:"beginner"}]
myCoding.forEach((item)=>{
    console.log(item.lang + " - " + item.level);
})