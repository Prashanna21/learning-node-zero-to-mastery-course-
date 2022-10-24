//const axios = require('axios')

//axios.get('https://api.yomomma.info/').then(response => {
// return response}).then(data =>{console.log(data['data']['joke'])})

const axios = require('axios')

async function getJokes() {
    const request = await axios.get('https://api.yomomma.info/')
    return await console.log(request['data']['joke'])
}

getJokes()