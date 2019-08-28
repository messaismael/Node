module.exports = function(dir, ext, callback){
  
var path = require('path');

var fs = require('fs');

  fs.readdir(dir, function (err, list){

    if(err){ 

      return callback(err); 
    }
    list.forEach(function (file) {           //lister les fichiers présent dans le dossier

        list = list.filter(function(file){   //filtrer les fichiers qui ont l'extention requis 

            return path.extname(file) ==='.'+ ext;
        });
    });
    callback(null, list);    //pas d erreur le premier argument 'err'=='null'
  });
  
}

