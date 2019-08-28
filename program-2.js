var s = 0;
for( var i=2; i< process.argv.length; i++){ //début des entrée en i= 2
    // lecture des entrer dans le tableau
    var n = parseInt(process.argv[i]); //convertir chaque elément en réel

    s += n; //somme des entrées du tableau process.argv
}
console.log(s);