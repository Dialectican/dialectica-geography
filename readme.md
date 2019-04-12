<p style="margin-bottom: 0px"><b>In Node.js</b></p>
<p style="margin-bottom: 0px">var mavenGeo =
require('dialectica_geography');</p>

<p style="margin-bottom: 0px"><b>In html</b><br>mavenGeography.js is in dist folder minified version</p>

<p style="margin-bottom: 0px">&lt;script src=&quot;./your
path/mavenGeography.js&quot;&gt;&lt;/script&gt;</p>

<p style="margin-bottom: 0px"><b>In ES6</b></p>
<p style="margin-bottom: 0px">import mavenGeo from
&quot;dialectica_geography&quot;;</p>
<hr></hr>
<p align="center" style="margin-bottom: 0px"><b>List of Tools for countries and
  Continents</b></p>
<p style="margin-bottom: 0in;color: blue"><b>Find tools:</b></p>
<p style="margin-bottom: 0px"><b>Get list of countries names
(Afghanistan, Albania, etc...)</b></p>
<p style="margin-bottom: 0px">mavenGeo.getListOfNamesCountries()</p>

<p style="margin-bottom: 0px"><b>Get list of Continents (Europe, North
America, etc...)</b></p>
<p style="margin-bottom: 0px">mavenGeo.getListOfContinents()</p>

<p style="margin-bottom: 0px"><b>Get short Name of Country (AF, BH,
etc..)</b></p>
<p style="margin-bottom: 0px">mavenGeo.getNameShort("name of
country")</p>

<p style="margin-bottom: 0px"><b>Get Capital Name of Country</b></p>
<p style="margin-bottom: 0px">mavenGeo.getCapital("name of
country")</p>

<p style="margin-bottom: 0px"><b>Get Continent of Country
</b></p>
<p style="margin-bottom: 0px">mavenGeo.getContinent("name of
country")</p>

<p style="margin-bottom: 0px"><b>Get Dial code of Country
</b></p>
<p style="margin-bottom: 0px">mavenGeo.getDial("name of country")</p>

<p style="margin-bottom: 0px"><b>Get Currency code of Country
</b></p>
<p style="margin-bottom: 0px">mavenGeo.getCurrencyCode("name of
country")</p>

<p style="margin-bottom: 0px"><b>Get Currency name of Country
</b></p>
<p style="margin-bottom: 0px">mavenGeo.getCurrencyName("name of
country")</p>

<p style="margin-bottom: 0px"><b>Get Geoname ID  of Country
</b></p>
<p style="margin-bottom: 0px">mavenGeo.getCurrencyName("name of
country")</p>

<p style="margin-bottom: 0px"><b>Get country name  from Country short name</b>
<br>
For example Greece is the country name for short name 'GR'
</p>
<p style="margin-bottom: 0px">mavenGeo.getCountryFromShortName(" short name of
country")</p>

<p style="margin-bottom: 0px"><b>Get geolocation from ip</b></p>
<p style="margin-bottom: 0px">mavenGeo.getGeolocationJsonFromIp("globalObject", ip)
<br>
globalObject values are: "window", "node", "local".
<br>
When testing from localHost we choose globalObject local to avoid
Cors errors => response header Origin: null
<br>
Above function returns a promise.
<br>
Example:
<br>
  let data = await mavenGeo.getGeolocationJsonFromIp("local", "10.0.0.0");
  <br>
  We can use also .then(function(res) {})
  <br>
  Then we use the function fetchGeolocationFromJson(data) to get location
  <br>
  let test = mavenGeo.fetchGeolocationFromJson(data);
  <br>
  console.log(test);
  <br>
  The result is for example "52.37559917665907 4.888916015625"
</p>

<p style="margin-bottom: 0px"><b>Get country short name  from ip</b></p>
<p style="margin-bottom: 0px">mavenGeo.getCountryJsonFromIp("globalObject", ip)
<br>
globalObject values are: "window", "node", "local".
<br>
When testing from localHost we choose globalObject local to avoid
Cors errors => response header Origin: null
<br>
Above function returns a promise.
<br>
Example:
<br>
  let data = await mavenGeo.getCountryJsonFromIp("local", "10.0.0.0");
  <br>
  We can use also .then(function(res) {})
  <br>
  Then we use the function fetchCountryFromJson(data) to get short name
  <br>
  let test = mavenGeo.fetchCountryFromJson(data);
  <br>
  console.log(test);
  <br>
  The result is for example "GR".
</p>

<hr></hr>
<p style="margin-bottom: 0px"><b>Check tools:</b></p>
<p style="margin-bottom: 0px"><b>Check if country belongs to Continent</b></p>
<p style="margin-bottom: 0px">mavenGeo.isContinent("name of
country", "continent name")</p>

<p style="margin-bottom: 0px"><b>Check if country belongs to APAC</b></p>
<p style="margin-bottom: 0px">mavenGeo.isApac("name of country")</p>

<p style="margin-bottom: 0px"><b>Check if country belongs to Nordigs</b></p>
<p style="margin-bottom: 0px">mavenGeo.isNordigs("name of country")</p>

<p style="margin-bottom: 0px"><b>Check if country belongs to DACH</b></p>
<p style="margin-bottom: 0px">mavenGeo.isDach("name of country")</p>

<p style="margin-bottom: 0px"><b>Check if country belongs to Benelux</b></p>
<p style="margin-bottom: 0px">mavenGeo.isBenelux("name of country")</p>

<p style="margin-bottom: 0px"><br/>
