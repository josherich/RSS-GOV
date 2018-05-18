const axios = require('axios');
const config = require('../../config');
const iconv = require('iconv-lite');

module.exports = async (ctx) => {
    const category = ctx.params.category;
    const url = `http://temp.163.com/special/00804KVA/cm_${category}.js?callback=data_callback`;

    const response = await axios({
        method: 'get',
        url: url,
        headers: {
            'User-Agent': config.ua,
            Referer: `http://news.163.com/${category}/`,
            responseEncoding: 'gb2312',
        },
    });
    const raw = iconv.decode(response.data, 'gb2312');
    const data = '{"data": ' + raw.slice(14).slice(0, -1) + '}';
    const list = JSON.parse(data);

    ctx.state.data = {
        title: `网易新闻 ${category}`,
        link: `http://news.163.com/${category}`,
        description: `网易新闻 ${category}`,
        item: list.data.map((item) => ({
            title: item.title,
            description: item.keywords.map((it) => it.keyname).join(';'),
            link: item.docurl,
            pubDate: new Date(item.time).toUTCString(),
        })),
    };
};
