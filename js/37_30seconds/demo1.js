// 高阶函数
// arr 的运行结果是函数 
const arr = (fn, n) => (...args) => fn(...args.slice(0, n))
const firstTwoMax = arr(Math.max, 2)
console.log([
  [2, 6, 'a'],
  [8, 4, 6, 15],
  [10]
].map(x => firstTwoMax(...x)))