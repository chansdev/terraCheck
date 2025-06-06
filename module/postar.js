export default function postar() {
    const local = document.querySelector(".publicacoes.enviadas");

    function Postagem() {
        const user = document.querySelector("#nomeUsuario").value;
        const desc = document.querySelector("#descricaoTerrario").value;
        const tipo = document.querySelector("#escolhaTerr").value;

        console.log(tipo)

        const post = document.createElement("div");
        post.classList.add("publicacao");
        const imgPost = document.createElement("div");
        imgPost.classList.add("img");
        const userName = document.createElement("h2");
        userName.classList.add("perfil", "titulo");
        const perfilFt = document.createElement("div");
        perfilFt.classList.add("perfil-ft");
        userName.appendChild(perfilFt);
        const descricaoTerr = document.createElement("p");
        descricaoTerr.classList.add("descricao", "texto");
        const interacoes = document.createElement("div");
        interacoes.classList.add("interacoes");

        post.appendChild(userName);
        post.appendChild(descricaoTerr);
        post.appendChild(interacoes);

        userName.innerText = userName.innerText + user;
        descricaoTerr.innerText = desc;

        switch (tipo) {
            case "aquatico":
                post.classList.add("aquatico");
                break;
            case "desertico":
                post.classList.add("desertico");
                break;
            case "tropical":
                post.classList.add("tropical");
                break;
            case "miniJardim":
                post.classList.add("miniJardim");
                break;
        }

        local.appendChild(post);
    }
    
    const btEnviar = document.querySelector("#btEnviar");
    
    btEnviar.addEventListener("click", function(e) {
    
        e.preventDefault();
        const areaPostar = document.querySelector("#areaPostar");
        const btPostar = document.querySelector("#btPostar");

        new Postagem();
        areaPostar.classList.remove("ativo");
        btPostar.classList.remove("ativo");
        
    
    });

       btEnviar.addEventListener("touchend", function(e) {
    
        e.preventDefault();
        const areaPostar = document.querySelector("#areaPostar");
        const btPostar = document.querySelector("#btPostar");

        new Postagem();
        areaPostar.classList.remove("ativo");
        btPostar.classList.remove("ativo");
        
    
    });
}
