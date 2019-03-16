# 面向对象
class 类 js 现在也有    
在es5中没有class关键字怎么做面向对象？  
js是面向对象，Function是一等对象    
普通函数Player() 
```
function Player(name) {
    "use strict";
    // 构造器constuctor
    // 全局 || 指向的对象
    console.log(this);
    this.name = name;
}
```
new Player() 作为类的构造函数被运行，   
function Player() { this }, this一直都在，在函数中的一个常在，是一个指针，指向一个Object{}  this.name = name    
函数运行方式不同，this指向不同  
- 普通函数被运行时，this指向没有，全局，    
前端指向window，node指向global， undefined
- 函数作为构造函数被运行时，  new Player();     
this会指向 实例化的对象， 构造函数需要的过程    
- 函数可以用来构造类 js借通过this
- this一直存在
函数运行方式不同，this指向不一样
    - 普通函数 => 全局window||alobal
## new过程中发生了什么  
new Player(); 将函数作为构造函数运行   
this 指向Object{}   
this => { } constructor     
this.name = name;   
    若启动严格模式,