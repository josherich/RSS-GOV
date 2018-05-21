// https://www.toutiao.com/api/pc/feed/?category=news_tech&utm_source=toutiao&widen=1&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true&as=A1453ABF6EAE8F2&cp=5AFE3EE89F420E1&_signature=ZNXrwQAAPi7boxonXq-NmGTV69

// https://www.toutiao.com/api/pc/feed/?category=news_game&utm_source=toutiao&widen=1&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true&as=A175FA3F6EBE94D&cp=5AFE6E8954ED9E1&_signature=ZHuf9gAAPonbDW4Q-6BXUWR7n-

// https://www.toutiao.com/api/pc/feed/?category=news_sports&utm_source=toutiao&widen=1&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true&as=A175BA7FEE4E99B&cp=5AFEDE99B9CB5E1&_signature=ZC0j7QAAPtfbW9ILfjbOVGQtI.

const axios = require('axios');
const config = require('../../config');

const baseUrl = 'https://www.toutiao.com/';

module.exports = async (ctx) => {
    const category = ctx.params.category;
    const url = `https://www.toutiao.com/api/pc/feed/?category=news_${category}&widen=1&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true&as=A1453ABF6EAE8F2&cp=5AFE3EE89F420E1&_signature=ZNXrwQAAPi7boxonXq-NmGTV69`;
    console.log(url);
    const response = await axios({
        method: 'get',
        url: url,
        headers: {
            'upgrade-insecure-requests': 1,
            'User-Agent': config.ua,
            'Cache-Control': 'max-age=0',
            Cookie: 'tt_webid=6557844849768007172',
            accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,fr;q=0.6,es;q=0.5,en-US;q=0.4,ja;q=0.3,zh-TW;q=0.2,de;q=0.1',
        },
    });

    const list = response.data.data;
    console.log(response.data);
    ctx.state.data = {
        title: `今日头条-${category}`,
        link: 'https://www.toutiao.com/',
        item: list.filter((item) => item.is_feed_ad === false).map((item) => ({
            title: item.title,
            description: item.abstract,
            link: baseUrl + item.source_url.replace('/group/', '/a'),
        })),
    };
};
