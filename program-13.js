var http = require('http');
var url = require('url');
var port = process.argv[2];

//print hours-minute-second
function printtime(time){
    var d = new Date(partime(time));
    return{ 
        'hour':d.getHours(),
        'minute':d.getMinutes(),
        'second':d.getSeconds()
    }
}
// returns UNIX epoch time in milliseconds
function printunixtime(time){
    return{
        unixtime :partime(time) 
    }
}
//parsed time of query
function partime(time){
    return Date.parse(time)
}


var server = http.createServer(function(request, response){
    url = url.parse(request.url, true);
    path = url.pathname; // acces to the pathname
    time = url.query.iso // acces to the key iso
    if(path === '/api/parsetime'){
        result = printtime(time);
    }
    else if(path === '/api/unixtime'){
        result = printunixtime(time);
    }
    if(result){
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(result)); 
    }
    else{
        response.write(404);
        response.end();
    }

});
server.listen(port);