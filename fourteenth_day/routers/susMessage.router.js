const express = require("express")

const getMessage = require('../controllers/susMessage.controller')

const susMessages = express.Router()

susMessages.get('/', getMessage)

module.exports = susMessages