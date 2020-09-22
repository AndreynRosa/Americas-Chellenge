### Americas-Chellenge

<h1>O sistema consite em um api e um react-app.</h1>

<h4>Back-end </h4>

<ul>
  <li>Autenticação com Spring Seurity </li>
  <li>Autorização com JWT </li>
  <li>Aplicando conhecimentos de SOLID e Pattern builder fluent  com ajuda do lombok </li>
   <li>Versionamento do backo de dados com Flyway </li>
   <li>Swegger para documentação dos recursos disponíveis </li>
  <li>Junit E Mokito para testes unitários </li>
</ul>

### Subir a aplicação Java </br>

<p>1° - Para subir o banco de dados, use no diretório raiz o screipt. </p>


``````
  docker-compose up -d
  

``````

2° -Para subir aplicação java </br>
 <p> Starte normalmente com springboot application, ela já está apontando para banco dados </br>
</p></br>

<h5> Documentação swegger </h5>
<p>http://localhost:9080/swagger-ui.html#/</p>
  
<h4> Front-end </h4>
 
 <ul>
  <li>Type Script de acordo com as configurações sugeridas do eslint </li>
  <li>Styled-Components para criar os componetes de estilizá-los</li>
  <li>Redux-saga e Redux aplicando ducks pattern </li>
  <li>A aplicação possui dois themes um ligth e dark </li>
</ul>



### Subir aplicação React </br>


1 - No diretório app-ts vamos instalar todos as dependências

``````
yarn 

  ou 
  
npm install
``````

2 - rodar aplicação, ela subirá na porta 3000
``````
yarn start 

  ou 

npm start
``````


<h3> Dados para testar a aplicação </h3>

<h4> Todas as senhas são de 1 à 9 -> 123456789 </h4>
 
 <ul>
  <li> ADM USER - adm@adm.com </li>
  <li>PPROGRAMADOR1 - programado1@pr1.com</li>
  <li>PROGRAMADOR2 - programado2@pr2.com </li>
</ul>


  PS: não estão tudo dockerizado pois tive problemas com flyway e permissões dentro do container. </br>
