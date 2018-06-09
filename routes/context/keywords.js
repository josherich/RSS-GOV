const axios = require('axios');
const config = require('../../config');

const url = 'https://nlp1.mindynode.com/nlp/rss';
// const url = 'http://localhost:7000/nlp/rss';

module.exports = async (ctx) => {
    const words = ctx.params.words;

    const response = await axios({
        method: 'post',
        url: url,
        headers: {
            'User-Agent': config.ua,
            Referer: 'http://news.mindynode.com',
        },
        data: {
            keywords: words,
            category: 'china',
        },
    });

    const items = response.data.data.pages;

    ctx.state.data = {
        title: `上下闻 RSS ${words}`,
        link: `https://news.mindynode.com/zh/trends?q=${words}`,
        description: `上下闻 RSS - 关键词新闻订阅（${words}）`,
        item: items.map((item) => ({
            title: `${item.host}|${item.title}`,
            description: item.content + '\n 更多新闻请访问：https://news.mindynode.com/zh',
            pubDate: item.created_at,
            link: item.url,
        })),
    };
};
