var net = require('net');

function pad(padstr){
    padstr = padstr.toString();
    if (padstr.length==1){
        padstr = "0" + padstr;
    } 
    return padstr  
}

if (process.argv.length>2){
    var port = Number(process.argv[2]);
    var server = net.createServer(function (socket) {
        var date = new Date();  
        var year = date.getFullYear();  
        var month = pad(date.getMonth() +1);     // starts at 0  
        var day = pad(date.getDate());           // returns the day of month 
        var hour = pad(date.getHours());  
        var minute = pad(date.getMinutes());
        var datestr = year + '-' + month + '-' + day + " " + hour + ":" + minute + "\n";
        socket.write(datestr);
        socket.end()
    })
    server.listen(port)
}
