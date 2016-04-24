
var http = require('http');

if (process.argv.length>2) {
    var url = process.argv[2];
    lines = [];
    var count = 0;

    http.get(url,function(response){
        response.setEncoding("utf-8");

        // Add the lines to the data object
        response.on("data",function(data) {
            lines.push(data);
            count = count + data.length;
       });

        // Print length and lines
        response.on("end",function(data) {
            console.log(count);
            console.log(lines.join(''));
       });

    })
}
