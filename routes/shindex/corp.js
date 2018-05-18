const axios = require('axios');
const config = require('../../config');
const baseUrl = 'http://www.sse.com.cn';

// const url = `http://www.sse.com.cn/assortment/stock/list/info/announcement/index.shtml?productId=${secode}`;
module.exports = async (ctx) => {
    const secode = ctx.params.secode;
    const jsurl = `http://www.sse.com.cn/js/common/stocks/new/${secode}.js`;

    const response = await axios({
        method: 'get',
        url: jsurl,
        headers: {
            'User-Agent': config.ua,
            Host: 'www.sse.com.cn',
            Referer: 'www.sse.com.cn',
        },
    });

    const list = eval(response.data + `; get_${secode}()`);

    ctx.state.data = {
        title: `上海证券交易所公司公告 ${secode}`,
        link: `http://disclosure.szse.cn/drgg_search.htm?secode=${secode}`,
        description: `上海证券交易所公告 ${secode}`,
        item: list.map((item) => ({
            title: item.bulletin_title,
            link: baseUrl + item.bulletin_file_url,
            pubDate: new Date(item.bulletin_date).toUTCString(),
        })),
    };
};
