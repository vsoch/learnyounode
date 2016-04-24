
fs = require('fs');

if (process.argv.length>2) {

    fs.readFile(process.argv[2], function (err, data) {
        if (err) throw err;
        var buffer = data.toString();
        var lines = buffer.split('\n').length;
        console.log(lines-1);
    })
}
