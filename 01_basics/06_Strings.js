const name = "John"; 
const age = 30;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`; //string interpolation using template literals

const gameName = new String("Chess"); // String object created using String constructor
console.log(gameName.length); // Output: 5
console.log(gameName.toLowerCase()); // Output: chess
console.log(gameName.charAt(2)); // Output: e
console.log(gameName.indexOf("e")); // Output: 2
console.log(gameName.includes("ess")); // Output: true

// Demonstrating immutability of strings
let originalString = "Hello";
let modifiedString = originalString.replace("H", "J");

const newString = gameName.substring(0,4); // Extracting substring from index 0 to 4 Output: Ches
const anotherString = gameName.slice(4,-3); // Extracting substring using negative index Output: s

const newStringOne = "  Hello World!  ";
console.log(newStringOne.trim()); // Output: "Hello World!" (removes whitespace from both ends)

console.log(gameName.split("e")); // Output: [ 'Ch', 'ss' ] (splits the string at each 'e')