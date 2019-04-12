## ndoe 让js来到了后端

服务器，Linux系统   
文件系统操作 fs   
连接数据库 db

没有DOM

文件读取 要花时间 => 定位文件参数1， 打开文件 将文件内容读取到内存中 输出到命令行   
文件越大 花的时间越多 js异步 
``` 
fs.readFile(path, 'utf8', function(err, data){

})
```

2. promise
  分开 Promise 是类 用于处理耗时异步问题，为了防止回调地狱，看到耗时问题就用一个Promise实例   
  resolve 将控制权交给then 将结果resolve(data)    
  reject  失败 执行catch(e){}