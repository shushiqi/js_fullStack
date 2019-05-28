// [1, 2, 3, 4] 求平均值
// function averageNum(arr) {
//   let allNum=0
//   for(i=0;i<arr.length;i++){
//     allNum +=arr[i]
//   }
//   return allNum/arr.length
// }
const average = (...nums) => nums.reduce((accc, val) => accc + val, 0) / nums.length

console.log(average([1, 2, 3, 4]));