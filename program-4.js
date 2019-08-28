var fs = require('fs');

var contenu = fs.readFile( process.argv[2],'utf8',function(err, buf){

    var lines = buf.split('\n');
    console.log(lines.length-1);

    })
    