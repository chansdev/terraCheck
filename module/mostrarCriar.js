export default function mostrarCriar() {
    const areaPostar = document.querySelector("#areaPostar");
  const btPostar = document.querySelector("#btPostar");

  btPostar.addEventListener("click", () => {
    areaPostar.classList.toggle("ativo");
    btPostar.classList.toggle("ativo");
  });
}