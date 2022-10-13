const express = require("express")

const messageController = require('./controllers/messages.controller')
const friendController = require('./controllers/friends.controller')

const PORT = 5000



const app = express()

app.use((req, res, next) => {
    let timeBeforeRequest = Date.now()
    next()
    let timeAfterRequest = Date.now()
    console.log(`Method Of Request: ${req.method} Param Of Request ${req.url} Time Taken : ${ timeAfterRequest - timeBeforeRequest}`)
})

app.use(express.json())

app.get('/messages', messageController.getMessages)


app.get('/friends', friendController.getFriends)
app.post('/friends', friendController.postFriends)






app.get("/friends/:friendsName", friendController.getFriendsByName)


app.listen(PORT, () => {
    console.log('Listening to Port: ' + PORT) 
});