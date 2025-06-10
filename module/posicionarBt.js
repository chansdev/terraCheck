export default function posicionarBt() {
  const area = document.querySelector("#terrarios");
  const bt = document.querySelector("#btPostar");
  const menuMobile = document.querySelector("#navMobile");

  function posicionar() {
    bt.style.right = area.getBoundingClientRect().left + 20 + "px";
  }

  posicionar();

  window.addEventListener("resize", posicionar);
}
