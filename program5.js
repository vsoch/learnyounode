
var ls = require('./mymodule.js');

dirname = process.argv[2];
extension = process.argv[3];

ls(dirname, extension, function(err, data){
  if (err) {
    throw err;
  }
  console.log(data.join('\n')); 
});
