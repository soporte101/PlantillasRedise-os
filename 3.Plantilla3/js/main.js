//Configuración de colores generales
tailwind.config = {
  theme: {
    extend: {
      colors: {
        gobColor: "#3366cc",
        primaryBlue: "#014883",
        secondaryBlue: "#3c63ad",
        hoverBlue: "#00b6ed",
        footerColor: "#3a5399",
        grisColor: "#f2f2f2",
      },
    },
  },
};

// const menu = document.getElementById("menu"),
//   btnMenu = document.getElementById("btnMenu"),
//   btnClose = document.getElementById("btnClose");

// btnMenu.addEventListener("click", () => {
//   menu.classList.toggle("translate-x-[-100%]");

//   btnMenu.classList.toggle("hidden");
//   btnClose.classList.toggle("hidden");

//   document.body.style.overflow = "hidden";
// });

// btnClose.addEventListener("click", () => {
//   menu.classList.toggle("translate-x-[-100%]");

//   btnMenu.classList.toggle("hidden");
//   btnClose.classList.toggle("hidden");

//   document.body.style.overflow = "auto";
// });

//Funcion para los submenus

function submenuActions() {
  const itemDropDown = document.querySelectorAll(".itemDropDown");

  itemDropDown.forEach((item) => {
    const dropDownMenu = item.querySelector(".dropDownMenu");
    item.addEventListener("mouseover", () => {
      dropDownMenu.classList.remove("max-h-0");
      dropDownMenu.classList.add("max-h-[700px]");
    });
    item.addEventListener("mouseout", () => {
      dropDownMenu.classList.remove("max-h-[700px]");
      dropDownMenu.classList.add("max-h-0");
    });
  });

  const subMenu = document.querySelectorAll(".subMenu");
  subMenu.forEach((item) => {
    const subMenuDown = document.querySelectorAll(".subMenuDown");
    const iconSub = document.querySelectorAll(".iconsub");
    item.addEventListener("mouseover", () => {
      subMenuDown.forEach((sub) => {
        sub.addEventListener("mouseover", () => {
          sub.classList.remove("max-h-0");
          sub.classList.add("max-h-[700px]");
        });
      });
      iconSub.forEach((icon) => {
        icon.classList.add("rotate-180");
      });

      console.log(subMenuDown.classList);
    });
    item.addEventListener("mouseout", () => {
      subMenuDown.classList.remove("max-h-[700px]");
      subMenuDown.classList.add("max-h-0");
      iconSub.classList.remove("rotate-180");
      console.log(subMenuDown.classList);
    });
  });
}

submenuActions();

//Funcion para obtener la fecha del sistema

// function obtenerFechaFormateada() {
//   const lblDateSystem = document.getElementById("lblDateSystem");

//   const fechaActual = new Date();
//   const opcionesFormato = {
//     year: "numeric",
//     month: "long",
//     day: "2-digit",
//   };

//   const fechaFormateada = fechaActual.toLocaleDateString(
//     "es-ES",
//     opcionesFormato
//   );

//   lblDateSystem.innerText = fechaFormateada;
// }

// // Llamar a la función
// obtenerFechaFormateada();
