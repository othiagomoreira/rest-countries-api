const scrollToTop = () => {
    const btn = document.querySelector('#btn-scroll');

    window.scrollY >= 600
        ? btn.classList.add('btn-scroll--active')
        : btn.classList.remove('btn-scroll--active');
};

window.addEventListener('scroll', scrollToTop);
