const btnDropdown = document.querySelector('#btn-dropdown');
const icon = document.querySelector('.dropdown__icon');
const dropdown = btnDropdown.querySelector('#dropdown');
const regions = dropdown.querySelectorAll('.dropdown__item');

// Open and Close Dropdown
const openDropdownMenu = () => {
    dropdown.classList.toggle('dropdown__list--active');
    icon.classList.toggle('dropdown__icon--active');
};

btnDropdown.addEventListener('click', openDropdownMenu);

// Adds a visual effect to the drop-down menu, letting you know which country was selected
const visualEffect = (region) => {
    regions.forEach((region) =>
        region.classList.remove('dropdown__item--active')
    );

    region.classList.add('dropdown__item--active');
};

// Filter countries by their continents
const selectedCountry = (continent) => {
    const value = continent.innerText;
    const allRegionNames = document.querySelectorAll('.card__region');

    allRegionNames.forEach((regionName) => {
        const region = regionName.innerText;

        region.includes(value) || value === 'All'
            ? (regionName.closest('.card').style.display = 'block')
            : (regionName.closest('.card').style.display = 'none');
    });
};

regions.forEach((region) => {
    region.addEventListener('click', () => {
        visualEffect(region);
        selectedCountry(region);
    });
});
