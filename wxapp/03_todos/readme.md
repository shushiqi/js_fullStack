- wxml时模板 {{}}是将被编译的模板 
用户看到的不是wxml，是wxml被js data填充编译后的页面 Page不是wxml
- setData({
  响应数据时
}) 触发重新进行compile
- 在wxml里把所有的逻辑及对数据的渴求都表达出来， 在某一刻页面只会显示当前状态的页面状态，跟数据相关
  状态 有数据决定
  改变数据 setData 界面自动变
  数据驱动界面 数据和界面状态唯一

- todos (todoLists)
- {{js 运行区域}}