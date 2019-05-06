# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)


云开发是腾讯云大力推广的
- 云开发提供可视化的mongodb云数据库   
  连接数据库  
  ```
  const db = wx.cloud.database();
  const userInfo = db.collection('userInfo');
  ```   
  支持直接存JSON  
  后端即服务 CRUD   
  add

  制作列表
  - 先建collection add
  - get

- where({})  count()
查询数据库是否存在？ 有则提示 没有则存入数据