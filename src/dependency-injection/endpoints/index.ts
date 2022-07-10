import Bottle from 'bottlejs';
import { Router } from 'express';

import status from "./status";

const endpoints = [
    status,
];

/**
 * @param {Bottle} container
 */
export default (container: Bottle, router: Router) => {
    endpoints.forEach(({ factories = () => {} }) => factories(container));
    endpoints.forEach(({ routes = () => {} }) => routes({ router, container }));

    container.factory('endpointsRoutes', () => router);
};