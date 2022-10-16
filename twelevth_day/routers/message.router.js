const express = require('express')

const messageController = require("../controllers/messages.controller")

const messagesRouters = express.Router()

messagesRouters.get('/', messageController)

module.exports = messagesRouters