import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes/indexRoutes';
import playerRoutes from './routes/playerRoutes';
import equiporoutes from './routes/equipoRoutes';
import postRoutes from './routes/postRoutes';
import adminRoutes from './routes/adminRoutes';


class Server {

    public app: Application;

    constructor(){
       this.app = express();
       this.config();
       this.routes();

    }

    config(): void {
    this.app.set('port', process.env.PORT || 3000);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:false}));
    }

    routes(): void {
        this.app.use('/',indexRoutes);
        this.app.use('/api/player', playerRoutes);
        this.app.use('/api/equipo', equiporoutes);
        this.app.use('/api/post', postRoutes);
        this.app.use('/api/admin', adminRoutes);


    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port 3000', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();