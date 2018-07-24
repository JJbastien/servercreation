var http = require("http");
var port  = 7000;
var port2 = 7500 ; 
function handleRequest(request, response){
    response.end("this is good" + request.url);
}
function handleRequest2(request2, response){
    response.end("this is bad " + request2.url)
}
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

server.listen(port , function(){
    
    console.log("Server listening on port1")
});
server.listen(port2, function(){
    console.log("server is listening on port2")
})