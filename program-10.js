var port = process.argv[2];
var net = require('net');
function zero(i){ // ajout d un zéro devant les nombres constitué d un chiffre
//return (i < 10 ? '0': '')+ i 
//autre methode d'initialisation de la condition  <condition ? 'expression if true' : 'expression if false'>
    if(i<10){
        return '0'+ i
    }
    else{
        return i
    }
}

function now (){
    var d = new Date();        
    return d.getFullYear() +'-' 
        +zero(d.getMonth()+1) +'-'
        +zero(d.getDate())+ ' '
        +zero(d.getHours()) +':'
        +zero(d.getMinutes())  
   
}

var server = net.createServer(function (socket){
    socket.write(now() + '\n');
    socket.end();    
});
server.listen(port);