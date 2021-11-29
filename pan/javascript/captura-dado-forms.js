const btnAdicionarCadastro = document.querySelector('#cadastroAdd');

var cadastroUnitario = [];
var cadastrados = [];
const form = document.querySelector('[data-form-add]');
const tabela = document.querySelector('[data-tabela]');

const btnExcluirr = document.querySelector('#btnExcluir');
btnAdicionarCadastro.addEventListener('click', function (evento) {
  evento.preventDefault();

  const render = async () => {
    const obtemCadastradoDoForm = form => {
      const cadastrados = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        cpf: form.cpf.value,
      };
      return cadastrados;
    };

    cadastroUnitario = obtemCadastradoDoForm(form);
    console.log(cadastroUnitario);

    //salva o cadastro no localstorage com a key : cpf
    const listaUsuarios = cadastroUnitario;
    localStorage.setItem(
      '' + listaUsuarios.cpf + '',
      JSON.stringify(cadastroUnitario)
    );
    //fim

    tabela.appendChild(
      criaNovoCard(
        cadastroUnitario.name,
        cadastroUnitario.cpf,
        cadastroUnitario.phone,
        cadastroUnitario.email
      )
    );
  };

  const criaNovoCard = (name, cpf, phone, email) => {
    const linhaUsuario = document.createElement('li');

    const conteudo = `
    <div class="mt-3 cardBody">
    <div class="card shadow-sm border-0">
    <div class="card-body d-flex justify-content-between">
    <div>
    <ul class="">
     <li class="liCard titleName">${name}</li>
     <li class="liCard"><span class="etiqueta">CPF:</span> ${cpf}</li>
     <li class="liCard"><span class="etiqueta">E-mail:</span> ${email}</li>
     <li class="liCard"><span class="etiqueta">Telefone:</span> ${phone}</li>
     </ul>
    </div>
    <div class="d-flex flex-column justify-content-evenly">
    <a class=""><img class="icon" src="./assets/icons8-editar-64.png" alt="ícone botão editar" /></a>
    <a class="btnExcluir"><img class="icon" src="./assets/icons8-cancelar-64.png" alt="ícone botão excluir " /></a>
    </div>
    </div>
    </div>
    </div>
    </div>
    `;
    linhaUsuario.innerHTML = conteudo;
    return linhaUsuario;
  };

  render();
});
