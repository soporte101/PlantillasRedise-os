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
        greenEnlaceEncuesta: "#76b82a"
      },
      height: {
        "400": "400px"
      },
      width: {
        "400": "400px"
      },
    },
  },
};

const menu = document.getElementById("menu"),
  btnMenu = document.getElementById("btnMenu"),
  btnClose = document.getElementById("btnClose");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("translate-x-[-100%]");

  btnMenu.classList.toggle("hidden");
  btnClose.classList.toggle("hidden");

  document.body.style.overflow = "hidden";
});

btnClose.addEventListener("click", () => {
  menu.classList.toggle("translate-x-[-100%]");

  btnMenu.classList.toggle("hidden");
  btnClose.classList.toggle("hidden");

  document.body.style.overflow = "auto";
});

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

// slider with splide
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    classes: {
      arrows: 'splide__arrows your-class-arrows',
      arrow: 'splide__arrow your-class-arrow',
      prev: 'splide__arrow--prev your-class-prev bg-white',
      next: 'splide__arrow--next bg-white',
    },
    arrows: {
      next: "",
      prev: ""
    },
    autoplay: true,
    type: 'loop',
  });

  splide.mount();
});
// Llamar a la función
obtenerFechaFormateada();
