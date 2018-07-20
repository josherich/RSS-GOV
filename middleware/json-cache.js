const fs = require('fs');

module.exports = function(options = {}) {

    return async function cache(ctx, next) {
        const { url, path } = ctx.request;
        const key = path.replace(/\//g, '-');

        const fkey = key + '.json';
        const filepath = `./public/data/${fkey}`

        let body = "";
        let ok = true;

        try {
            if (fs.existsSync(filepath)) {
                body = fs.readFileSync(filepath, {});
                ctx.state.data = JSON.parse(body);
            } else {
                ok = false;
            }
        } catch (err) {
            ok = false;
        }

        if (ok) {
            return;
        }

        await next();

        if (!path.includes('chart')) {
            return;
        }
        try {
            let newbody = JSON.stringify(ctx.state.data);
            if (!fs.existsSync(filepath) || body !== newbody) {
                fs.writeFileSync(filepath, newbody, {});
            }
        } catch (err) {
            console.log(err);
        }

    };

};

