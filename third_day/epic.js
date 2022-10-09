// Creating Our Own Modules

const epicFunc = () => {
    console.log("Epiccccc")
}

const noice = () => { //Can Use module.export = () => //shorthand directly
    console.log("Noiceeee")
}

module.exports = {
    epicFunc, //shorthand of epicFunc (the name which you want to be used while exporting) : epicFunc(the name in current file)
    noic : noice
}

module.exports = {
    epicFunc, noice
}


