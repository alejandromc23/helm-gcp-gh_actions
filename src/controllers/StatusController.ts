import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Controller } from './Controller';

export default class StatusController implements Controller {
    async run(req: Request, res: Response) {
        res.status(httpStatus.OK).send({ response: 'All seems going well :)' });
    }
}