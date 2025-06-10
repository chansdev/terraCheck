export default function ajustarMenu() {
  let menu = document.querySelector("#navMobile");
  const area = document.querySelector("body");
  const bt = document.querySelector("#btMenu");

  function ajustar() {
    menu.style.left = area.getBoundingClientRect().x + "px";

    if (window.innerWidth > 500) {
      menu.style.width = 500 + "px";
    } else {
      menu.style.width = window.innerWidth + "px";
    }
  }

  window.addEventListener("resize", ajustar);
  ajustar();
}
