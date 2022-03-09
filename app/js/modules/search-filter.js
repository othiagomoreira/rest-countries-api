const form = document.querySelector('#search-countries');

form.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    const allCountryNames = document.querySelectorAll('.card__name');

    allCountryNames.forEach((countryName) => {
        const name = countryName.innerText.toLowerCase();

        name.includes(value)
            ? (countryName.closest('.card').style.display = 'block')
            : (countryName.closest('.card').style.display = 'none');
    });
});
