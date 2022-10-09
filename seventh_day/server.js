//Using Express.js Farmework which provides various inbuilt features or shortcuts
//Like You don't have to put common statuscode in header like 200 and 404 if not found
//It automatically declares the Content-Type
//There is a special Condition if you put the file name to server js you can run it using npm start
const express = require('express');

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Home Page! Heloow")
})

app.get('/messages', (req, res) => {
    res.send("Messages: Hellow")
})

app.post('/messages', (req, res) => {
    req.on('data', (data) => {
       console.log("Data Received")
    })
    req.pipe(res)
})

app.listen(PORT, () => {
    console.log('Listening to Port: ' + PORT) 
});