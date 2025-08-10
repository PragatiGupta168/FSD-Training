// we are handle request and response
const { log } = require('@tensorflow/tfjs')
const http = require('http')
// console.log(http);
const HOST ='localhost'
const PORT = 8000

//Yaha hum Request handler ka code likhenge isko hum request handler bhi kahte hai
const requestHandler = function(request, response)
{
    console.log(request.method, request.url);//request ka method and url pta krne k liye hum yh use karte hai 
    switch(request.url)
    {
        case'/':
        response.end("<h1>This is my First Server......</h1>")
        break
        case '/home':
            response.end("<h1>This is my Home Server......</h1>")
            break
        case '/About':
            response.end("<h1>This is my About Server......</h1>")
            break
        case '/Contact-us':
            response.end("<h1>This is my Contact-Us Server......</h1>")
            break
    }
    
    // response.end("<h1>Welcome to Node Server......</h1>")
}

//server banane k liye create function call karenge 
const server = http.createServer(requestHandler);
server.listen(PORT,HOST,(err)=>{

    //localhost:8000
    if(err)
        console.log('Server Not Started...'+ err);
    else
        console.log(`Server running at http://${HOST}:${PORT}`);      
})