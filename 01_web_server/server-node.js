const http = require('http')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200
        res.setHeader('content-type', 'text/plain')
        res.end("hey!")
    }else  if (req.url === '/login') {
        res.statusCode = 200
        res.setHeader('content-type', 'text/plain')
        res.end("welcome to this server")
    } else{
        res.statusCode = 404
        res.setHeader('content-type', 'text/plain')
        res.end("404 not  found")
    }

})

server.listen(port, hostname, ()=>{
    console.log(`server is listening at http://${hostname}:${port}`)
})


