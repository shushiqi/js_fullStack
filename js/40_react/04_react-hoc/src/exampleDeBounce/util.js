/**
 * 防抖
 * func wait
 */
export function debounce(func, wait) {
  var result
  return function () {
    // this
    // 参数
    var context = this
    var args = arguments
    let timeout
    clearTimeout(timeout)
    timeout = setTimeout(function () {
      var result = func.apply(this, args)
    }, wait);
    return result
  }
}
// 可用于装饰的防抖
export function decDebounce(wait) {
  return function (target, key, descriptor) {
    var callBack = descriptor.value
    var fn = debounce(callBack, wait)
    descriptor.value = fn

  }
}

export function decArrowDebounce(wait) {
  return function (target, key, descriptor) {
    var callBack = descriptor.initializer && descriptor.initializer()
    var fn = debounce(callBack, wait)
    return {
      configurable: true,
      get: function () {
        return fn
      }
    }
  }
}

// hoc 高阶组件 装饰整个组件
export function decDisplayName(displayname) {
  return function (target) {
    target.displayName = displayname
  }
}