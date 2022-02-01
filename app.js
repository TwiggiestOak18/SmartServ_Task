import http from "http"
import fetch from 'node-fetch'


const port = 3000



const response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json');
const data = await response.json();



console.log(JSON.stringify(data,null,2));



const server = http.createServer(function(req, res){
    res.write(JSON.stringify(data,null,2));
    res.end()
}

)
server.listen(port, function(error){
    if(error)
    {
        console.log('something went wrong', error)
    }
    else
    {
        console.log('server is listening on port'+port)
    }
})