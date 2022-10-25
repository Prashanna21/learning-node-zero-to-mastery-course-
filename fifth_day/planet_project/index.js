const {parse} = require("csv-parse")
const fs = require("fs")

let results = []


fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        "comment" : "#",
        "columns": true
    }))
    .on('data', (data) => results.push(data))
    .on('error', (err) => console.log(err))
    .on('end', () => {
        results = results.filter((planet) => 
        planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6
        ).map((planet) => planet['kepler_name'])


        console.log(results)
        console.log(`No Of Habitable Planets are ${results.length}`)
        console.log("All done")
    })