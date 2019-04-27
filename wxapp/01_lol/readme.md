- 小程序开发工具， 初始化一个项目框架
  小程序是架构在微信（原生app）上，使用前端技术和思想，来快速开发，一份代码，到处运行
- 不用下载，不用写两次，快速高效
- html => wxml  
  css => wxss   
  js => js  
  bindtap => onclick  
  page = wxml + wxss + js
- 小程序就是由一个个page组成，每个page由这三部分组成
- app.json是项目描述文件，添加的page要在app.json里声明
- 切页面时，wx.navigateTo()

- MVVM 只要有了数据,Model,在js中用data声明
```
Page({
  data:{

  }
})
```
view 视图层 wxml 等着数据编译输出的html模板`{{}}`
指令， `wx:for`