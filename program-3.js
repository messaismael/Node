var fs = require('fs');
// faire appel au module fs.
var buf = fs.readFileSync(process.argv[2],'utf8'); 
// entrer le fichier grace à 'process.argv', codage du fichier 'utf8'
var lines = buf.split('\n');
// decoupe le tableau ligne par ligne sans les sauts de lignes

console.log(lines.length-1);