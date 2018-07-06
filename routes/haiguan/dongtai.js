const template = require('../template_page');

const options = {
    feed_title: '海关总署 - 动态',
    feed_desc: '海关总署 - 动态',
    feed_image: 'http://www.customs.gov.cn/customs/template/common/nav/logo.png',
    feed_url: 'http://www.customs.gov.cn/customs/xwfb34/302262/302263/index.html',
    url: 'http://www.customs.gov.cn/customs/xwfb34/302262/302263/index.html',
    baseUrl: 'http://www.customs.gov.cn/',
    list_slr: ['li', '.conList_ul'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'span',
    cn: false,
};

module.exports = template(options);
