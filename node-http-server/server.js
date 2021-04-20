const http = require('http')
 
const server =
  http.createServer((req, res) => {
    console.log(`Someone has requested ${req.url}`)

    if(req.url === '/'){
        res.write('Hello, world!')
        res.end()
    }
    else if(req.url === '/about'){
        res.write('About')
        res.end()
    }
    else{
        res.statusCode = 404
        res.write('404 Page')
        res.end()
    }
  })
 
server.listen(8000)