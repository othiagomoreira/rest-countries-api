const body = document.querySelector('body');
const btnSwitchTheme = document.querySelector('#btn-theme');

if (btnSwitchTheme) {
    const initTheme = () => {
        const darkTheme = localStorage.getItem('theme');

        const darkThemeSelected =
            darkTheme !== null && darkTheme === 'dark-theme';

        if (darkThemeSelected === true) {
            body.classList.add('dark-theme');
        }
    };

    const resetTheme = () => {
        body.classList.toggle('dark-theme');

        body.classList.contains('dark-theme')
            ? localStorage.setItem('theme', 'dark-theme')
            : localStorage.removeItem('theme');
    };

    initTheme();
    btnSwitchTheme.addEventListener('click', resetTheme);
}
