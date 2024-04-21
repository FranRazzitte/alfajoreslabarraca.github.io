function recargarTema() {
    var isDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    function aplicarTema() {
        if (isDarkMode.matches) {
            document.body.classList.add('dark-mode');
            document.body.setAttribute('data-bs-theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.setAttribute('data-bs-theme', 'light');
        }
    }

    aplicarTema();

    isDarkMode.addEventListener('change', aplicarTema);
}

window.onload = function() {
    recargarTema();
};
