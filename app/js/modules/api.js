import { displayCountryCard } from './createCard.js';

export async function getInfoCountries() {
    const res = await fetch('https://restcountries.com/v2/all');
    const countries = await res.json();

    displayCountryCard(countries);
}

getInfoCountries();
