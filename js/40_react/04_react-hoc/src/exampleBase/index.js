
// descriptor拿到了add方法的descriptor
// function log(target, name, descriptor) {
//   const method = descriptor.value
//   descriptor.value = function (...args) {

//     return method(...args)
//   }
// }

function log(logType){
  return function (target, name, descriptor) {
      const method = descriptor.value
      descriptor.value = function (...args) {
        console.log('log type ' + logType + '----');
        return method(...args)
      }
    }
    
}
// 修饰符 是一个函数
// @log log是一个函数
//  @log('add') 也得是一个函数
class Base {
  @log('add')
  add(a, b) {
    return a + b
  }
  @log('divide')
  divide(a, b) {
    return a / b
  }
}
const base = new Base()
console.log('add', base.add(1, 2));
console.log('divide', base.divide(6, 2));


// 加日志
// 有了更好 没有也行的装饰器
export default base