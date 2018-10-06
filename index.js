const http = require('http');
const server = http.createServer(function(req,res){
    console.log("...execution started...");
    res.end("I'm alive and thriving !!");
});

server.listen(8080);