const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../../config');
const iconv = require('iconv-lite');

const baseUrl = 'http://bjhdfy.chinacourt.org';
const url = 'http://bjhdfy.chinacourt.org/public/more.php?LocationID=0202000000';

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

    const responseHtml = iconv.decode(response.data, 'gb2312');
    const $ = cheerio.load(responseHtml);
    const list = $('tr', '.item_pad tbody').slice(0, 19);
    const chapter_item = [];
    for (let i = 0; i < list.length; i++) {
        const el = $(list[i])
            .find('a')
            .eq(0);
        const item = {
            title: el.text(),
            link: baseUrl + el.attr('href'),
        };
        chapter_item.push(item);
    }
    ctx.state.data = {
        title: '海淀法院-安检快报',
        link: url,
        image: baseUrl + '/images/itemBg_54_1.jpg',
        description: '海淀法院-安检快报',
        item: chapter_item,
    };
};
