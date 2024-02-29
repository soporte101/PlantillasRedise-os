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
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".slider__home", {
    classes: {
      arrows: "splide__arrows",
      arrow: "rounded-full",
      prev: "splide__arrow--prev absolute !left-5 top-1/2 transform -translate-y-1/2 scale-x-[1] min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center bg-black bg-opacity-50 shadow-sm focus:!outline-none [&>svg]:w-[1.3rem]",
      next: "splide__arrow--next absolute !right-5 top-1/2 transform -translate-y-1/2 min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center shadow-sm focus:!outline-none [&>svg]:w-[1.3rem] bg-black bg-opacity-50",
      pagination:
        "splide__pagination flex gap-1 right-[29rem] transform translate-x-1/2",
      page: "splide__pagination__page border-2 border-solid !bg-transparent w-4 h-4 shadow-md",
    },
    rewind: true,
    autoplay: "play",
  });
  splide.mount();

  // slider numero 2
  var splide = new Splide(".slider__home", {
    perPage: 5,

    classes: {
      arrows: "splide__arrows",
      arrow: "rounded-full",
      prev: "splide__arrow--prev absolute !left-5 top-1/2 transform -translate-y-1/2 scale-x-[1] min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center bg-black bg-opacity-50 shadow-sm focus:!outline-none [&>svg]:w-[1.3rem]",
      next: "splide__arrow--next absolute !right-5 top-1/2 transform -translate-y-1/2 min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center shadow-sm focus:!outline-none [&>svg]:w-[1.3rem] bg-black bg-opacity-50",
      pagination:
        "splide__pagination flex gap-1 right-[29rem] transform translate-x-1/2",
      page: "splide__pagination__page border-2 border-solid !bg-transparent w-4 h-4 shadow-md",
    },
    breakpoints: {
      640: {
        perPage: 3,
        gap: ".7rem",
        height: "6rem",
      },
      480: {
        perPage: 1,
        gap: ".7rem",
        height: "6rem",
      },
    },
    rewind: true,
    autoplay: "play",
  });
  splide.mount();
});

splide.mount();

// Llamar a la función
obtenerFechaFormateada();
