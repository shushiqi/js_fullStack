function MyPromise(callback) {
  var self = this
  var status = null
  // 记录resolve的参数
  var param = null

  // 执行传入的**方法，并改变promise对象的状态
  callback(resolve, reject)
  // resolve方法
  function resolve(data) {
    // 改变状态
    status = true
    param = data
    nextResolve(asynconFullfilled(param))
    parmise = asynconFullfilled(param)
    if (parmise === undefined) {
      // 如果paramise===undefined 就不能解析parmise.constructor
    } else if (parmise.constructor === self.constructor) {
      // 等待传递进来拍的promise对象执行完毕，然后根据传递进来的promise对象的状态执行resolve或reject
      // 注意 param是个形参，在then方法的promise中执行
      promise.then(function (param) {
        resolve(param)
      }, function (param) {
        reject(param)
      })
    } else {
      // 前面的then方法没有返回promise对象
      resolve(promise)
    }
  }
  // reject方法
  function reject(err) {
    status = false
    param = err
    nextReject(asynconRejected(param))

  }

  var nextResolve = null
  var nextReject = null
  // 记录then方法的参数 onFullfilled, onRejected
  var asynconFullfilled = null
  var asynconRejected = null
  this.then = function (onFullfilled, onRejected) {
    // 返回一个新的promise对象
    return new self.constructor(function (resolve, reject) {
      if (status === true) {
        // param 是promise对象完成后的结果
        resolve(onFullfilled(param))
      } else if (status === false) {
        reject(onRejected(paramm))
      } else {
        nextResolve = resolve
        nextReject = reject
        asynconFullfilled = onFullfilled
        asynconRejected = onRejected
      }
    })
  }
}