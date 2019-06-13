var http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
  var filePath = '.' + req.url
  if (filePath === './') {
    filePath = './index.html'
  }
  readFile(filePath, res)  
}).listen(8080)

function readFile(path, res) {
  fs.readFile(path, 'utf-8', function (err, data) {
    if (err) {
      // throw new Error('出错了')
      readFile('./index.html', res);
    } else {
      res.write(data)
      res.end()
    }
  })
}