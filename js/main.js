// * Html elemanlarina eris
const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("nav");

// * Menu Butonuna tiklaninca nav kismini ac-kapa yapan fonksiyon

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
