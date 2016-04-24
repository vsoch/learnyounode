
fs = require('fs');

if (process.argv.length>2) {

    var buffer = fs.readFileSync(process.argv[2]);
    var text = buffer.toString();
    var lines = text.split('\n').length;
    console.log(lines-1);    

}
