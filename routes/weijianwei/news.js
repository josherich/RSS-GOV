const template = require('../template_page');

const options = {
    feed_title: '卫健委 最新信息',
    feed_desc: '卫健委 最新信息',
    feed_image: 'http://www.nhc.gov.cn/wjw/xhtml/images/index_logo.png',
    feed_url: 'http://www.nhc.gov.cn/jkj/pqt/new_list.shtml',
    url: 'http://www.nhc.gov.cn/jkj/pqt/new_list.shtml',
    baseUrl: 'http://www.nhc.gov.cn/',
    list_slr: ['li', '.zxxx_list'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'span.ml',
    cn: false,
};

module.exports = template(options);
