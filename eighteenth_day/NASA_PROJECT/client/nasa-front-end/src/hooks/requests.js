const API_URL = "http://localhost:5000"

async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`)
  console.log("amonguss")
  return await response.json()
  

}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
  const response = await fetch(`${API_URL}/launches`)
  const fetchedLaunches = await response.json()
  console.log("suss \n \n \n")
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber
  })
}



// TODO: Once API is ready.
  // Submit given launch data to launch system.
async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URL}/launches/createnewlaunch`, {
      method : "post",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(launch),
      
    })
  } catch (error) {
    return {
      ok: false,
    }
    
  }
  
}

// TODO: Once API is ready.
  // Delete launch with given ID
async function httpAbortLaunch(id) {
  try {
    console.log(id)
    return await fetch(`${API_URL}/launches/${id}`, {
      method : "delete"
    })
  } catch (error) {
    console.log(error)
    return {
      ok: false
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};