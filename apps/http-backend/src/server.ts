import express, { Express } from 'express';
import { v1Routes } from './routes/v1';
import { handle404Error } from './middlewares/handle-404-error.middleware';


class Server {
    private app: Express;
    private port: number;

    constructor(port: number) {
        this.app = express();
        this.port = port || 4000;
        this.initBase();
    }

    initBase() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use('/v1', v1Routes)
        this.app.use(handle404Error)
        this.app.listen(this.port, () => {
            console.log(`Server is running on http://localhost:${this.port}`);
        })
    }
}

export const server = new Server(8000);