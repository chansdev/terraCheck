export default function selectTerrario() {
  const selecao = document.querySelector("#selectTerrario");
  const posts = document.querySelectorAll(".publicacao");

  selecao.addEventListener("change", () => {
    verificarPostagens();
  });

  selecao.addEventListener("click", () => {
    selecao.classList.toggle("ativo");
  });

  function verificarPostagens() {
    switch (selecao.value) {
      case "todos":
        posts.forEach((post) => {
          post.style.display = "grid";
        });
        break;

      case "aquatico":
        posts.forEach((post) => {
          if (post.classList.contains("aquatico")) {
            post.style.display = "grid";
          } else {
            post.style.display = "none";
          }
        });
        break;

      case "desertico":
        posts.forEach((post) => {
          if (post.classList.contains("desertico")) {
            post.style.display = "grid";
          } else {
            post.style.display = "none";
          }
        });
        break;

      case "tropical":
        posts.forEach((post) => {
          if (post.classList.contains("tropical")) {
            post.style.display = "grid";
          } else {
            post.style.display = "none";
          }
        });
        break;

      case "miniJardim":
        posts.forEach((post) => {
          if (post.classList.contains("miniJardim")) {
            post.style.display = "grid";
          } else {
            post.style.display = "none";
          }
        });
        break;
    }
  }
}
