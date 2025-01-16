var cookiesModal = document.getElementById('cookiesModal');
var btnAceptarCookies = document.getElementById('cookiesAceptar');
var politicaCookies = '0'
var cookiesVersion = 'V20250113'
var cookies = true

function cookiesHabilitadas(tipo) {
    try {
      const storage = window[tipo];
      const testKey = "__test__";
      storage.setItem(testKey, "test");
      storage.removeItem(testKey);
      return true;
    } catch (error) {
      console.error(`Error al acceder a ${tipo}:`, error);
      return false;
    }
}

btnAceptarCookies.addEventListener('click', () => {
    cookiesModal.classList.remove('d-block');
    document.body.style.overflow = 'auto';
    localStorage.setItem('politicaCookies', cookiesVersion);
})

document.addEventListener('DOMContentLoaded', () => {
    cookies = cookiesHabilitadas('localStorage');
    if (cookies) {
        politicaCookies = localStorage.getItem('politicaCookies');
        if (politicaCookies != cookiesVersion) {
            cookiesModal.classList.add('d-block');
            document.body.style.overflow = 'hidden';
        }
    }
})