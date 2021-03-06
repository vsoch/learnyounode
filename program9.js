var net = require('net');
var util = require('util');

String.prototype.repeat = function(number){
    return new Array(number + 1).join(this);
}

function pad(padstr,zeros,padchar){
    /**
     * pad adds a certain number of zeros to a string 
     * format
     * @param padstr the string to be padded with zeros
     * @param zeros the number of zeros to pad
     * @param padchar the character to use to pad
     */   
    zeros = zeros || 1;
    padchar = padchar || "0"
    padstr = padstr.toString();
    if (padstr.length==1){
        padstr = padchar.repeat(zeros) + padstr;
    } 
    return padstr  
}

function get_date(){
    /**
     * get_date returns the date in a (currently hardcoded) 
     * format
     */   
    var date = new Date();  
    var year = date.getFullYear();  
    var month = pad(date.getMonth() +1);     // starts at 0  
    var day = pad(date.getDate());           // returns the day of month 
    var hour = pad(date.getHours());  
    var minute = pad(date.getMinutes());
    var datestr = util.format('%s-%s-%s %s:%s\n',year,month,day,hour,minute);
    return datestr
}

if (process.argv.length>2){
    var port = Number(process.argv[2]);
    var server = net.createServer(function (socket) {
        datestr = get_date();
        socket.write(datestr);
        socket.end()
    })
    server.listen(port)
}
