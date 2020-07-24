import { Router } from 'express';

import projectsController from './controllers/projectsController';

const routes = Router();

routes.get('/projects', projectsController.list);
routes.post('/projects', projectsController.create);
routes.put('/projects/:id', projectsController.idCheck, projectsController.update);
routes.delete('/projects/:id', projectsController.idCheck, projectsController.delete);
routes.post('/projects/:id/tasks', projectsController.idCheck, projectsController.projectTasks);

export default routes;