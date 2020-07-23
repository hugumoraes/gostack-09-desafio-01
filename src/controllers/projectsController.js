import express from 'express';

const projects = [
  { id: '1', title: 'Novo projeto', tasks: [] },
  { id: '2', title: 'Novo project', tasks: [] }
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
      if (projects[i].id === id)
        index = i;
    }

    projects[index].title = title;

    return res.json({ ok: true });
  }
}

export default new projectsController();