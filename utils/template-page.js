const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../config');
const iconv = require('iconv-lite');

module.exports = (getOptions) => async (ctx) => {
    const _options = getOptions(ctx);
    const identity = (e) => e;
    const defaultOptions = {
        rss_desc: '',
        rss_image: '',
        rss_url: '',
        base_url: null,
        list_filter: null,
        guid_selector: null,
        title_map: identity,
        link_map: identity,
        desc_map: identity,
        time_map: identity,
        header: {},
        encoding: null,
    };

    const headers = Object.assign({ 'User-Agent': config.ua }, _options.headers);
    const options = Object.assign(defaultOptions, _options);

    const response = await axios({
        method: 'get',
        url: options.url,
        headers: headers,
        responseType: 'arraybuffer',
    });

    let responseHtml = response.data;
    if (options.encoding) {
        responseHtml = iconv.decode(response.data, options.encoding);
    }
    const $ = cheerio.load(responseHtml);
    let list = $(options.list_selector[0], options.list_selector[1]);

    if (options.list_filter) {
        list = list.filter(function(item) {
            return options.list_filter($(item));
        });
    }

    const time_map =
        options.time_map ||
        function(time) {
            return time;
        };
    const chapter_items = [];
    for (let i = 0; i < list.length; i++) {
        let item = {};
        try {
            const title = $(list[i])
                .find(options.title_selector)
                .eq(0)
                .text();

            const desc = $(list[i])
                .find(options.desc_selector)
                .eq(0)
                .text();

            const link = $(list[i])
                .find(options.link_selector)
                .eq(0)
                .attr('href');

            const guid = options.guid_selector
                ? $(list[i])
                      .find(options.guid_selector)
                      .eq(0)
                      .text()
                : link;

            const time = $(list[i])
                .find(options.time_selector)
                .eq(0)
                .text();

            if (title === '' || link === '') {
                continue;
            }

            item = {
                title: options.title_map(title),
                description: options.desc_map(desc),
                guid: guid,
                link: options.base_url ? options.base_url + options.link_map(link) : options.link_map(link),
                pubDate: new Date(time_map(time)).toUTCString(),
            };
        } catch (e) {
            continue;
        }
        chapter_items.push(item);
    }
    ctx.state.data = {
        title: options.rss_title,
        link: options.rss_url,
        image: options.rss_image,
        description: options.rss_desc,
        item: chapter_items,
    };
};
