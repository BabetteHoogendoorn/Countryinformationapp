var FR = require('./apart.js');
var countryname = process.argv[2]

console.log(countryname); //was een test

FR.keutel( './countries.json', function(koekwous){ //om callbackfunctie vragen -- koekwous kan ook 'jsondata' zijn, gaat er om dat het wordt.  benoemd. het gene dat gelezen is heet koekwous en is parameter van functie.
  koekwous.forEach ( function ( country ) { //loop voor het gene dat gelezen is. (genaamd koekwous)
    if ( country.name == countryname ) {
      console.log ( 'Country: ' + country.name )
      console.log( 'Top level domain: ' + country.topLevelDomain )
//  console.log(jsondata);
    }
    console.log("Niks gevonden")
  });
});
