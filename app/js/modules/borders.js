import { showCountryInfo } from './modal.js';

export const generateBorders = (info, allCountries) => {
    const list = document.querySelector('.modal__border-list');
    const borderContainer = document.querySelector('.modal__border');

    const borderCountry = (borders) => {
        borders.forEach((border) => {
            const elementLi = document.createElement('li');
            elementLi.classList.add('modal__border-item');

            elementLi.innerHTML = `<button class="modal__border-btn modal--btn">${border}</button>`;

            list.append(elementLi);

            elementLi.addEventListener('click', () => {
                const selectedCountryName = elementLi.innerText;
                
                allCountries.forEach((country) => {
                    const selectedCountry = country.alpha3Code === selectedCountryName;

                    if(selectedCountry === true) {
                        showCountryInfo(country);
                    }
                });
            });
        });
    };

    const borderlessCountry = () => (borderContainer.style.display = 'none');

    typeof info.borders === 'object'
        ? borderCountry(info.borders)
        : borderlessCountry();
};
