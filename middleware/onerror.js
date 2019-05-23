const logger = require('../utils/logger');

module.exports = async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        logger.error('Promise error: ' + (err instanceof Error ? err.stack : err));
        ctx.set({
            'Content-Type': 'text/html; charset=UTF-8',
        });
        ctx.body = 'RSS Context: Bad things happened ' + err;
        ctx.status = 500;
        ctx.debug.status[ctx.request.path] = false;
    }
};
