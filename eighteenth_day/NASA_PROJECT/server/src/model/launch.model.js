const launches = new Map()

let lastFlightNumber = 100

const launch = {
    flightNumber : 100,
    mission: "Kepleer Exploration", 
    rocket : "Explorer IS1", 
    launchDate : new Date('December 27, 2030'),
    target : 'Kepler-442 b', 
    customer : ['ZTM', 'NASA'],
    upcoming : true, 
    success: true
}

launches.set(launch.flightNumber, launch)

function lauchExist(id){

    return launches.has(id)
    
}


function getAllLaunches() {
    return Array.from(launches.values())
}

function addNewLaunch(launch){
    lastFlightNumber++;
    launches.set(lastFlightNumber, Object.assign(launch, {
        flightNumber : lastFlightNumber,
        customer : "Prashanna Corps",
        upcoming : true,
        success : true
    }))
}

function abortLaunch(launchId){
    const aborted = launches.get(launchId)
    aborted.upcoming = false
    aborted.success = false
    return aborted
}



module.exports = {
    launches, getAllLaunches, addNewLaunch, lauchExist, abortLaunch
}