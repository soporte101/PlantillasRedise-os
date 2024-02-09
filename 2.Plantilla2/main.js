//Configuración de colores generales
tailwind.config = {
  theme: {
    extend: {
      colors: {
        gobColor: "#3366cc",
        gris: "#f2f2f2",
        grayColor: "#575656",
        greenFooter: "#107031",
        greenClear: "#a7c382",
        greenDestacados: "#22c55e",
        blueTitle: "#006eb6",
        colorMunicipio: "#138f4c"
      },
    },
  },
};

const menu = document.getElementById("menu"),
  btnMenu = document.getElementById("btnMenu"),
  btnClose = document.getElementById("btnClose");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("translate-x-[-100%]");

  document.body.style.overflow = "hidden";
});

btnClose.addEventListener("click", () => {
  menu.classList.toggle("translate-x-[-100%]");


  document.body.style.overflow = "auto";
});

// document.addEventListener("DOMContentLoaded", function () {
//     var navbar = document.getElementById('navbar');

//     window.addEventListener('scroll', function () {
//         // Añadir clase 'fixed' al hacer scroll hacia abajo
//         if (window.scrollY > 0) {
//             navbar.classList.add('fixed');
//         } else {
//             // Remover clase 'fixed' al volver al inicio
//             navbar.classList.remove('fixed');
//         }
//     });
// });


var splide = new Splide( '.slider__home', {
  classes: {
    arrows: 'splide__arrows',
    arrow : 'rounded-full',
    prev  : 'splide__arrow--prev absolute !left-5 top-1/2 transform -translate-y-1/2 scale-x-[1] min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center bg-black bg-opacity-50 shadow-sm focus:!outline-none [&>svg]:w-[1.3rem]',
    next  : 'splide__arrow--next absolute !right-5 top-1/2 transform -translate-y-1/2 min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center shadow-sm focus:!outline-none [&>svg]:w-[1.3rem] bg-black bg-opacity-50',
    pagination: 'splide__pagination flex gap-1 right-[29rem] transform translate-x-1/2',
	  page      : 'splide__pagination__page border-2 border-solid !bg-transparent w-4 h-4 shadow-md',
  },
  rewind : true,
  autoplay: 'play',
});
splide.mount();

//Funcion para obtener la fecha del sistema

function obtenerFechaFormateada() {
  const lblDateSystem = document.getElementById("lblDateSystem");

  const fechaActual = new Date();
  const opcionesFormato = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  const fechaFormateada = fechaActual.toLocaleDateString(
    "es-ES",
    opcionesFormato
  );

  lblDateSystem.innerText = fechaFormateada;
}

// Llamar a la función
obtenerFechaFormateada();
