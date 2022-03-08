import { generateBorders } from './borders.js';
import { checkCurrency, checkLat, checkLng } from './utilities.js';

export const showCountryInfo = (country) => {
    const modal = document.querySelector('#modal');
    const btnModal = document.querySelector('#btn-modal');
    const element = document.querySelector('.modal__container');

    element.innerHTML = `
		<img class="modal__flag" src="${country.flag}" alt="Flag ${country.name}">

		<section class="modal__content">
			<h2 class="modal__name">${country.name}</h2>

			<div class="modal__info">
				<ul class="modal__list">
					<li class="modal__item">
						<span>Native Name:</span>
						${country.nativeName}
					</li>
					<li class="modal__item">
						<span>Population:</span>
						${country.population.toLocaleString('en-US')}
					</li>
					<li class="modal__item">
						<span>Region:</span>
						${country.region}
					</li>
					<li class="modal__item">
						<span>Sub Region:</span>
						${country.subregion}
					</li>
					<li class="modal__item">
						<span>Capital:</span>
						${country.capital}
					</li>
				</ul>

				<ul class="modal__list">
					<li class="modal__item">
						<span>Top Level Domain:</span>
						${country.topLevelDomain[0]}
					</li>
					<li class="modal__item">
						<span>Currencies</span>:</span>
						${checkCurrency(country.currencies)}
					</li>
					<li class="modal__item">
						<span>Languages:</span>
						${country.languages.map((language) => language.name)}
					</li>
				</ul>
			</div>


			<div class="modal__border">
				<h3 class="modal__border-name">Border Countries:</h3>

				<ul class="modal__border-list"></ul>
			</div>

		</section>

		<iframe class="modal__iframe" 
			src="https://www.google.com/maps?q=${checkLat(country.latlng)},${checkLng(
        country.latlng
    )}&z=5&ie=UTF8&iwloc=&output=embed" frameborder="0">
		</iframe>`;

    generateBorders(country);

    const closeModal = () => modal.classList.remove('modal--active');

    btnModal.addEventListener('click', closeModal);
};
