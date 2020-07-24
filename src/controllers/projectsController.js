import express from 'express';

const projects = [
  { id: '1', title: 'New project', tasks: [] },
  { id: '2', title: 'Another project', tasks: [] }
];

class projectsController {
  create(req, res) {
    const { id, title } = req.body;

    const project = {
      id,
      title,
      tasks: []
    };

    projects.push(project);

    return res.json(project);
  }

  list(req, res) {
    return res.json(projects);
  }

  update(req, res) {
    const { id } = req.params;
    const { title } = req.body;

    let index;

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === id) index = i;
    }

    projects[index].title = title;
    const project = projects[index];

    return res.json(project);
  }

  delete(req, res) {
    const { id } = req.params;

    let index;

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === id) index = i;
    }

    const project = projects[index];
    projects.splice(projects[index], 1);

    return res.json(project);
  }

  projectTasks(req, res) {
    const { id } = req.params;
    const { title } = req.body;

    let index;

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === id) index = i;
    }

    projects[index].tasks.push(title);
    const project = projects[index];

    return res.json(project);
  }

  idCheck(req, res, next) {
    const { id } = req.params;

    let projectExists = false;

    for (let i = 0; i < projects.length; i++) {
      if (projects[i].id === id) projectExists = true;
    }

    if (!projectExists) return res.status(400).json({ error: 'Project don\'t exist' });

    return next();
  }
}

export default new projectsController();