

const header = document.querySelector("[header]");
const navtoggle = document.querySelector("[navtoggle]");

navtoggle.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  navtoggle.classList.toggle("active");
});


const navlinks = document.querySelectorAll("[navlink]");

for (let i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navtoggle.classList.toggle("active");
  });
}


const backtop = document.querySelector("[to_top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backtop.classList.add("active");
  } else {
    header.classList.remove("active");
    backtop.classList.remove("active");
  }
});