// 实际上是通过运行时通过参数传递过来的字符串创建的
// 1 服务器获取代码 2 动态地从模板编译函数
let sayHi = new Function('console.log("hello")');
sayHi();

// 该函数的 [[Environment]] 并不指向当前的词法环境，而是指向全局环境。
// 因此，此类函数无法访问外部（outer）变量，只能访问全局变量
function getFun() {
  let name = 'hello';
// let say = new Function('console.log(name)'); // error: value is not defined
  let say = function() {
    console.log(name);
  };
  return say;
}

getFun()();