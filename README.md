<hr>
<h2 align=center>Desafio Tecnico Precato</h2>
<h3 align=center>Projeto de Desenvolvimento Back-end</h3>
<hr>
<h4 align=left>

# :rocket: Sobre o desafio

Para você já ir se aquecendo para o que está por vir, queremos propor um desafio para você.

Queremos que você implemente um servidor que recebrá inscrições de um formulário. A partir das regas de negócio definidas, você precisará construir uma API REST que realize a inscrição, caso esta seja válida, armamazenando as informações em um banco de dados relacional.

- **Inscrição no fluxo:** No sistema de captação de leads, temos um formulário de inscrição em um fluxo de mensagens com notícias e informações sobre os precatórios de nossos clientes. Para isso, precisamos de uma API capaz de receber a inscrição pelo formulário e registrá-la no banco dedados.

- **Relatórios de inscrição:** Para medir os resultados desse formulário, temos uma aplicação que pesquisa as inscrições dentro de um certo período de data e relaciona com os precatórios que compramos. Para que essa aplicação funcione corretamente, precisamos de uma API capaz de receber uma data inicial e uma data final e retorne todas as inscrições realizadas dentro desse período.

## Regras de negócio

1. A inscrição só deve ser feita com um email válido.

2. Não devem ser registradas linhas duplicadas com o mesmo email no banco de dados.

3. A propriedade "created_at" da tabela forms_answers deve ser preenchida com a data de inscrição do formulário.

## :computer: Tecnologias utilizadas

- REST API
- Node.js
- TypeScript
- Postgresql
- Prisma
- Jest

---

## :rocket: Routes

```yml
POST /forms
    - Rota para registro de formulário
    - Observação: o cpf deve ser válido
    - headers: {}
    - body: {
        "name":"teste",
        "email": "teste@teste.com.br",
        "cpf": "11144477735",
        "phone": "(11)98877-6655"
      }
```

```yml
GET /forms/list?start=<dd-mm-YYYY>&end=<dd-mm-YYYY>
    - Rota para pegar todos os formulários de acordo com a data <start> e <end>
    - Ambas as datas devem ser escritas no formato <dd-mm-YYYY>
    - headers: {}
    - body:{}
```

## 🏁 Running the application

- ### Certifique-se de ter a última versão estável de [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) a funcionar localmente.

- ### Configure .env como os exemplos em código

<br>

Primeiro faça o download para sua maquina:

```
git clone https://github.com/victorHL99/CRUD-Portus.git
```

Rode o comando para instalar todas as dependencias:

```
npm install
```

Quando esse processo terminar, rode o comando para instalar o banco de dados do prisma

```
npm run prisma
```

Quando o processo finalizar, comece rodando o servidor com o seguinte comando:

```
npm run start:dev
```

> Para rodar os testes unitários da aplicação

```
npm run test:unit
```
