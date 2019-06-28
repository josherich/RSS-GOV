// https://github.com/DIYgod/RSSHub/blob/master/lib/routes/sina/rollnews.js
const axios = require('axios');
const cheerio = require('cheerio');

const cates = {
    "2510": "国内",
    "2511": "国际",
    "2669": "社会",
    "2512": "体育",
    "2513": "娱乐",
    "2514": "军事",
    "2515": "科技",
    "2516": "财经",
    "2517": "股市",
    "2518": "美股",
}
module.exports = async (ctx) => {
    const cate = ctx.params.cate;
    const cate_name = cates[cate];
    const response = await axios.get(`https://feed.mix.sina.com.cn/api/roll/get?pageid=153&lid=${cate}&k=&num=50&page=1&r=${Math.random()}&callback=&_=${new Date().getTime()}`);
    const list = response.data.result.data;

    const out = await Promise.all(
        list.map(async (data) => {
            const title = data.title;
            const date = data.intime * 1000;
            const link = data.url;

            const description = await ctx.cache.tryGet(`sina-rollnews: ${link}`, async () => {
                const response = await axios.get(link);
                const $ = cheerio.load(response.data);

                return $('.article').html();
            });

            const single = {
                title: title,
                link,
                description: description,
                pubDate: new Date(date).toUTCString(),
            };
            return Promise.resolve(single);
        })
    );

    ctx.state.data = {
        title: `新浪${cate_name} 滚动新闻`,
        link: `https://tech.sina.com.cn/roll/rollnews.shtml#pageid=372&lid=${cate}&k=&num=50&page=1`,
        item: out,
    };
};
