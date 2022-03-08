import { showCountryInfo } from './modal.js';

async function getSelectedBorderArray(countryCode) {
    const res = await fetch(`https://restcountries.com/v2/alpha/${countryCode}`);
    const code = await res.json();

    showCountryInfo(code);
}

export const generateBorders = (country) => {
    const list = document.querySelector('.modal__border-list');
    const borderContainer = document.querySelector('.modal__border');

    const borderCountry = (borders) => {
        borders.forEach((border) => {
            const elementLi = document.createElement('li');
            elementLi.classList.add('modal__border-item');

            elementLi.innerHTML = `<button class="modal__border-btn modal--btn">${border}</button>`;

            list.append(elementLi);

            elementLi.addEventListener('click', () => {
                getSelectedBorderArray(border);
            });
        });
    };

    const borderlessCountry = () => (borderContainer.style.display = 'none');

    typeof country.borders === 'object'
        ? borderCountry(country.borders)
        : borderlessCountry();
};
