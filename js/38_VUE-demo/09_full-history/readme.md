- 前端路由 SPA 更好的用户体验 更快，没有白屏 VUE router component
- 后端路由 http server /api 提供数据

### API
window.history.pushState()

***
前端路由实现方式 `history.pushState(data, title, url)` 改变url的path部分 跟hashChange实现方案 不一样的地方是改变的url部分不一样(#home) 前端就可以处理路由   
像后端路由 可以前后切换   
浏览历史 history => onpopstate    
push pop 类似数组 只在尾部操作 => 栈