# POLITIQUE-NODE

## Instalação

Primeiramente, você precisa do *node.js* v4.1.2, que pode ser encontrado [aqui](https://nodejs.org). Com o *node.js* instalado (e consequentemente, o *npm*), será necessária a instalação global do pacote npm *gulp*, e caso você queira facilitar sua vida, o pacote *nodemon*. Para instalá-los, basta executar o comando

`npm install -g gulp nodemon` (caso não queira instalar o nodemon, obviamente, remova o nodemon do comando)

Então execute o comando `npm install` enquanto na raiz do projeto. Isto irá instalar as dependências do projeto. Nesse ponto, a fase idiota de instalações acabou, acho. Todas essas dependências (exceto pelo `hapi`, nosso framework pra a aplicação web) foram só pra facilitar a fase de desenvolvimento. Para usufruir dessa delícia, mantenha duas janelas (ou abas, ou whatever) do terminal abertas, e execute um dos seguintes comandos em cada:

- `gulp`
- `nodemon --debug index.js`

Com isso, duas coisas acontecerão:

- A cada vez que vocês alterarem um arquivo dentro da pasta `src`, tudo que precisa ser compilado/movido pra a pasta `build` será compilado/movido apropriadamente;
- A cada vez que uma mudança ocorrer na pasta `build`, o servidor vai ser reiniciado (Não alterem a pasta `build` manualmente, ok crianças?)

Acho que é só isso. Se tiver faltando algo, é só avisar que a gente adicionar aqui. Amém.