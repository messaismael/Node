var http = require('http');
var port = process.argv[2];

var map = require('through2-map');

var server = http.createServer(function(request, response){
    if(resquest !=='POST'){
        return respoonse.end('send me a PopState\n')
    }
        request.pipe(map(function(data){
            return (data).toString().toUpperCase(); //convert to string and to uppcase
        })).pipe(response)
});
server.listen(port);
 

//Correction of this challenge

//var http = require('http')
//var map = require('through2-map')

//var server = http.createServer(function (req, res) {
  //if (req.method !== 'POST') {
    //return res.end('send me a POST\n')
  //}

  //req.pipe(map(function (chunk) {
    //return chunk.toString().toUpperCase()
  //})).pipe(res)
//})

//server.listen(Number(process.argv[2]))
