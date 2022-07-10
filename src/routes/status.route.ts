import { Router, Request, Response } from 'express';
import Bottle from "bottlejs";

export const statusRoute = async ({ router, container }: { router: Router, container: Bottle }) => {
    const { statusController } = container.container;

    router.get('/status', (req: Request, res: Response) => statusController.run(req, res))
};