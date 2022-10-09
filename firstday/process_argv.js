//Process 
//Process argv returns a list containing from where the node js is running in index 0, the current file path in 1, and command passed after
//node file name

const userName = process.argv[2] // Returns the 3rd command 
const userCaste = process.argv[3] // REturns the 4th command passed

console.log(`Hello Mr ${userName} ${userCaste}`)