const http = require('http')
const fetch = require('node-fetch');

const port = 4000




let url = "https://www.reddit.com/r/popular.json";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        // do something with JSON
    });


const server = http.createServer(function(req, res){
    res.write('hello world')
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