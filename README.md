# Desafio técnico - Digibee

### Sobre o desafio

Desenvolver um componente utilizando drawer com dois níveis, que funcionará como um hub que aprofunda cada etapa de configuração do Test Case em um segundo nível.

### Requisitos

- O segundo nível deve ser exibido com uma transição da direita para a esquerda, abrindo por cima do primeiro nível
- Ao finalizar o fluxo, o movimento oposto é realizado para fechar e voltar ao nível anterior
- Utilizar framework HeroUI + tailwindcss ou semelhante
- Mockar dados necessários para realizar fluxo

### Bônus

- json-server
- msw
- Exemplo de teste unitário e integração
- Primeiro nível
  - Botão para **excluir step selecionado**
  - Botão **Save** só será habilitado se o formulário for válido
  - Todos os botões para abrir steps estão funcionais, porém **somente Mock Responses** está de fato efetuando o fluxo corretamente
- Segundo nível
  - Tag para identificar que o step já está selecionado
  - Opção de radio desabilitada se o step estiver selecionado

### Como rodar o projeto

- Execute **npm install** para instalar as dependencias
- Crie na pasta **src/api/db** um arquivo chamado **db.json** utilizando o exemplo
- Crie um arquivo na raíz do projeto chamado **.env.local** de acordo com **.env.example**
- Fluxo:
  - **npm install**
  - **src/api/db/db.json**
  - **.env.local**
