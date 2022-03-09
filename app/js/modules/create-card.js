import { showCountryInfo } from './country-info-modal.js';

export function displayCountryCard(country) {
    const container = document.querySelector('.countries');
    const modal = document.querySelector('#modal');
    const countryEl = document.createElement('div');

    countryEl.classList.add('card');

    countryEl.innerHTML = `
        <img class="card__img" src="${country.flag}" alt="${country.name} flag">
        
        <div class="card__content">
            <h2 class="card__name">${country.name}</h2>

            <ul class="card__list">
                <li class="card__item">
                    <span>Population:</span> 
                    ${country.population.toLocaleString('en-US')}
                </li>
                <li class="card__item card__region">
                    <span>Region:</span>
                    ${country.region}
                </li>
                <li class="card__item card__capital">
                    <span>Capital:</span>
                    ${country.capital}
                </li>
            </ul>
        </div>`;

    container.append(countryEl);

    countryEl.addEventListener('click', () => {
        modal.classList.add('modal--active');
        showCountryInfo(country);
    });
}
