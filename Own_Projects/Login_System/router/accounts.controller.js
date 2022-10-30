const { createNewAcc, authenticateAccount } = require("../modal/account.modal")

function httpcreateNewAcc(req, res){
    if(!req.body){
        return res.status(404).json({
            error : "Unwanted Input"
        })
    }
    createNewAcc(req.body)
    return res.status(200).json(req.body)
}

function httpLogin(req, res){
    if(!req.body){
        return res.status(404).json({
            error : "Unwanted Input"
        })
    }
    authenticateAccount(req.body)
}

module.exports = {
    httpcreateNewAcc,httpLogin
}