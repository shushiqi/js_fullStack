## Vue
  Vue是构建单页面应用的 由路由控制页面跳转

前端路由实现 => 核心本质是 不刷新页面，在页面上显示不同的内容  单页应用的本质

1. hash实现   
  url  **#hash部分的改变** 不会刷新页面    
  传统url /path?queryString   
  刷新页面 页面打开慢 独立的http请求    
  利用？ 动态加载组件 发起请求

- 单页应用避免了传统后端路由每次跳转都刷新页面，给用户带来的缓慢体验 白屏（http请求)
  前端路由 立即加载 => 路由对应的组件
```js
 window.addEventListener('hashchange', function () {
    console.log('render');
  })
```
***
- route-link组件
  `="#/" props`   
  home slot