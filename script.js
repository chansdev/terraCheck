import menuMobile from "./module/menuMobile.js";
import selectTerrario from "./module/selectTerrario.js";
import mostrarCriar from "./module/mostrarCriar.js";
import posicionarBt from "./module/posicionarBt.js";
import postar from "./module/postar.js";
import ajustarMenu from "./module/ajustarMenu.js";

menuMobile();
ajustarMenu();

if (window.location.href.slice(-14) == "terrarios.html") {
  selectTerrario();
  mostrarCriar();
  posicionarBt();
  postar();
}
