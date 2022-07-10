import Bottle from 'bottlejs';
import winston from "winston";

export default (container: Bottle) => {
    const logger = winston.createLogger({
        transports: [
          new winston.transports.Console(),
        ],
    });

    container.factory('logger', () => logger)
}