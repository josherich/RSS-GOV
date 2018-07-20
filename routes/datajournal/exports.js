const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../../config');
const iconv = require('iconv-lite');

const baseUrl = 'http://www.mof.gov.cn';
const url = 'https://en.wikipedia.org/wiki/List_of_countries_by_exports?oldformat=true';

module.exports = async (ctx) => {
    const response = await axios({
        method: 'get',
        url: url,
        headers: {
            'User-Agent': config.ua,
            Referer: baseUrl,
        }
    });

    const $ = cheerio.load(response.data);
    const list = $('tr', '.wikitable tbody');

    const chapter_item = [];
    for (let i = 0; i < list.length; i++) {
        if (i == 0) continue;
        const name = $(list[i])
            .find('td:nth-of-type(2) a')
            .eq(0)
            .text();

        const amount = $(list[i])
            .find('td:nth-of-type(3)')
            .eq(0)
            .text()
            .replace(/\$|,/g, '');

        const percent = $(list[i])
            .find('td:nth-of-type(5)')
            .eq(0)
            .text()
            .replace("\n", '');

        const gdp = percent ? parseInt(amount) / parseInt(percent) * 100 : amount;

        const item = {
            name: name,
            amount: amount,
            percent: percent,
            exp_arr: new Array(Math.floor(amount/10000)).map(e => 1),
            gdp_arr: new Array(Math.floor(gdp/10000)).map(e => 1)
        };
        chapter_item.push(item);
    }
    ctx.state.template = 'chart';
    ctx.state.data = {
        title: 'list of countries by exports',
        link: url,
        description: 'list of countries by exports',
        item: chapter_item
    };
};
