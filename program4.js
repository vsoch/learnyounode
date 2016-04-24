
fs = require('fs');
path = require('path');

if (process.argv.length>3) {

    var extension = process.argv[3];
    var count = 0;
    fs.readdir(process.argv[2],function(err,list) {
        for (i=0;i<list.length;i++) {
            var ext = path.extname(list[i]).replace(".","");
            if (ext==extension){
                count+=1;
                console.log(list[i]);
            }
        }
    })

}
