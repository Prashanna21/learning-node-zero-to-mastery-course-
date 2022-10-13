let {friends} = require('../models/friends.modal')

console.log(friends)
function getFriends(req, res) {
    res.json(friends)
}

function getFriendsByName(req, res) { //: Uses like a variable you can use later to get the input
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
    }}

function postFriends(req, res){
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
}




module.exports = {
    getFriends, getFriendsByName, postFriends,
}