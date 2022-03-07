import { showCountryInfo } from './modal.js';

export function displayCountryCard(info) {
    const container = document.querySelector('.countries');
    const modal = document.querySelector('#modal');
    const countryEl = document.createElement('div');

    countryEl.classList.add('card', info.alphaCode);

    countryEl.innerHTML = `
        <img class="card__img" src="${info.flag}" alt="${info.name} flag">
        
        <div class="card__content">
            <h2 class="card__name">${info.name}</h2>

            <ul class="card__list">
                <li class="card__item">
                    <span>Population:</span> ${info.population}
                </li>
                <li class="card__item card__region">
                    <span>Region:</span> ${info.region}
                </li>
                <li class="card__item card__capital">
                    <span>Capital:</span> ${info.capital}
                </li>
            </ul>
        </div>`;

    container.append(countryEl);

    countryEl.addEventListener('click', () => {
        modal.classList.add('modal--active');
        showCountryInfo(info);
    });
}
