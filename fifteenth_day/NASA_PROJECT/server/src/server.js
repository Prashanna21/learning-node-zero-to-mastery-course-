const http = require('https')

const app = require('./app')

const PORT = process.env.PORT || 8000
console.log(app)
const server = http.createServer(app)

server.listen(PORT, () => {
    console.log(`Listening to PORT: ${PORT}`)
})



