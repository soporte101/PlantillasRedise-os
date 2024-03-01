// slider Home
var splide = new Splide(".slider__home", {
  perPage: 1,
  classes: {
    arrows: "splide__arrows",
    arrow: "rounded-full",
    prev: "splide__arrow--prev absolute !left-5 top-[45%] transform-translate-y-1/2 scale-x-[1] min-w-[2.2rem] h-[2.2rem] border-2 flex items-center justify-center fill-white  shadow-sm focus:!outline-none [&>svg]:w-[1.3rem] lg:[&>svg]:w-[3rem] lg:min-w-[4rem] lg:h-[4rem] ",
    next: "splide__arrow--next absolute !right-5 top-[45%] transform-translate-y-1/2 scale-x-[1] min-w-[2.2rem] h-[2.2rem] border-2 flex items-center justify-center fill-white  shadow-sm focus:!outline-none [&>svg]:w-[1.3rem] lg:[&>svg]:w-[3rem] lg:min-w-[4rem] lg:h-[4rem]",
    pagination: "splide__pagination flex gap-1",
    page: "splide__pagination__page !bg-white w-3 h-3",
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
  rewind: true,
  autoplay: "play",
});
splide.mount();
// slider Home

// slider servicios al ciudadano
var splide = new Splide(".slider__servicios", {
  breakpoints: {
    1440: {
      perPage: 4,
      gap: ".1rem",
    },
    1280: {
      perPage: 4,
      gap: ".1rem",
    },
    1024: {
      perPage: 3,
      gap: ".1rem",
    },
    960: {
      perPage: 3,
      gap: ".1rem",
    },
    720: {
      perPage: 2,
      gap: ".1rem",
    },
    640: {
      perPage: 2,
      gap: ".1rem",
    },
    480: {
      perPage: 1,
      gap: ".1rem",
    },
  },
  perPage: 5,
  gap: ".1rem",
  perMove: 1,
  rewind: true,
  pagination: false,
  classes: {
    arrows: "splide__arrows",
    arrow: "rounded-full",
    prev: "splide__arrow--prev absolute bg-white shadow-md scale-x-[1] opacity-[0.5] hover:opacity-100 transition-all duration-500  min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center transition-all duration-500 hover:bg-gris shadow-sm focus:!outline-none [&>svg]:w-[1rem] top-[5rem] fill-blueServices",
    next: "splide__arrow--next absolute bg-white shadow-md opacity-[0.5] hover:opacity-100 transition-all duration-500   min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center transition-all duration-500 hover:bg-gris shadow-sm focus:!outline-none [&>svg]:w-[1rem] top-[5rem] fill-blueServices",
  },
});
splide.mount();
// slider servicios al ciudadano

//slider Noticias
var splide = new Splide(".slider__Noticias", {
  breakpoints: {
    1200: {
      perPage: 2,
      gap: "1rem",
    },
    992: {
      perPage: 1,
      gap: "1rem",
    },
    640: {
      perPage: 1,
      gap: "1rem",
    },
    480: {
      perPage: 1,
      gap: "1rem",
    },
  },
  perPage: 3,
  gap: "1rem",
  perMove: 1,
  rewind: true,
  pagination: false,
  classes: {
    arrows: "splide__arrows",
    arrow: "rounded-full",
    prev: "splide__arrow--prev absolute bg-white top-1/2   shadow-md scale-x-[1] opacity-[0.5] hover:opacity-100 cursor-pointer  min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center transition-all duration-500 hover:bg-gris shadow-sm focus:!outline-none [&>svg]:w-[1rem]  fill-blueServices",
    next: "splide__arrow--next absolute bg-white top-1/2    shadow-md scale-x-[1] opacity-[0.5] hover:opacity-100  cursor-pointer  min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center transition-all duration-500 hover:bg-gris shadow-sm focus:!outline-none [&>svg]:w-[1rem]  fill-blueServices",
  },
});
splide.mount();
//slider Noticias

//slider patrocinadores
var splide = new Splide(".patrocinadores", {
  breakpoints: {
    1920: {
      perPage: 6,
      gap: ".5rem",
    },
    1440: {
      perPage: 6,
      gap: ".5rem",
    },
    1280: {
      perPage: 5,
    },
    1024: {
      perPage: 5,
      gap: ".5rem",
    },
    960: {
      perPage: 4,
      gap: ".5rem",
    },
    720: {
      perPage: 4,
      gap: ".5rem",
    },
    640: {
      perPage: 3,
      gap: ".5rem",
    },
    480: {
      perPage: 2,
      gap: ".5rem",
    },
  },
  perPage: 4,
  gap: ".5rem",
  perMove: 1,
  autoplay: "play",
  rewind: true,
  pagination: false,
  classes: {
    arrows: "splide__arrows",
    arrow: "rounded-full",
    prev: "splide__arrow--prev absolute !left-[-3rem] scale-x-[1] top-[0.5rem] lg:top-[2rem] min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center focus:!outline-none [&>svg]:w-[1rem]",
    next: "splide__arrow--next absolute !right-[-3rem] top-[0.5rem] lg:top-[2rem] min-w-[2.2rem] h-[2.2rem] border-0 flex items-center justify-center focus:!outline-none [&>svg]:w-[1rem]",
  },
});
splide.mount();
//slider patrocinadores

/*Tabs redes sociales */

let tabs = document.querySelector("#tabs");

tabs.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.closest(".tabRedes")) {
    let tabSelected = e.target.closest(".tabRedes").dataset.target;
    let tabSelected2 = e.target.closest(".tabRedes");

    let tabLater = document.querySelector(".activeTab");

    const tabActive = document.querySelectorAll(".tab-active");

    tabActive.forEach((item) => {
      item.addEventListener("click", () => {
        // Iterar sobre todos los elementos y quitar la clase si la tienen
        tabActive.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove("border-blackTitle");
          }
        });

        // Alternar la clase en el elemento actual
        item.classList.toggle("border-blackTitle");
      });
    });

    tabLater.classList.remove("activeTab");

    tabSelected2.classList.add("activeTab");

    let itemsRedes = [...document.querySelectorAll(".itemRed")];

    for (const i in itemsRedes) {
      if (tabSelected == itemsRedes[i].dataset.select) {
        itemsRedes[i].classList.remove("hidden");
      } else {
        itemsRedes[i].classList.add("hidden");
      }
    }
  }
});
