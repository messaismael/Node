var http = require('http');
var url = require('url');
 var server = http.createServer(function(request, response){
      url = url.parse(request.url, true);
      time = url.query.iso
      par = Date.parse(time);
      console.log(par);
 });
 server.listen(+process.argv[2]);