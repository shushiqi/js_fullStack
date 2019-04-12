// fs模块
const fs = require('fs');
// 读取文件内容是异步的
fs.readFile('./a.txt', 'utf8',function(err, data){
  // console.log(data);

  fs.readFile('./b.txt', 'utf8', function(err, data){
    // console.log(err);
    // console.log('-----' + data)
  })
})

// 将callback处理异步的方法抛弃，
const fileAPromise = new Promise((resolve, reject) => {
  fs.readFile('./a.txt', 'utf8', (err, data) => {
    // 移交流程控制权
    resolve(data);
  })
});
const fileBPromise = new Promise((resolve, reject) => {
  fs.readFile('./b.txt', 'utf8', (err, data) => {
    if(err){
      reject(err);
    }else {
      resolve(data);
    }
  })
});
// 将内部的耗时任务运行起来
fileAPromise.then(data => {
  console.log(data)
  return fileBPromise;
})
.then(data => {
  console.log(data);
})