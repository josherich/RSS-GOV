const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../../config');
const iconv = require('iconv-lite');

const baseUrl = 'http://www.sheitc.gov.cn';
const url = 'http://www.sheitc.gov.cn/zxgkxx/index.htm';

module.exports = async (ctx) => {
    const response = await axios({
        method: 'get',
        url: url,
        headers: {
            'User-Agent': config.ua,
            Referer: baseUrl,
        },
        // responseEncoding: 'gb2312', //该配置项在 0.18版本中没有打包进去
        responseType: 'arraybuffer',
    });

    const responseHtml = iconv.decode(response.data, 'gbk');
    const $ = cheerio.load(responseHtml);
    const list = $('.li', '.list.clearfix');
    const chapter_item = [];
    for (let i = 0; i < list.length; i++) {
        const el = $(list[i])
            .find('a')
            .eq(0);
        const time = $(list[i])
            .find('h1 span')
            .eq(0);
        const item = {
            title: el.text(),
            description: $(list[i])
                .find('div')
                .eq(0)
                .text(),
            link: el.attr('href'),
            pubDate: new Date(time.text()).toUTCString(),
        };
        chapter_item.push(item);
    }
    ctx.state.data = {
        title: '上海市经济和信息化委员会',
        link: url,
        image: 'http://www.sheitc.gov.cn/res_base/sheitc_gov_cn_www/v3/images/logo.png',
        description: '上海市经济和信息化委员会',
        item: chapter_item,
    };
};
