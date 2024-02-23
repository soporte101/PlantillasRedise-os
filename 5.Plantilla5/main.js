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
        greenCardServices: "#22682f",
        greenDestacados: "#22c55e",
        blueTitle: "#006eb6",
        lightGreen: "#76b82a",
        bgSectionServices: "#dcdcdb",
      },
      height: {
        "400": "400px",
        "cardsHeight": "270px",
        "containerServices": "1235px",
        "heightNews": "1412px",
        "heightFirstNew": "700px",
        "95%": "95%",
      },
      width: {
        "cardsWidth": "280px",
        "400": "400px",
        "639": "639px",
        "1250": "1450px",
        "containerCards": "1280px",
        "1576": "1576px",
        "95%": "95%",
      },
      spacing: {
        '20px': '20px',
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
