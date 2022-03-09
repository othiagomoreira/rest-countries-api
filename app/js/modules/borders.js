import { showCountryInfo } from './country-info-modal.js';

async function getInfoSelectedBorder(countryCode) {
    const res = await fetch(
        `https://restcountries.com/v2/alpha/${countryCode}`
    );
    const countryInfo = await res.json();

    showCountryInfo(countryInfo);
}

export const generateBorders = (country, modal) => {
    const list = document.querySelector('.modal__border-list');
    const borderContainer = document.querySelector('.modal__border');

    const borderCountry = (borders) => {
        borders.forEach((border) => {
            const elementLi = document.createElement('li');
            elementLi.classList.add('modal__border-item');

            elementLi.innerHTML = `<button class="modal__border-btn modal--btn">${border}</button>`;

            list.append(elementLi);

            elementLi.addEventListener('click', () => {
                getInfoSelectedBorder(border);

                modal.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            });
        });
    };

    const borderlessCountry = () => (borderContainer.style.display = 'none');

    typeof country.borders === 'object'
        ? borderCountry(country.borders)
        : borderlessCountry();
};
