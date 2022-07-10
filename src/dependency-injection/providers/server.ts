import Server from "../../server";
import Bottle from "bottlejs";

export default (container: Bottle) => {
    const { endpointsRoutes } = container.container;

    const server = new Server(process.env.PORT || '3000');

    server.registerRoutes('/api', endpointsRoutes);

    container.factory('server', () => server);
};