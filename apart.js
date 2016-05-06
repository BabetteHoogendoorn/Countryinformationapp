var fs = require ( 'fs' ); //de variable fs is vanaf nu de module . require: variable fs heeft de module nodig.

function FileReader ( filename, callback ) {
  fs.readFile( filename, function ( error, filedata) {
    if (error) {
      console.log("helaas error" + error);
    }
     var jsondata = JSON.parse ( filedata );
     callback(jsondata);
  })
}
  module.exports = { //functie beschikbaar maken buiten deze app
    keutel: FileReader
  } //kun je ook noteren als object om er meerder functies mee te exporteren
