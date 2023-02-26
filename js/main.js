// toggling dark and light mode

let _html = document.querySelector('html');
let toggle = document.querySelector('.toggle');
let toggleCheckbox = document.querySelector('.toggle__checkbox');

if(!toggleCheckbox.checked) {
    _html.classList.remove('dark');
}

toggleCheckbox.addEventListener('click', () => {
    _html.classList.toggle('dark');
})


