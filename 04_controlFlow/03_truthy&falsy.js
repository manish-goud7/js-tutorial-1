const mail = "maneesh@mail.com"
if(mail){
    console.log("You have mail!");
} else {
    console.log("No mail found.");
}

const anothermail = ""
if(anothermail){
    console.log("You have mail!");
} else {
    console.log("No mail found.");
}

//falsy values : false, 0,-0, "", null, undefined, NaN
//truthy values : "0",'false'," ",[],{}, function(){}, any other value not in falsy list

// nullish coalescing operator (??) : null undefined

//let val1 = 5??10; 
// console.log(val1); //5
// let val1 = null ?? 10;
// console.log(val1); //10
// let val2 = undefined ?? 15;
// console.log(val2); //15
let val3 = null ?? 10?? 20;
console.log(val3); //10

