const template = require('../../utils/template-page');

const getOptions = () => ({
    rss_title: '四川省检查委员会',
    rss_desc: '四川省检查委员会',
    rss_image: 'http://www.scjc.gov.cn/public/images/image/logo.jpg',
    rss_url: 'http://www.scjc.gov.cn/zhyw/qwfb/',
    url: 'http://www.scjc.gov.cn/zhyw/qwfb/',
    base_url: 'http://www.scjc.gov.cn/',
    list_selector: ['li', '.imglist_ul.txtlist_ul.hover_ul'],
    title_selector: 'a',
    link_selector: 'a',
    desc_selector: 'p.daoyu',
    time_selector: '.time_p',
});

module.exports = template(getOptions);
