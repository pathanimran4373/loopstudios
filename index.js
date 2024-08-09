// let openBtn = document.getElementById("toggle-navbar-btn");
// let menu = document.getElementById("navigation-menus");
// let closeBtn = document.getElementById("closeBtn");
// openBtn.addEventListener('click', function toggleMenu(){
// menu.style.display = "block";
// closeBtn.style.display = "block"
// openBtn.style.display = "none"
// });
// closeBtn.addEventListener('click', function toggleMenu(){
// menu.style.display = "none";
// closeBtn.style.display = "none"
// openBtn.style.display = "block"
// });

const openBtn = document.getElementById("toggle-navbar-btn");
const menu = document.getElementById("navigation-menus");
const closeBtn = document.getElementById("closeBtn");

function toggleMenu() {
  menu.classList.toggle("hidden");
  closeBtn.classList.toggle("hidden");
  openBtn.classList.toggle("hidden");
}

openBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
