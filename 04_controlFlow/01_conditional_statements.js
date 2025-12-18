// if

const isUserLoggedIn = true;
const temperature = 25;

if(temperature < 50){
    console.log("Temperature is moderate!");
}

// <,>,<=,>=,==,!=,===,!==

// if...else

if(isUserLoggedIn){
    console.log("Welcome back, user!");
} else {
    console.log("Please log in to continue.");
}

// if...else if...else

const score = 85;

if(score >= 90){
    console.log("Grade: A");
} else if(score >= 80){
    console.log("Grade: B");
} else if(score >= 70){
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Nested if

let age = 20;
const hasParentalConsent = true;

if(age < 18){
    if(hasParentalConsent){
        console.log("You can participate with parental consent.");
    } else {
        console.log("You cannot participate without parental consent.");
    }
} else {
    console.log("You can participate.");
}

// Ternary operator

let  voterAge = 20;
const voterCard = voterAge>=18 ? console.log(`votercard is being issued`): console.log(`You are under age!`);