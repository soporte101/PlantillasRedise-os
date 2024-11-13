tailwind.config = {
	theme: {
		extend: {
			colors: {
				gobColor: '#3366cc',
				gris: '#f2f2f2',
				grayColor: '#575656',
				greenFooter: '#107031',
				greenClear: '#a7c382',
				greenDestacados: '#22c55e',
				blueTitle: '#006eb6',
			},
			clipPath: {
				customPolygon: 'polygon(51% 0, 100% 16%, 100% 80%, 50% 100%, 0% 80%, 0 15%)',
			},
		},
	},
	plugins: [
		function ({ addUtilities, theme }) {
			addUtilities({
				'.clip-custom': {
					clipPath: theme('clipPath.customPolygon'),
				},
			});
		},
	],
};

const menu = document.getElementById('menu'),
	btnMenu = document.getElementById('btnMenu'),
	btnClose = document.getElementById('btnClose');

btnMenu.addEventListener('click', () => {
	menu.classList.toggle('translate-x-[-100%]');

	btnMenu.classList.toggle('hidden');
	btnClose.classList.toggle('hidden');

	document.body.style.overflow = 'hidden';
});

btnClose.addEventListener('click', () => {
	menu.classList.toggle('translate-x-[-100%]');

	btnMenu.classList.toggle('hidden');
	btnClose.classList.toggle('hidden');

	document.body.style.overflow = 'auto';
});

let swiperSlider = new Swiper('.sliderHome', {
	spaceBetween: 50,
	slidesPerView: 1,
	pagination: {
		el: '.pagination-banner',
		clickable: true,
	},
	autoplay: {
		delay: 3000,
	},

	navigation: {
		nextEl: '.swiper-button-next-slider',
		prevEl: '.swiper-button-prev-slider',
		bulletClass: 'swiper-pagination-bullet-active',
	},
});

let swiperIconos = new Swiper('.swiperIconos', {
	slidesPerView: '200px',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next-slider',
		prevEl: '.swiper-button-prev-slider',
	},
	breakpoints: {
		// when window width is >= 320px
		0: {
			slidesPerView: 1,
			spaceBetween: 10,
		},

		340: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 0,
		},
	},
});

let swiperNoticias = new Swiper('.swiperNoticias', {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.btn-noticias-next',
		prevEl: '.btn-noticias-prev',
	},
	breakpoints: {
		// when window width is >= 320px
		0: {
			slidesPerView: 1,
			spaceBetween: 10,
		},

		340: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1280: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});

//Funcion para obtener la fecha del sistema

function obtenerFechaFormateada() {
	const lblDateSystem = document.getElementById('lblDateSystem');

	const fechaActual = new Date();
	const opcionesFormato = {
		year: 'numeric',
		month: 'long',
		day: '2-digit',
	};

	const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesFormato);

	lblDateSystem.innerText = fechaFormateada;
}

let tab;
let tabContent;

window.onload = function () {
	tabContent = document.getElementsByClassName('tabContent');
	tab = document.getElementsByClassName('tab');

	hideTabsContent(1);
};

document.querySelector('#tabs').addEventListener('click', function (event) {
	let target = event.target;

	if (target.classList.contains('tab')) {
		for (let i = 0; i < tab.length; i++) {
			if (target == tab[i]) {
				showTabsContent(i);
				break;
			}
		}
	}
});

function hideTabsContent(a) {
	for (let i = a; i < tabContent.length; i++) {
		tabContent[i].classList.remove('show');
		tabContent[i].classList.add('hide');
		tab[i].classList.remove('whiteborder');
	}
}

function showTabsContent(b) {
	if (tabContent[b].classList.contains('hide')) {
		hideTabsContent(0);
		tab[b].classList.add('whiteborder');
		tabContent[b].classList.remove('hide');
		tabContent[b].classList.add('show');
	}
}

// Llamar a la función
obtenerFechaFormateada();
