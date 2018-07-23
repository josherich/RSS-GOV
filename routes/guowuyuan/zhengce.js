const categories = {
    国令: '',
    国发: '',
    国函: '',
    国发明电: '',
    国办发: '',
    国办函: '',
    国办发明电: '',
    其他: '',
};

const topics = {
    '国民经济管理-国有资产监管': 'gc187',
    '财政-金融-审计': 'gc186',
    '国土资源-能源': 'gc185',
    '农业-林业-水利': 'gc184',
};

const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../../config');

const refererURL = 'http://www.gov.cn/zhengce/content/node_330.htm';

module.exports = async (ctx) => {
    let topic = ctx.params.topic;
    let category = ctx.params.category;

    const baseURL = 'http://new.sousuo.gov.cn/list.htm?sort=pubtime&advance=true&t=paper&n=15';
    let url = '';

    if (!topics.hasOwnProperty(topic)) {
        topic = 'all';
    }
    if (!categories.hasOwnProperty(category)) {
        category = 'all';
    }

    if (topic !== 'all') {
        url = baseURL + `&childtype=${topics[topic]}&location=${encodeURIComponent(topic)}`;
    } else {
        url = baseURL;
    }
    if (category !== 'all') {
        url = url + `&pcodeJiguan=${encodeURIComponent(category)}`;
    }

    const response = await axios({
        method: 'get',
        url: url,
        headers: {
            'User-Agent': config.ua,
            Referer: refererURL,
        },
    });

    const $ = cheerio.load(response.data);
    const list = $('tr', 'table.dataList tbody');

    const chapter_item = [];
    // let i = 1; remove header
    for (let i = 1; i < list.length; i++) {
        const title = $(list[i])
            .find('a')
            .eq(0);

        const info1 = $(list[i])
            .find('td')
            .eq(2)
            .text();
        const info2 = $(list[i])
            .find('td')
            .eq(3)
            .text();

        const link = $(list[i])
            .find('a')
            .eq(0);
        const time = $(list[i])
            .find('td')
            .eq(4)
            .text()
            .split(/[日年月]/g)
            .slice(0, -1)
            .join('-');

        const item = {
            title: title.text() + info1,
            description: title.text() + `<br/>发文字号：${info1}<br/>成文日期：${info2}`,
            link: link.attr('href'),
            pubDate: new Date(time).toUTCString(),
        };
        chapter_item.push(item);
    }
    ctx.state.data = {
        title: `国务院办公厅政府信息公开|${topic}|${category}`,
        link: url,
        image: 'http://www.gov.cn/govweb/xhtml/2016gov/images/public/logo.jpg',
        description: `国务院办公厅政府信息公开-${topic}-${category}`,
        item: chapter_item,
    };
};
