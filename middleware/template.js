const art = require('art-template');
const path = require('path');
const config = require('../config');

module.exports = async (ctx, next) => {
    await next();
    if (!ctx.body) {
        if (ctx.query.type === 'fragment') {
            ctx.state.data.item = ctx.state.data.item.map(e => {
                e.pubDate = new Date(e.pubDate).toLocaleDateString();
                e.description = e.description ? e.description.replace('<br/>', '\n') : "";
                return e;
            })
            ctx.set({
                'Content-Type': 'text/html; charset=UTF-8',
            });
            ctx.body = art(path.resolve(__dirname, '../views/list.art'), {
                lastBuildDate: new Date().toUTCString(),
                ttl: config.cacheExpire,
                ...ctx.state.data,
            });
        } else if (ctx.query.type === 'json' || ctx.url.includes('/chart/stats/')) {
            ctx.body = JSON.stringify(ctx.state.data);
            ctx.set({
                'Content-Type': 'application/json; charset=UTF-8',
            });
        } else {
            if (ctx.url.includes('/chart/')) {
                ctx.body = art(path.resolve(__dirname, '../views/chart.art'), {
                    lastBuildDate: new Date().toUTCString(),
                    ttl: config.cacheExpire,
                    ...ctx.state.data,
                });
            } else {
                ctx.body = art(path.resolve(__dirname, '../views/rss.art'), {
                    lastBuildDate: new Date().toUTCString(),
                    ttl: config.cacheExpire,
                    ...ctx.state.data,
                });
            }
        }
    }
};
