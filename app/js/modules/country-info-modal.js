import { generateBorders } from './borders.js';
import { checkCurrency, checkLat, checkLng } from './utilities.js';

export const showCountryInfo = (country) => {
    const modal = document.querySelector('#modal');
    const btnModal = document.querySelector('#btn-modal');
    const element = document.querySelector('.modal__container');

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

    element.innerHTML = `
		<img class="modal__flag" src="${info.flag}" alt="Flag ${info.name}">

		<section class="modal__content">
			<h2 class="modal__name">${info.name}</h2>

			<div class="modal__info">
				<ul class="modal__list">
					<li class="modal__item">
						<span>Native Name:</span>
						${info.nativeName}
					</li>
					<li class="modal__item">
						<span>Population:</span>
						${info.population}
					</li>
					<li class="modal__item">
						<span>Region:</span>
						${info.region}
					</li>
					<li class="modal__item">
						<span>Sub Region:</span>
						${info.subRegion}
					</li>
					<li class="modal__item">
						<span>Capital:</span>
						${info.capital}
					</li>
				</ul>

				<ul class="modal__list">
					<li class="modal__item">
						<span>Top Level Domain:</span>
						${info.topDomain}
					</li>
					<li class="modal__item">
						<span>Currencies</span>:</span>
						${info.currency}
					</li>
					<li class="modal__item">
						<span>Languages:</span>
						${info.language}
					</li>
				</ul>
			</div>


			<div class="modal__border">
				<h3 class="modal__border-name">Border Countries:</h3>

				<ul class="modal__border-list"></ul>
			</div>

		</section>

		<iframe class="modal__iframe" 
			src="https://www.google.com/maps?q=${info.lat},${info.lng}&z=5&ie=UTF8&iwloc=&output=embed" frameborder="0">
		</iframe>`;

    generateBorders(country, modal);

    const changeTitleAndFavicon = (favicon, pageTitle) => {
        const icon = document.querySelector('#favicon');
        const title = document.querySelector('#page-title');

        icon.setAttribute('href', favicon);
        title.innerText = pageTitle;
    };

    changeTitleAndFavicon(info.flag, info.name);

    const closeModal = () => {
        modal.classList.remove('modal--active');
        changeTitleAndFavicon('./assets/favicon.png', 'Rest Countries API');
    };

    btnModal.addEventListener('click', closeModal);
};
