export default function menuMobile() {
  const btMenu = document.querySelector("#btMenu");
  const menuMobile = document.querySelector("#navMobile");
  const menuHamburguer = document.querySelector("#menuHamburguer");

  btMenu.addEventListener("click", () => {
    menuMobile.classList.toggle("ativo");
    menuHamburguer.classList.toggle("ativo");
  });
}
