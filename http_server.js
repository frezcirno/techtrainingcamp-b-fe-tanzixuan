const Koa = require('koa')
// const Router = require('koa-router')
const serve = require('koa-static')
// const { render } = require('./dist/bundle_server')

const app = new Koa()
// const router = new Router()
const kPort = 8000

// app.use(router.routes())
//   .use(router.allowedMethods())

// router.get('/', async ctx => {
//   ctx.set('Content-Type', 'text/html')
//   ctx.body = render()
// })

app.use(serve('./build'))

app.listen(kPort, () => {
  console.log('listening on:', kPort, 'pid:', process.pid)
})