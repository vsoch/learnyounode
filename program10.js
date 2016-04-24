var net = require('http');
var fs = require('fs');

// HTTP FILE SERVER (Exercise 11 of 13)  
   
//  Write an HTTP server that serves the same text file for each request it  
//  receives.  
   
//  Your server should listen on the port provided by the first argument to  
//  your program.  
   
//  You will be provided with the location of the file to serve as the second  
//  command-line argument. You must use the fs.createReadStream() method to  
//  stream the file contents to the response.  

if (process.argv.length>2){
    var port = Number(process.argv[2]);
    var url = process.argv[3];

    var server = net.createServer(function(request,response) {
        var stream = fs.createReadStream(url, {encoding: "utf-8"});
        stream.pipe(response);
    })
    server.listen(port)
}
