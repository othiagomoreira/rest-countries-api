const form = document.querySelector('#search-countries');

form.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    const allCountryNames = document.querySelectorAll('.card__name');

    const countryNotFound = () => {
        const containerCountries = document.querySelector('.countries');
        const illustration = document.querySelector('.not-found');

        containerCountries.clientHeight === 0
            ? illustration.classList.add('not-found--active')
            : illustration.classList.remove('not-found--active');
    };

    allCountryNames.forEach((countryName) => {
        const name = countryName.innerText.toLowerCase();

        name.includes(value)
            ? (countryName.closest('.card').style.display = 'block')
            : (countryName.closest('.card').style.display = 'none');
    });

    countryNotFound();
});
