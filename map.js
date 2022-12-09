var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all',true);
request.send();
 request.onload=function(){
var data=(request.response);
var result=JSON.parse(data)
 var res1=result.filter((ele)=>ele.region=="Asia")
 console.log(res1);
var res3=result.map((ele=>ele.flags))
console.log(res3);
var res4=result.filter((ele)=>ele.population>200000)
console.log(res4);
 var res5=result.reduce((acc,cv)=>acc+cv.population,0)
 console.log(res5);
  var res6=result.forEach((element)=>{console.log(`${element.name.common}   ${element.capital}    ${element.region}   ${element.subregion}`)})
   
 }
 
// output:

// map.js:8 Array(50)
// map.js:10 Array(250)
// map.js:12 Array(188)
// map.js:14 7777721563
// map.js:15 Barbados   Bridgetown    Americas   Caribbean
// map.js:15 British Indian Ocean Territory   Diego Garcia    Africa   Eastern Africa
// map.js:15 Republic of the Congo   Brazzaville    Africa   Middle Africa
// map.js:15 Brazil   Brasília    Americas   South America
// map.js:15 Luxembourg   Luxembourg    Europe   Western Europe
// map.js:15 United States Virgin Islands   Charlotte Amalie    Americas   Caribbean
// map.js:15 Kiribati   South Tarawa    Oceania   Micronesia
// map.js:15 Romania   Bucharest    Europe   Southeast Europe
// map.js:15 Laos   Vientiane    Asia   South-Eastern Asia
// map.js:15 Malta   Valletta    Europe   Southern Europe
// map.js:15 Togo   Lomé    Africa   Western Africa
// map.js:15 Iraq   Baghdad    Asia   Western Asia
// map.js:15 Kenya   Nairobi    Africa   Eastern Africa
// map.js:15 Cayman Islands   George Town    Americas   Caribbean
// map.js:15 Guinea   Conakry    Africa   Western Africa
// map.js:15 United States   Washington, D.C.    Americas   North America
// map.js:15 Tunisia   Tunis    Africa   Northern Africa
// map.js:15 Bolivia   Sucre    Americas   South America
// map.js:15 China   Beijing    Asia   Eastern Asia
// map.js:15 South Korea   Seoul    Asia   Eastern Asia
// map.js:15 Kuwait   Kuwait City    Asia   Western Asia
// map.js:15 Algeria   Algiers    Africa   Northern Africa
// map.js:15 Aruba   Oranjestad    Americas   Caribbean
// map.js:15 Russia   Moscow    Europe   Eastern Europe
// map.js:15 Denmark   Copenhagen    Europe   Northern Europe
// map.js:15 Lithuania   Vilnius    Europe   Northern Europe
// map.js:15 United Kingdom   London    Europe   Northern Europe
// map.js:15 Estonia   Tallinn    Europe   Northern Europe
// map.js:15 Taiwan   Taipei    Asia   Eastern Asia
// map.js:15 Canada   Ottawa    Americas   North America
// map.js:15 Fiji   Suva    Oceania   Melanesia
// map.js:15 French Polynesia   Papeetē    Oceania   Polynesia
// map.js:15 Peru   Lima    Americas   South America
// map.js:15 Australia   Canberra    Oceania   Australia and New Zealand
// map.js:15 Chile   Santiago    Americas   South America
// map.js:15 Mayotte   Mamoudzou    Africa   Eastern Africa
// map.js:15 Egypt   Cairo    Africa   Northern Africa
// map.js:15 Puerto Rico   San Juan    Americas   Caribbean
// map.js:15 North Macedonia   Skopje    Europe   Southeast Europe
// map.js:15 Bangladesh   Dhaka    Asia   Southern Asia
// map.js:15 Saint Martin   Marigot    Americas   Caribbean
// map.js:15 Singapore   Singapore    Asia   South-Eastern Asia
// map.js:15 Gabon   Libreville    Africa   Middle Africa
// map.js:15 Portugal   Lisbon    Europe   Southern Europe
// map.js:15 Ethiopia   Addis Ababa    Africa   Eastern Africa
// map.js:15 Bahamas   Nassau    Americas   Caribbean
// map.js:15 Vatican City   Vatican City    Europe   Southern Europe
// map.js:15 Burkina Faso   Ouagadougou    Africa   Western Africa
// map.js:15 Turkmenistan   Ashgabat    Asia   Central Asia
// map.js:15 Northern Mariana Islands   Saipan    Oceania   Micronesia
// map.js:15 Sint Maarten   Philipsburg    Americas   Caribbean
// map.js:15 Zambia   Lusaka    Africa   Eastern Africa
// map.js:15 Honduras   Tegucigalpa    Americas   Central America
// map.js:15 Morocco   Rabat    Africa   Northern Africa
// map.js:15 Nepal   Kathmandu    Asia   Southern Asia
// map.js:15 Antigua and Barbuda   Saint John's    Americas   Caribbean
// map.js:15 Oman   Muscat    Asia   Western Asia
// map.js:15 Hong Kong   City of Victoria    Asia   Eastern Asia
// map.js:15 Greenland   Nuuk    Americas   North America
// map.js:15 Paraguay   Asunción    Americas   South America
// map.js:15 Moldova   Chișinău    Europe   Eastern Europe
// map.js:15 New Caledonia   Nouméa    Oceania   Melanesia
// map.js:15 Kyrgyzstan   Bishkek    Asia   Central Asia
// map.js:15 Mauritius   Port Louis    Africa   Eastern Africa
// map.js:15 Bhutan   Thimphu    Asia   Southern Asia
// map.js:15 Central African Republic   Bangui    Africa   Middle Africa
// map.js:15 Saint Barthélemy   Gustavia    Americas   Caribbean
// map.js:15 Cyprus   Nicosia    Europe   Southern Europe
// map.js:15 Réunion   Saint-Denis    Africa   Eastern Africa
// map.js:15 Chad   N'Djamena    Africa   Middle Africa
// map.js:15 Greece   Athens    Europe   Southern Europe
// map.js:15 Montserrat   Plymouth    Americas   Caribbean
// map.js:15 Yemen   Sana'a    Asia   Western Asia
// map.js:15 Isle of Man   Douglas    Europe   Northern Europe
// map.js:15 Dominican Republic   Santo Domingo    Americas   Caribbean
// map.js:15 Guernsey   St. Peter Port    Europe   Northern Europe
// map.js:15 Liberia   Monrovia    Africa   Western Africa
// map.js:15 Zimbabwe   Harare    Africa   Southern Africa
// map.js:15 Guadeloupe   Basse-Terre    Americas   Caribbean
// map.js:15 Uganda   Kampala    Africa   Eastern Africa
// map.js:15 Vanuatu   Port Vila    Oceania   Melanesia
// map.js:15 United States Minor Outlying Islands   Washington DC    Americas   North America
// map.js:15 Palestine   Ramallah,Jerusalem    Asia   Western Asia
// map.js:15 Pakistan   Islamabad    Asia   Southern Asia
// map.js:15 Heard Island and McDonald Islands   undefined    Antarctic   undefined
// map.js:15 India   New Delhi    Asia   Southern Asia
// map.js:15 Brunei   Bandar Seri Begawan    Asia   South-Eastern Asia
// map.js:15 United Arab Emirates   Abu Dhabi    Asia   Western Asia
// map.js:15 Ecuador   Quito    Americas   South America
// map.js:15 Georgia   Tbilisi    Asia   Western Asia
// map.js:15 Guam   Hagåtña    Oceania   Micronesia
// map.js:15 Seychelles   Victoria    Africa   Eastern Africa
// map.js:15 Falkland Islands   Stanley    Americas   South America
// map.js:15 Gibraltar   Gibraltar    Europe   Southern Europe
// map.js:15 Solomon Islands   Honiara    Oceania   Melanesia
// map.js:15 Uzbekistan   Tashkent    Asia   Central Asia
// map.js:15 Mongolia   Ulan Bator    Asia   Eastern Asia
// map.js:15 Guyana   Georgetown    Americas   South America
// map.js:15 Bosnia and Herzegovina   Sarajevo    Europe   Southeast Europe
// map.js:15 Tonga   Nuku'alofa    Oceania   Polynesia
// map.js:15 France   Paris    Europe   Western Europe
// map.js:15 Slovenia   Ljubljana    Europe   Central Europe
// map.js:15 Rwanda   Kigali    Africa   Eastern Africa
// map.js:15 Bulgaria   Sofia    Europe   Southeast Europe
// map.js:15 Timor-Leste   Dili    Asia   South-Eastern Asia
// map.js:15 Nigeria   Abuja    Africa   Western Africa
// map.js:15 South Georgia   King Edward Point    Antarctic   undefined
// map.js:15 Nauru   Yaren    Oceania   Micronesia
// map.js:15 Faroe Islands   Tórshavn    Europe   Northern Europe
// map.js:15 American Samoa   Pago Pago    Oceania   Polynesia
// map.js:15 Lesotho   Maseru    Africa   Southern Africa
// map.js:15 Montenegro   Podgorica    Europe   Southeast Europe
// map.js:15 Cape Verde   Praia    Africa   Western Africa
// map.js:15 Cameroon   Yaoundé    Africa   Middle Africa
// map.js:15 North Korea   Pyongyang    Asia   Eastern Asia
// map.js:15 Cuba   Havana    Americas   Caribbean
// map.js:15 Suriname   Paramaribo    Americas   South America
// map.js:15 New Zealand   Wellington    Oceania   Australia and New Zealand
// map.js:15 Mexico   Mexico City    Americas   North America
// map.js:15 Marshall Islands   Majuro    Oceania   Micronesia
// map.js:15 Philippines   Manila    Asia   South-Eastern Asia
// map.js:15 Sweden   Stockholm    Europe   Northern Europe
// map.js:15 Bouvet Island   undefined    Antarctic   undefined
// map.js:15 Jamaica   Kingston    Americas   Caribbean
// map.js:15 Venezuela   Caracas    Americas   South America
// map.js:15 Jersey   Saint Helier    Europe   Northern Europe
// map.js:15 Afghanistan   Kabul    Asia   Southern Asia
// map.js:15 Macau   undefined    Asia   Eastern Asia
// map.js:15 Åland Islands   Mariehamn    Europe   Northern Europe
// map.js:15 Syria   Damascus    Asia   Western Asia
// map.js:15 São Tomé and Príncipe   São Tomé    Africa   Middle Africa
// map.js:15 Switzerland   Bern    Europe   Western Europe
// map.js:15 San Marino   City of San Marino    Europe   Southern Europe
// map.js:15 Eswatini   Mbabane    Africa   Southern Africa
// map.js:15 Saint Vincent and the Grenadines   Kingstown    Americas   Caribbean
// map.js:15 Malaysia   Kuala Lumpur    Asia   South-Eastern Asia
// map.js:15 Germany   Berlin    Europe   Western Europe
// map.js:15 Poland   Warsaw    Europe   Central Europe
// map.js:15 Grenada   St. George's    Americas   Caribbean
// map.js:15 South Sudan   Juba    Africa   Middle Africa
// map.js:15 Belgium   Brussels    Europe   Western Europe
// map.js:15 Cambodia   Phnom Penh    Asia   South-Eastern Asia
// map.js:15 Sri Lanka   Sri Jayawardenepura Kotte    Asia   Southern Asia
// map.js:15 Ivory Coast   Yamoussoukro    Africa   Western Africa
// map.js:15 Ghana   Accra    Africa   Western Africa
// map.js:15 Eritrea   Asmara    Africa   Eastern Africa
// map.js:15 Belize   Belmopan    Americas   Central America
// map.js:15 Christmas Island   Flying Fish Cove    Oceania   Australia and New Zealand
// map.js:15 Equatorial Guinea   Malabo    Africa   Middle Africa
// map.js:15 Trinidad and Tobago   Port of Spain    Americas   Caribbean
// map.js:15 Cook Islands   Avarua    Oceania   Polynesia
// map.js:15 Mali   Bamako    Africa   Western Africa
// map.js:15 Saint Helena, Ascension and Tristan da Cunha   Jamestown    Africa   Western Africa
// map.js:15 Cocos (Keeling) Islands   West Island    Oceania   Australia and New Zealand
// map.js:15 Mozambique   Maputo    Africa   Eastern Africa
// map.js:15 Iran   Tehran    Asia   Southern Asia
// map.js:15 DR Congo   Kinshasa    Africa   Middle Africa
// map.js:15 Palau   Ngerulmud    Oceania   Micronesia
// map.js:15 Maldives   Malé    Asia   Southern Asia
// map.js:15 Benin   Porto-Novo    Africa   Western Africa
// map.js:15 Jordan   Amman    Asia   Western Asia
// map.js:15 Monaco   Monaco    Europe   Western Europe
// map.js:15 Mauritania   Nouakchott    Africa   Western Africa
// map.js:15 Czechia   Prague    Europe   Central Europe
// map.js:15 Belarus   Minsk    Europe   Eastern Europe
// map.js:15 Albania   Tirana    Europe   Southeast Europe
// map.js:15 Malawi   Lilongwe    Africa   Eastern Africa
// map.js:15 Somalia   Mogadishu    Africa   Eastern Africa
// map.js:15 Serbia   Belgrade    Europe   Southeast Europe
// map.js:15 Iceland   Reykjavik    Europe   Northern Europe
// map.js:15 Samoa   Apia    Oceania   Polynesia
// map.js:15 Myanmar   Naypyidaw    Asia   South-Eastern Asia
// map.js:15 Thailand   Bangkok    Asia   South-Eastern Asia
// map.js:15 Lebanon   Beirut    Asia   Western Asia
// map.js:15 Latvia   Riga    Europe   Northern Europe
// map.js:15 Kazakhstan   Nur-Sultan    Asia   Central Asia
// map.js:15 Martinique   Fort-de-France    Americas   Caribbean
// map.js:15 Pitcairn Islands   Adamstown    Oceania   Polynesia
// map.js:15 Tuvalu   Funafuti    Oceania   Polynesia
// map.js:15 Hungary   Budapest    Europe   Central Europe
// map.js:15 Svalbard and Jan Mayen   Longyearbyen    Europe   Northern Europe
// map.js:15 Comoros   Moroni    Africa   Eastern Africa
// map.js:15 Israel   Jerusalem    Asia   Western Asia
// map.js:15 Sudan   Khartoum    Africa   Northern Africa
// map.js:15 Armenia   Yerevan    Asia   Western Asia
// map.js:15 Uruguay   Montevideo    Americas   South America
// map.js:15 British Virgin Islands   Road Town    Americas   Caribbean
// map.js:15 Saudi Arabia   Riyadh    Asia   Western Asia
// map.js:15 Dominica   Roseau    Americas   Caribbean
// map.js:15 Tokelau   Fakaofo    Oceania   Polynesia
// map.js:15 Burundi   Gitega    Africa   Eastern Africa
// map.js:15 Ukraine   Kyiv    Europe   Eastern Europe
// map.js:15 Austria   Vienna    Europe   Central Europe
// map.js:15 Sierra Leone   Freetown    Africa   Western Africa
// map.js:15 Bermuda   Hamilton    Americas   North America
// map.js:15 Namibia   Windhoek    Africa   Southern Africa
// map.js:15 Netherlands   Amsterdam    Europe   Western Europe
// map.js:15 Kosovo   Pristina    Europe   Southeast Europe
// map.js:15 Haiti   Port-au-Prince    Americas   Caribbean
// map.js:15 Spain   Madrid    Europe   Southern Europe
// map.js:15 Ireland   Dublin    Europe   Northern Europe
// map.js:15 Libya   Tripoli    Africa   Northern Africa
// map.js:15 Papua New Guinea   Port Moresby    Oceania   Melanesia
// map.js:15 Saint Lucia   Castries    Americas   Caribbean
// map.js:15 Norfolk Island   Kingston    Oceania   Australia and New Zealand
// map.js:15 Angola   Luanda    Africa   Middle Africa
// map.js:15 Indonesia   Jakarta    Asia   South-Eastern Asia
// map.js:15 Norway   Oslo    Europe   Northern Europe
// map.js:15 Argentina   Buenos Aires    Americas   South America
// map.js:15 Panama   Panama City    Americas   Central America
// map.js:15 Japan   Tokyo    Asia   Eastern Asia
// map.js:15 El Salvador   San Salvador    Americas   Central America
// map.js:15 Andorra   Andorra la Vella    Europe   Southern Europe
// map.js:15 Niger   Niamey    Africa   Western Africa
// map.js:15 Nicaragua   Managua    Americas   Central America
// map.js:15 Wallis and Futuna   Mata-Utu    Oceania   Polynesia
// map.js:15 Italy   Rome    Europe   Southern Europe
// map.js:15 Saint Pierre and Miquelon   Saint-Pierre    Americas   North America
// map.js:15 Guinea-Bissau   Bissau    Africa   Western Africa
// map.js:15 Tanzania   Dodoma    Africa   Eastern Africa
// map.js:15 Slovakia   Bratislava    Europe   Central Europe
// map.js:15 French Southern and Antarctic Lands   Port-aux-Français    Antarctic   undefined
// map.js:15 Finland   Helsinki    Europe   Northern Europe
// map.js:15 Liechtenstein   Vaduz    Europe   Western Europe
// map.js:15 Tajikistan   Dushanbe    Asia   Central Asia
// map.js:15 Guatemala   Guatemala City    Americas   Central America
// map.js:15 Turks and Caicos Islands   Cockburn Town    Americas   Caribbean
// map.js:15 Antarctica   undefined    Antarctic   undefined
// map.js:15 Bahrain   Manama    Asia   Western Asia
// map.js:15 Madagascar   Antananarivo    Africa   Eastern Africa
// map.js:15 Western Sahara   El Aaiún    Africa   Northern Africa
// map.js:15 Micronesia   Palikir    Oceania   Micronesia
// map.js:15 South Africa   Pretoria,Bloemfontein,Cape Town    Africa   Southern Africa
// map.js:15 Caribbean Netherlands   Kralendijk    Americas   Caribbean
// map.js:15 Djibouti   Djibouti    Africa   Eastern Africa
// map.js:15 Senegal   Dakar    Africa   Western Africa
// map.js:15 Gambia   Banjul    Africa   Western Africa
// map.js:15 Botswana   Gaborone    Africa   Southern Africa
// map.js:15 French Guiana   Cayenne    Americas   South America
// map.js:15 Saint Kitts and Nevis   Basseterre    Americas   Caribbean
// map.js:15 Turkey   Ankara    Asia   Western Asia
// map.js:15 Azerbaijan   Baku    Asia   Western Asia
// map.js:15 Costa Rica   San José    Americas   Central America
// map.js:15 Curaçao   Willemstad    Americas   Caribbean
// map.js:15 Vietnam   Hanoi    Asia   South-Eastern Asia
// map.js:15 Croatia   Zagreb    Europe   Southeast Europe
// map.js:15 Niue   Alofi    Oceania   Polynesia
// map.js:15 Anguilla   The Valley    Americas   Caribbean
// map.js:15 Qatar   Doha    Asia   Western Asia
// map.js:15 Colombia   Bogotá    Americas   South America