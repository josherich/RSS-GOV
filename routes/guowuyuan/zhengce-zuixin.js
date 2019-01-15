const template = require('../template_page');

const options = {
    feed_title: '政策-最新',
    feed_desc: '政策-最新',
    feed_image: 'http://www.gov.cn/govweb/xhtml/2016gov/images/public/logo.jpg',
    feed_url: 'http://www.gov.cn/zhengce/zuixin.htm',
    url: 'http://www.gov.cn/zhengce/zuixin.htm',
    baseUrl: 'http://www.gov.cn/',
    list_slr: ['ul li','.list.list_1.list_2'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'span.date',
    cn: false,
};

module.exports = template(options);
