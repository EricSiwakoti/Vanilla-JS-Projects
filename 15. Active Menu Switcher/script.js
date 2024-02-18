// Active Menu Switcher

const navList = document.querySelector(".nav-list");

navList.addEventListener("click", (e) => {
  const navLink = e.target.parentElement;
  console.log(navLink);
  if (navLink.classList.contains("link")) {
    navList.querySelector(".active").classList.remove("active");
    navLink.classList.add("active");
  }
});
