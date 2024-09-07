function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos
  let section = document.getElementById("resultados-pesquisa");
  console.log(section); // Para fins de depuração, mostra a seção no console

  let campoPesquisa = document.getElementById("campo-pesquisa").value

  // se campoPesquisa se for uma string sem nada
  if (campoPesquisa == "") {
    section.innerHTML = "<p>Imagine alguma coisa que lhe inspire!</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  // Cria um container scrollable para os resultados
  const scrollableContainer = document.createElement("div");
  scrollableContainer.classList.add("scrollable-container");

  // Itera sobre os dados da pesquisa e cria elementos HTML para cada resultado
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // cria um novo elemento
      scrollableContainer.innerHTML += `
        <section class="hero">
          <h3>${dado.titulo}</h3> <p>${dado.descricao}</p> <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Saiba Mais</a> </section>
      `;
    }
  }

  // Verifica se o container scrollable tem algum conteúdo
  if (scrollableContainer.innerHTML === "") {
    scrollableContainer.innerHTML = "<p>Que pena... Parece que não estamos olhando para o mesmo quadro. Não se preocupe... Imagine quantas vezes quiser!</p>";
  }

  // Adiciona o container scrollable à seção de resultados
  section.appendChild(scrollableContainer);
}