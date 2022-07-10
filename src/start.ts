import container from "./container";

const { server, logger } = container;

try {
    server.start();

    logger.log({
        message: 'Server started successfully! ;)',
        level: 'info',
    })
} catch ({ message }) {
    logger.log({
        message: message,
        level: 'error',
    });
    process.exit(1);
}

process.on('uncaughtException', (err) => {
    console.log('uncaughtException', err);
    process.exit(1);
});