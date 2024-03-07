var splide = new Splide(".slider__home", {
  classes: {
    arrows: "splide__arrows",
    arrow: "rounded-full",
    prev: "splide__arrow--prev absolute !left-5 top-1/2 transform-translate-y-1/2 scale-x-[1] min-w-[2.2rem] h-[2.2rem] border-2 flex items-center justify-center fill-white  shadow-sm focus:!outline-none [&>svg]:w-[1.3rem] lg:[&>svg]:w-[3rem] lg:min-w-[4rem] lg:h-[4rem] z-20",
    next: "splide__arrow--next absolute !right-5 top-1/2 transform-translate-y-1/2 scale-x-[1] min-w-[2.2rem] h-[2.2rem] border-2 flex items-center justify-center fill-white  shadow-sm focus:!outline-none [&>svg]:w-[1.3rem] lg:[&>svg]:w-[3rem] lg:min-w-[4rem] lg:h-[4rem] z-20",
    pagination: "splide__pagination  focus:!outline-none",
    page: "splide__pagination__page border-2 border-solid  w-3 h-3  lg:w-4 lg:h-4 shadow-md focus:!outline-none",
  },
  rewind: true,
  autoplay: "play",
});
splide.mount();

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

// Funcionalidad navbarSticky
