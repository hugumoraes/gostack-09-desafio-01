const express = require('express');

const app = express();

const projects = [];

app.use(express.json());

app.get('/projects', (req, res) => {
  return res.json(projects);
});

app.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    techs: []
  };

  projects.push(project);

  return res.json(project);
});

app.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  console.log(projects[id]);

  return res.json();

});

app.listen(3333);