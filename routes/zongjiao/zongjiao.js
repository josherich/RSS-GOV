const template = require('../template_page');

const options = {
    feed_title: '国家宗教事务局 - 宗教界动态',
    feed_desc: '国家宗教事务局 - 宗教界动态',
    feed_image: 'http://www.sara.gov.cn/images/logo.png',
    feed_url: 'http://www.sara.gov.cn/xwfb/dfgz20170906202831621887/index.htm',
    url: 'http://www.sara.gov.cn/xwfb/dfgz20170906202831621887/index.htm',
    baseUrl: 'http://www.sara.gov.cn/xwfb/dfgz20170906202831621887/',
    list_slr: ['li:not(.list_line)', '.list01'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'span',
    cn: false,
};

module.exports = template(options);
