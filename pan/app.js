const Url = 'https://private-56d1e-charlesaraujodasilva.apiary-mock.com';

let cadastrados = fetch(`${Url}/users`).then(res => {
  if (res.ok) {
    return res.json();
  }
  throw new Error('Não foi possível conectar com o servidor');
});

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

//const elementos = JSON.parse(localStorage.getItem('')) || [];
const tabela = document.querySelector('[data-tabela]');

const render = async () => {
  try {
    const listaUsuarios = await cadastrados;

    listaUsuarios.forEach(elemento => {
      tabela.appendChild(
        criaNovoCard(
          elemento.name,
          elemento.cpf,
          elemento.phone,
          elemento.email
        )
      );
    });
  } catch (erro) {
    console.log(erro);
  }
};

render();
