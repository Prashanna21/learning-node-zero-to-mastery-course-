const express = require("express")
const cors = require("cors")

const planetsRouter = require('./routers/planets/planets.router')

const app = express()

app.use(cors({
    origin : "http://localhost:3000"
}))

app.use(express.json())

app.use('/planets', planetsRouter)

module.exports = app