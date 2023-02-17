// Factory Functions

// In JavaScript, any function can create new objects. When it’s not a constructor function, it’s called a factory function):

function Person(name, gender) {

    function info() {
        return `My name is ${this.name} am a ${this.gender}`
    }
    return ({ name, gender, info })
}


let Person1 = Person('bjorn', 'male');
console.log('====================================');
console.log(Person1.info())
console.log('====================================');



// Factory Function with closure

let Adult = function(name) {

        let married = false;

        function status() {
            console.log(`${married ? `${name} is Married`: `${name} is Divorced` } `)
}

    return {
        marry() {
            married = true;
            return this
        },
        divorce() {
            married = false
            return this
        },status
    }
}


let Bjorn = Adult('Bjorn')

Bjorn.marry().status()
Bjorn.divorce().status()