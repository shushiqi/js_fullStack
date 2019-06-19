const fs = require('fs')
const util = require('util')
// fs.readFile('./index.html', {encoding: 'utf8'},(err,data)=>{
//   if(!err){
//     console.log(data);
//   }
// })

// fs.stat('.', (err, stats)=>{
//   if(!err){
//     console.log(stats);

//   }
// })

const promisify = (func) => {
  // args promisify返回函数的传参 
  return (...args) => {
    return new Promise((resolve, reject) => {
      // ...args 将数组中的每一项依次展开
      func(...args, (err, data) => {
        if(err) reject(err)
        resolve(data)
      })
    })
  }
}
const readFile = promisify(fs.readFile)
readFile('./index.html', { encoding: 'utf8' }).then(res => {
  console.log(res);
})

// const readFile = util.promisify(fs.readFile)
// readFile('./index.html', { encoding: 'utf8' }).then(res => {
//   console.log(res);

// })