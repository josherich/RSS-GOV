const template = require('../template_page');

const options = {
    feed_title: '国防部权威发布',
    feed_desc: '国防部权威发布',
    feed_image: 'http://www.spp.gov.cn/spp/xhtml/images/public/logo_qwfb.png',
    feed_url: 'http://www.mod.gov.cn/topnews/node_46932.htm',
    url: 'http://www.mod.gov.cn/topnews/node_46932.htm',
    baseUrl: 'http://www.mod.gov.cn/topnews/',
    list_slr: ['li', '.list-unstyled.article-list'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'a span',
    cn: false,
};

module.exports = template(options);
