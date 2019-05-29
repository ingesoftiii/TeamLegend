import { Router } from 'express';
import playerController from '../controllers/playerController';


class PlayerRoutes {

    public router: Router = Router();
    

    constructor() {
        this.config();

    }

    config(): void {
        this.router.get('/',playerController.list );
        this.router.get('/:id',playerController.getOne );
        this.router.post('/',playerController.create);
        this.router.put('/:id',playerController.update);
        this.router.delete('/:id',playerController.delete);
    }
}

const playerRoutes = new PlayerRoutes();
export default playerRoutes.router;
