import Template from './template.js';
import Modal from './modal.js'

export default class Users {
  constructor(url, target) {
    this.storageName = 'listUsers';
    this.listUsers = [];
    this.url = url;
    this.userDiv = document.getElementById(target);
    this.titleModal = document.querySelectorAll('.text-change');
    this.deleteUser = this.deleteUser.bind(this);
  }

  // Busca os usuários da API
  getDataFetch() {
    fetch(this.url).then(resposta => resposta.json()).then((users) => {
      this.setStorageUsers(users);
      this.templateUsers(users);
    });
  }

  // Salva os usuários no Local Storage
  setStorageUsers(users) {
    this.listUsers = users;
    localStorage.setItem(this.storageName, JSON.stringify(users));
  }

  // Busca os usuários do Local Storage
  getStorageUsers() {
    const users = localStorage.getItem(this.storageName);
    return JSON.parse(users);
  }

  // Monta o template com a lista dos usuários
  templateUsers(users) {
    const template = new Template(users);
    template.init();
    this.userEvents();
  }

  // Verifica se o usuário existe no Local Storage e preenche os campos do form.
  getUser(cpf) {
    const user = this.getStorageUsers().find(item => item.cpf === cpf);

    const modal = new Modal();
    modal.modalWindow.classList.toggle('active');

    document.getElementById('name').value = user.name;
    document.getElementById('email').value = user.email;
    document.getElementById('cpf').value = user.cpf;
    document.getElementById('phone').value = user.phone;
  }

  // Cria o novo usuário, salva no Local Storage e atualiza o template.
  createUser(user) {
    const users = this.getStorageUsers();
    users.push(user);
    this.templateUsers(users);
    this.setStorageUsers(users);

    const modal = new Modal();
    modal.modalWindow.classList.toggle('active');
  }

  // Edita o usuário, salva no Local Storage e atualiza o template.
  editUser(user) {
    const users = this.getStorageUsers();

    const newUsers = users.map((item) => {
      if (item.cpf === user.cpf) {
        item.name = user.name;
        item.email = user.email;
        item.phone = user.phone;
      }
      return item;
    });

    this.templateUsers(newUsers);
    this.setStorageUsers(newUsers);

    const modal = new Modal();
    modal.modalWindow.classList.toggle('active');
  }

  // Deleta o usuário o usuário, salva no Local Storage e atualiza o template.
  deleteUser(cpf) {
    this.users = this.getStorageUsers().filter(user => user.cpf !== cpf);
    this.setStorageUsers(this.users);
    this.templateUsers(this.users);
  }

  // Cria os eventos dos botões e modifica as informações do modal.
  userEvents() {
    this.buttonDelete = document.querySelectorAll('[data-button="delete"]');
    this.buttonEdit = document.querySelectorAll('[data-button="edit"]');

    this.buttonDelete.forEach(item => item.addEventListener('click', () => this.deleteUser(item.getAttribute('data-user'))));

    this.buttonEdit.forEach(item => item.addEventListener('click', () => {
      this.getUser(item.getAttribute('data-user'));
      this.titleModal.forEach((title) => { title.innerHTML = 'Atualizar usuário'; });
      document.getElementById('submit').disabled = false;
    }));
  }

  // Inicia a classe verificando se existe usuários no local storage.
  init() {
    if (this.getStorageUsers() && this.getStorageUsers().length !== 0) {
      const users = this.getStorageUsers();
      this.templateUsers(users);
    } else {
      this.getDataFetch(this.url);
    }
    return this;
  }
}
