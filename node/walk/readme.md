## 读取文件目录
- readdir 读目录里的内容  
- IO操作 异步   
- readdirSync   Async 异步 sync 同步  
- JS是单线程的， 用回调或promise，释放主线程的控制权
  - 主要是因为JS是前端DOM的编程，用户交互比较多，等到执行完成后，再通过event-loop机制，拿回控制权
  - 来到了node，js 获取了服务器端的能力
- readdirSync() 
  