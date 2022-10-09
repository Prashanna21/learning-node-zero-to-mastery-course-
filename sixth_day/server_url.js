const http = require('http')
const PORT = 5000
const userName = "Prashanna"

//Failed Try of creating a Login Page
const loginPageCode = `<html> 
<body>

<input placeholder = "Type Your Password" id = "Password" type="password">
<button id = "submit-btn"> Submit </button>


<script>

</script>

</body>


</htm>`


const server = http.createServer((req,res) => {

    if(req.url == "/sus"){
            //Instead of 
            //res.writeHead(200, {
            //    'Content-Type' : 'text/html'
            //})

           res.statusCode = 200;
           res.setHeader('Content-Type', 'text/html')
           res.write(`
           <html> 
           <body>
           <h1> Amongusssssss ${userName}</h1>
           </body>
           </html>
           `)

            res.end()
        }

    else if(req.url=="/login"){
        res.writeHead(200, {
            'Content-Type' : 'text/html'
        })

        res.write(loginPageCode)
        res.end()
    }

    else{
        res.statusCode = 404
        res.end()
    }
})

server.listen(PORT, () => {
    console.log("Listening to Port: "+ PORT)
})