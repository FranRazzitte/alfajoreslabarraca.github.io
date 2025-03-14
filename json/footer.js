const footerBeforeLoad = document.getElementById('footerBeforeLoad');
const footerContainer = document.getElementById('footer');
const footerContent = document.createElement('div');
footerContent.id = 'footerContent';
footerContent.innerHTML = `
    <div class="text-lg-start bg-light">
		<!-- Btn Flotante -->
		<button id="btn_flotante" class="btn_flotante"><i class='bx bx-chevron-up'></i></button>
		<!-- ##### Sección 4 ##### -->
		<section>
		<div class="container text-md-start mt-5">
			<div class="row mt-3">
				<div class="col-md-3 col-lg-4 col-xl-2 mx-auto mb-4">
					<a href="https://alfajoreslabarraca.com.ar/"><img id="logoF" src="./imagenes/logo.png" alt="Alfajores la Barraca" class="rounded mx-auto d-block" style="width: 150px"></a>
				</div>
				<div class="col-md-3 col-lg-2 col-xl-3 mx-auto mb-4 btnIcon">
					<h6 lang="lb-text-footer-section:title-info" class="text-uppercase text-center fw-bold mb-4">Info</h6>
					<p lang="lb-text-footer-section:ubication-info"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: var(--clr-general);"><path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path></svg> Barracas, Buenos Aires</p>
					<p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: var(--clr-general);"><path d="M19 2H5C3.346 2 2 3.346 2 5v2.831c0 1.053.382 2.01 1 2.746V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5h4v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-9.424c.618-.735 1-1.692 1-2.746V5c0-1.654-1.346-3-3-3zm1 3v2.831c0 1.14-.849 2.112-1.891 2.167L18 10c-1.103 0-2-.897-2-2V4h3c.552 0 1 .449 1 1zM10 8V4h4v4c0 1.103-.897 2-2 2s-2-.897-2-2zM4 5c0-.551.448-1 1-1h3v4c0 1.103-.897 2-2 2l-.109-.003C4.849 9.943 4 8.971 4 7.831V5zm6 11H6v-3h4v3z"></path></svg><a lang="lb-text-footer-section:whatsapp-info" href="https://wa.me/c/5491120518253" class="text-reset text-decoration-none"> Catálogo WhatsApp</a></p>
					<p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: var(--clr-general);"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg><a lang="lb-text-footer-section:about-us-info" href="./nosotros" class="text-reset text-decoration-none"> Nosotros</a></p>
					<p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: var(--clr-general);"><path d="M12 4C9.243 4 7 6.243 7 9h2c0-1.654 1.346-3 3-3s3 1.346 3 3c0 1.069-.454 1.465-1.481 2.255-.382.294-.813.626-1.226 1.038C10.981 13.604 10.995 14.897 11 15v2h2v-2.009c0-.024.023-.601.707-1.284.32-.32.682-.598 1.031-.867C15.798 12.024 17 11.1 17 9c0-2.757-2.243-5-5-5zm-1 14h2v2h-2z"></path></svg><a lang="lb-text-footer-section:questions-info" href="./preguntas" class="text-reset text-decoration-none"> Preguntas Frecuentes</a></p>
				</div>
				<div class="col-md-3 col-lg-2 col-xl-3 mx-auto mb-4 btnIcon">
					<h6 lang="lb-text-footer-section:title-payments" class="text-uppercase text-center fw-bold mb-4">Medios de pago</h6>
					<p lang="lb-text-footer-section:cash-payments"><svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" class="icon_pago" viewBox="0 0 34 34" style="fill: rgba(0, 0, 0, 1);"><g><path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 11a3 3 0 0 0-3 3H7a3 3 0 0 0-3-3V9a3 3 0 0 0 3-3h10a3 3 0 0 0 3 3v6z"></path><path d="M12 8c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></g></svg>Efectivo</p>
					<p lang="lb-text-footer-section:transfer-payments"><svg xmlns="http://www.w3.org/2000/svg" height="27" width="27" class="icon_pago" viewBox="0 0 34 34" style="fill: rgba(0, 0, 0, 1);"><g><path d="M2 8v4.001h1V18H2v3h16l3 .001V21h1v-3h-1v-5.999h1V8L12 2 2 8zm4 10v-5.999h2V18H6zm5 0v-5.999h2V18h-2zm7 0h-2v-5.999h2V18zM14 8a2 2 0 1 1-4.001-.001A2 2 0 0 1 14 8z"></path></g></svg>Transferencia Bancaria</p>
					<p lang="lb-text-footer-section:mercado-pago-payments"><img src="./imagenes/mercadopago.jpg" alt="Mercado Pago" height="27" width="27" class="icon_pago">Mercado Pago</p>
				</div>
				<div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 btnIcon">
					<h6 lang="lb-text-footer-section:title-contact" class="text-uppercase text-center fw-bold mb-4">Contactos</h6>
					<p lang="lb-text-footer-section:email-contact"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: var(--clr-general);"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10c1.466 0 2.961-.371 4.442-1.104l-.885-1.793C14.353 19.698 13.156 20 12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8v1c0 .692-.313 2-1.5 2-1.396 0-1.494-1.819-1.5-2V8h-2v.025A4.954 4.954 0 0 0 12 7c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.45 0 2.748-.631 3.662-1.621.524.89 1.408 1.621 2.838 1.621 2.273 0 3.5-2.061 3.5-4v-1c0-5.514-4.486-10-10-10zm0 13c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z"></path></svg> alfajoreslabarraca@gmail.com</p>
					<p lang="lb-text-footer-section:phone-number-contact"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: var(--clr-general);"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path></svg><a href="https://wa.me/5491120518253" class="text-reset text-decoration-none"> +54 9 11 2051-8253</a></p>
					<p id="igFooter" class="d-none"><a lang="lb-text-footer-section:instagram-contact" href="https://www.instagram.com/alfajoreslabarraca1/" class="text-reset text-decoration-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: var(--clr-general);"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg> @alfajoreslabarraca1</a></p>
					<p id="fbFooter" class="d-none"><a  lang="lb-text-footer-section:facebook-contact" href="https://www.facebook.com/alfajoreslabarraca1" class="text-reset text-decoration-none"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: var(--clr-general);"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg> @alfajoreslabarraca1</a></p>
				</div>
			</div>
		</div>
		</section>
		<div class="footercopy text-center">
			<div>
				<p lang="lb-text-footer-section:slogan" style="font-size: 14px; margin: 0%;"><i class='bx bxs-heart eslogan' style="color: red;"></i> Los mejores momentos de la vida, se disfrutan comiendo, un buen alfajor <i class='bx bxs-heart eslogan' style="color: red;"></i></p>
				<p lang="lb-text-footer-section:copyright" style="font-size: 12px; margin: 0%;">© 2021 - 2025, Alfajores La Barraca. Todos los derechos reservados. Buenos Aires, Argentina.</p>
			</div>
			<div class="justify-content-center">
				<p lang="lb-innerHTML-footer-section:creator" style="font-size: 14px; margin: 0%;">Creado por <a href="https://www.instagram.com/franrazzitte/" class="text-reset">@franrazzitte</a></p>
			</div>
		</div>
	</div>
`;

footerBeforeLoad.remove();
footerContainer.appendChild(footerContent);

const igFooter = document.getElementById('igFooter');
const fbFooter = document.getElementById('fbFooter');

if (document.title != 'Alfajores La Barraca') {
    igFooter.classList.remove('d-none');
    fbFooter.classList.remove('d-none');
}

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