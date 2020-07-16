const https = require('https');
const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');

const ReactDOMServer = require('react-dom/server')
// const serverEntry = require('./server')

const app = new Koa()
const router = new Router()
const kPort = 8000

app.use(router.routes())
  .use(router.allowedMethods())
  .use(bodyParser())

// 静态文件服务
app.use(serve('./static'))

// get接口
router.get('/hello', async ctx => {
  ctx.body = 'Hello world!'
})

// post接口
router.post('/echo', async ctx => {
  const { name } = ctx.request.body
  ctx.body = `Hello ${name}\n`
})

// 请求转发
router.get('/baidu', async ctx => {
  return new Promise((resolve) => {
    const req = https.request({
      method: 'GET',
      hostname: 'www.baidu.com',
      path: '/',
      port: 443,
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:68.0) Gecko/20100101 Firefox/68.0"
      }
    }, res => {
      res.pipe(ctx.res)
      res.on('end', resolve)
    })
    req.end()
  })
})

// 服务端渲染React
// router.get('/app', async ctx => {
// const html = ReactDOMServer.renderToString(serverEntry)
// ctx.set('Content-Type', 'text/html')
// ctx.body = html
// })

app.listen(kPort, () => {
  console.log('listening on:', kPort, 'pid:', process.pid)
})