import { Router } from 'express';
import postController from '../controllers/postController';

class AdminRoutes {

    public router: Router = Router();

    constructor() {
        this.config();

    }

    config(): void {
        this.router.get('/', postController.list);
        this.router.get('/:id',postController.getOne );
        this.router.post('/',postController.create);
        this.router.put('/:id',postController.update);
        this.router.delete('/:id',postController.delete);
    }
}

const adminRoutes = new AdminRoutes();
export default adminRoutes.router;
