'use strict';

// symbol 比较特殊，它不会被自动转换
// let id = Symbol("id");
// alert(id); // Uncaught TypeError: Cannot convert a Symbol value to a string
// alert(id.toString()); // alert(id.description);

let user = {
    name: "john",
    money: 123,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
}

alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

let str = "hello";
console.log(str.toUpperCase());
