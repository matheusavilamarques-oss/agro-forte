const botoes = document.querySelectorAll(".btn-noticia");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    alert("Em breve a notícia completa estará disponível!");
  });
});

const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  alert("Mensagem enviada com sucesso!");

  formulario.reset();
});
