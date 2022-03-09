const btnDropdown = document.querySelector('#btn-dropdown');
const regions = dropdown.querySelectorAll('.dropdown__item');

// Open and Close Dropdown
const openDropdownMenu = () => {
    const dropdown = btnDropdown.querySelector('#dropdown');
    const icon = document.querySelector('.dropdown__icon');

    dropdown.classList.toggle('dropdown__list--active');
    icon.classList.toggle('dropdown__icon--active');
};

btnDropdown.addEventListener('click', openDropdownMenu);

// Filter countries by their continents
const regionFilter = (element) => {
    const value = element.innerText;
    const allContinents = document.querySelectorAll('.card__region');

    allContinents.forEach((continent) => {
        const continentName = continent.innerText;

        continentName.includes(value) || value === 'All'
            ? (continent.closest('.card').style.display = 'block')
            : (continent.closest('.card').style.display = 'none');
    });
};

// Add a visual effect to the selected region
const highlightSelectedRegion = (region) => {
    regions.forEach((region) =>
        region.classList.remove('dropdown__item--active')
    );

    region.classList.add('dropdown__item--active');
};

regions.forEach((region) => {
    region.addEventListener('click', () => {
        regionFilter(region);
        highlightSelectedRegion(region);
    });
});
