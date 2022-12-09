var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all',true);
request.send();
request.onload=function(){
var data=(request.response);
var result=JSON.parse(data)
// console.log(result);
var country=result.filter((element)=>element.currencies)
   var res1=country.filter((element)=>element.currencies[0].symbol=='$')
    var res2=res1.map((element)=>console.log(element.name))
 
}

// output:
// usd.js:10 American Samoa
// usd.js:10 Anguilla
// usd.js:10 Antigua and Barbuda
// usd.js:10 Argentina
// usd.js:10 Australia
// usd.js:10 Bahamas
// usd.js:10 Barbados
// usd.js:10 Belize
// usd.js:10 Bermuda
// usd.js:10 Bonaire, Sint Eustatius and Saba
// usd.js:10 British Indian Ocean Territory
// usd.js:10 Virgin Islands (British)
// usd.js:10 Virgin Islands (U.S.)
// usd.js:10 Brunei Darussalam
// usd.js:10 Canada
// usd.js:10 Cayman Islands
// usd.js:10 Chile
// usd.js:10 Christmas Island
// usd.js:10 Cocos (Keeling) Islands
// usd.js:10 Colombia
// usd.js:10 Cook Islands
// usd.js:10 Cuba
// usd.js:10 Dominica
// usd.js:10 Dominican Republic
// usd.js:10 Ecuador
// usd.js:10 El Salvador
// usd.js:10 Fiji
// usd.js:10 Grenada
// usd.js:10 Guam
// usd.js:10 Guyana
// usd.js:10 Heard Island and McDonald Islands
// usd.js:10 Hong Kong
// usd.js:10 Jamaica
// usd.js:10 Kiribati
// usd.js:10 Liberia
// usd.js:10 Marshall Islands
// usd.js:10 Mexico
// usd.js:10 Micronesia (Federated States of)
// usd.js:10 Montserrat
// usd.js:10 Namibia
// usd.js:10 Nauru
// usd.js:10 New Zealand
// usd.js:10 Niue
// usd.js:10 Norfolk Island
// usd.js:10 Northern Mariana Islands
// usd.js:10 Palau
// usd.js:10 Pitcairn
// usd.js:10 Puerto Rico
// usd.js:10 Saint Kitts and Nevis
// usd.js:10 Saint Lucia
// usd.js:10 Saint Vincent and the Grenadines
// usd.js:10 Singapore
// usd.js:10 Solomon Islands
// usd.js:10 Suriname
// usd.js:10 Taiwan
// usd.js:10 Timor-Leste
// usd.js:10 Tokelau
// usd.js:10 Trinidad and Tobago
// usd.js:10 Turks and Caicos Islands
// usd.js:10 Tuvalu
// usd.js:10 United States of America
// usd.js:10 Uruguay