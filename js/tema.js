const btnCambiarTema = document.getElementById('btn-cambiar-tema');
const btnModoClaro = document.getElementById('light-mode');
const btnModoOscuro = document.getElementById('dark-mode');
const btnIgualarSistema = document.getElementById('auto-mode');
const temaActual = document.getElementById('tema-actual');
const dropdownButton = document.getElementById('btn-cambiar-tema');
const dropdownMenu = document.getElementById('dropdownMenuTheme');
let pageTheme;

function aplicarTema(tema) {
    if (tema === "dark") {
        document.body.setAttribute('data-bs-theme', 'dark');
        btnCambiarTema.classList.add('dark');
        btnCambiarTema.classList.remove('auto');
        btnCambiarTema.classList.remove('light');
        btnModoClaro.classList.remove('selected');
        btnModoOscuro.classList.add('selected');
        btnIgualarSistema.classList.remove('selected');
        temaActual.textContent = btnModoOscuro.textContent;
        temaActual.setAttribute('lang', btnModoOscuro.getAttribute('lang'));
    } else if (tema === "light") {
        document.body.setAttribute('data-bs-theme', 'light');
        btnCambiarTema.classList.add('light');
        btnCambiarTema.classList.remove('dark');
        btnCambiarTema.classList.remove('auto');
        btnModoClaro.classList.add('selected');
        btnModoOscuro.classList.remove('selected');
        btnIgualarSistema.classList.remove('selected');
        temaActual.textContent = btnModoClaro.textContent;
        temaActual.setAttribute('lang', btnModoClaro.getAttribute('lang'));
    } else {
        document.body.setAttribute('data-bs-theme', getSystemTheme());
        btnCambiarTema.classList.add('auto');
        btnCambiarTema.classList.remove('light');
        btnCambiarTema.classList.remove('dark');
        btnModoClaro.classList.remove('selected');
        btnModoOscuro.classList.remove('selected');
        btnIgualarSistema.classList.add('selected');
        temaActual.textContent = btnIgualarSistema.textContent;
        temaActual.setAttribute('lang', btnIgualarSistema.getAttribute('lang'));
    }
}

function cambiarTema(tema) {
    if (cookiesHabilitadas('localStorage')) localStorage.setItem('tema', tema);
    pageTheme = tema;
    aplicarTema(tema);
}

btnModoClaro.addEventListener('click', () => {
    cambiarTema('light');
});
btnModoOscuro.addEventListener('click', () => {
    cambiarTema('dark');
});
btnIgualarSistema.addEventListener('click', () => {
    cambiarTema('auto');
});

function getSystemTheme() {
    const currentSystemTheme = window.matchMedia('(prefers-color-scheme: dark)');
    return currentSystemTheme.matches ? 'dark' : 'light' === 'dark';
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (pageTheme === 'auto') aplicarTema('auto');
})

document.addEventListener('DOMContentLoaded', () => {
    pageTheme = cookiesHabilitadas('localStorage') ? localStorage.getItem('tema') || 'auto' : 'auto';
    if (pageTheme === 'dark') aplicarTema('dark');
    if (pageTheme === 'light') aplicarTema('light');
    if (pageTheme === 'auto') aplicarTema('auto'); 
});

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show-drop');
});

document.addEventListener('click', (event) => {
  if (!dropdownButton.contains(event.target)) {
    dropdownMenu.classList.remove('show-drop');
  }
});