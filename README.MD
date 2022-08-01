# TesteFrontEndBancoPan

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 14.1.0.

## Download projeto

- Execute o download dos arquivos ou faça um `git clone` deste repositório.

## Executar Localmente

- 1 - Abra a pasta raiz do projeto, execute: `npm install`.
- 2 - Execute `ng s` ou exemplo:`ng s --port 4200` para abrir na porta selecionada.
- 3 - Navegue até `http://localhost:4200/`

## Acesso via web

- Acesse: `https://app-frontend-banco-pan.web.app/`

## Servidor de desenvolvimento

Execute `ng s` para um servidor dev. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.

## Ferramentas utilizadas

- BehaviorSubject da biblioteca RxJS.
- angular-input-masks.
- sweetalert2 // Modais de alerta.

## COMPODOC (gerador de documentação desenvolvido para projetos)

- Para executar a documetação: `compodoc -p tsconfig.doc.json -s`.

## Fluxo e Validações inseridas no projeto

- Ao carregar a aplicação, os 3 contatos ja disponiveis no endpoint são exibidos.
- Na tela inicial na cor vermelha se encontra o botão "REMOVER TODOS USUÁRIOS", ao clicar é exibido um modal de confirmação e caso seja confirmado, é excluído os contatos exibidos e limpo o LocalStorage.
- Para inserir novo usuário, clicar no botão "Adicionar usuário".
- O formulário tem validações no campo de nome, cpf, telefone e email.
    Campo nome: é obrigatório com limite de 60 caracteres.
    Campo cpf: é obrigatório, com validação de CPF.
    Campo telefone: é obrigatório, com validação de minimo de 10 caracteres(DDD+8 digitos para telefone fixo).
    Campo email: é obrigatório, com validação padrão de email do @angular/forms.
- Botão salvar fica desbilitado até que todos os campos estejam de acordo com as regras.
- Após salvar uma mensagem de sucesso é exibida e o novo usuário é adicionado a grid.
- Para atualizar o usuário adicionado ou outro ja cadastrado, basta clicar no icone de cor verde com icone de lápis. Um novo modal será exibido com os daos possiveis para edição. No modal de edição temos o campo de CPF definido como desabilitado para evitar a troca de CPF de usuário. Para salvar alteração basta cumprir com os critérios de validação para salvar a alteração.
- Para DELETAR o usuário individualmente, basta clicar no ícone vermelho com desenho de lixeira, um modal de confirmação é exibido para excluir logo na sequencia.
