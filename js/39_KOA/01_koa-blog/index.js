const Koa = require('koa')
const app = new Koa()
const { PORT } = require('./config/default')
const path = require('path')
const koaStatic = require('koa-static')
const signinRouter = require('./routers/signin.js')
// 配置模板引擎 ejs
const views = require('koa-views')

app.listen(PORT, () => {
  console.log(`server os running on ${PORT}`);
})
app.use(views(path.join(__dirname, './views'), { extension: 'ejs' }))
app.use(koaStatic(path.join(__dirname, './public')))
app.use(signinRouter.routes())
