const axios = require('axios')

axios.get('https://api.yomomma.info/').then(response => {
 return response}).then(data =>{console.log(data['data']['joke'])})