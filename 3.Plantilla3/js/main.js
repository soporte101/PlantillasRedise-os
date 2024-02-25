var splide = new Splide(".slider__home", {
  classes: {
    arrows: "splide__arrows",
    arrow: "rounded-full",
    prev: "splide__arrow--prev absolute !left-5 top-1/2 transform-translate-y-1/2 scale-x-[1] min-w-[2.2rem] h-[2.2rem] border-2 flex items-center justify-center fill-white  shadow-sm focus:!outline-none [&>svg]:w-[1.3rem] lg:[&>svg]:w-[3rem] lg:min-w-[4rem] lg:h-[4rem] ",
    next: "splide__arrow--next absolute !right-5 top-1/2 transform-translate-y-1/2 scale-x-[1] min-w-[2.2rem] h-[2.2rem] border-2 flex items-center justify-center fill-white  shadow-sm focus:!outline-none [&>svg]:w-[1.3rem] lg:[&>svg]:w-[3rem] lg:min-w-[4rem] lg:h-[4rem]",
    pagination: "splide__pagination  focus:!outline-none",
    page: "splide__pagination__page border-2 border-solid  w-3 h-3  lg:w-4 lg:h-4 shadow-md focus:!outline-none",
  },
  rewind: true,
  autoplay: "play",
});
splide.mount();
