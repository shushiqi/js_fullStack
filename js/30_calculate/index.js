var performanceX = (salary) =>{
  return salary * 60;
}
var perfrmanceS = (salary) =>{
  return salary * 5;
}
var performanceA = (salary) =>{
  return salary * 3;
}
var performanceB = (salary) =>{
  return salary * 2;
}
var performanceC = (salary) =>{
  return salary * 1;
}

var calculateBounce = function(perfomanceLevel, salary){
  if(perfomanceLevel === 'X'){
    return performanceX(salary);
  }else if(perfomanceLevel === 'S'){
    return performanceS(salary);
  }else if(perfomanceLevel === 'A'){
    return performanceA(salary);
  }else if(perfomanceLevel === 'B'){
    return performanceB(salary);
  }else if(perfomanceLevel === 'C'){
    return performanceC(salary);
  }else{
    return 0;
  }
}

console.log(calculateBounce('X', 10000))