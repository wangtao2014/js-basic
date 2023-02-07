'use strict';

class User {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name; // _name 是一个私有属性
    }

    set name(value) {
        if (value.length <= 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }

    sayHi() {
        console.log(this.name);
    }
}

console.log(typeof User); // function
console.log(User === User.prototype.constructor); // true
console.log(User.prototype.sayHi); // function
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

let user = new User("John");
console.log(user.__proto__); // true
console.log(Object.getOwnPropertyDescriptor(User.prototype, "sayHi"));
user.sayHi();