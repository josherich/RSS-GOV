const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../../config');
const iconv = require('iconv-lite');

const baseUrl = 'http://www.mof.gov.cn';
const url = 'http://www.mof.gov.cn/zhengwuxinxi/zhengcefabu/';

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
    const list = $('tr', '.ZIT tbody');

    const chapter_item = [];
    for (let i = 0; i < list.length; i++) {
        const title = $(list[i])
            .find('td')
            .eq(0);
        const link = $(list[i])
            .find('a')
            .eq(0);
        const time = $(list[i])
            .find('td')
            .eq(0)
            .text()
            .replace(/\s/g, '')
            .slice(-11, -1);
        console.log(time);
        const item = {
            title: title.attr('title'),
            description: title.attr('title'),
            link: link.attr('href'),
            pubDate: new Date(time).toUTCString(),
        };
        chapter_item.push(item);
    }
    ctx.state.data = {
        title: '财政部-政策发布',
        link: url,
        image: 'http://www.mof.gov.cn/images/mj_02.jpg',
        description: '财政部-政策发布',
        item: chapter_item,
    };
};
