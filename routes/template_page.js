const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../config');
const iconv = require('iconv-lite');
const fn = require('../utils/functions');

module.exports = (options) => async (ctx) => {
    let headers = {
        'User-Agent': config.ua,
        Referer: options.baseUrl || '',
    };
    if (options.headers) {
        headers = Object.assign(headers, options.headers);
    }
    const response = await axios({
        method: 'get',
        url: typeof options.url === 'function' ? options.url(ctx.params.query) : options.url,
        headers: headers,
        responseType: 'arraybuffer',
    });

    let responseHtml = options.data_slr ? fn.get(JSON.parse(response.data), options.data_slr) : response.data;
    if (options.cn) {
        responseHtml = iconv.decode(response.data, 'gb2312');
    }

    let chapter_items = [];

    if (options.patterns) {
        const htmlText = responseHtml.toString('utf8')
        options.patterns.map(pattern => {
            while ((match = pattern.exec(htmlText)) !== null) {
                chapter_items.push(match[1])
            }
        })
        chapter_items = chapter_items.map(options.mapper)
    } else {
        const $ = cheerio.load(responseHtml);
        let list = $(options.list_slr[0], options.list_slr[1]);

        if (options.list_filter) {
            list = list.filter(function(i, item) {
                return options.list_filter(i, $(item))
            });
        }

        const time_map = options.time_map || function(time) {
            return time; };
        const link_map = options.link_map || function(link) {
            return link; };

        for (let i = 0; i < list.length; i++) {
            let item = {};
            try {
                const title = $(list[i])
                    .find(options.title_slr)
                    .eq(0)
                    .text();

                const desc = $(list[i])
                    .find(options.desc_slr)
                    .eq(0)
                    .text();

                const link = $(list[i])
                    .find(options.link_slr)
                    .eq(0)
                    .attr('href');

                let time = $(list[i]);
                if (options.time_slr) {
                    time = time
                        .find(options.time_slr)
                        .eq(0)
                        .text();
                } else {
                    time = time.eq(0).text();
                }

                if (title === '') {
                    continue;
                }

                item = {
                    title: title,
                    description: desc,
                    link: options.link_rel ? options.baseUrl + link_map(link) : link_map(link),
                    pubDate: new Date(time_map(time)).toUTCString(),
                };
            } catch (e) {
                continue;
            }
            chapter_items.push(item);
        }
    }
    ctx.state.data = {
        title: typeof options.feed_title === 'function' ? options.feed_title(ctx.params.query) : options.feed_title,
        link: options.feed_url,
        image: options.feed_image,
        description: options.feed_desc,
        item: chapter_items,
    };
};
