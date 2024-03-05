

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
      arrow: 'splide__arrow your-class-arrow w-12 h-12 rounded-full',
      prev: 'splide__arrow--prev your-class-prev bg-white',
      next: 'splide__arrow--next bg-white',
      pagination: 'splide__pagination flex gap-1 right-[29rem] transform translate-x-1/2',
      page      : 'splide__pagination__page border-2 border-solid bg-primaryColor w-4 h-4 shadow-md',
    },
    arrows: {
      next: "",
      prev: ""
    },
    breakpoints: {
      1920: {
        perPage: 1,
        gap: ".5rem",
      },
      1440: {
        perPage: 1,
        gap: ".5rem",
      },
      1280: {
        perPage: 1,
      },
      1024: {
        perPage: 1,
        gap: ".5rem",
      },
      960: {
        perPage: 1,
        gap: ".5rem",
      },
      720: {
        perPage: 1,
        gap: ".5rem",
      },
      640: {
        perPage: 1,
        gap: ".5rem",
      },
      480: {
        perPage: 1,
        gap: ".5rem",
      },
    },
    autoplay: true,
    type: 'loop',
  });

  splide.mount();

  var splide = new Splide( '.patrocinadores',{
    breakpoints: {
      1920: {
        perPage: 6,
        gap    : '.5rem',
      },
      1440: {
        perPage: 6,
        gap    : '.5rem',
      },
      1280: {
        perPage: 5,
      },
      1024: {
        perPage: 5,
        gap    : '.5rem',
      },
      960: {
        perPage: 4,
        gap    : '.5rem',
      },
      720: {
        perPage: 4,
        gap    : '.5rem',
      },
      640: {
        perPage: 3,
        gap    : '.5rem',
      },
      480: {
        perPage: 2,
        gap    : '.5rem',
      },
    },
    perPage: 4,
    gap: ".5rem",
    perMove: 1,
    autoplay: "play",
    rewind : true,
    pagination: false,
    classes: {
        arrows: 'splide__arrows',
        arrow : 'rounded-full',
        prev  : 'splide__arrow--prev absolute !left-[-3rem] scale-x-[1] top-2 min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center focus:!outline-none [&>svg]:w-[1rem]',
        next  : 'splide__arrow--next absolute !right-[-3rem] top-2 min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center focus:!outline-none [&>svg]:w-[1rem]',
    },
  });
  
  splide.mount();
  
});
// Llamar a la función
obtenerFechaFormateada();
