const template = require('../template_page');

const options = {
    feed_title: '司法部 行政处罚和行业处分通报',
    feed_desc: '司法部 行政处罚和行业处分通报',
    feed_image: 'http://www.legaldaily.com.cn/tongyong/images/2019sfb/2018_sfbgb_001_1231.png',
    feed_url: 'http://www.moj.gov.cn/government_public/node_lsl.html',
    url: 'http://www.moj.gov.cn/government_public/node_lsl.html',
    baseUrl: 'http://www.moj.gov.cn/',
    list_slr: ['li', '.news_list ul'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'dd',
};

module.exports = template(options);
