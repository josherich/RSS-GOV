const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../../config');
const iconv = require('iconv-lite');

const baseUrl = 'http://www.bjcourt.gov.cn';
const url = 'http://www.bjcourt.gov.cn/cpws/index.htm';
// http://www.bjcourt.gov.cn/cpws/index.htm;jsessionid=1C4FACB6420E698D108A6B9CB68B1367

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
    const list = $('li', '.ul_news_long');
    const chapter_item = [];
    for (let i = 0; i < list.length; i++) {
        const el = $(list[i])
            .find('a')
            .eq(0);
        const des = $(list[i])
            .find('.sp_name')
            .eq(0);
        const time = $(list[i])
            .find('.sp_time')
            .eq(0);
        const item = {
            title: el.text(),
            description: des.text(),
            link: baseUrl + el.attr('href'),
            pubDate: new Date(time.text()).toUTCString(),
        };
        chapter_item.push(item);
    }
    ctx.state.data = {
        title: '北京法院-裁判文书',
        link: url,
        image: baseUrl + '/images/index_logo.png',
        description: '北京法院-裁判文书',
        item: chapter_item,
    };
};
