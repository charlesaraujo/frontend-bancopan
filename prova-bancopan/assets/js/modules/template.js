import Form from './form.js'

export default class Template {
  constructor(users) {
    this.users = users;
    this.usersContainer = document.getElementById('users');
  }

  // Cria o template removendo o conteúdo anterior
  createTemplate(){
    this.usersContainer.innerHTML = "";
    for (let i = 0; i < this.users.length; i++){
      const template = this.templateModel(this.users[i]);
      this.usersContainer.innerHTML += template;
    }
  }

  // Modelo do template populando os dados do usuário e formatando o campo de CPF e Telefone.
  templateModel(user){
    const form = new Form();
    const templateHTML = `<li class="user">
        <h2 class="name">${user.name}</h2>
        <p><strong>CPF:</strong> ${form.formatCPF(user.cpf)}</p>
        <p><strong>E-mail:</strong> ${user.email}</p>
        <p><strong>Telefone:</strong> ${form.formatPhone(user.phone)}</p>
        <div class="area-buttons">
            <button class="btn btn-small btn-edit" data-button="edit" data-user="${user.cpf}">
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 14L12 12.5L9.98 8L10 6H8.86L6 0L3 6H1.98V8L0 12.5L1.5 14L3 8H9L10.5 14Z" fill="white"/>
                </svg>
            </button>
            <button class="btn btn-small btn-delete" data-button="delete" data-user="${user.cpf}">
                <svg width="8" height="8" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z" fill="white"/>
                </svg>
            </button>
        </div>
    </li>`;
    return templateHTML;
  }
  
  // Inicia a classe para criar o template.
  init(){
    this.createTemplate();
    return this;
  }
}