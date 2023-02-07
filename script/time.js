// setTimeout 在调用时会返回一个“定时器标识符（timer identifier）

let timerID = setTimeout((value) => { console.log(value); }, 5000, "hello");

console.log(timerID); // 1 浏览器中，定时器标识符是一个数字

// clearTimeout 可以取消一个定时器
clearTimeout(timerID);

console.log(timerID); // 1 

// setInterval 会返回一个“定时器标识符（timer identifier）
// let timerId = setInterval((value) => { console.log(value); }, 2000, "tick");
// 5 秒之后停止
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 10000);

// 周期性调度有两种方式
// 一种是使用 setInterval，另外一种就是嵌套的 setTimeout

// let timer = setTimeout(function tick() {
//     console.log('tick');
//     timer = setTimeout(tick, 2000);
// }, 2000);

// setTimeout(() => { clearTimeout(timer); console.log('stop'); }, 20000);


function printNumbers(from, to) {
    let current = from;
    function go() {
        console.log(current);
        if (current == to) {
            clearInterval(timer);
        }
        current++;
    }
    go();
    let timer = setInterval(go, 1000);
}

/**
function printNumbers(from, to) {
    let current = from;
    setTimeout(function go() {
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}
*/

printNumbers(1, 5);