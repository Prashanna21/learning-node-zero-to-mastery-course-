const express = require("express")

const {httpcreateNewAcc, httpLogin} = require("./accounts.controller.js")


accountsRouter = express.Router()

accountsRouter.post('/createnew', httpcreateNewAcc)
accountsRouter.post('/login', httpLogin)

module.exports = {
    accountsRouter
}