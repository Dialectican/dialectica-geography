# Installation
```sh
  npm i dialectica_geography
```

## Usage example
#### In Node
```sh
var mavenGeo = require('dialectica_geography');
```
#### In Html

mavenGeography.js is in dist folder minified version
```sh
 <script src="./your path/mavenGeography.js"></script>
```  
#### In ES6
```sh
 import mavenGeo from "dialectica_geography";
```  
## List of Tools for countries and Continents

### Find tools:
#### Get list of countries names (Afghanistan, Albania, etc...)
```sh
 mavenGeo.getListOfNamesCountries();
```  

#### Get list of Continents (Europe, North, America, etc...)
```sh
 mavenGeo.getListOfContinents();
```  

#### Get short Name of Country (AF, BH, etc..)
```sh
 mavenGeo.getNameShort("name of country");
```  

#### Get Capital Name of Country
```sh
 mavenGeo.getCapital("name of country");
```  

#### Get Continent of Country
```sh
 mavenGeo.getContinent("name of country");
```  

#### Get Dial code of Country
```sh
 mavenGeo.getDial("name of country");
```  

#### Get Currency code of Country
```sh
 mavenGeo.getCurrencyCode("name of country");
```  

#### Get Currency name of Country
```sh
 mavenGeo.getCurrencyName("name of country");
```  

#### Get Total area of Country
```sh
 mavenGeo.getTotalArea("name of country");
```  

#### Get Geoname ID  of Country
```sh
 mavenGeo.getGeonameID("name of country");
```  

#### Get country name  from Country short name
For example Greece is the country name for short name 'GR'.
```sh
 mavenGeo.getCountryFromShortName("short name of country");
```  

#### Show country flag
Works only on browser environment not in node.js.
```sh
 mavenGeo.showCountryFlag('element to show', 'short name of country');
```  
##### Example:
```js
  //Suppose in html we have the element
  <img id='imgId'/>

  let element = document.getElementById('imgId');
  //or jquery
  let element = $('#imgId');
  //Country to show flag Greece. Short name of Greece is 'gr'
  mavenGeo.showCountryFlag(element, 'gr');
```  

#### Get geolocation from ip
```sh
 mavenGeo.getGeolocationJsonFromIp("globalObject", ip);
```  
globalObject values are: "window", "node", "local".

When testing from localHost and library is loaded as a script for example

```sh
 <script src="./dist/mavenGeography.js"></script>
```  

or from browser address bar like this

file://path..../index.html => (script is inside index.html)

we choose globalObject local to avoid Cors errors => response header Origin: null

Above function returns a promise.
##### Example:
```js
  let data = await mavenGeo.getGeolocationJsonFromIp("local", "10.0.0.0");
  //We can use also .then(function(res) {})
  //Then we use the function fetchGeolocationFromJson(data) to get location
  let test = mavenGeo.fetchGeolocationFromJson(data);
  console.log(test);
  //The result is for example "52.37559917665907 4.888916015625"
```  
##### Example node:
```js
  //First we require https node js library and then passing to function
  const https = require('https');
  let data = await mavenGeo.getGeolocationJsonFromIp("node", "10.0.0.0", https);
  //We can use also .then(function(res) {})
  //Then we use the function fetchGeolocationFromJson(data) to get location
  let test = mavenGeo.fetchGeolocationFromJson(data);
  console.log(test);
  //The result is for example "52.37559917665907 4.888916015625"
```  

#### Get country short name  from ip
```sh
 mavenGeo.getCountryJsonFromIp("globalObject", ip);
```  
globalObject values are: "window", "node", "local".

When testing from localHost and library is loaded as a script for example

```sh
 <script src="./dist/mavenGeography.js"></script>
```  

or from browser address bar like this

file://..../index.html   => (script is inside index.html)

we choose globalObject local to avoid Cors errors => response header Origin: null

Above function returns a promise.
##### Example:
```js
  let data = await mavenGeo.getCountryJsonFromIp("local", "10.0.0.0");
  //We can use also .then(function(res) {})
  //Then we use the function fetchCountryFromJson(data) to get location
  let test = mavenGeo.fetchCountryFromJson(data);
  console.log(test);
  //The result is for example "GR".
```  
##### Example node:
```js
  //First we require https node js library and then passing to function
  const https = require('https');
  let data = await mavenGeo.getCountryJsonFromIp("node", "10.0.0.0", https);
  //We can use also .then(function(res) {})
  //Then we use the function fetchCountryFromJson(data) to get location
  let test = mavenGeo.fetchCountryFromJson(data);
  console.log(test);
  ////The result is for example "GR".
```  

### Check tools:
#### Check if country belongs to Continent
```sh
 mavenGeo.isContinent("name of country", "continent name");
```  
#### Check if country belongs to APAC
```sh
 mavenGeo.isApac("name of country");
```
#### Check if country belongs to Nordigs
```sh
 mavenGeo.isNordigs("name of country");
```
#### Check if country belongs to DACH
```sh
 mavenGeo.isDach("name of country");
```
#### Check if country belongs to Benelux
```sh
 mavenGeo.isBenelux("name of country");
```
