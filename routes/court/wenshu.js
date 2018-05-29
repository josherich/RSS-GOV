// http://wenshu.court.gov.cn/list/list/?sorttype=1&number=&guid=52b0a218-e5b7-47da049d-0aea9f5db77d&conditions=searchWord+%E4%B8%8A%E6%B5%B7%E5%B8%82%E9%AB%98%E7%BA%A7%E4%BA%BA%E6%B0%91%E6%B3%95%E9%99%A2+++%E9%AB%98%E7%BA%A7%E6%B3%95%E9%99%A2:%E4%B8%8A%E6%B5%B7%E5%B8%82%E9%AB%98%E7%BA%A7%E4%BA%BA%E6%B0%91%E6%B3%95%E9%99%A2&conditions=searchWord+QWJS+++%E5%85%A8%E6%96%87%E6%A3%80%E7%B4%A2:%E4%B9%90%E8%A7%86
const axios = require('axios');
const config = require('../../config');

module.exports = async (ctx) => {
    const response = await axios({
        method: 'post',
        url: 'http://wenshu.court.gov.cn/List/ListContent',
        headers: {
            'User-Agent': config.ua,
            Referer: 'http://wenshu.court.gov.cn/List/List',
            cookie: 'ASP.NET_SessionId=dfjeo3d4etwocrc1pyraldar; vjkl5=0797c1fb9cff8dad4601b018f198b39e79a2e88d',
        },
        data: {
            Param: '案件类型:刑事案件',
            Index: 1,
            Page: 5,
            Order: '裁判日期',
            Direction: 'desc',
            vl5x: '6a10182a6930747e6991703f',
            number: 'KG5YYGRW',
            guid: 'a3df68dc-434c-9b59a8e4-919059e041a2',
        },
    });
    console.log(response.data);
    const data = JSON.parse(response.data);

    ctx.state.data = {
        title: '中国裁判文书网',
        link: 'http://wenshu.court.gov.cn/List/List',
        image: 'http://wenshu.court.gov.cn/Assets/img/Index/banner.jpg',
        item: data.slice(1).map((item) => ({
            title: item['案件名称'],
            description: item['裁判要旨段原文'],
            pubDate: new Date(item['裁判日期']).toUTCString(),
            link: `http://wenshu.court.gov.cn/content/content?DocID=${item['文书ID']}`,
        })),
    };
};
