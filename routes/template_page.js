const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../config');
const iconv = require('iconv-lite');

module.exports = (options) => async (ctx) => {
    const response = await axios({
        method: 'get',
        url: options.url,
        headers: {
            'User-Agent': config.ua,
            Referer: options.baseUrl || '',
        },
        responseType: 'arraybuffer',
    });

    let responseHtml = response.data;
    if (options.cn) {
        responseHtml = iconv.decode(response.data, 'gb2312');
    }
    const $ = cheerio.load(responseHtml);
    const list = $(options.list_slr[0], options.list_slr[1]);
    const time_map =
        options.time_map ||
        function(time) {
            return time;
        };
    const chapter_items = [];
    for (let i = 0; i < list.length; i++) {
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

        const item = {
            title: title,
            description: desc,
            link: options.link_rel ? options.baseUrl + link : link,
            pubDate: new Date(time_map(time)).toUTCString(),
        };
        chapter_items.push(item);
    }
    ctx.state.data = {
        title: options.feed_title,
        link: options.feed_url,
        image: options.feed_image,
        description: options.feed_desc,
        item: chapter_items,
    };
};
