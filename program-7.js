var site = process.argv[2]; 

var http = require('http');

var req = http.get( site, function callback (response){

    response.setEncoding('utf8');  // permet d'avoir des strings au data. 

    response.on('data', function(data) { 
        
        console.log( data);
        });
});  

    req.on('error', function(err){

        console.log('Got error :'+ err.message)

    });

    // CORRECTION OF THIS CHALLENGE

    // var http = require('http')
    
    // http.get(process.argv[2], function (response) {
    //  response.setEncoding('utf8')
    //  response.on('data', console.log)
    //  response.on('error', console.error)
    // }).on('error', console.error)

