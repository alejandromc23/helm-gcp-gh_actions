import Bottle from 'bottlejs';
import { Router } from 'express';

import { statusRoute } from "../../routes/status.route";
import StatusController from "../../controllers/StatusController";

const factories = (container: Bottle) => {
    container.factory(
        'statusController',
        () => new StatusController(),
    );
};

const routes = ({ router, container } : { router: Router, container: Bottle }) => statusRoute({
    router,
    container,
});

export default {
    factories,
    routes,
};