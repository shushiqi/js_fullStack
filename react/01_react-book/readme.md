- DOM 之后MVVM兴起 MVVM封装了DOM （VUE REACT） 让其更高效
- 组件开发
  将复杂页面 分为多个组件 拼装页面
  组件 是一个类
  实例化之后 就可用了
  多次实例化 => 复用

- 组件是一个种子 包含了很多东西
  template -> render()
  css
  js -> isLiked

- React和VUE都是MVVM的一种实现
  React用来做后台界面 VUE用户界面
  挂载点 界面和组件的关系 界面 <- 组件 <- html
  DOM被封装 组件类
  在constructor部分 => this.state 数据部分
  模板部分 render()

- 模板里数据的细化
  es6字符串模板 每次编译
  setState this.render()
  状态和模板结合的地方在模板的编译 插入数据
  setState 驱动模板重新编译一下 数据驱动