const {getAllPlanets} = require('../../model/planets.models')

console.log("controller")

function httpgetAllPlanets(req, res){

    return res.status(200).json(getAllPlanets());
}

module.exports = {
    httpgetAllPlanets,
}