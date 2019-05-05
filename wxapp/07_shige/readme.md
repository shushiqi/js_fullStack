- 全局配置
  window + tabbar   
  assets目录（放置静态资源）  
  pages 所有页面

- UI框架 
  app.wxss 引入weui   
  `@import 'styles/weui.wxss';`   
  生命周期 wx.request

- list 套路
  onLoad onReachBottom onPullDownReresh   
  isLoading 加载状态    
  currentPage 需要传参
  toalPage 最后一页

- template 共用的界面
  ```
  <template name=">
  <template data="{{}}"/>
  ```

### navigator 点击区域产生跳转