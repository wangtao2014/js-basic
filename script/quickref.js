let x = null;
let nameA = "Tammy";
const found = false;

console.log(nameA, found, x);

let single = 'Wheres my bandit hat?';
let double = "Wheres my bandit hat?";

console.log(single, double);

let number = 100;
number += 100;
console.log(number);

let age = 30;
// string concatenation
console.log('Tommy is ' + age + ' years old');
// string interpolation
console.log(`Tommy is ${age} years old`);

let count;
count = null; // null
console.log(count); // undefined
console.error('hello error');
console.warn('hello warn');

const numberOfColumns = 10;

console.log(0 == false); // true
console.log(0 === false); // false, different type
console.log(1 == '1'); // true, automatic type conversion
console.log(1 === '1'); // false, different type
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log('0' == false); // true
console.log('0' === false); // false, different type

// Functions
// With two arguments
let sum = (num1, num2) => {
    return num1 + num2;
}
console.log(sum(23, 34));

// With a single argument
let checkWeight = weight => {
    console.log(weight);
}

checkWeight(100);

// With no arguments
let printInfo = () => {
    console.log('hello');
}

printInfo();

// Concise arrow functions
let mul = (num1, num2) => num1 * num2;
console.log(mul(5, 2));

console.log('======');

// scope
for (let i = 0; i < 3; i++) {
    //setTimeout(_ => console.log(i), 10);
}

// arrays concat() method
const numbers = [1, 2, 3];
const newFirstNumber = 4;

console.log([newFirstNumber].concat(numbers)); // [ 4, 1, 2, 3 ]
console.log(numbers.concat(newFirstNumber)); // [ 1, 2, 3, 4 ]

// Iterators
// array reduce
const total = numbers.reduce((accumulator, curVal) => {
    return accumulator + curVal;
});
console.log(total);

// array map
const fruits = ["apple", "banana", "orange"];
fruits.map(element => {
    console.log(element);
});

// array foreach
fruits.forEach((element) => {
    console.log(element);
});

// array filter
const randomNumbers = [4, 11, 34, 56, 3, 1];
const filterArray = randomNumbers.filter(n => {
    return n > 10;
});
console.log(filterArray);

// Objects
// define
const apple = {
    color: 'Green',
    price: { bulk: '$3/kg', smallQty: '$4/kg' }
}

console.log(apple.color);
console.log(apple.price.smallQty);

// mutable
let student = {
    name: 'Sheldon',
    score: 100,
    grade: 'F',
}

console.log(student);
delete student.score;
console.log(student);

student.grade = 'A';
console.log(student);

// student = {};

// assignment shorthand syntax
const { name, grade } = student;
console.log(name);
console.log(grade);

// shorthand object creation
const activity = 'Surfing';
const beach = { activity };
console.log(beach);

// this keyword
const cat = {
    name: 'pippy',
    age: 8,
    whatName() {
        return this.name;
    }
}
console.log(cat.whatName());

// factory functions
const dogFactory = (name, age, bread) => {
    return {
        name: name,
        age: age,
        bread: bread,

        bark() {
            console.log('bark');
        }
    };
};

const dog = dogFactory('haha', 20, 'bread');
console.log(dog);

// methods
const engine = {

    // method shorthand, with one argument
    start(adverb) {
        console.log(`The engine starts up ${adverb}`);
    },

    // anonymous arrow function expression with no arguments
    sputter: () => {
        console.log('The engine sputters...');
    }
}

engine.start('noisily');
engine.sputter();

// getter and setter
const myCat = {
    _name: 'Dottie',
    get name() {
        return this._name;
    },

    set name(newName) {
        this._name = newName;
    }
}

// Reference invokes the getter
console.log(myCat.name);
// Assignment invokes the setter
myCat.name = 'Dog';
console.log(myCat.name);

// classes
// static method

class Dog {
    constructor(name) {
        this._name = name;
    }

    introduce() {
        console.log('This is ' + this._name + '!');
    }

    // A static method
    static bark() {
        console.log('woof!');
    }
}

const myDog = new Dog('Buster');
myDog.introduce();
Dog.bark();

// class constructor
// class extends
class Media {
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

// Child class
class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song({
    artist: 'Queen',
    name: 'Bohemian Rhapsody',
    publishDate: 1975
});

// modules

