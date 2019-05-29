import { Router } from 'express';
import equipoController from '../controllers/equipoController';


class EquipoRoutes {

    public router: Router = Router();
    

    constructor() {
        this.config();

    }
    config(): void {
        this.router.get('/',equipoController.list );
        this.router.get('/:id',equipoController.getOne );
        this.router.post('/',equipoController.create);
        this.router.put('/:id',equipoController.update);
        this.router.delete('/:id',equipoController.delete);
    }
}

const equiporoutes = new EquipoRoutes();
export default equiporoutes.router;
