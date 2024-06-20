const initApp = () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const menuNav = document.getElementById("menu-nav");

  const toggleMenu = () => {
    mobileMenuBtn.classList.toggle("is_open");
    menuNav.classList.toggle("is_open");

    if (mobileMenuBtn.classList.contains("is_open")) {
      menuNav.addEventListener("click", toggleMenu);
    } else {
      menuNav.removeEventListener("click", toggleMenu);
    }
  };

  mobileMenuBtn.addEventListener("click", toggleMenu);
};

document.addEventListener("DOMContentLoaded", initApp);
