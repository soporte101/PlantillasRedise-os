//Configuración de colores generales
tailwind.config = {
    theme: {
      extend: {
        colors: {
          navColor: "#074984",
          gobColor: "#3366cc",
          gris: "#f2f2f2",
          grayColor: "#575656",
          greenFooter: "#107031",
          greenClear: "#a7c382",
          greenDestacados: "#22c55e",
          blueTitle: "#006eb6",
        },
      },
    },
  };
  
  const menuAnimations = {
    show: "slide-in-right",
    hide: "slide-out-right",
  };
  
  const menu = document.querySelector(".menu");
  const openMenuBtn = document.querySelector(".open-menu-btn");
  const closeMenuBtn = document.querySelector(".close-menu-btn");
  
  [openMenuBtn, closeMenuBtn].forEach((btn) => {
    btn.addEventListener("click", () => {
      menu.classList.toggle("open");
  
      if (!menu.classList.contains(menuAnimations.show)) {
        menu.classList.add(menuAnimations.show);
        menu.classList.remove(menuAnimations.hide);
      } else {
        menu.classList.add(menuAnimations.hide);
        menu.classList.remove(menuAnimations.show);
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth >= 1200) {
          if (menu.classList.contains(menuAnimations.hide)) {
            menu.classList.remove(menuAnimations.hide);
          }
        }
      });
      menu.style.transition = "transform 05.s ease";
    });
  });
  
  menu.addEventListener("transitionend", (e) => {
    e.target.removeAttribute("style");
  });
  
  menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      e.target.closest(".dropdown").classList.toggle("active");
    });
  });