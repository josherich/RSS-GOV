const template = require('../template_page');

const options = {
    feed_title: '最高人民法院新闻',
    feed_desc: '最高人民法院新闻',
    feed_image: 'http://www.court.gov.cn/style/system/images/logo_bg.png',
    feed_url: 'http://www.court.gov.cn/zixun-gengduo-24.html',
    url: 'http://www.court.gov.cn/zixun-gengduo-24.html',
    baseUrl: 'http://www.court.gov.cn',
    list_slr: ['li', '.sec_list > ul'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: '.date',
    cn: false,
};

module.exports = template(options);
