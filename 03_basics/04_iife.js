// Immediately Invoked Function Expression (IIFE)
// used to prevent the scope from the global scope pollution

(function one(name){
    // named IIFE
    console.log(`welcome to the website ${name}`);
    
})(`Maneesh`); // ; important to terminate the first IIFE

((username)=>{
    // unnamed IIFE
    console.log(`welcome to the website ${username}`);
    
})(`john`)