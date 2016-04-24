http = require('http');

function get_url(url,callback){
 
    var lines = [];

    http.get(url,function(response){
        response.setEncoding("utf-8");

        // Add the lines to the data object
        response.on("data",function(data) {
            lines.push(data);
       });

        // Print length and lines
        response.on("end",function(data) {
            return callback(null,lines.join(''));
       });

    });

};

module.exports = get_url;
