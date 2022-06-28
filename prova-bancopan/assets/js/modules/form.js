import Users from './users.js';

export default class Form {
  constructor() {
    this.form = document.getElementById('form');
    this.msg = document.getElementById('msg');
    this.inputs = document.querySelectorAll('input');
    this.submit = document.getElementById('submit');
    this.validateInput = this.validateInput.bind(this);
    this.inputError = 0;
  }

  // Envia os dados preenchidos no formulário, para criar ou editar o usuário.
  submitForm() {
    this.form.addEventListener('submit', (e) => {
      const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        cpf: document.getElementById('cpf').value,
        phone: document.getElementById('phone').value,
      };
      const users = new Users();
      e.preventDefault();

      const userExist = users.getStorageUsers().find(item => item.cpf === user.cpf);
      if (userExist) {
        users.editUser(user);
      } else {
        users.createUser(user);
      }
    });
  }

  // Ativa os eventos de validação ao tirar o foco do input.
  eventInputs() {
    this.inputs.forEach((item) => {
      item.addEventListener('blur', () => this.validateInput(item));
    });
  }

  // Verifica se os campos foram preenchidos habilitando o submit.
  feedback() {
    this.inputs.forEach((item) => {
      if (item.value.length === 0) {
        this.inputError = +1;
      } else {
        this.inputError = 0;
      }
    });
    if (this.inputError === 0) {
      this.msg.innerHTML = '';
      this.submit.disabled = false;
    } else {
      this.msg.innerHTML = 'Os campos abaixo ser preenchidos';
      this.submit.disabled = true;
    }
  }

  // Adiciona e remove a classe de erro e sucesso nos inputs.
  validateInput(item) {
    if (item.value.length !== 0) {
      item.classList.remove('input-error');
      item.classList.add('input-success');
    } else {
      item.classList.add('input-error');
      item.classList.remove('input-success');
    }
    this.feedback();
  }

  // Limpa o formulário.
  clearForm() {
    this.inputs.forEach((input) => {
      input.value = '';
    });
  }

  // Regex para colocar a máscara no CPF.
  formatCPF(cpf) {
    return cpf
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  }

  // Regex para colocar a máscara no telefone.
  formatPhone(phone) {
    return phone
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d+?)$/, '$1');
  }

  // Inicia a classe do Formulário
  init() {
    this.eventInputs();
    this.submitForm();
  }
}
