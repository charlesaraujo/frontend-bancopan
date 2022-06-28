import Form from './form.js';

export default class Modal {
  constructor(modalButton = '[data-modal="button"]', modalWindow = '[data-modal="modal"]', events) {
    this.modalButton = document.querySelectorAll(modalButton);
    this.modalWindow = document.querySelector(modalWindow);
    this.titleModal = document.querySelectorAll('.text-change');
    this.activeClass = 'active';

    if (events === undefined) this.events = ['click'];
    else this.events = events;

    this.eventModal = this.eventModal.bind(this);
  }

  // Cria o Modal e limpa os campos do formulário se precisar cadastrar o usuário
  eventModal() {
    this.modalWindow.classList.toggle(this.activeClass);
    this.modalButton.forEach(item => item.classList.toggle(this.activeClass));
    this.titleModal.forEach((item) => { item.innerHTML = 'Cadastrar usuário'; });
    const form = new Form();
    form.clearForm();
  }

  // Adiciona os eventos do modal como touch ou click.
  addModalEvents() {
    this.events.forEach(evento => this.modalButton.forEach(
      (item) => { item.addEventListener(evento, this.eventModal)}
    ));
  }

  // Inicia a classe verificando se existe o botão e o modal.
  init() {
    if (this.modalButton && this.modalWindow) {
      this.addModalEvents();
    }
    return this;
  }
}
