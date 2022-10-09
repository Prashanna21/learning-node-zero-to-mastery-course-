const http = require("http");
const { json } = require("stream/consumers");
const PORT = 3000;


const server = http.createServer((req, res) => {
    req.on('data', (data) => console.log(data))

    res.writeHead(200, {
        'Content-Type' : 'text/plain'
    });
    res.end('Amongus')
})


server.listen(PORT, () => {
    console.log(`Listening to Port ${PORT}`)
}) 


const server2 = http.createServer((req, res) => {
    req.on('data', (data) => console.log(data))

    res.writeHead(200, {
        'Content-Type' : 'application/json'
    });
    res.end(JSON.stringify(
        ['a', 'b', 'c']
    ))
})


server2.listen(5000, () => {
    console.log(`Listening to Port 5000`)
}) 
