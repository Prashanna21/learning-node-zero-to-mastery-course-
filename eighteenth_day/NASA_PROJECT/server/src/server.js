const http = require('http')

const app = require('./app')
const {loadPlanets, planets} = require("./model/planets.models")

const PORT = process.env.PORT || 5000



const server = http.createServer(app)

async function startServer(){
    await loadPlanets()
    
    console.log(planets)

    server.listen(PORT, () => {
        console.log(`Listening to PORT: ${PORT}`)
    })
}

startServer()





