const fs = require('fs')
const Koa = require('koa')
const Router = require('koa-router')
const body = require('koa-bodyparser')
const serve = require('koa-static')
const compress = require('koa-compress')
const cors = require('koa-cors')
const { default: axios } = require('axios')

const app = new Koa()
const router = new Router()
const kPort = 8000

app.use(cors())
app.use(body())
app.use(async (ctx, next) => { // history 中间件
  const path = ['/search'] // 需要判断的路径
  await next() // 等待请求执行完毕
  if (ctx.response.status === 404) {
    if (path.reduce((res, next) => (res || ctx.request.url.includes(next)), false)) { // 判断是否符合条件
      ctx.type = 'text/html; charset=utf-8' // 修改响应类型
      ctx.body = fs.readFileSync('./build/index.html') // 修改响应体
    }
  }
})
app.use(serve('./build'))
app.use(compress({ threshold: 2048 }))
app.use(router.routes()).use(router.allowedMethods())

router.get('/api/search', async ctx => {
  const { keyword, offset } = ctx.query
  let res = await axios.get(`https://i.snssdk.com/search/api/study?keyword=${keyword || ''}&offset=${offset || 0}`)
  ctx.set('Content-Type', 'application/json')
  ctx.body = await res.data
})

router.get('/api/search/sug', async ctx => {
  const { keyword } = ctx.query
  let res = await axios.get(`https://i.snssdk.com/search/api/sug/?keyword=${keyword || ''}`)
  ctx.set('Content-Type', 'application/json')
  ctx.body = await res.data
})

app.listen(kPort, () => {
  console.log('listening on:', kPort, 'pid:', process.pid)
})