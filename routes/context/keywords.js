const axios = require('axios');
const config = require('../../config');

const url = 'https://nlp1.mindynode.com/nlp/rss';
// const url = 'http://localhost:7000/nlp/rss';

module.exports = async (ctx) => {
    let words = ctx.params.words;
    words = words.replace(/\+/g, ' +');
    words = words.replace(/-/g, ' -');
    words = words.replace(/\|/g, ' ');
    console.log(words);
    const response = await axios({
        method: 'post',
        url: url,
        headers: {
            'User-Agent': config.ua,
            Referer: 'http://news.mindynode.com',
        },
        data: {
            keywords: `+random${words}`,
            category: 'china',
        },
    });

    const items = response.data.data.pages;

    ctx.state.data = {
        title: `上下闻 RSS ${ctx.params.words}`,
        link: `https://news.mindynode.com/zh/trends?q=+random${words}`,
        description: `上下闻 RSS - 关键词新闻订阅（${ctx.params.words}）`,
        item: items.map((item) => ({
            title: `「${item.host}」${item.title}`,
            description: item.content.replace(/\\n/g, '<br>') + '<br/> 由上下闻生成：<a href="https://news.mindynode.com/zh">https://news.mindynode.com/zh</a>',
            pubDate: item.created_at,
            link: item.url,
        })),
    };
};
