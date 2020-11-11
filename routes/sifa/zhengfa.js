const template = require('../template_page');

const options = {
    feed_title: '司法部 政法要闻',
    feed_desc: '司法部 政法要闻',
    feed_image: 'http://www.legaldaily.com.cn/tongyong/images/2019sfb/2018_sfbgb_001_1231.png',
    feed_url: 'http://www.moj.gov.cn/news/node_zfyw.html',
    url: 'http://www.moj.gov.cn/news/node_zfyw.html',
    baseUrl: 'http://www.moj.gov.cn/',
    list_slr: ['li', '.news_list ul'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'dd',
};

module.exports = template(options);
