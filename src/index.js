import {StringData} from "./countryData.js";
import {Flags} from "./flags.js";

const Data = getObjectCountries();
let value;

class Country {
  constructor(country) {
    this.countryName = country.CountryName;
    this.countryShortForm = country.Country_Name_Short;
    this.capital = country.Capital;
    this.continent = country.Continent;
    this.geonameID = country.GeonameID;
    this.currencyName = country.Currency_name;
    this.currencyCode = country.Currency_alphabetic_code;
    this.dial = country.Dial;
    this.isIndependent = country.is_independent;
    this.apac = country.Apac;
    this.nordigs = country.Nordigs;
    this.dach = country.Dach;
    this.benelux = country.Benelux;
  }

  getCountryShortForm() {
    return this.countryShortForm;
  }

  getCountryCapital() {
    return this.capital;
  }

  getCountryContinent() {
    return this.continent;
  }

  getCountryDial() {
    return this.dial;
  }

  getCountryCurrencyCode() {
    return this.currencyCode;
  }

  getCountryCurrencyName() {
    return this.currencyName;
  }

  getCountryGeonameID() {
    return this.geonameID;
  }

  isCountryIndependent() {
    return this.isIndependent;
  }

  isCountryApac() {
    return this.apac;
  }

  isCountryNordigs() {
    return this.nordigs;
  }

  isCountryDach() {
    return this.dach;
  }

  isCountryBenelux() {
    return this.benelux;
  }
}

function getObjectCountries() {
  let arrayOfCountries = StringData.match(/[^\r\n]+/g);
  let data = {};
  for ( let i=0; i<arrayOfCountries.length; i++ ) {
    let arrayOfCountriesContent = arrayOfCountries[i].split(',');
    let countryNameLowerCase = arrayOfCountriesContent[0].toLowerCase();
    data[countryNameLowerCase] = {};
    data[countryNameLowerCase]['CountryName'] = arrayOfCountriesContent[0];
    data[countryNameLowerCase]['Country_Name_Short'] = arrayOfCountriesContent[1];
    data[countryNameLowerCase]['Dial'] = arrayOfCountriesContent[2];
    data[countryNameLowerCase]['Currency_alphabetic_code'] = arrayOfCountriesContent[3];
    data[countryNameLowerCase]['Currency_name'] = arrayOfCountriesContent[4];
    data[countryNameLowerCase]['is_independent'] = arrayOfCountriesContent[5];
    data[countryNameLowerCase]['Capital'] = arrayOfCountriesContent[6];
    data[countryNameLowerCase]['Continent'] = arrayOfCountriesContent[7];
    data[countryNameLowerCase]['GeonameID'] = arrayOfCountriesContent[8];
    data[countryNameLowerCase]['Apac'] = arrayOfCountriesContent[9];
    data[countryNameLowerCase]['Nordigs'] = arrayOfCountriesContent[10];
    data[countryNameLowerCase]['Dach'] = arrayOfCountriesContent[11];
    data[countryNameLowerCase]['Benelux'] = arrayOfCountriesContent[12];
  }
  return data;
}

function checkValidityOfCountryName(name) {
  name = name.toLowerCase();
  let countries = getListOfNamesCountries();
  if ( countries.includes(name) ) {
    return true;
  } else {
    return false;
  }
}

export function getListOfNamesCountries() {
  let arrayOfCountriesName = [];
  for (var property in Data) {
    arrayOfCountriesName.push(property);
  }
  return arrayOfCountriesName;
}

export function getListOfContinents() {
  let arrayOfContinets = [];
  for (var property in Data) {
    if ( !arrayOfContinets.includes(Data[property]['Continent']) ) {
      arrayOfContinets.push(Data[property]['Continent']);
    }
  }
  return arrayOfContinets;
}

export function getCapital(countryName) {
  if ( checkValidityOfCountryName(countryName) ) {
    let countryObject = Data[countryName.toLowerCase()]
    let newCountry = new Country(countryObject);
    return newCountry.getCountryCapital();
  } else {
    return "country name is no valid";
  }
}

export function getNameShort(countryName) {
  if ( checkValidityOfCountryName(countryName) ) {
    let countryObject = Data[countryName.toLowerCase()]
    let newCountry = new Country(countryObject);
    return newCountry.getCountryShortForm();
  } else {
    return "country name is no valid";
  }
}

export function getContinent(countryName) {
  if ( checkValidityOfCountryName(countryName) ) {
    let countryObject = Data[countryName.toLowerCase()]
    let newCountry = new Country(countryObject);
    return newCountry.getCountryContinent();
  } else {
    return "country name is no valid";
  }
}

export function getDial(countryName) {
  if ( checkValidityOfCountryName(countryName) ) {
    let countryObject = Data[countryName.toLowerCase()]
    let newCountry = new Country(countryObject);
    return newCountry.getCountryDial();
  } else {
    return "country name is no valid";
  }
}

export function getCurrencyCode(countryName) {
  if ( checkValidityOfCountryName(countryName) ) {
    let countryObject = Data[countryName.toLowerCase()]
    let newCountry = new Country(countryObject);
    return newCountry.getCountryCurrencyCode();
  } else {
    return "country name is no valid";
  }
}

export function getCurrencyName(countryName) {
  if ( checkValidityOfCountryName(countryName) ) {
    let countryObject = Data[countryName.toLowerCase()]
    let newCountry = new Country(countryObject);
    return newCountry.getCountryCurrencyName();
  } else {
    return "country name is no valid";
  }
}

export function getGeonameID(countryName) {
  if ( checkValidityOfCountryName(countryName) ) {
    let countryObject = Data[countryName.toLowerCase()]
    let newCountry = new Country(countryObject);
    return newCountry.getCountryGeonameID();
  } else {
    return "country name is no valid";
  }
}

//shortName either capital or lowercase
export function getCountryFromShortName(shortName) {
  let countryName = null;
  for ( let key in Data ) {
    if ( Data[key].Country_Name_Short.toLowerCase() == shortName.toLowerCase() ) {
      countryName = Data[key].CountryName;
    }
  }
  if ( countryName == null ) {
    return 'No country match for the given short name';
  } else {
    return countryName;
  }
}

export function isContinent(countryName, continentName) {
  if ( checkValidityOfCountryName(countryName) ) {
    let countryObject = Data[countryName.toLowerCase()]
    let newCountry = new Country(countryObject);
    let check = newCountry.getCountryContinent().toLowerCase();
    if ( check === continentName.toLowerCase() ) {
      return true;
    } else {
      return false;
    }
  } else {
    return "country name is no valid";
  }
}

export function isApac(countryName) {
  if ( checkValidityOfCountryName(countryName) ) {
    let countryObject = Data[countryName.toLowerCase()]
    let newCountry = new Country(countryObject);
    let check = newCountry.isCountryApac();
    if ( check === 'Yes' ) {
      return true;
    } else {
      return false;
    }
  } else {
    return "country name is no valid";
  }
}

export function isNordigs(countryName) {
  if ( checkValidityOfCountryName(countryName) ) {
    let countryObject = Data[countryName.toLowerCase()]
    let newCountry = new Country(countryObject);
    let check = newCountry.isCountryNordigs();
    if ( check === 'Yes' ) {
      return true;
    } else {
      return false;
    }
  } else {
    return "country name is no valid";
  }
}

export function isDach(countryName) {
  if ( checkValidityOfCountryName(countryName) ) {
    let countryObject = Data[countryName.toLowerCase()]
    let newCountry = new Country(countryObject);
    let check = newCountry.isCountryDach();
    if ( check === 'Yes' ) {
      return true;
    } else {
      return false;
    }
  } else {
    return "country name is no valid";
  }
}

export function isBenelux(countryName) {
  if ( checkValidityOfCountryName(countryName) ) {
    let countryObject = Data[countryName.toLowerCase()]
    let newCountry = new Country(countryObject);
    let check = newCountry.isCountryBenelux();
    if ( check === 'Yes' ) {
      return true;
    } else {
      return false;
    }
  } else {
    return "country name is no valid";
  }
}

function deepSeekObject(model, seekKey, seekValue) {
  let counter = 1;
  for ( let key in model ) {
    if ( key === seekKey ) {
      let testValue = model[key];
      if ( typeof seekValue == 'undefined' ) {
        value = model[key];
      } else {
        if ( testValue === seekValue ) {
          //global variable value
          value = model['value'];
        }
      }
    }
    let type = typeof model[key];
    if ( typeof model[key] == 'object' && model[key] !== null ) {
      deepSeekObject(model[key], seekKey, seekValue);
      counter++;
    }
  }
}

function fetchApi(path) {
  let promise = new Promise(function(resolve,reject) {
    fetch(path, {
          method: "GET",
          mode: "cors",
          headers: {
              "Accept": "application/json",
          }
      })
     .then(res => res.text())
     .then(data => {
       resolve(data);
     })
  })
  return promise;
}

export function getGeolocationJsonFromIp(globalObject, ip, https) {
  let isWindow = globalObject === 'window' ? true : false;
  let isNode = globalObject === 'node' ? true : false;
  let isLocal = globalObject === 'local' ? true : false;
  let path;
  if ( isWindow ) {
    path = `https://rest-test.db.ripe.net/geolocation.json?source=test&ipkey=${ip}`;
    let promise = fetchApi(path);
    return promise;
  } else if ( isLocal ) {
    path = `https://cors.io?https://rest-test.db.ripe.net/geolocation.json?source=test&ipkey=${ip}`;
    let promise = fetchApi(path);
    return promise;
  } else {
    console.log('is node!');
    let options = {
    hostname: 'rest-test.db.ripe.net',
    path: `/geolocation.json?source=test&ipkey=${ip}`,
    method: 'GET',
    headers: {
        'Accept': 'application/json'
      }
    };
    let promise = new Promise(function(resolve,reject) {
      let getRequest = https.request(options, function(res) {
          let statusCode = res.statusCode;
          //console.log(`STATUS: ${statusCode}`);
          //if status from response is not 200 disconnect socket
          let body = '';
          res.on('data', function(data) {
                body += data;
          });
          res.on('end', function() {
                resolve(body)
          });
        });
        //If there is a connection error on this request prompt the error message
        getRequest.on('error', function(e) {
          console.error(`problem with request: ${e.message}`);
          reject(e);
        });
        getRequest.end();
    });
    return promise;
  }
}

export function fetchGeolocationFromJson(data) {
  data = JSON.parse(data);
  deepSeekObject(data, 'value');
  let location = value;
  return location;
}

export function getCountryJsonFromIp(globalObject, ip, https) {
  let isWindow = globalObject === 'window' ? true : false;
  let isNode = globalObject === 'node' ? true : false;
  let isLocal = globalObject === 'local' ? true : false;
  let path;
  if ( isWindow ) {
    path = `https://apps.db.ripe.net/db-web-ui/api/whois/search?` +
            `abuse-contact=true&` +
            `flags=B&` +
            `ignore404=true&` +
            `limit=20&` +
            `managed-attributes=true&` +
            `offset=0&` +
            `query-string=${ip}&` +
            `resource-holder=true`;
    return fetchApi(path);
  } else if ( isLocal ) {
    path = `https://cors.io?https://apps.db.ripe.net/db-web-ui/api/whois/search?` +
            `abuse-contact=true&` +
            `flags=B&` +
            `ignore404=true&` +
            `limit=20&` +
            `managed-attributes=true&` +
            `offset=0&` +
            `query-string=${ip}&` +
            `resource-holder=true`;
    return fetchApi(path);
  } else {
    console.log('is node!');
    let options = {
    hostname: 'apps.db.ripe.net',
    path: `/db-web-ui/api/whois/search?` +
            `abuse-contact=true&` +
            `flags=B&` +
            `ignore404=true&` +
            `limit=20&` +
            `managed-attributes=true&` +
            `offset=0&` +
            `query-string=${ip}&` +
            `resource-holder=true`,
    method: 'GET',
    headers: {
        'Accept': 'application/json'
      }
    };
    let promise = new Promise(function(resolve,reject) {
      let getRequest = https.request(options, function(res) {
          let statusCode = res.statusCode;
          //console.log(`STATUS: ${statusCode}`);
          //if status from response is not 200 disconnect socket
          let body = '';
          res.on('data', function(data) {
                body += data;
          });
          res.on('end', function() {
                resolve(body)
          });
        });
        //If there is a connection error on this request prompt the error message
        getRequest.on('error', function(e) {
          console.error(`problem with request: ${e.message}`);
          reject(e);
        });
        getRequest.end();
    })
    return promise;
  }
}

export function fetchCountryFromJson(data) {
  data = JSON.parse(data);
  deepSeekObject(data, 'name', 'country');
  let country = value;
  return country;
}

export function showCountryFlag(elem, shortName) {
  shortName = shortName.toLowerCase();
  if ( typeof Flags[shortName] != 'undefined' ) {
    elem.src = Flags[shortName];
  } else {
    console.log('flag dont exist');
  }
}
