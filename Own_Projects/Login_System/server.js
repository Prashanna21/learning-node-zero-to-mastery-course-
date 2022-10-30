const express = require("express")
const path = require("path")

const {accountsRouter}= require('./router/accounts.router.js')

const app = express()

const PORT = 5000

app.use(express.json())
app.use('/accounts', accountsRouter)

app.use(express.static(path.join(__dirname, "public")))

app.get('/login', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(PORT, () => {
    console.log(`Listening to LocalHost Port :${PORT}`)
})