// Call function

let number = { num: 3 }

let adder = function(a) {
    return this.num + a
}



let result = adder.call(3, number);


console.log('====================================');
console.log(result);
console.log('====================================');



// Bind Function