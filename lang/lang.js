// document.getElementById('language-selector').addEventListener('change', function () {
//     changeLanguage(this.value);
// });

changeLanguage('es_ES')

async function changeLanguage(lang) {
    try {
        const response = await fetch(`./lang/${lang}.json`);
        const translations = await response.json();

        // Detectar la página actual
        const page = document.body.getAttribute('data-page');

        if (!page || !translations[page]) {
            console.warn("No se encontraron traducciones para esta página:", page);
            return;
        }

        // Aplicar traducciones del navbar
        applyTranslations(translations.navbar, 'navbar');

        // Aplicar traducciones del footer
        applyTranslations(translations.footer, 'footer');

        // Aplicar traducciones de la página específica
        applyTranslations(translations[page], page);

        localStorage.setItem('selectedLanguage', lang);
    } catch (error) {
        console.error("Error al cargar las traducciones", error);
    }
}

// Función para aplicar traducciones a los elementos con lang
function applyTranslations(section, location) {
    if (!section) return;
    
    document.querySelectorAll('[lang]').forEach(element => {
        let key = element.getAttribute('lang');
        if (key.includes(location)) {
            if (key.includes("placeholder")) {
                element.setAttribute('placeholder', section[key] || key);
            } if (key.includes("innerHTML")) {
                element.innerHTML = section[key];
            } else {
                element.childNodes.forEach(node => {
                    if (node.nodeType === Node.TEXT_NODE) {
                        node.nodeValue = section[key] || key;
                    }
                });
            }
        }
    });
}

// Cargar el idioma guardado
// document.addEventListener("DOMContentLoaded", () => {
//     const savedLang = localStorage.getItem('selectedLanguage') || 'es_ES';
//     document.getElementById('language-selector').value = savedLang;
//     changeLanguage(savedLang);
// });
