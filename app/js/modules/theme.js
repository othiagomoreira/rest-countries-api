const body = document.querySelector('body');
const button = document.querySelector('#btn-theme');
const text = button.querySelector('span');
const icon = button.querySelector('i');

const changeTheme = () => {
    body.classList.toggle('dark-theme');
};

const changeIcon = () => {
    if (body.classList.contains('dark-theme')) {
        icon.className = 'bx bxs-sun';
        text.innerText = 'Light Mode';
    } else {
        icon.className = 'bx bxs-moon';
        text.innerText = 'Dark Mode';
    }
};

button.addEventListener('click', () => {
    changeTheme();
    changeIcon();
});
