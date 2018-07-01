const axios = require('axios');
const config = require('../../config');

const url = 'https://nlp1.mindynode.com/1.0/rss/search';
// const url = 'http://localhost:7000/1.0/rss/search';

module.exports = async (ctx) => {
    let lang = 'zh';
    let words = ctx.params.words;
    if (ctx.query.lang) {
        lang = ctx.query.lang;
    }
    words = words.replace(/\+/g, ' +');
    words = words.replace(/-/g, ' -');
    words = words.replace(/\|/g, ' ');

    const response = await axios({
        method: 'post',
        url: url,
        headers: {
            'User-Agent': config.ua,
            Referer: 'http://news.mindynode.com',
        },
        data: {
            keywords: `+random${words}`,
            lang: lang,
        },
    });

    const items = response.data.data.pages;

    ctx.state.data = {
        title: lang === 'zh' ? `上下闻 RSS ${ctx.params.words}` : `Context RSS ${ctx.params.words}`,
        link: `https://news.mindynode.com/zh/trends?q=+random${words}`,
        description: lang === 'zh' ? `上下闻 RSS - 关键词新闻订阅（${ctx.params.words}）` : `Context RSS - Configurable News RSS (${ctx.params.words})`,
        item: items.map((item) => {
            const title = `「${item.host}」${item.title}`;
            const origin_link = `<a href="${item.url}">${item.url}</a><br/>`;
            const description = item.content.replace(/\\n/g, '<br/>');
            const sign = lang === 'zh' ? '<br/> 由上下闻生成：<a href="https://news.mindynode.com/zh">https://news.mindynode.com/zh</a>' : '<br/> Generated by Context RSS: <a href="https://news.mindynode.com/en">https://news.mindynode.com</a>';
            return {
                title: title,
                description: origin_link + description + sign,
                pubDate: item.created_at,
                link: item.url,
            };
        }),
    };
};
