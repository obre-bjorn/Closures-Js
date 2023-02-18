// Immediately Invoked Function Expression (IIFE) 

let student = (function(name) {
    console.log(name);
    return {
        name
    }
})('Bjorn')

console.dir(student)