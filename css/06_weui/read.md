# WEUI
    来自于微信团队的前端开发框架

- 微信生态 公众号 小程序 weui.css基础上做开发
- App生态 内嵌的html
- PC 传统网站 BootStrap框架

# 界面的编写过程

- html 结构，独立于样式 DOM文档流，从左到右，从上到下
    - 取类名
    - BEM规范   
    Block 区块 weui-cell weui-button 30-50个利用的组件   
    Element 元素 weui-cell__hd weui-cell__bd weui-cell__ft  
    modifier 修饰符 （表示blovk的不同状态或版本）
    通用的词汇  hd + bd + ft
- 再写样式
- 离开文档流    
里面的元素不再受影响 ，before absolute 脱离了正常的文档流   
weui-cells border-top 使用盒子模型，元素在页面上的占位，是需要综合考虑 内容v*h padding border margin 以及如果存在的position定位

- 1px 边框  
css 像素 1px在手机里    
硬件物理像素 retina 2px 3倍Retina 3px   
transform scaleY(0.5) 压一下    
浏览去不会处理小数点像素
transform-origin: 基点 不动,  上边线， 从上往下压 scaleY    

- flex 不受块级约束，内部是一个新世界  
弹性布局是父与子们一起的布局   
好用的 对齐方式 align-items 纵轴对齐 居中   
justufy-content 横轴    
在一堆子元素中，只给一个元素设置flex:1 这个元素成为主元素，其他元素占完自己该占的盒子模型的内容，余下的空间都交给主体元素
