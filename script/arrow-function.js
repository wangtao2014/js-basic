// arrow-function
// JS 精髓在于创建一个函数并将其传递到其他地方（不想离开当前的上下文）
// 箭头函数没有 this
// 箭头函数不能用作构造器（constructor）。不能用 new 调用它们。
// 箭头函数没有 “arguments”

let group = {
    title: "Our group",
    students: ["John", "Pete", "Alice"],

    showList() {
        console.log(this)
        this.students.forEach(
            // 箭头函数中没有 this，访问 this 则会从外部获取，这里就是 group 对象
            student => console.log(this.title + ": " + student)
        )

        // 运行报错，函数中this为默认值 this==undefined
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student)
        })
    }
}

group.showList()