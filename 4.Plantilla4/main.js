
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

// var swiperSlider = new Swiper(".sliderHome", {
//   spaceBetween: 50,
//   slidesPerView: 1,
//   navigation: {
//     nextEl: ".swiper-button-next-slider",
//     prevEl: ".swiper-button-prev-slider",
//   },
// });

// var swiperIconos = new Swiper(".swiperIconos", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next-iconos",
//     prevEl: ".swiper-button-prev-iconos",
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     0: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },

//     340: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 10,
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 30,
//     },
//     1280: {
//       slidesPerView: 5,
//       spaceBetween: 30,
//     },
//   },
// });

// var swiperNoticias = new Swiper(".swiperNoticias", {
//   slidesPerView: 3,
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     // when window width is >= 320px
//     0: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },

//     340: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 10,
//     },
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//     1280: {
//       slidesPerView: 4,
//       spaceBetween: 30,
//     },
//   },
// });

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
document.addEventListener( 'DOMContentLoaded', function() {


  var splide = new Splide( '.splide',{
    classes: {
      arrows: 'splide__arrows your-class-arrows',
      arrow : 'splide__arrow your-class-arrow',
      prev  : 'splide__arrow--prev your-class-prev',
      next  : 'splide__arrow--next',
    },
    arrows: {
      next: "",
      prev: ""
    },
    autoplay:  true,
    type    : 'loop',
  } )
  splide.mount();

  // slider numero 2
  var splide = new Splide( '.slider__home', {
    perPage: 5,

    classes: {
      arrows: 'splide__arrows',
      arrow : 'rounded-full',
      prev  : 'splide__arrow--prev absolute !left-5 top-1/2 transform -translate-y-1/2 scale-x-[1] min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center bg-black bg-opacity-50 shadow-sm focus:!outline-none [&>svg]:w-[1.3rem]',
      next  : 'splide__arrow--next absolute !right-5 top-1/2 transform -translate-y-1/2 min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center shadow-sm focus:!outline-none [&>svg]:w-[1.3rem] bg-black bg-opacity-50',
      pagination: 'splide__pagination flex gap-1 right-[29rem] transform translate-x-1/2',
      page      : 'splide__pagination__page border-2 border-solid !bg-transparent w-4 h-4 shadow-md',
    },
    breakpoints: {
  
      640: {
        perPage: 3,
        gap    : '.7rem',
        height : '6rem',
      },
      480: {
        perPage: 1,
        gap    : '.7rem',
        height : '6rem',
      },
    },
    rewind : true,
    autoplay: 'play',
  });
  splide.mount();
})

splide.mount();

// Llamar a la función
obtenerFechaFormateada();
