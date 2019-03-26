const template = require('../template_page');

const options = {
    feed_title: '网信部 办公室工作',
    feed_desc: '网信部 办公室工作',
    feed_image: 'http://images.cac.gov.cn/imgs/2016/2016_423p1.png',
    feed_url: 'http://www.cac.gov.cn/gzzc.htm',
    url: 'http://www.cac.gov.cn/gzzc.htm',
    baseUrl: 'http://www.cac.gov.cn/',
    list_slr: ['li', '.dataList#hideData'],
    title_slr: 'h3 a',
    link_slr: 'h3 a',
    link_rel: false,
    desc_slr: '.summary',
    time_slr: '.times',
    cn: false,
};

module.exports = template(options);
