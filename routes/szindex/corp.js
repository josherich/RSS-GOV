const $ = require('cheerio');
const chrome = require('../../utils/chrome');

const baseUrl = 'http://disclosure.szse.cn/';

module.exports = async (ctx) => {
    const secode = ctx.params.secode;
    const url = `http://disclosure.szse.cn/m/drgg_search.htm?secode=${secode}`;

    const page = await chrome();
    await page.goto(url);

    const html = await page.evaluate((resultsSelector) => document.querySelector(resultsSelector).innerHTML, '.index tbody tbody tbody tbody');

    const list = $('tr', html).slice(0, 19);
    const chapter_item = [];
    for (let i = 0; i < list.length; i++) {
        const el = $(list[i]);
        const time = el
            .find('.link1')
            .eq(0)
            .text()
            .slice(1, -1);
        const link = el.find('a').eq(0);
        const item = {
            title: link.text(),
            link: baseUrl + link.attr('href'),
            pubDate: new Date(time).toUTCString(),
        };
        chapter_item.push(item);
    }
    ctx.state.data = {
        title: `深圳证券交易所 ${secode}`,
        link: `http://disclosure.szse.cn/drgg_search.htm?secode=${secode}`,
        description: `深圳证券交易所 ${secode}`,
        item: chapter_item,
    };
};
