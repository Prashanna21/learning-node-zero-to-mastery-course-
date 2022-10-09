const http = require('http')

const PORT = 5000

const friends = [
    {
        'id' : 0,
        'Name' : "John",
        "Message" : "HMMMMMM"
    },
    {
        'id' : 1,
        'Name' : "Mon",
        "Message" : "Your Mom"
    },
    {
        'id' : 2,
        'Name' : "Your Mom",
        "Message" : "Joe"
    }
]

const server = http.createServer((req, res) => {
    resUrlArr = req.url.split('/')

    if(resUrlArr[1] == "friends" && req.method ==="POST"){
        req.on('data', (data) => {
            processedData = data.toString()
            friends.push(JSON.parse(processedData))
            
  
        });
        req.pipe(res)
        
        
    }

    else if(resUrlArr[1] == "friends"){
        

        if(resUrlArr.length === 3 ){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(friends[Number(resUrlArr[2])]))
        }

        else if(resUrlArr.length === 2){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(friends))
        }

    }

        else{
            res.statusCode = 404
            res.end()
        }


        
    
})

server.listen(PORT, () => {
    console.log(" Listening To Port: " + PORT)
})