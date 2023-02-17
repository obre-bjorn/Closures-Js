// Call function

let number = { num: 3 }

let adder = function(a, b) {
    return this.num + a * b
}


// Functionname.call(object, function arguments)

let result = adder.call(number, 4, 3);

console.log('====================================');
console.log(result);
console.log('====================================');



// Apply Function

let person = {
    name: 'Bjorn',
    age: 23
}

let info = function(years) {
    return `${this.name} will be ${this.age + years} in the next ${years} years.
    `
}

// Replaces function arguments with and array of Arguments.
// functionname.apply(scope/object, [Array of Arguments])
console.log(info.apply(person, [4]));


// Bind function

let book = {
    title: 'Way of Men',
    pages: 239
}


function getBookPages() {
    return `${this.title} contains ${this.pages} pages`
}

//  Does not invoke/call the function immediately rather it returns a function to be executed later in the code
// function parameters can be passed later on either in function arguments or array of arguments.
let getBookInfo = getBookPages.bind(book)
console.log(getBookInfo())


// CLOSURES