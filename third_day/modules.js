const {request} = require("https")

const req = request('https://www.google.com/', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data Chuck is ${chunk}`)
    })

    res.on('end', () => {
        console.log("\n \n \n No More Data")
    })
})

req.end() 

// We can use get instead which is similar but we don't have to use req.end() like reqeuest
const get = require("https").get

const req1 = get('https://www.google.com/', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data Chuck is ${chunk}`)
    })

    res.on('end', () => {
        console.log("\n \n \n No More Data")
    })
})

