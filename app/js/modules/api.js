import { displayCountryCard } from './createCard.js';
import { checkLat, checkLng, checkCurrency } from './utilities.js';

export async function getInfoCountries() {
    const res = await fetch('https://restcountries.com/v2/all');
    const countries = await res.json();

    countries.forEach((country) => {
        const info = {
            flag: country.flag,
            name: country.name,
            capital: country.capital,
            nativeName: country.nativeName,
            region: country.region,
            subRegion: country.subregion,
            population: country.population.toLocaleString('en-US'),
            topDomain: country.topLevelDomain[0],
            language: country.languages.map((language) => language.name),
            currency: checkCurrency(country.currencies),
            borders: country.borders,
            alphaCode: country.alpha3Code,
            lat: checkLat(country.latlng),
            lng: checkLng(country.latlng),
        };

        displayCountryCard(info);
    });
}

getInfoCountries();
