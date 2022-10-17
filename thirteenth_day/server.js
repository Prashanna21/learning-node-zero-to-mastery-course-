const express = require("express") 
const messagesRouters = require('./routers/message.router')
const path = require('path')
const { dirname } = require("path")


const PORT = 5000

const app = express()

app.use('/messages', messagesRouters)
app.use('/site', express.static(path.join(__dirname, "public")))






app.listen(PORT, () => {
    console.log(`Listening to PORT: ${PORT}`)
})
