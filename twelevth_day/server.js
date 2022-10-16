const express = require("express") 
const messagesRouters = require('./routers/message.router')


const PORT = 5000

const app = express()

app.use('/messages', messagesRouters)


app.listen(PORT, () => {
    console.log(`Listening to PORT: ${PORT}`)
})
