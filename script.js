const posts = [
    {
      titulo: "Bolo de Morango 🍓",
      texto: "Novo bolo com morango fresco e chantilly.",
      imagem: "produto9.jpg"
    },
    {
      titulo: "",
      texto: "",
      imagem: ""
    },
    {
      titulo: "",
      texto: "",
      imagem: ""
    },
    {
      titulo: "",
      texto: "",
      imagem: ""
    },
    {
      titulo: "",
      texto: "",
      imagem: ""
    },
  ];
  
  let visiveis = 3;
  
  
  function exibirPosts() {
    const container = document.getElementById("feed");
    container.innerHTML = "";
    for (let i = 0; i < visiveis; i++) {
        const post = posts[i];
        container.innerHTML += `
          <div class="card">
            <img src="${post.imagem}" alt="${post.titulo}">
            <h3>${post.titulo}</h3>
            <p>${post.texto}</p>
          </div>
     `;
      }
    }
  
    if (visiveis >= posts.length) {
      document.getElementById("verMais").style.display = "none";
    }
  
  
  document.getElementById("verMais").addEventListener("click", () => {
    visiveis += 2;
    exibirPosts();
  });
  
  exibirPosts();