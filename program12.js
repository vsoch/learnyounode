var net = require('http');
var fs = require('fs');
var url = require('url');

// HTTP JSON API SERVER (Exercise 13 of 13)  
   
//  Write an HTTP server that serves JSON data when it receives a GET request  
//  to the path '/api/parsetime'. Expect the request to contain a query string  
//  with a key 'iso' and an ISO-format time as the value.  
   
//  For example:  
   
//  /api/parsetime?iso=2013-08-10T12:10:15.474Z  
   
//  The JSON response should contain only 'hour', 'minute' and 'second'  
//  properties. For example:  

var parsetime = function(timestr){
    /*
     * parsetime takes a timestr (in iso format)
     * and returns a json object with hour,minute,second
     */ 
    var hours = timestr.getHours();
    var minutes = timestr.getMinutes();
    var seconds = timestr.getSeconds();
    return {
        hour: hours,
        minute: minutes,
        second: seconds
    };    
}

var unixtime = function(timestr,fmt){
    /*
     * unixtime takes a timestr (in iso format)
     * and returns a json object with unixtime
     */ 
    var unix = timestr.getTime();
    return {
        unixtime: unix
    }
}


if (process.argv.length>2){
    var port = Number(process.argv[2]);

    var server = net.createServer(function(request,response) {
        if (request.method == "GET") {
 
            // Parse address and iso from request
            var address = url.parse(request.url,true);
            var iso = address.query["iso"];
            var pathname = address.pathname;
            var time = new Date(iso);
            var json;

            // Handle different urls
            if (pathname == "/api/parsetime"){
                json = parsetime(time);
            } else {
                json = unixtime(time);
            }
 
            response.writeHead(200, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(json));
         }
    });
    server.listen(port)
}
