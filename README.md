<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Challenge 1: NodeJS Concepts
</h3>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-01?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-01/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-01?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">About the challenge</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">License</a>
</p>

## :rocket: About the challenge

Create an application to store projects and your tasks from zero utilizing [Express](https://expressjs.com/pt-br/).

### Routes

- `POST /projects`: The route must receive `id` and `title` inside the body and register a new project inside an array in the following format: `{ id: "1", title: 'New project', tasks: [] }`; Check if you sent both ID and title of the project using double quotes string format. 

- `GET /projects`: Route to list all projects and your tasks;

- `PUT /projects/:id`: The route must alter just the project title with given parameters `id`;

- `DELETE /projects/:id`: The route must delete the project with given parameters `id`;

- `POST /projects/:id/tasks`: The route must receive a `title` field and store a new task inside tasks array from a specific project chosen by given `id` inside the route parameters

### Example

If i call the route `POST /projects` passing `{ id: 1, title: 'New project' }` and the route `POST /projects/1/tasks` with
`{ title: 'New task' }`, my array should look like this: 

```js
[
  {
    id: "1",
    title: "New project",
    tasks: ["New task"]
  }
];
```

### Middlewares

- Create a middleware you will use in every route that receive project ID as a parameter from the URL that checks if the project
with given ID exists. If it doesn't return an error, else the request can continue normally;

- Create a global middleware called in every request that print (`console.log`) a count of how many requests has been made 
in the application until then;

---

This project was given by RocketSeat, please access www.rocketseat.com.br to learn more.