var net = require('http');
var fs = require('fs');
var map = require('through2-map');

// HTTP UPPERCASERER (Exercise 12 of 13)  
   
//  Write an HTTP server that receives only POST requests and converts  
//  incoming POST body characters to upper-case and returns it to the client.  
   
//  Your server should listen on the port provided by the first argument to  
//  your program.  


if (process.argv.length>2){
    var port = Number(process.argv[2]);

    var server = net.createServer(function(request,response) {
        if (request.method == "POST") {
            request.pipe(map (function (chunk) {
                return chunk.toString().toUpperCase();
            })).pipe(response);
         }
    });
    server.listen(port)
}
