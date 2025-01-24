import { Router } from 'express';
import { IndexController } from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    app.use('/api/nasa', router);
    router.get('/', indexController.getHome);
    router.get('/data', indexController.getData);
    // Add more routes as needed
}