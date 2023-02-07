'use strict';

let animal = {
    eats: "apple",
    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal,
};
console.log(animal.__proto__);
console.log(rabbit.__proto__);
console.log(Object.getPrototypeOf(rabbit));
rabbit.walk();

/*
这里只有两个限制：

引用不能形成闭环。如果我们试图给 __proto__ 赋值但会导致引用形成闭环时，JavaScript 会抛出错误。
__proto__ 的值可以是对象，也可以是 null。而其他的类型都会被忽略。

现代编程语言建议我们应该使用函数 Object.getPrototypeOf/Object.setPrototypeOf 来取代 __proto__ 去 get/set 原型

因为我们可能有一个带有很多方法的大对象，并且还有从其继承的对象。当继承的对象运行继承的方法时，它们将仅修改自己的状态，而不会修改大对象的状态。
方法是共享的，但对象状态不是
*/

