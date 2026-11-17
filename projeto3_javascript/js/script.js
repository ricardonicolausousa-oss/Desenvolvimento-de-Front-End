const campoNome = document.getElementById("nome");
const campoArea = document.getElementById("area");
const botaoGerar = document.getElementById("botao-gerar");
const botaoTema = document.getElementById("botao-tema");
const resultado = document.getElementById("resultado");

function gerarOrientacao() {
  const nome = campoNome.value.trim();
  const area = campoArea.value;

  resultado.classList.remove("sucesso", "erro");

  if (nome === "") {
    resultado.textContent = "Por favor, digite seu nome para receber a orientação.";
    resultado.classList.add("erro");
    return;
  }

  if (area === "") {
    resultado.textContent = `${nome}, escolha uma área de interesse para continuar.`;
    resultado.classList.add("erro");
    return;
  }

  let dica = "";

  switch (area) {
    case "html":
      dica = "estrutura da página, tags semânticas, formulários e acessibilidade";
      break;
    case "css":
      dica = "cores, espaçamentos, Flexbox, Grid e responsividade";
      break;
    case "javascript":
      dica = "variáveis, funções, eventos e manipulação do DOM";
      break;
  }

  resultado.textContent = `Olá, ${nome}! Continue praticando ${dica}.`;
  resultado.classList.add("sucesso");
}

botaoGerar.addEventListener("click", gerarOrientacao);

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("tema-escuro");
});
