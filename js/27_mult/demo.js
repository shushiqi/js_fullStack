// 全局变量太多 ，cache只为mult服务 空间污染
// 函数里的变量运行后就会消失
// const mult = () => {
//   const cache ={};
// }
const mult = (function(){
  const cache ={};
  return function(...args){
    
    let key = Array.prototype.join.call(args, ',');
    if(key in cache){
      console.log('---')
      return cache[key];
    }
    let a = 1;
    args.forEach(item => {
      a *= item;
    })
    cache[key] = a;
    return a;
  }
})();
console.log(mult(1,2,3))

