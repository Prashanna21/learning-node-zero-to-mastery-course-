const {parse} = require("csv-parse")
const fs = require("fs")
const path = require('path')

console.log("running model.js")


let habitablePlanets = []

const isHabitable = (planet) => {
        return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6

}


function loadPlanets() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, "..", "..", "data", "kepler_data.csv"))
    .pipe(parse({
        "comment" : "#",
        "columns": true
    }))
    .on('data', (data) => {
        if(isHabitable(data)){
            habitablePlanets.push(data)
        }
    })
    .on('error', (err) => {
        console.log(err)
        reject()
    })
    .on('end', () => {
        console.log("model end")
        //console.log(habitablePlanets)
        //console.log(`No Of Habitable Planets are ${habitablePlanets.length}`)
        //console.log("All done")
    })

    resolve()

    })
}

function getAllPlanets(){
    return habitablePlanets
}


module.exports = {
    planets : habitablePlanets, loadPlanets, getAllPlanets,
}