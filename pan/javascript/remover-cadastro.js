const cadastrados = document.querySelectorAll('.cardBody');
const cards = document.querySelector('[data-tabela]');

cards.addEventListener('dblclick', function (evento) {
  evento.target.parentNode.classList.add('fadeOut');
  setTimeout(function () {
    evento.target.parentNode.remove();
  }, 100);
}); //duplo click remove o elemento da tela -- erro ao capturar link para fechar

//falta a lógica de remover do local storage
