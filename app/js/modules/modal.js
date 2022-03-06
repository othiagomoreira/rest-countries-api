export const showCountryInfo = (info) => {
    const modal = document.querySelector('#modal');
    const btnModal = document.querySelector('#btn-modal');
    const element = document.querySelector('.modal__container');

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
			</div>
		</section>
	`;

    const closeModal = () => modal.classList.remove('modal--active');

    btnModal.addEventListener('click', closeModal);
};
