// 缓存计算结果，不要重复计算

function mult(...arr){
  let a = 1;
  const cache = {};
  let key = Array.prototype.join.call(arguments, ',');
  if(cache[key]){
    console.log("取出")
    return cackey[key];

  }
    arr.forEach(item => {
      a *= item;
    })
    cache[key] = a;
  // for(let i = 0,l = arr.length;i < l;i++){
  //   a *=arr[i];
  // }
  return a;
}
console.log(mult(1,2,3,4));
console.log(mult(1,2,3,4));
console.log(mult(1,2,3,4));