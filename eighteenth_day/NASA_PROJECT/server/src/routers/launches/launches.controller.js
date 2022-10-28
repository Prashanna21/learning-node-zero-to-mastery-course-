const { getAllLaunches, addNewLaunch , lauchExist, abortLaunch} = require("../../model/launch.model")


function httpGetAllLaunches(req, res){
    return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req, res){
    const launch = req.body

    if(!launch.mission || !launch.rocket || !launch.launchDate || !launch.target){
        return res.status(400).json({
            error : "Missing required launch property"
        })
    }

    launch.launchDate = new Date(launch.launchDate)

    if(isNaN(launch.launchDate)){
        return res.json({
            error : "Invalid Launch Date"
        })
    }


    addNewLaunch(req.body)
    return res.status(201).json(launch)
}

function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id)
    
    if(!lauchExist(launchId)){
        return res.status(404).json({
            error : "Launch Not Found"
        })
    }

    const abortedLaunch = abortLaunch(launchId)
    return res.status(200).json(abortedLaunch)

}

module.exports = {
    httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch
}