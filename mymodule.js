

fs = require('fs');
path = require('path');

function ls(dirname, extension, callback) {
    
    fs.readdir(dirname,function(err,list) {
        if (err) {
            return callback(err,null);
        }

        var files = [];
        for (i=0;i<list.length;i++) {
            var ext = path.extname(list[i]).replace(".","");
            if (ext==extension){
                files.push(list[i]);
            }
        }
        return callback(null,files);
    })

}

module.exports = ls;
