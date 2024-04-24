var btnCambiarTema = document.getElementById('btn-cambiar-tema');
var btnCambiarTemaMovil = document.getElementById('btn-cambiar-tema-movil');
var spanTema = document.getElementById('spanTemaMovil');

function aplicarTema(tema) {
    if (tema === "dark") {
        document.body.classList.add('dark-mode');
        spanTema.textContent = "Modo Oscuro";
        document.body.setAttribute('data-bs-theme', 'dark');
        btnCambiarTema.classList.add('dark');
        btnCambiarTema.classList.remove('auto');
        btnCambiarTema.classList.remove('light');
        btnCambiarTemaMovil.classList.add('dark');
        btnCambiarTemaMovil.classList.remove('auto');
        btnCambiarTemaMovil.classList.remove('light');
    } else if (tema === "light") {
        document.body.classList.remove('dark-mode');
        spanTema.textContent = "Modo Claro";
        document.body.setAttribute('data-bs-theme', 'light');
        btnCambiarTema.classList.add('light');
        btnCambiarTema.classList.remove('dark');
        btnCambiarTema.classList.remove('auto');
        btnCambiarTemaMovil.classList.add('light');
        btnCambiarTemaMovil.classList.remove('dark');
        btnCambiarTemaMovil.classList.remove('auto');
    } else {
        spanTema.textContent = "Igualar al Sistema";
        btnCambiarTema.classList.add('auto');
        btnCambiarTema.classList.remove('light');
        btnCambiarTema.classList.remove('dark');
        btnCambiarTemaMovil.classList.add('auto');
        btnCambiarTemaMovil.classList.remove('light');
        btnCambiarTemaMovil.classList.remove('dark');
        recargarTema();
    }
}

function cambiarTema() {
    var temaActual = localStorage.getItem('tema');
    if (temaActual === 'light') {
        var nuevoTema = 'dark';
    } else if (temaActual === 'dark') {
        var nuevoTema = 'auto';
    } else {
        var nuevoTema = 'light';
    }
    
    localStorage.setItem('tema', nuevoTema);
    aplicarTema(nuevoTema);
}

btnCambiarTema.addEventListener('click', cambiarTema);
btnCambiarTemaMovil.addEventListener('click', cambiarTema);

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
