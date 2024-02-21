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

var splide = new Splide( '.eventos',{
  breakpoints: {
    1920: {
      perPage: 2,
      gap    : '.5rem',
    },
    1440: {
      perPage: 2,
      gap    : '.5rem',
    },
    1280: {
      perPage: 2,
    },
    1024: {
      perPage: 2,
      gap    : '.5rem',
    },
    960: {
      perPage: 2,
      gap    : '.5rem',
    },
    720: {
      perPage: 2,
      gap    : '.5rem',
    },
    640: {
      perPage: 1,
      gap    : '.5rem',
    },
    480: {
      perPage: 1,
      gap    : '.5rem',
    },
  },
  perPage: 2,
  gap: ".5rem",
  perMove: 1,
  rewind : true,
  pagination: false,
  classes: {
      arrows: 'splide__arrows',
      arrow : 'rounded-full',
      prev  : 'splide__arrow--prev absolute scale-x-[1] min-w-[1.7rem] h-[1.7rem] border-0 flex items-center justify-center bg-colorMunicipio shadow-sm focus:!outline-none [&>svg]:w-[1rem] left-[-2em]',

      next  : 'splide__arrow--next absolute min-w-[1.7rem] h-[1.7rem] border-0 flex items-center justify-center bg-colorMunicipio shadow-sm focus:!outline-none [&>svg]:w-[1rem] right-[-2em]',
  },
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

/*Tabs redes sociales */

let tabs = document.querySelector('#tabs');

tabs.addEventListener('click',(e)=>{

  e.preventDefault();

  if(e.target.closest('.tabRedes')){
    let tabSelected = e.target.closest('.tabRedes').dataset.target;
    let tabSelected2 = e.target.closest('.tabRedes');

    let tabLater = document.querySelector('.activeTab');

    tabLater.classList.remove('activeTab');

    tabSelected2.classList.add('activeTab');

    let itemsRedes = [...document.querySelectorAll('.itemRed')];

    for (const i in itemsRedes) {
      if(tabSelected == itemsRedes[i].dataset.select){
        itemsRedes[i].classList.remove('hidden');
      }
      else{
        itemsRedes[i].classList.add('hidden');
      }
    }

    
  }
})