"use strict";
function Player(name) {

    // 构造器constuctor
    // 全局 || 指向的对象
    // console.log(this);
    this.name = name;
    this.enemy = null;
}
// js类的方法要定义在prototype上
Player.prototype.win = function () {
    console.log(this.name + "win");
}

Player.prototype.lose = function () {
    console.log(this.name + "lose");
}

var Player1 = new Player("皮蛋");
// console.log(Player1.name);
// win函数 作为对象的方法被调用
// this会指向对象本身
Player1.win();

var Player2 = new Player("小乖");

Player1.enemy = Player2;
Player2.enemy = Player1;
console.log(Player2.enemy.name);

Player2.lose();

