function iniciaModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('mostrar');
    modal.addEventListener('click', evento => {
      if (evento.target.id == modalId || evento.target.id == 'fecharModal') {
        modal.classList.remove('mostrar');
        form.reset();
      } else if (evento.target.id == 'cadastroAdd') {
        modal.classList.remove('mostrar');
      }
    });
  }
}

const btnCadastrarHome = document.querySelector('#btnHome');
btnCadastrarHome.addEventListener('click', function () {
  iniciaModal('modal-formulario');
});
