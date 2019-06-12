## KOA
> 中间件(koa-views)的执行是有顺序的，路由在前，模板引擎在后的话，当执行到ctx.render的时候，模板引擎相关的中间件还未执行，render方法还未绑定到ctx上，所以就会报`ctx.render is not a function`的错误