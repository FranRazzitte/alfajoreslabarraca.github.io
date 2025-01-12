const dropdownButton = document.getElementById('btn-cambiar-tema');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show-drop');
});

document.addEventListener('click', (event) => {
  if (!dropdownButton.contains(event.target)) {
    dropdownMenu.classList.remove('show-drop');
  }
});

const dropdownButton_movil = document.getElementById('btn-cambiar-tema-movil');
const dropdownMenu_movil = document.getElementById('dropdownMenu-movil');

dropdownButton_movil.addEventListener('click', () => {
  dropdownMenu_movil.classList.toggle('show-drop');
});

document.addEventListener('click', (event) => {
  if (!dropdownButton_movil.contains(event.target)) {
    dropdownMenu_movil.classList.remove('show-drop');
  }
});