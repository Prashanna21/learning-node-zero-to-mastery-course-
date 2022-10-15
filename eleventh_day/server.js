const express = require("express")

const messagesRouters = require('./routers/messages.router')
const {friendsRouters} = require('./routers/friends.router')

const PORT = 5000


const app = express()

app.use((req, res, next) => {
    let timeBeforeRequest = Date.now()
    next()
    let timeAfterRequest = Date.now()
    console.log(`Method Of Request: ${req.method} Param Of Request ${req.baseUrl} Time Taken : ${ timeAfterRequest - timeBeforeRequest}`)
})

app.use(express.json())




app.use('/messages', messagesRouters)
app.use('/friends', friendsRouters)

app.listen(PORT, () => {
    console.log('Listening to Port: ' + PORT) 
});