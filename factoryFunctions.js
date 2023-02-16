function Person(name, gender) {

    const info = function() {
        return `My name is ${this.name} am a ${this.gender}`
    }
    return ({ name, gender, info })
}


let Person1 = Person('bjorn', 'male');
console.log('====================================');
console.log(Person1)
console.log('====================================');