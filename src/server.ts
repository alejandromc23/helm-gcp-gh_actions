import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
import Router from 'express-promise-router';
import httpStatus from "http-status";

export default class Server {
    private readonly port: string;
    private app: express.Application;

    constructor(port: string) {
        this.port = port;
        this.app = express();

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        const router = Router();
        this.app.use(router);

        router.use((err: Error, req: Request, res: Response, next: Function) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
        });
    }

    // @ts-ignore
    registerRoutes(routePath: string, routes: express.routes): void {
        this.app.use(routePath, routes);
    }

    async start (): Promise<void> {
        this.app.listen(this.port, () => { console.log(`Server listening on port: ${this.port}`) });
    }
}