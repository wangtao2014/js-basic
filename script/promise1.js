new Promise(function (resolve) {

    setTimeout(() => resolve(1), 1000); // (*)

}).then(function (result) { // (**)

    console.log(result); // 1
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function (result) { // (***)

    console.log(result); // 2
    return new Promise((resolve) => {
        setTimeout(() => resolve(result * 2), 1000);
    });

}).then(function (result) {

    console.log(result); // 4
    return result * 2;

});



new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject(new Error("Whoops!"));
    }, 1000);
}).catch(error => console.log(error));