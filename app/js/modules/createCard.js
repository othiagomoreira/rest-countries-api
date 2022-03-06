import { showCountryInfo } from './modal.js';

export function displayCountryCard(countries) {
    const container = document.querySelector('.countries');

    countries.forEach((country) => {
        const modal = document.querySelector('#modal');
        const countryEl = document.createElement('div');
        countryEl.classList.add('card');

        const checkCurrency = (arrayCurrencies) => {
            return typeof arrayCurrencies === 'object'
                ? arrayCurrencies.map((currency) => currency.name)
                : 'Not found';
        };

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
        };

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
    });
}
