# 作用域 Scope
document DOM 

    - getElementsByTagName
    - getElementsByClassName
    - querySelector
    - querySelevtorAll

window BOM

    全局定义了  var name = "shushiqi";

- 全局变量 前端 js window  
- 局部变量 function() {}
    - 函数局部作用域
    - 函数运行时诞生
    - 运行结束后回收
- js是内嵌在浏览器中的脚本语言，它与其他语言不一样的地方在于，全局变量挂载在window上    
console.log(name); console.log(window.name);
- window 类型：对象
    使用typeof获取类型 "typeof window"

基本类型

- 数值 字符串 布尔值 null undefined Symbol object

const let 比 var 优秀的地方：遵守块级作用域

全局 -> 函数局部 -> 块级作用域

scope 范围

setTimeout 异步的内置函数   
for 循环 立即同步执行
var i ，1000ms之后 i=10；   
 for { 块级作用域 let} 
