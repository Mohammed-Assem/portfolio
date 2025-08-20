

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
