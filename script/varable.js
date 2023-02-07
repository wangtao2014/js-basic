"use strict"

function makeUser(name, age) {
    return {
        name,
        age,
        sayBye: function() {
            console.log("sayBye");
        },

        run() {
            console.log("Run Run Run...", this.name);
        },
    };
}

let user = makeUser("wangtao", 28);

for (let key in user) {
    console.log(key, user[key]);
}

function go() {
    console.log(this);
}

user.sayHi = function() {
    console.log("say hi!");
}

user.sayHi();
user.sayBye();
user.run();
go();