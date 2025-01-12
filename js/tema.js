var btnCambiarTema = document.getElementById('btn-cambiar-tema');
var btnModoClaro = document.getElementById('light-mode');
var btnModoOscuro = document.getElementById('dark-mode');
var btnIgualarSistema = document.getElementById('auto-mode');
var btnCambiarTemaMovil = document.getElementById('btn-cambiar-tema-movil');
var btnModoClaroMovil = document.getElementById('light-mode-movil');
var btnModoOscuroMovil = document.getElementById('dark-mode-movil');
var btnIgualarSistemaMovil = document.getElementById('auto-mode-movil');

function aplicarTema(tema) {
    if (tema === "dark") {
        document.body.classList.add('dark-mode');
        document.body.setAttribute('data-bs-theme', 'dark');
        btnCambiarTema.classList.add('dark');
        btnCambiarTema.classList.remove('auto');
        btnCambiarTema.classList.remove('light');
        btnModoClaro.classList.remove('selected');
        btnModoOscuro.classList.add('selected');
        btnIgualarSistema.classList.remove('selected');
        btnCambiarTemaMovil.classList.add('dark');
        btnCambiarTemaMovil.classList.remove('auto');
        btnCambiarTemaMovil.classList.remove('light');
        btnModoClaroMovil.classList.remove('selected');
        btnModoOscuroMovil.classList.add('selected');
        btnIgualarSistemaMovil.classList.remove('selected');
    } else if (tema === "light") {
        document.body.classList.remove('dark-mode');
        document.body.setAttribute('data-bs-theme', 'light');
        btnCambiarTema.classList.add('light');
        btnCambiarTema.classList.remove('dark');
        btnCambiarTema.classList.remove('auto');
        btnModoClaro.classList.add('selected');
        btnModoOscuro.classList.remove('selected');
        btnIgualarSistema.classList.remove('selected');
        btnCambiarTemaMovil.classList.add('light');
        btnCambiarTemaMovil.classList.remove('dark');
        btnCambiarTemaMovil.classList.remove('auto');
        btnModoClaroMovil.classList.add('selected');
        btnModoOscuroMovil.classList.remove('selected');
        btnIgualarSistemaMovil.classList.remove('selected');
    } else {
        btnCambiarTema.classList.add('auto');
        btnCambiarTema.classList.remove('light');
        btnCambiarTema.classList.remove('dark');
        btnModoClaro.classList.remove('selected');
        btnModoOscuro.classList.remove('selected');
        btnIgualarSistema.classList.add('selected');
        btnCambiarTemaMovil.classList.add('auto');
        btnCambiarTemaMovil.classList.remove('light');
        btnCambiarTemaMovil.classList.remove('dark');
        btnModoClaroMovil.classList.remove('selected');
        btnModoOscuroMovil.classList.remove('selected');
        btnIgualarSistemaMovil.classList.add('selected');
        recargarTema();
    }
}

function cambiarTema(tema) {
    console.log(tema)
    localStorage.setItem('tema', tema);
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

btnModoClaroMovil.addEventListener('click', () => {
    cambiarTema('light');
  });
btnModoOscuroMovil.addEventListener('click', () => {
    cambiarTema('dark');
  });
btnIgualarSistemaMovil.addEventListener('click', () => {
    cambiarTema('auto');
  });

function recargarTema() {
    var isDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    

    function aplicarTemaSegunPreferencias() {
        console.log(isDarkMode);
        if (localStorage.getItem('tema') == 'auto') {
            if (isDarkMode.matches ? 'dark' : 'light' === "dark") {
                document.body.classList.add('dark-mode');
                document.body.setAttribute('data-bs-theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                document.body.setAttribute('data-bs-theme', 'light');
            }
        }
    }

    aplicarTemaSegunPreferencias();
    isDarkMode.addEventListener('change', aplicarTemaSegunPreferencias);
}

window.onload = function() {
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
};
