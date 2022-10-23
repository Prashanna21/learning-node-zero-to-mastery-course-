const express = require('express')
const path = require('path')

const susMessages = require('./routers/susMessage.router')

const messages = {
    "friend" : "Hello this is friend",
    "mom" : "where are you, this is mom"
}

const PORT = 5000

const app = express()

app.use(express.json())

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, "views"))



app.use('/sus', susMessages)
app.use('/site', express.static(path.join(__dirname, "public"))) //make path relative using it

app.get('/', (req, res) => {
    res.render('index', {
        'title' : "Heloo World"
    })
})

app.get('/messages', (req, res) => {
    res.render('message', {
        'messages': JSON.stringify(messages)

    })
})

app.listen(PORT, () => {
    console.log(`Listening to Port: ${PORT}`)
})