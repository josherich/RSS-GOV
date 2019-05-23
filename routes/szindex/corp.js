const axios = require('axios');
const config = require('../../config');
const iconv = require('iconv-lite');

const baseUrl = 'http://www.szse.cn/disclosure/listed/notice/index.html';

module.exports = async (ctx) => {
    const secode = ctx.params.secode;
    const url = `http://www.szse.cn/api/disc/announcement/annList?random=${Math.random()}`;
    const response = await axios({
        method: 'post',
        url: url,
        headers: {
            'User-Agent': config.ua,
            Referer: baseUrl,
        },
        data: {
            "seDate":["",""],
            "stock":[secode],
            "channelCode":["listedNotice_disc"],
            "pageSize":30,
            "pageNum":1
        },
        responseType: 'arraybuffer',
    });
    const raw = response.data;
    const list = JSON.parse(raw)['data'];
    ctx.state.data = {
        title: `深圳证券交易所 ${secode}`,
        link: `http://www.szse.cn/disclosure/listed/notice/index.html`,
        description: `深圳证券交易所 ${secode}`,
        item: list.map((item) => ({
                title: item['title'],
                description: item['title'],
                link: baseUrl + item['attachPath'],
                pubDate: new Date(item['publishTime']).toUTCString(),
            })),
    };
};
