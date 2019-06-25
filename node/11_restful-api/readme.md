##fullStack 全栈
- Front Engirneer
- Backend /api

##restful api   
  浏览器与服务器通信方式的一种设计风格

- restful的世界里 一切皆资源
- url 来唯一定位资源的识别符
- 加一条comment？
  ```json
  {
    id: 2,
    body: "小山重叠金明灭",
    postId: 1
  }
  ```
- 设计有意义的URL
  状态改变
  POST /comments 加一条评论 id: 2 
  修改一下内容
  PUT  /comments/2 body:"鬓云欲度香腮雪"   
  操作|SQL方法|HTTP动词
  ---|:--:|---:
  CREATE|INSERT|POST
  READ|SELECT|GET
  UPDATE|UPDATE|PUT/PATCH
  DELETE|DELETE|DELETE
  > PATCH 只要给一部分
  