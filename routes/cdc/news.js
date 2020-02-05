const template = require('../template_page');

const options = {
    feed_title: '疾病预防控制中心 中心要闻',
    feed_desc: '疾病预防控制中心 中心要闻',
    feed_image: 'http://www.chinacdc.cn/images/jlogo.png',
    feed_url: 'http://www.chinacdc.cn/yw_9324/index.html',
    url: 'http://www.chinacdc.cn/yw_9324/index.html',
    baseUrl: 'http://www.chinacdc.cn/yw_9324/',
    list_slr: ['.item-cn', '.tabNav-cn-item'],
    title_slr: '.item-cn-title a',
    link_slr: '.item-cn-title a',
    link_rel: true,
    desc_slr: '.item-text',
    time_slr: '.news-update',
    cn: true,
};

// malform http request, could use --http-parser=legacy, does not work here with node 11
// https://github.com/nodejs/node/issues/27711

module.exports = template(options);
