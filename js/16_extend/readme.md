### Person 由prototype属性来解决它自身构造之外的原型或方法
    原型对象会有它的构造函  Person.prototype.constructor属性

第三者？ => 实例    
js实例跟类 不是java等语言的血缘关系
实力是怎么来的？  => new 出来的
1. Person函数运行 new的方式 this -> new Object()
2. kanna 是怎么拿到Person.pprototype原型对象上定义的方法  __proto__属性
3. 方法有prototype属性， 值为对象 => 对象可以开支
4. 任何对象都有__proto__属性  指向它的原型对象
5. 原型对象上 有constructor属性 指向谁是它的构造函数

##原型链