<img src="https://www.bancopan.com.br/bancopan-institucional/conteudo/estrutura/assets/img/mh-icons/mh-icon--logo-desktop.svg" width="120" alt="Banco Pan">

# Tecnologias utilizadas

- Angular - Framework
- NGRX - Gerenciamento de Estado **Justificativa:** A mais completa e mais utilizada no mercado.
- Jest - Teste Unitários **Justificativa:**  Bastante utilizado no mercado, mais rápido, maior suporte a linha de comando, coverage, etc.
- PrimeIcons - Ícones **Justificativa:** Lib relativamente pequena comparada as padrões como FontAwesome, somente para os poucos ícones da aplicação.
- BEMCSS (Block, Element, Modifier) - **Justificativa:** Para organização do css. Não utilizei nenhuma lib como bootstrap etc, somente SCSS puro, o intuito era deixar a aplicação mais simples e leve possível.

# Instruções 

```
// Instalar os pacotes
npm install

// Rodar o projeto (DEV)
npm start

// Rodar os testes
npm run test

// Cobertura de testes
npm run test:coverage

// Build
npm run build
```

# Front-end

Bem-vindo(a) ao nosso teste para desenvolvedor(a) front-end.

## Sobre o teste

Nosso teste consiste em codificar uma interface baseado nas imagens a baixo:

#### Home

<img src="layout/home.png" width="400" alt="Banco Pan">

#### Cadastro

<img src="layout/cadastro.png" width="400" alt="Banco Pan">

## Requisitos

### Requisitos obrigatórios

- Documentação
  - Instruções de instalação, inicialização e testes ✅
  - Descrição sobre as tecnologias utilizadas no projeto ✅
- Design responsivo ✅
- Use endpoint a seguir para pegar os dados iniciais dos usuários. ✅
  - GET: https://private-56d1e-charlesaraujodasilva.apiary-mock.com/users
- Utilize os cookies ou localstorage como banco de dados. ✅
- Deve conter cadastro e remoção de usuário, edição é opcional. ✅✅
- Pelo menos uma estratégia para organização do CSS ✅

### Você pode

- Utilizar qualquer framework JS moderno (Angular ✅)
- Utilizar bibliotecas para o gerenciamento de estado (NGRX ✅)
- Utilizar pré ou pós-processadores de CSS, bem como frameworks e/ou starterpacks (Sass, PostCSS, CSS Modules, Styled Components...)
- Alterar a proposta do layout caso necessário ✅

### O que gostaríamos de ver

- Apesar de frameworks e libs ajudarem muito no nosso dia a dia, gostaríamos muito mais de ver o seu código em Vanilla JS ✅
- Testes unitários, e2e e/ou coverage (JEST) ✅
- Uma arquitetura consistente, focada na simplicidade do projeto✅
- Justifique a utilização das tecnologias adotadas - quais foram os pontos positivos e negativos que elas trouxeram? ✅

### Por fim

A ideia não é prescrever uma receita exata de como o desafio deve ser resolvido. Por isso, resolva-o da forma que achar melhor. O importante para nós é entender como você codifica uma interface e seu fluxo de trabalho. Além disso, considere que estamos à disposição para qualquer dúvida!

Usamos o mesmo teste para todos os níveis: **Junior**, **Pleno** e **Senior**; mas procuramos adequar nossa exigência na avaliação com cada um desses níveis.

## Entrega

Para enviar seu código, você deve fazer um fork deste repositório, criar uma branch com o seu nome e enviar um pull request.
