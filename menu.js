function myFunction(x) {
  const menu = document.querySelector(".menu");

  x.classList.toggle("change");
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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

  /* Scroll to top button */
  const topButton = document.querySelector(".top");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }
});
