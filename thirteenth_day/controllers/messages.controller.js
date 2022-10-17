function getFriends(req, res) {
    res.json(friends)
}

const path = require('path')



function getMessages(req, res){
    res.sendFile(path.join(__dirname, "..", "public", "coolpic.jpg"))
}

module.exports = getMessages