const footerBeforeLoad = document.getElementById('footerBeforeLoad');
const footerContainer = document.getElementById('footer');
const footerContent = document.createElement('div');
footerContent.id = 'footerContent';
footerContent.innerHTML = `
	<!-- Notificación: Cookies -->
	<div class="modal fade show" style="backdrop-filter: blur(10px);" id="cookiesModal">
		<div class="modal-dialog">
			<div class="modal-content">
			<div class="modal-header">
				<h5 lang="lb-text-main-section:title-cookies" class="modal-title">Política sobre cookies</h5>
			</div>
			<div lang="lb-text-main-section:desc-cookies" class="modal-body">Utilizamos cookies únicamente para recordar tus preferencias de configuración. No utilizamos cookies de terceros ni recopilamos información personal. Al continuar navegando, aceptas el uso de estas cookies.</div>
			<div class="modal-footer">
				<button lang="lb-btn-main-section:btn-accept-cookies" type="button" class="btn btn-primary" id="cookiesAceptar">ACEPTAR</button>
			</div>
			</div>
		</div>
	</div>
    <div class="text-lg-start bg-light" style="background-color: var(--bs-body-bg) !important;">
		<!-- Chat -->
		<!-- <div id="chat" class="border" style="display: none; overflow: hidden; position: fixed; width: 25%; height: 75%; bottom: 90px; right: 15px; z-index: 2147483647; left: unset; border-radius: 15px; box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.377);">
			<iframe src="/chat/" frameborder="0" style="border: 0px; position: relative; top: 0px; left: 0px; width: 100%; height: 100%; max-height: 100vh; display: flex;"></iframe>
		</div> -->
		<!-- Btn Flotante -->
		<button id="btn_flotante" class="btn_flotante default"><svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="black" viewBox="0 0 24 24" ><path d="m7.71 15.71 4.29-4.3 4.29 4.3 1.42-1.42L12 8.59l-5.71 5.7z"></path></svg></button>
		<!-- <button id="btn_chat" class="btn_flotante chat icon-chat">
			<svg id="icon-chat" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style="display: none;"><path d="m12,2C6.49,2,2,6.49,2,12c0,2.12.68,4.19,1.93,5.9l-1.75,2.53c-.21.31-.24.7-.06,1.03.17.33.51.54.89.54h9c5.51,0,10-4.49,10-10S17.51,2,12,2Zm0,18h-7.09l1.09-1.57c.26-.37.23-.88-.06-1.22-1.25-1.45-1.93-3.3-1.93-5.21,0-4.41,3.59-8,8-8s8,3.59,8,8-3.59,8-8,8Z"></path></svg>
			<svg id="icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" style="display: none;"><path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path></svg>
		</button> -->
		<!-- ##### Sección 4 ##### -->
		<section>
			<div class="footer">
				<div class="footer-main">
					<div class="footer-logo d-flex" style="flex: 1">
						<a href="/">
							<img src="/img/logo.png" alt="Alfajores la Barraca">
						</a>
					</div>
					<div class="footer-container d-flex">
						<div class="footer-col">
							<h4 class="text-uppercase" lang="lb-text-footer-section:title-info">Información</h4>
							<ul>
								<li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c5.51 0 10-4.49 10-10S17.51 2 12 2 2 6.49 2 12s4.49 10 10 10M11 7h2v2h-2zm0 4h2v6h-2z"></path></svg> <a href="/nosotros" lang="lb-text-footer-section:about-us-info">Quiénes Somos</a></li>
								<li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="m12,2C6.49,2,2,6.49,2,12c0,2.12.68,4.19,1.93,5.9l-1.75,2.53c-.21.31-.24.7-.06,1.03.17.33.51.54.89.54h9c5.51,0,10-4.49,10-10S17.51,2,12,2Zm1,15h-2v-2h2v2Zm1.47-4.03c-.42.42-.92.72-1.47.88v.14h-2v-1c0-.55.45-1,1-1,.4,0,.78-.16,1.06-.44s.44-.66.44-1.06-.16-.78-.44-1.06c-.57-.57-1.55-.57-2.12,0-.28.28-.44.66-.44,1.06h-2c0-.93.36-1.81,1.03-2.47,1.32-1.32,3.63-1.32,4.95,0,.66.66,1.03,1.54,1.03,2.47s-.36,1.81-1.03,2.47Z"></path></svg> <a href="/preguntas" lang="lb-text-footer-section:questions-info">FAQ</a></li>
								<li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M5 2H19V4H5z"></path><path d="m19.1,5.8c-.38-.5-.97-.8-1.6-.8H6.5c-.63,0-1.23.3-1.6.8l-2.5,3.33c-.26.34-.4.77-.4,1.2v2.67c0,.55.45,1,1,1v7c0,.55.45,1,1,1h8c.55,0,1-.45,1-1v-7h6v8h2v-8c.55,0,1-.45,1-1v-2.67c0-.43-.14-.86-.4-1.2l-2.5-3.33Zm-8.1,14.2h-6v-6h6v6Z"></path></svg> <a href="https://wa.me/c/5491120518253" lang="lb-text-footer-section:whatsapp-info">Catálogo</a></li>
							</ul>
						</div>
						<div class="footer-col">
							<h4 class="text-uppercase" lang="lb-text-footer-section:title-payments">Medios de pago</h4>
							<ul>
								<li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="icon_pago" style="padding: 2px;" fill="currentColor" viewBox="0 0 24 24"><path d="M21 4H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1m-1 11c-1.66 0-3 1.34-3 3H7c0-1.66-1.34-3-3-3V9c1.66 0 3-1.34 3-3h10c0 1.66 1.34 3 3 3z"></path><path d="M12 8a4 4 0 1 0 0 8 4 4 0 1 0 0-8"></path></svg> <span lang="lb-text-footer-section:cash-payments">Efectivo</span></li>
								<li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="icon_pago" style="padding: 2px;" fill="currentColor" viewBox="0 0 24 24"><path d="M14 10H22V14H14z"></path><path d="m14,16c-1.1,0-2-.9-2-2v-4c0-1.1.9-2,2-2h8v-3c0-1.1-.9-2-2-2H4c-1.1,0-2,.9-2,2v14c0,1.1.9,2,2,2h16c1.1,0,2-.9,2-2v-3h-8Z"></path></svg> <span lang="lb-text-footer-section:transfer-payments">Transferencia Bancaria</span></li>
								<li><img class="icon_pago" src="/img/mercadopago.jpg" alt="Mercado Pago" style="height:24px;"> <span lang="lb-text-footer-section:mercado-pago-payments">Mercado Pago</span></li>
							</ul>
						</div>
					</div>
				</div>
				<!-- Conf -->
				<div class="footer-bottom">
					<div class="footer-container m-0" style="gap: 0">
						<div class="footer-col d-flex justify-content-center gap-1 footer-conf">
							<div class="dropdown">
								<button class="btn btn-dropdown btn-cambiar-tema d-flex align-items-center gap-2 text-start auto" id="btn-cambiar-tema">
									<svg id="light-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--clr-general)"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 60q-74.92 0-127.46-52.54Q300-405.08 300-480q0-74.92 52.54-127.46Q405.08-660 480-660q74.92 0 127.46 52.54Q660-554.92 660-480q0 74.92-52.54 127.46Q554.92-300 480-300ZM200-450H50v-60h150v60Zm710 0H760v-60h150v60ZM450-760v-150h60v150h-60Zm0 710v-150h60v150h-60ZM262.92-656.92l-93.69-90.46 42.39-44.39 90.23 92.69-38.93 42.16Zm485.46 488.69-90.84-93.31 39.54-41.54 93.69 90.46-42.39 44.39Zm-91.46-528.85 90.46-93.69 44.39 42.39-92.69 90.23-42.16-38.93ZM168.23-211.62l93.31-90.84 40.77 39.54-90.08 94.07-44-42.77ZM480-480Z"/></svg>
									<svg id="dark-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--clr-general)"><path d="M481.15-140q-141.66 0-240.83-99.17-99.16-99.16-99.16-240.83 0-135.77 92.11-232.88 92.11-97.12 225.57-105.2 8.62 0 16.93.62 8.3.62 16.3 1.85-30.61 28.61-48.76 69.15-18.16 40.54-18.16 86.46 0 98.33 68.84 167.17Q562.82-424 661.15-424q46.54 0 86.77-18.15 40.23-18.16 68.46-48.77 1.23 8 1.85 16.31.61 8.3.61 16.92-7.69 133.46-104.8 225.57Q616.92-140 481.15-140Zm0-60q88 0 158-48.5t102-126.5q-20 5-40 8t-40 3q-123 0-209.5-86.5T365.15-660q0-20 3-40t8-40q-78 32-126.5 102t-48.5 158q0 116 82 198t198 82Zm-10-270Z"/></svg>
									<svg id="auto-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--clr-general)"><path d="M594.23-648.08 488.46-753.85l105.77-105.76L700-753.85 594.23-648.08Zm200 120-65.77-65.77 65.77-65.76L860-593.85l-65.77 65.77ZM483-100q-79.77 0-149.61-30.27-69.85-30.27-121.85-82.27t-82.27-121.85Q99-404.23 99-484q0-131.38 80.12-234.04 80.11-102.65 207.19-134.65-11.08 96.31 19.84 186.77 30.93 90.46 99.62 159.15 68.69 68.69 159.15 99.62 90.46 30.92 186.77 19.84-31.38 127.08-134.35 207.19Q614.38-100 483-100Zm0-60q88 0 163-44t118-121q-86-8-163-43.69t-138-96.69q-61-61-97-137.81T323-766q-77 43-120.5 118.5T159-484q0 135 94.5 229.5T483-160Zm-20-305.38Z"/></svg>
									<div class="d-flex align-items-start" style="flex-direction: column">
										<span lang="lb-btn-footer-section:theme">Apariencia</span>
										<span style="color: var(--bs-secondary-color); font-size: 14px;" id="tema-actual">Igualar al Sistema</span>
									</div>
								</button>
								<ul class="dropdown-menu" id="dropdownMenuTheme">
									<li class="m-0"><button lang="lb-btn-footer-section:default" class="dropdown-item selected" id="auto-mode">Igualar al Sistema</button></li>
									<li class="m-0"><button lang="lb-btn-footer-section:light-mode" class="dropdown-item" id="light-mode">Modo Claro</button></li>
									<li class="m-0"><button lang="lb-btn-footer-section:night-mode" class="dropdown-item" id="dark-mode">Modo Oscuro</button></li>
								</ul>
							</div>
							<div class="dropdown">
								<button class="btn btn-dropdown d-flex align-items-center gap-2 text-start" id="btn-cambiar-idioma">
									<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" style="fill: var(--clr-general);"><path d="M480-100q-78.15 0-147.5-29.96t-120.96-81.58q-51.62-51.61-81.58-120.96T100-480q0-78.77 29.96-147.81t81.58-120.65q51.61-51.62 120.96-81.58T480-860q78.77 0 147.81 29.96t120.65 81.58q51.62 51.61 81.58 120.65T860-480q0 78.15-29.96 147.5t-81.58 120.96q-51.61 51.62-120.65 81.58T480-100Zm0-60.85q30.62-40.61 51.54-81.92 20.92-41.31 34.08-90.31H394.38q13.93 50.54 34.47 91.85 20.53 41.31 51.15 80.38Zm-77.46-11q-23-33-41.31-75.03-18.31-42.04-28.46-86.2H197.08q31.69 62.31 85 104.7 53.31 42.38 120.46 56.53Zm154.92 0q67.15-14.15 120.46-56.53 53.31-42.39 85-104.7H627.23q-12.08 44.54-30.39 86.58-18.3 42.04-39.38 74.65ZM171.92-393.08h148.7q-3.77-22.3-5.47-43.73-1.69-21.42-1.69-43.19 0-21.77 1.69-43.19 1.7-21.43 5.47-43.73h-148.7q-5.77 20.38-8.84 42.38-3.08 22-3.08 44.54t3.08 44.54q3.07 22 8.84 42.38Zm208.69 0h198.78q3.76-22.3 5.46-43.34 1.69-21.04 1.69-43.58t-1.69-43.58q-1.7-21.04-5.46-43.34H380.61q-3.76 22.3-5.46 43.34-1.69 21.04-1.69 43.58t1.69 43.58q1.7 21.04 5.46 43.34Zm258.77 0h148.7q5.77-20.38 8.84-42.38 3.08-22 3.08-44.54t-3.08-44.54q-3.07-22-8.84-42.38h-148.7q3.77 22.3 5.47 43.73 1.69 21.42 1.69 43.19 0 21.77-1.69 43.19-1.7 21.43-5.47 43.73Zm-12.15-233.84h135.69Q730.85-690 678.5-731.62q-52.35-41.61-121.04-56.92 23 34.92 40.92 76.39 17.93 41.46 28.85 85.23Zm-232.85 0h171.24q-13.93-50.16-35.04-92.43-21.12-42.27-50.58-79.8-29.46 37.53-50.58 79.8-21.11 42.27-35.04 92.43Zm-197.3 0h135.69q10.92-43.77 28.85-85.23 17.92-41.47 40.92-76.39-69.08 15.31-121.23 57.12-52.16 41.8-84.23 104.5Z"/></svg>
									<div class="d-flex align-items-start" style="flex-direction: column">
										<span lang="lb-btn-footer-section:language">Idioma</span>
										<span style="color: var(--bs-secondary-color); font-size: 14px;" id="idioma-actual">Igualar al Sistema</span>
									</div>
								</button>
								<ul class="dropdown-menu" id="dropdownMenuLanguage">
									<li class="m-0"><button class="dropdown-item" id="lang_default" lang="lb-btn-footer-section:default">Igualar al Sistema</button></li>
									<li class="m-0"><button class="dropdown-item selected" id="lang_es-ar">Español (Argentina)</button></li>
									<li class="m-0"><button class="dropdown-item" id="lang_es-419">Español (Latinoamérica)</button></li>
									<li class="m-0"><button class="dropdown-item" id="lang_en">English</button></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<p class="small text-center m-1" style="color: var(--bs-secondary-color) !important;" lang="lb-text-footer-section:language-warning"></p>
				<p class="small text-center d-none" style="color: var(--bs-secondary-color) !important;" id="language-unavailable" lang="lb-text-footer-section:language-unavailable"></p>
				<!-- Copyright -->
				<div class="footer-bottom">
					<div class="footer-container m-0" style="gap: 0">
						<div class="footer-col" style="margin-bottom: 5px; margin-top: 5px">
							<a href="https://wa.me/5491120518253"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M18.403 5.633A8.92 8.92 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a9 9 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.93 8.93 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.45 7.45 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.45 7.45 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.41 7.41 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73s-.354-.112-.504.112-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393s.149-.224.224-.374.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a10 10 0 0 0-.429-.008.83.83 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321 1.582 2.415 3.832 3.387c.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066s.187-.973.131-1.067-.207-.151-.43-.263" clip-rule="evenodd"></path></svg></a>
							<a href="https://www.instagram.com/alfajoreslabarraca/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M20.947 8.305a6.5 6.5 0 0 0-.419-2.216 4.6 4.6 0 0 0-2.633-2.633 6.6 6.6 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.6 6.6 0 0 0-2.185.42 4.6 4.6 0 0 0-2.633 2.633 6.6 6.6 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.6 4.6 0 0 0 2.634 2.632 6.6 6.6 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.6 6.6 0 0 0 2.186-.419 4.62 4.62 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709m-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246m4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078"></path><path d="M11.994 8.976a3.003 3.003 0 1 0 0 6.006 3.003 3.003 0 1 0 0-6.006"></path></svg></a>
							<a href="https://www.facebook.com/alfajoreslabarraca"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.06c-5.5 0-10 4.5-10 10 0 4.94 3.61 9.06 8.33 9.89l.06-.05h-.06v-7.06h-2.5v-2.78h2.5V9.84c0-2.5 1.61-3.89 3.89-3.89.72 0 1.5.11 2.22.22v2.56h-1.28c-1.22 0-1.5.61-1.5 1.39v1.94h2.67l-.44 2.78h-2.22v7.06h-.06l.06.05c4.72-.83 8.33-4.94 8.33-9.89 0-5.5-4.5-10-10-10"></path></svg></a>
						</div>
						<div class="footer-col" style="margin-bottom: 5px; margin-top: 5px">
							<p class="m-0" lang="lb-text-footer-section:copyright">© 2021-2026, Alfajores La Barraca. Todos los derechos reservados.</p>
						</div>
						<div class="footer-col" style="margin-bottom: 5px; margin-top: 5px">
							<p lang="lb-innerHTML-footer-section:creator">Creado por <a href="https://www.instagram.com/franrazzitte/">@franrazzitte</a></p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
`;

footerBeforeLoad.remove();
footerContainer.appendChild(footerContent);

// Desplazamiento Inicio

const botonFlotante = document.getElementById('btn_flotante');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    botonFlotante.classList.add('mostrar');
  } else {
    botonFlotante.classList.remove('mostrar');
  }
});

botonFlotante.addEventListener('click', () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

// Cookies

const cookiesModal = document.getElementById('cookiesModal');
const btnAceptarCookies = document.getElementById('cookiesAceptar');
let politicaCookies = '0';
let cookiesVersion = 'V20250113';

function cookiesHabilitadas(tipo) {
	try {
		const storage = window[tipo];
		const testKey = "__test__";
		storage.setItem(testKey, "test");
		storage.removeItem(testKey);
		return true;
	} catch (error) {
		return false;
	}
}

btnAceptarCookies.addEventListener('click', () => {
	cookiesModal.classList.remove('d-block');
	document.body.style.overflow = 'auto';
	localStorage.setItem('politicaCookies', cookiesVersion);
})

document.addEventListener('DOMContentLoaded', () => {
	if (cookiesHabilitadas('localStorage')) {
		politicaCookies = localStorage.getItem('politicaCookies');
		if (politicaCookies != cookiesVersion) {
			cookiesModal.classList.add('d-block');
			document.body.style.overflow = 'hidden';
		}
	}
})

// Chat

// const chat = document.getElementById('chat');
// const btnChat = document.getElementById('btn_chat');

// btnChat.addEventListener('click', () => {
// 	if (window.innerWidth <= 600) {
// 		window.location.href = '/chat/';
// 	} else {
// 		if (chat.style.display == 'flex') {
// 			chat.style.display = 'none';
// 			btnChat.classList.add('icon-chat');
// 			btnChat.classList.remove('icon-close');
// 		} else {
// 			chat.style.display = 'flex';
// 			btnChat.classList.remove('icon-chat');
// 			btnChat.classList.add('icon-close');
// 		}
// 	}
// })