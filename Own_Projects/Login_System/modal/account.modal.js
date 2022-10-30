const { json } = require('express')
const fs = require('fs')


function createNewAcc(newCred){
    fs.readFile('./data/login-credentials.json', "utf-8", (error, data) => {
        const newData = JSON.parse(data)
        newData["credentials"][Object.keys(newCred)[0]] = newCred[Object.keys(newCred)[0]]
        console.log(newData)


        fs.writeFile('./data/login-credentials.json', JSON.stringify(newData), (error) => {
            if(error){
                console.log(error)
            }
    
            
        })
    })
    
}

function authenticateAccount(givenCred){
    fs.readFile('./data/login-credentials.json', "utf-8", (error, data) => {
        const dataFromJSON = JSON.parse(data)
        const parsedDataProvided = givenCred
        console.log(parsedDataProvided + "\n" + dataFromJSON['credentials'])

    })}



module.exports = {createNewAcc, authenticateAccount}


