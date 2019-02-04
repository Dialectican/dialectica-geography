import {StringData} from "./countryData.js";

const Data = getObjectCountries();

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

export function getGeonameID(name) {
  if ( checkValidityOfCountryName(countryName) ) {
    let countryObject = Data[countryName.toLowerCase()]
    let newCountry = new Country(countryObject);
    return newCountry.getCountryGeonameID();
  } else {
    return "country name is no valid";
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
