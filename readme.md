<p style="margin-bottom: 0px"><b>In Node.js</b>
  <br>
  <span style="margin-bottom: 0px">&ensp;var mavenGeo =
  require('dialectica_geography');</span>
</p>

<p style="margin-bottom: 0px"><b>In html</b><br>&ensp;mavenGeography.js is in dist folder minified version
  <br>
  <span style="margin-bottom: 0px">&ensp;&lt;script src=&quot;./your
  path/mavenGeography.js&quot;&gt;&lt;/script&gt;</span>
</p>

<p style="margin-bottom: 0px"><b>In ES6</b>
  <br>
  <span style="margin-bottom: 0px">&ensp;import mavenGeo from
  &quot;dialectica_geography&quot;;</span>
</p>
<hr></hr>
<p align="center" style="margin-bottom: 0px"><b>List of Tools for countries and
  Continents</b></p>
<p style="margin-bottom: 0in;color: blue"><b>Find tools:</b></p>
<p style="margin-bottom: 0px"><b>Get list of countries names
(Afghanistan, Albania, etc...)</b>
  <br>
  <span>&ensp;mavenGeo.getListOfNamesCountries()</span>
</p>

<p style="margin-bottom: 0px"><b>Get list of Continents (Europe, North
America, etc...)</b>
  <br>
  <span>&ensp;mavenGeo.getListOfContinents()</span>
</p>

<p style="margin-bottom: 0px"><b>Get short Name of Country (AF, BH, etc..)</b>
  <br>
  <span>&ensp;mavenGeo.getNameShort("name of country")</span>
</p>

<p style="margin-bottom: 0px"><b>Get Capital Name of Country</b>
  <br>
  <span>&ensp;mavenGeo.getCapital("name of country")</span>
</p>

<p style="margin-bottom: 0px"><b>Get Continent of Country</b>
  <br>
  <span>&ensp;mavenGeo.getContinent("name of country")</span>
</p>

<p style="margin-bottom: 0px"><b>Get Dial code of Country</b>
  <br>
  <span>&ensp;mavenGeo.getDial("name of country")</span>
</p>

<p style="margin-bottom: 0px"><b>Get Currency code of Country</b>
  <br>
  <span>&ensp;mavenGeo.getCurrencyCode("name of country")</span>
</p>


<p style="margin-bottom: 0px"><b>Get Currency name of Country</b>
  <br>
  <span>&ensp;mavenGeo.getCurrencyName("name of country")</span>
</p>

<p style="margin-bottom: 0px"><b>Get Geoname ID  of Country</b>
  <br>
  <span>&ensp;mavenGeo.getGeonameID("name of country")</span>
</p>


<p style="margin-bottom: 0px"><b>Get country name  from Country short name</b>
  <br>
  &ensp;For example Greece is the country name for short name 'GR'
  <br>
  <span>&ensp;mavenGeo.getCountryFromShortName(" short name of country")</span>
</p>


<p style="margin-bottom: 0px"><b>Get geolocation from ip</b>
  <br>
  <span>&ensp;mavenGeo.getGeolocationJsonFromIp("globalObject", ip)</span>
  <br>
  &ensp;globalObject values are: "window", "node", "local".
  <br>
  &ensp;When testing from localHost we choose globalObject local to avoid
  <br>
  &ensp;Cors errors => response header Origin: null
  <br>
  &ensp;Above function returns a promise.
  <br>
  &ensp;Example:
  <br>
  ```javascript
    let data = await mavenGeo.getGeolocationJsonFromIp("local", "10.0.0.0");
    //We can use also .then(function(res) {})
    //Then we use the function fetchGeolocationFromJson(data) to get location
    let test = mavenGeo.fetchGeolocationFromJson(data);
    console.log(test);
    //The result is for example "52.37559917665907 4.888916015625"
  ```  
</p>

<p style="margin-bottom: 0px"><b>Get country short name  from ip</b>
  <br>
  <span>&ensp;mavenGeo.getCountryJsonFromIp("globalObject", ip)</span>
  <br>
  &ensp;globalObject values are: "window", "node", "local".
  <br>
  &ensp;When testing from localHost we choose globalObject local to avoid
  <br>
  &ensp;Cors errors => response header Origin: null
  <br>
  &ensp;Above function returns a promise.
  <br>
  &ensp;Example:
  <br>
  ```javascript
    let data = await mavenGeo.getCountryJsonFromIp("local", "10.0.0.0");
    //We can use also .then(function(res) {})
    //Then we use the function fetchCountryFromJson(data) to get short name
    let test = mavenGeo.fetchCountryFromJson(data);
    console.log(test);
    //The result is for example "GR".
  ```
</p>

<hr></hr>
<p style="margin-bottom: 0px"><b>Check tools:</b></p>
<p style="margin-bottom: 0px"><b>Check if country belongs to Continent</b>
  <br>
  <span>&ensp;mavenGeo.isContinent("name of
  country", "continent name")</span>
</p>


<p style="margin-bottom: 0px"><b>Check if country belongs to APAC</b>
  <br>
  <span>&ensp;mavenGeo.isApac("name of country")</span>
</p>

<p style="margin-bottom: 0px"><b>Check if country belongs to Nordigs</b>
  <br>
  <span>&ensp;mavenGeo.isNordigs("name of country")</span>
</p>

<p style="margin-bottom: 0px"><b>Check if country belongs to DACH</b>
  <br>
  <span>&ensp;mavenGeo.isDach("name of country")</span>
</p>

<p style="margin-bottom: 0px"><b>Check if country belongs to Benelux</b>
  <br>
  <span>&ensp;mavenGeo.isBenelux("name of country")</span>
</p>

<p style="margin-bottom: 0px"><br/>
