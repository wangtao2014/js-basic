let user = {
    firstName: "John",
    address: "henan",
    get fullInfo() {
        return `${this.firstName} ${this.address}`;
    },
    set fullInfo(value) {
        [this.firstName, this.address] = value.split(" ");
    },
}
// 我们不以函数的方式 调用 user.fullName，我们正常 读取 它：getter 在幕后运行
console.log(user.fullInfo);

user.fullInfo = "Alice zhejiang";
console.log(user.fullInfo);

/*
对于访问器属性，没有 value 和 writable，但是有 get 和 set 函数。
所以访问器描述符可能有：
get —— 一个没有参数的函数，在读取属性时工作，
set —— 带有一个参数的函数，当属性被设置时调用，
enumerable —— 与数据属性的相同，
configurable —— 与数据属性的相同。
*/

