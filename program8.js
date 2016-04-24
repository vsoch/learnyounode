
var urls = require('./urls.js');

if (process.argv.length>2) {
    
    var lines = [];

    for (i=2; i<process.argv.length;i++){

        var url = process.argv[i];
        urls(url, function(err, data){
            if (err) {
                throw err;             
        }
        console.log(data); 
    });

    }

}
