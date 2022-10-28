const express = require('express')

const {httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch}  = require('./launches.controller')

launchesRouter = express.Router()

launchesRouter.get('/', httpGetAllLaunches)

launchesRouter.post('/createnewlaunch', httpAddNewLaunch)
launchesRouter.delete('/:id', httpAbortLaunch)

module.exports = launchesRouter