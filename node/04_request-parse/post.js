const http = require('http')
http.createServer((req, res) => {
  console.log(req.method, req.url);
  console.log(req.headers);
  console.log('content-type',req.headers['content-type']);
  
  if (req.method === 'POST' && req.url === '/user') {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => {
      if(req.headers['content-type']==='application/x-www-form-urlencoded'){
        res.writeHead(200, {
          'Content-Type': 'application/json;charset=utf-8'
        })
      }
    
      res.end(data)
    })
  }
}).listen(3000, () => {
  console.log('server is listening on port 3000');

})