const template = require('../template_page');

const options = {
    feed_title: '发改委-新闻',
    feed_desc: '发改委-新闻',
    feed_image: 'http://www.ndrc.gov.cn/images/logo1.png',
    feed_url: 'http://www.ndrc.gov.cn/xwzx/xwfb/',
    url: 'http://www.ndrc.gov.cn/xwzx/xwfb/',
    baseUrl: 'http://www.ndrc.gov.cn/xwzx/xwfb/',
    list_slr: ['li.li', '.list_02.clearfix'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'font.date',
    cn: false,
};

module.exports = template(options);
