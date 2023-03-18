//  Using Getters and Setters

// Technically, external code is able to access the name directly by using user._name. 
// But there is a widely known convention that properties starting with an underscore "_" 
// are internal and should not be touched from outside the object.


let user = {
    get name() {
        return this._name
    },
    set name(value) {
        if (value.length < 4) {
            console.log('Name is too short')
            return;
        }
        this._name = value

    }
}


user.name = 'BJorn'
console.log(user._name)

//  Using getters for Compatibility
function User(name, birthday) {
    this.name = name;
    this.birthday = birthday

    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    })
}


let Bjorn = new User('BJorn', new Date(1998, 6, 20));
console.log(Bjorn.birthday)
console.log(Bjorn.age)