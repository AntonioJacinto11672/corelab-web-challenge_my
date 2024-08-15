# corelab-api-challenge 

corelab-api-challenge é uma aplicação que permite criar e gerência lista de tarefa do usuário

Este projecto esta viculado a dois repositorio, backend e frontend, foi desenvolvido uma api no Node js e React no frontend

## Versão Desktop

![criarNotaDeskTOp](https://github.com/user-attachments/assets/71e7dc09-c699-490d-b54f-8b3533beb1b7)

## Versão Mobile

![CriarNotaPhone](https://github.com/user-attachments/assets/de5febff-c95d-4a6a-b7e7-884bfd5e3296)


Repositórios

[O repositório Frontend](https://github.com/AntonioJacinto11672/corelab-web-challenge) 


[O repositório Backend](https://github.com/AntonioJacinto11672/corelab-api-challenge)


# Tecnologias Utilizadas

## Pré-requisitos
  Node.js ^20.13.1
  npm ^10.5.2
  
## Back-end
Nodejs

Fastify

prisma

typescript

## Front-end
React + Vite
SCSS
JavaScript

## Banco de dados
MongoDB


# Como usar

## Como usar a Api (Back-end)

Primeiro tens que clonar o Arquivo
#### Comando para clonar o respositorio

```
git clone git@github.com:AntonioJacinto11672/corelab-api-challenge.git
```



Renomear o arquivo env.exemple para simplesmente .env
Após clonar o repositório, é necessário criar um banco de dados MongoDB. e pegar a string de acesso

Renomear o arquivo env.exemple para simplesmente .env

Na raiz do projeto haverá um arquivo chamado ".env.example" este arquivo contém 1 campos que terá que ser preenchidos em um arquivo chamado ".env", basta criar este arquivo ou renomear o arquivo example. Após isso, basta preencher o campo com o dado relacionados ao seu banco de dados.


```
DATABASE_URL=colocar_aqui_tua _string_de_acesso
```

Antes de iniciar a aplicação, precisamos instalar o 'node_modules' e para isso, basta abrir um terminal na pasta "backend" (é aconselhável utilizar o terminal do editor/IDE).

### Comando para baixar o 'node_modules'



Para efetuar a conexão com o banco de dado executa o seguinte comando 

```
npx prisma db push
```

Por fim, basta executar o comando para iniciar o servidor (ainda dentro da pasta "backend")

A api vai rodar na porta 8000, certifica-se que a porta não estar a ser utilizada

```
npm run dev
```


# Front end

## Como usar o front-End

Primeiro tens de clonar o arquivo

```
git clone git@github.com:AntonioJacinto11672/corelab-web-challenge.git
```

Antes de iniciar a aplicação, precisamos instalar o 'node_modules' e para isso, basta abrir um terminal na pasta "backend" (é aconselhável utilizar o terminal do editor/IDE).

### Comando para baixar o 'node_modules'


```
npm install
```


Para iniciar o projecto

```
npm run dev
```


Nota: O projecto utilizou o React  + Vite para inicialização, o projecto vai inicializar na porta 5173 se essa porta estiver em uso, vai passar para 5174 sucessivamente



# Usar a apicação

## Criar Tarefa
- Escreve um titulo
- Escreva uma nota
  Para enviar Vai até ao tittulo preciona Entrer
  
![criarTarefa](https://github.com/user-attachments/assets/9be9d64a-ab49-407e-b82f-6e4f5c6fb682)



## Editar uma Nota 

- Vai clica no lapis de um cartão
- Os dados vão aparecer no formulario acima podes fazer alteração conforme a criação da nota

## Alterar Os compos

- 







