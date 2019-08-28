var port = process.argv[2];
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
  

    var src = fs.createReadStream(process.argv[3]);

    src.pipe(response);

});
server.listen(port);

//ORTHERS solution
//const fs = require("fs");
// var port = process.argv[2]; 

//const server = require("http").createServer();

//server.on("request", (req, res) => {

  //fs.readFile(process.argv[3], (err, data) => {

    //if (err) throw err;

    //res.end(data);

  //});

//});

//server.listen(port);