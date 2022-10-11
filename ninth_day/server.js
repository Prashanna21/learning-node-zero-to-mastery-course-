const express = require("express")

const PORT = 5000

let friends = [
    {
        id: 1,
        name: "Robin",
        message: "Okay!"
    },

    {
        id: 2,
        name: "Nimba",
        message: "Nice"
    },

    {
        id: 3,
        name: "Reena",
        message: "Lol"
    },
]

const app = express()

app.use((req, res, next) => {
    let timeBeforeRequest = Date.now()
    next()
    let timeAfterRequest = Date.now()
    console.log(`Method Of Request: ${req.method} Param Of Request ${req.url} Time Taken : ${ timeAfterRequest - timeBeforeRequest}`)
})

app.use(express.json())

app.post('/friends', (req, res) => {
    if(!req.body.name){
       return res.status(400).json({
        error: 'Missing friend name'
       })
    }

    const newFriend = {
        id : friends.length+1,
        name : req.body.name
    }
    console.log(req.body.name)
    friends.push(newFriend)

    res.json(newFriend)
})


app.get('/friends', (req, res) => {
    res.json(friends)
})

app.get("/friends/:friendsName", (req, res) => { //: Uses like a variable you can use later to get the input
    friendsName = req.params.friendsName //to get the input

    let friendIfExist = friends.filter((friend) => {
        return friend.name.toLowerCase() == friendsName 
    })
    console.log(friendIfExist)

    if(friendIfExist.length != 0){
        res.status(200).json(friendIfExist)
    }

    else{
        res.status(404).json({
            error: `You Don't Have Friend with user name of ${friendsName}` 
        })
    }




})


app.listen(PORT, () => {
    console.log('Listening to Port: ' + PORT) 
});