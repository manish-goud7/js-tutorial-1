// function sayMyName() {
//     console.log("Heisenberg");
// }
// sayMyName() 

// function add(a,b){ //(parameters)
//     console.log(a+b);  
// }
function add(a,b){ //(parameters)
    return a+b
}
// add(3,4) // (arguments)
// add(3,"4")
// const result  = add(3,4)


//  function loginInMessage(username = "sam") { // sam is a default value if no value is passed them sam is assigned to the username
//     if(username===undefined){ // or (!username)
//         return `please enter a username`
//     }
//     return `${username} has just logged in`
// }
// console.log(loginInMessage("maneesh"))

// function calculateCartPrice(val1,val2, ...num1){ // rest operator (...)
//     return num1
// }
// console.log(calculateCartPrice(200,400,500,300));


const user ={
    name : "john",
    price : 29.98
}
function handleObject(anyobject){
    return `The name of the costumer is ${anyobject.name} and price paid is ${anyobject.price}`
}

// console.log(handleObject(user));
// console.log(handleObject({name : "sam" , price : 499}));

const arr = [200,300,400,500]
function getArrayValues(anyarray){
    return anyarray[0]
}
// console.log(getArrayValues(arr));
