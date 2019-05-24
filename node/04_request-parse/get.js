const http = require('http')
const url = require('url')
const queryString = require('querystring')

http.createServer((req, res) => {
  // req 请求 
  if (res.url === '/favicon.ico') return
  // qyery请求

  const urlObj = url.parse(req.url)
  const queryObj = queryString.parse(urlObj.query)
  console.log(queryObj)
  // console.log(req.url);
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  })
  // {query:蜗牛老湿 type:all}
  res.end(JSON.stringify(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
${JSON.stringify(queryObj)}
</body>
</html>`))
}).listen(4000, () => {
  console.log('server is listening port 3000');
})