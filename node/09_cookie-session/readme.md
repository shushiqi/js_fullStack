## 
http 无状态的
客户端 服务器 =>再次请求时，服务器知道客户端是谁

## -S
--save 
放入
```js
"dependencies": {
    "koa": "^2.7.0",
    "koa-router": "^7.4.0"
  }
  ```
  npm i => 在json文件里寻找各个依赖并安装
  本地开发安装的node_module

## cookie
存在客户端上
js操作：document.cookie   
后端：`Set-Cookie: name1=value1; path=/' httponly`   
浏览器检查所有存储的cookie，把符合当前作用范围的cookie放在http请求头发给服务器  
cookie有可能被用户禁用
内容：  
name  
value   
path： 规定cookie作用路径   
/    所有的路径   
/user /user 以及/user/xxx   
/user/xxx /user/xxx以及下面的/user/xxx/xxx  
httponly: true/false true就不能通过js获取cookie   
maxAge: Cookie的有效期，单位为秒（Second）
- 如果maxAge属性为正数，则表示该Cookie会在maxAge秒之后自动失效
- 如果maxAge为负数，则表示该Cookie仅在本浏览器窗口以及本窗口打开的子窗口内有效，关闭窗口后该Cookie即失效。
- 如果maxAge为0，则表示删除该Cookie。   
作用范围：  
  path  
  domain
用途：会话状态管理 保存用户的个性化设置

## session
保存在服务端， 靠后台语言实现，有很多session 很多用户：seesionID    

## koa第三方中间件
koa：ctx => req + res    
80%的koa第三方中间件的操作是 往ctx上扩展 