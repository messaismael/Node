var site = process.argv[2]; 

var http = require('http');

var number = 0;
var sol = '';
var req = http.get( site, function callback (response){

    response.setEncoding('utf8');  

    response.on('data', function(data) {
        number += data.length;
        sol += data;
    });
    response.on('error', function(err){
        console.log('Got error :'+ err.message)
    });
    response.on('end', function(end){
        console.log(number);
        console.log(sol);
    });
    
});  
    req.on('error', function(err){
        console.log('Got error :'+ err.message)
    });
    req.end();
    
// CORRECTION FO THIS CHALLENGE

//   var http = require('http')
// var bl = require('bl')
//   http.get(process.argv[2], function (response) {
//     response.pipe(bl(function (err, data) {
//      if (err) {
//         return console.error(err)
//       }
//      data = data.toString()
//       console.log(data.length)
//       console.log(data)
//     }))
//   })


    
  



