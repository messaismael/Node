var directory = process.argv[2];
var extention = '.' + process.argv[3];
var path = require('path'); 
var fs = require('fs');
  
fs.readdir(directory, function callback(err, list){
    for(var i=0; i < list.length; i++){           //lister les fichiers présent dans le dossier
        if(path.extname(list[i]) === extention){   //afficher les fichiers qui ont  l'extention requis 
            console.log(list[i]);
          }
      }
        
  });
  