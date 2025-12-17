const btnChangeLanguage = document.getElementById('btn-cambiar-idioma');
const dropdownMenuLanguage = document.getElementById('dropdownMenuLanguage');

function getCurrentLanguage() {
    const systemLang = navigator.language.toLowerCase();
    const [lang, region] = systemLang.split('-');
    if (lang === 'es') {
        const rioplatenses = ['ar', 'uy', 'py'];
        return {
            SystemLanguage: systemLang,
            PageLanguage: rioplatenses.includes(region) ? 'es-AR' : 'es-419',
            AvailableLanguage: true
        };
    }
    if (lang === 'en') {
        return {
            SystemLanguage: systemLang,
            PageLanguage: 'en',
            AvailableLanguage: true
        };
    }
    return {
        SystemLanguage: systemLang,
        PageLanguage: 'en',
        AvailableLanguage: false
    };
}

async function changeLanguage(lang) {
    try {
        if (lang === 'es-AR') return;
        const response = await fetch(`/lang/${lang}.json`);
        const translations = await response.json();
        const page = document.body.getAttribute('data-page');
        
        applyTranslations(translations.navbar, 'navbar');
        applyTranslations(translations.footer, 'footer');
        
        if (!page || !translations[page]) {
            console.warn("Translation not found for this page.", page);
            document.getElementById('language-unavailable').classList.remove('d-none');
        } else {
            applyTranslations(translations[page], page);
        }

    } catch (error) {
        console.error("Error loading translation.", error);
    }
}

function applyTranslations(section, location) {
    if (!section) return;
    if (!section['lb-test']) document.getElementById('language-unavailable').classList.remove('d-none');
    document.querySelectorAll('[lang]').forEach(el => {
        const key = el.getAttribute('lang');
        if (!key.includes(location)) return;
        const value = section[key];
        if (!value) return;
        if (key.includes("placeholder")) {
            el.setAttribute('placeholder', value);
            return;
        }
        if (key.includes("innerHTML")) {
            el.innerHTML = value;
            return;
        }
        el.textContent = value;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        if (!cookiesHabilitadas('localStorage')) btnChangeLanguage.classList.add('disabled');
        const selectedLanguage = cookiesHabilitadas('localStorage') ? localStorage.getItem('selectedLanguage') || 'default' : 'default';
        const btnLanguage = document.getElementById('lang_' + selectedLanguage.toLowerCase());
        document.getElementById('idioma-actual').textContent = btnLanguage.textContent;
        document.getElementById('idioma-actual').setAttribute('lang', btnLanguage.getAttribute('lang') || '');
        document.getElementById('lang_es-ar').classList.remove('selected');
        if (selectedLanguage === 'default') {
            const currentLanguage = getCurrentLanguage()['PageLanguage'];
            const btnCurrentLanguage = document.getElementById('lang_' + currentLanguage.toLocaleLowerCase());
            changeLanguage(currentLanguage);
            if (getCurrentLanguage()['AvailableLanguage']) {
                btnLanguage.classList.add('selected');
            } else {
                document.getElementById('lang_default').classList.add('disabled');
                btnCurrentLanguage.classList.add('selected');
                console.warn("Language not supported:", getCurrentLanguage()['SystemLanguage']);
            }
        } else {
            changeLanguage(selectedLanguage);
            btnLanguage.classList.add('selected');
        }
    } catch (error) {
        document.getElementById('idioma-actual').textContent = 'Unknown';
        console.error("An error occurred.", error);
    }
})

document.getElementById('lang_default').addEventListener("click", () => {
    localStorage.setItem('selectedLanguage', 'default');
    document.location.reload();
})

document.getElementById('lang_es-ar').addEventListener("click", () => {
    localStorage.setItem('selectedLanguage', 'es-AR');
    document.location.reload();
})

document.getElementById('lang_es-419').addEventListener("click", () => {
    localStorage.setItem('selectedLanguage', 'es-419');
    document.location.reload();
})

document.getElementById('lang_en').addEventListener("click", () => {
    localStorage.setItem('selectedLanguage', 'en');
    document.location.reload();
})

btnChangeLanguage.addEventListener('click', () => {
    dropdownMenuLanguage.classList.toggle('show-drop');
});

document.addEventListener('click', (event) => {
    if (!btnChangeLanguage.contains(event.target)) {
        dropdownMenuLanguage.classList.remove('show-drop');
    }
});