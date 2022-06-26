// const http = require('http')

// const hostname = '127.0.0.1'
// const port = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-type', 'text/plain')
//     res.end('Hello there\n')
// })

// server.listen(port, hostname, () => {
//     console.log(`server running at http://${hostname} at port:${port}/`)
// })



const http = require('http')
const hostname = '127.0.0.1'
const port = '3000'


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/plain')
    res.end('Changes successfully implemented \n')
})

server.listen(port, hostname, () => {
    console.log(`server is running at ${hostname} at port:${port}/`)
})

// Nodejs practice