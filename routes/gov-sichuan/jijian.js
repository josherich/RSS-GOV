
const template = require('../template_page');

const options = {
    feed_title: '四川省检查委员会',
    feed_desc: '四川省检查委员会',
    feed_image: 'http://www.scjc.gov.cn/public/images/image/logo.jpg',
    feed_url: 'http://www.scjc.gov.cn/zhyw/qwfb/',
    url: 'http://www.scjc.gov.cn/zhyw/qwfb/',
    baseUrl: 'http://www.scjc.gov.cn/',
    list_slr: ['li', '.imglist_ul.txtlist_ul.hover_ul'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'p.daoyu',
    time_slr: '.time_p',
    cn: false,
};

module.exports = template(options);
