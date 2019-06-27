## typescript
- 将js弱类型变成强类型  
  类型 声明 文件 @types/react
- webpack-dev-server 不会刷新浏览器
  - webpack-dev-server --inline 刷新浏览器
  - webpack-dev-server --inline --hot 刷新浏览器需要更新的局部（即热更新）
- typescript 是js的超集 js在ts中是完全可以运行的  
  跟Java一样 是静态类型语言， 运行前先编译一下
- 强制类型声明

***
## webpack的打包优化
### vendor
代码分离:   
框架 react react-dom等不需要改变的文件单独打包