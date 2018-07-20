const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../../config');
const iconv = require('iconv-lite');

const baseUrl = 'http://www.mof.gov.cn';
const url1 = 'https://en.wikipedia.org/wiki/List_of_countries_by_exports?oldformat=true';
const url2 = 'https://en.wikipedia.org/wiki/List_of_countries_by_imports?oldformat=true';

module.exports = async (ctx) => {
    const response1 = await axios({
        method: 'get',
        url: url1,
        headers: {
            'User-Agent': config.ua,
            Referer: baseUrl,
        }
    });
    const response2 = await axios({
        method: 'get',
        url: url2,
        headers: {
            'User-Agent': config.ua,
            Referer: baseUrl,
        }
    });
    const $1 = cheerio.load(response1.data);
    const $2 = cheerio.load(response2.data);

    const list1 = $1('tr', '.wikitable tbody');
    const list2 = $2('tr', '.wikitable tbody');

    const imps = {};
    for (let i = 0; i < list2.length; i++) {
        if (i == 0) continue;
        const name = $2(list2[i])
            .find('td:nth-of-type(2) a')
            .eq(0)
            .text();

        const amount = $2(list2[i])
            .find('td:nth-of-type(3)')
            .eq(0)
            .text()
            .replace(/\$|,/g, '');

        imps[name] = parseInt(amount) / 1000000;
    }

    const chapter_item = [];
    for (let i = 0; i < list1.length; i++) {
        if (i == 0) continue;
        let name = $1(list1[i])
            .find('td:nth-of-type(2) a')
            .eq(0)
            .text();

        const exp_amount = $1(list1[i])
            .find('td:nth-of-type(3)')
            .eq(0)
            .text()
            .replace(/\$|,/g, '');

        const percent = $1(list1[i])
            .find('td:nth-of-type(5)')
            .eq(0)
            .text()
            .replace("\n", '');

        const gdp = percent ? parseInt(exp_amount) * 100  / parseInt(percent): exp_amount;
        name = name.replace('Korea, South', 'South Korea');
        const imp_amount = imps[name] || 0;

        const item = {
            name: name,
            exp_amount: exp_amount,
            imp_amount: imp_amount,
            percent: percent,
            exp_arr: new Array(Math.floor(exp_amount/10000)).map(e => 1),
            imp_arr: new Array(Math.floor(imp_amount/10000)).map(e => 1),
            gdp_arr: new Array(Math.floor(gdp/10000)).map(e => 1)
        };
        chapter_item.push(item);
    }

    ctx.state.data = {
        title: 'list of countries by exports/imports (2017)',
        link: url1,
        description: 'list of countries by exports/imports (2017)',
        item: chapter_item
    };
};
