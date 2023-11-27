function myFunction(x) {
  const menu = document.querySelector(".menu");

  x.classList.toggle("change");
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".ham-menu");
  const hamburger = document.querySelector(".hamburger");

  function toggleMenu() {
    hamburger.classList.remove("change");

    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
    } else {
      menu.classList.add("showMenu");
    }
  }

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  });
});


