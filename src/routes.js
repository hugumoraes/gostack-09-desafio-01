import { Router } from 'express';

import projectsController from './controllers/projectsController';

const routes = Router();

routes.get('/projects', projectsController.list);
routes.post('/projects', projectsController.create);
routes.put('/projects/:id', projectsController.update);

export default routes;