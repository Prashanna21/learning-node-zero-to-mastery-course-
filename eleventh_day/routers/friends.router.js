const express = require('express')

const friendController = require('../controllers/friends.controller')

const friendsRouters = express.Router()

friendsRouters.use((req, res, next) => {
    console.log(req.ip)
    next()
})

friendsRouters.get('/', friendController.getFriends)
friendsRouters.post('/', friendController.postFriends)
friendsRouters.get("/:friendsName", friendController.getFriendsByName)




module.exports = {
    friendsRouters,
}