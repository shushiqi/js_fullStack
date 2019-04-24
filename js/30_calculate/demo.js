var performanceS =function()  {
}
var performanceA = function(){
}
performanceS.prototype.calculate = function(salary){
  return salary * 5;
}

performanceA.prototype.calculate = function(salary)  {
  return salary * 3;
}

var Bounce = function(salary){
  this.salary = salary;
}
Bounce.prototype.setStrategy = function(strategy)  {
  this.strategy = strategy;
}
Bounce.prototype.getBounce = function() {
  return this.strategy.calculate(this.salary);
}

var bounce = new Bounce(10000);
bounce.setStrategy(new performanceS());
console.log(bounce.getBounce());
