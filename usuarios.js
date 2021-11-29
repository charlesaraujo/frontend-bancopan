let listaUsuario = [];

//atualiza usuarios no storage
function atualizaStorage(usuarios){
    localStorage.setItem("listaUsuario", JSON.stringify(usuarios))
}

//deleta usuario
function excluirUsuario(cpf){
    listaUsuario= listaUsuario.filter(usuario=>{
        return usuario.cpf != cpf;
    })
    criarNode();
}

//limpa o for depois do modal ser fechado
function linparForm(){
    document.getElementById("nomesobrenome").value = ""
    document.getElementById("email").value = ""
    document.getElementById("cpf").value = ""
    document.getElementById("telefone").value = ""
}

//cria novo usuario
function criarUsuario(e){

    const name = document.getElementById("nomesobrenome").value
    const email = document.getElementById("email").value
    const cpf = document.getElementById("cpf").value
    const phone = document.getElementById("telefone").value
    if(!name || !email || !cpf ||!phone ){
        return
    }

    e.stopPropagation()
    e.preventDefault()
    const usuario = {
        name, 
        email,
        cpf,
        phone        
    }
    listaUsuario.push(usuario)
    criarNode()

    const modal = document.getElementById("form") 
    modal.style.display= "none"
    const overlay = document.getElementById("overlay") 
    overlay.style.display= "none"
    document.body.style.overflow= "auto"

    linparForm()

}

function botaoCadastrar(){
    const cadastrar = document.getElementById("cadastrar")
    cadastrar.addEventListener("click", criarUsuario)
}

//formata o novo usuario
function criarTemplate(usuario){
    const node = document.createElement("div")
    node.innerHTML = `<div class="cliente">
                        <ul >
                            <li>
                                <h2 class="name">${usuario.name}</h2>
                            </li>
                            <li>
                                <h3 class="cliente-itens">CPF:</h3>
                                <p class="cliente-dados">${usuario.cpf}</p>
                            </li>
                            <li>
                                <h3 class="cliente-itens">E-mail:</h3>
                                <p class="cliente-dados">${usuario.email}</p>
                            </li>
                            <li>
                                <h3 class="cliente-itens">Telefone:</h3>
                                <p class="cliente-dados"> ${usuario.phone}</p>
                            </li>
                        </ul>
                        <div class="cliente-button">
                            <button id="close" class="editar" ><img class="editar-img" src="img/editar.PNG" /></button>
                            <button id="close" class="excluir" onclick="excluirUsuario('${usuario.cpf}')" ><img class="excluir-img" src="img/excluir.PNG" /></button>
                        </div>
                    </div>`;
    return node;
 }

 //fecha modal
function abrirModal(){
    const cadastrar = document.getElementById("adicionar")
    cadastrar.addEventListener("click",() => {
        const modal = document.getElementById("form") 
        modal.style.display= "block"
        const overlay = document.getElementById("overlay") 
        overlay.style.display= "block"
        document.body.style.overflow= "hidden"
    })
}

//abre modal
function fecharModal(){
    const fechar = document.getElementById("close")
    fechar.addEventListener("click",(e) => {
        e.stopPropagation()
        e.preventDefault()
        const modal = document.getElementById("form") 
        modal.style.display= "none"
        const overlay = document.getElementById("overlay") 
        overlay.style.display= "none"
        document.body.style.overflow= "auto"
    })
}
//criar lista clientes
function main() {
    const localPrenchido = localStorage.getItem("listaUsuario")
    if(localPrenchido){
        listaUsuario = JSON.parse(localPrenchido)
        criarNode()
        return
    }
    
 fetch("https://private-56d1e-charlesaraujodasilva.apiary-mock.com/users")
        .then(resposta => resposta.json())
        .then(usuarios=>{
            localStorage.setItem("listaUsuario", JSON.stringify(usuarios))
            listaUsuario = usuarios
            criarNode()
        })

};

//preenche o usuario
function criarNode(){
    atualizaStorage(listaUsuario)
        const mainDiv = document.getElementById("main")
        mainDiv.innerHTML="";
        for (i = 0; i < listaUsuario.length; i++){
            const node = criarTemplate(listaUsuario[i])
            mainDiv.appendChild(node)

        }
        
    
}
 
main();
abrirModal();
fecharModal();
botaoCadastrar();