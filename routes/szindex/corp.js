const axios = require('axios');
const config = require('../../config');
const iconv = require('iconv-lite');

const baseUrl = 'http://disclosure.szse.cn/';

module.exports = async (ctx) => {
    const secode = ctx.params.secode;
    const url = `http://disclosure.szse.cn/disclosure/fulltext/stocks/szse/gsgg1y/${secode}.js`;
    const response = await axios({
        method: 'get',
        url: url,
        headers: {
            'User-Agent': config.ua,
            Referer: baseUrl,
        },
        responseType: 'arraybuffer',
    });
    const raw = iconv.decode(response.data, 'gb2312').slice(17, -3);
    console.log(raw);
    const list = JSON.parse(raw);
    ctx.state.data = {
        title: `深圳证券交易所 ${secode}`,
        link: `http://disclosure.szse.cn/m/drgg_search.htm?secode=${secode}`,
        description: `深圳证券交易所 ${secode}`,
        item: list.slice(0, 79).map((item) => ({
                title: item[2],
                description: item[2],
                link: baseUrl + item[1],
                pubDate: new Date(item[5]).toUTCString(),
            })),
    };
};
