var Mymodule = require('./module');
var dir = process.argv[2];
var extention = process.argv[3];
Mymodule( dir, extention, function(err, list){
    if (err){
        return console.error('Error :',err);
    }
    list.forEach(function(file) {
        console.log(file);    
    });
    
});


