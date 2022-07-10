import Bottle from 'bottlejs';
import expressPromiseRouter from 'express-promise-router';

import endpointsProviders from './dependency-injection/endpoints';
import serverProvider from "./dependency-injection/providers/server";
import logger from "./dependency-injection/providers/logger";

const bottle = new Bottle();
const router = expressPromiseRouter();

const providers = [
    logger,
    endpointsProviders,
];

providers.push(serverProvider);

providers.forEach((provider) => {
    provider(bottle, router);
});

export default bottle.container;