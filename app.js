//////
//GLOBAL DECLARATION STUFF
//////
var countryname = process.argv[2] //deze command geeft de input van de tweede positie in de terminal
var fs = require ( 'fs' ) //fs = filesheet - variable fs is de module --> require filesystem module. (om in een file te readen)
//var modulenaam = require ('padnaarmodule zoals bij readfile')

////////
//FUNCTION THAT READS AND LOOPS JSON COUTNRY file
///////
fs.readFile( './countries.json', function ( error, filedata) { //in de module gebruik ik de functie ReadFile
  //make sure errors are visible in console
  if (error ) {
    console.log ( "Something is up! Details: " + error )
    throw error
  }
  //store our file data in var as json

  var jsondata = JSON.parse ( filedata ) //<-- PARSEN
  //console.log ( jsondata ) //<-- PARSEN

  /////////////
  ///LOOPS THROUGH THE JSON FILE TO MATCH COUNTRY PARAMETER
  ////////////
  jsondata.forEach ( function ( country ) {
    if ( country.name == countryname ) {

      //possibly clients wants to output all info?
      console.log ( 'Country: ' + country.name )
      console.log( 'Top level domain: ' + country.topLevelDomain ) //The tld field is an array and may contain more
      //console.log( 'capital :' + country.capital)
    }
  })
})
