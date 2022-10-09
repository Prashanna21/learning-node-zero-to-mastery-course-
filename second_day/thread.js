const firstFunc = () => secondFunc()

const secondFunc = () => console.log("Second Function Executed")

new Thread(firstFunc)