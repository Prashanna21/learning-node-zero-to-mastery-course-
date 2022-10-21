function getMessage (req, res){
    res.status(200).json({
        "Message" : "Sus"
    })
}

module.exports = getMessage