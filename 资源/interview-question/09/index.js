function Person(name) {
  this.name = name
}
function Student(){

}
Student.prototype = Person.prototype
Student.prototype.constructor = Student

let p = new Student('hashimoto')
// console.log(p instanceof Person); 

// p.__proto__ = Person.prototype
// Person.__proto__ = Function.prototype
// Function.__proto__ = Object.prototype
// p => Person => Function => Object 实例 => 构造函数 => Funtion => Object

for(let i=0;i<10;i++){
  setTimeout(() => {
    console.log(i)
  }, 0);
}
// let 每次循环生成一个封闭的块级作用域和setTimeout绑定，var每车次循环会覆盖上一次的作用域

