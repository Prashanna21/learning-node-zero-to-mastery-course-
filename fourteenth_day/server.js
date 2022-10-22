const express = require('express')
const path = require('path')

const susMessages = require('./routers/susMessage.router')


const PORT = 5000

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, "views"))



app.use('/sus', susMessages)
app.use('/site', express.static(path.join(__dirname, "public"))) //make path relative using it

app.get('/', (req, res) => {
    res.render('index', {
        'title' : "Heloo World"
    })
})



app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`)
})