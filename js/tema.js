var btnCambiarTema = document.getElementById('btn-cambiar-tema');
var btnModoClaro = document.getElementById('light-mode');
var btnModoOscuro = document.getElementById('dark-mode');
var btnIgualarSistema = document.getElementById('auto-mode');
const dropdownButton = document.getElementById('btn-cambiar-tema');
const dropdownMenu = document.getElementById('dropdownMenu');

function aplicarTema(tema) {
    if (tema === "dark") {
        document.body.setAttribute('data-bs-theme', 'dark');
        btnCambiarTema.classList.add('dark');
        btnCambiarTema.classList.remove('auto');
        btnCambiarTema.classList.remove('light');
        btnModoClaro.classList.remove('selected');
        btnModoOscuro.classList.add('selected');
        btnIgualarSistema.classList.remove('selected');
    } else if (tema === "light") {
        document.body.setAttribute('data-bs-theme', 'light');
        btnCambiarTema.classList.add('light');
        btnCambiarTema.classList.remove('dark');
        btnCambiarTema.classList.remove('auto');
        btnModoClaro.classList.add('selected');
        btnModoOscuro.classList.remove('selected');
        btnIgualarSistema.classList.remove('selected');
    } else {
        btnCambiarTema.classList.add('auto');
        btnCambiarTema.classList.remove('light');
        btnCambiarTema.classList.remove('dark');
        btnModoClaro.classList.remove('selected');
        btnModoOscuro.classList.remove('selected');
        btnIgualarSistema.classList.add('selected');
        recargarTema();
    }
}

function cambiarTema(tema) {
    if (cookies) {
        localStorage.setItem('tema', tema);
    }
    aplicarTema(tema);
}

btnModoClaro.addEventListener('click', () => {
    cambiarTema('light');
  });
btnModoOscuro.addEventListener('click', () => {
    cambiarTema('dark');
  });
btnIgualarSistema.addEventListener('click', () => {
    if (cookies) {
        cambiarTema('auto');
    }
  });

function recargarTema() {
    var isDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    function aplicarTemaSegunPreferencias() {
        if (localStorage.getItem('tema') == 'auto') {
            if (isDarkMode.matches ? 'dark' : 'light' === "dark") {
                document.body.setAttribute('data-bs-theme', 'dark');
            } else {
                document.body.setAttribute('data-bs-theme', 'light');
            }
        }
    }

    aplicarTemaSegunPreferencias();
    isDarkMode.addEventListener('change', aplicarTemaSegunPreferencias);
}

document.addEventListener('DOMContentLoaded', () => {
    if (cookies) {
        var temaGuardado = localStorage.getItem('tema')
        if (temaGuardado == null) {
            localStorage.setItem('tema', 'auto')
            aplicarTema('auto');
        } else if (temaGuardado == 'dark') {
            aplicarTema('dark');
        } else if (temaGuardado == 'light') {
            aplicarTema('light');
        } else {
            aplicarTema('auto');
        } 
    } else {
        aplicarTema('light');
        btnIgualarSistema.classList.add('disabled');
    }
    
});

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show-drop');
});

document.addEventListener('click', (event) => {
  if (!dropdownButton.contains(event.target)) {
    dropdownMenu.classList.remove('show-drop');
  }
});