const template = require('../template_page');

const options = {
    feed_title: '最高人民检察院权威发布',
    feed_desc: '最高人民检察院权威发布',
    feed_image: 'http://www.spp.gov.cn/spp/xhtml/images/public/logo_qwfb.png',
    feed_url: 'http://www.spp.gov.cn/spp/qwfb/index.shtml',
    url: 'http://www.spp.gov.cn/spp/qwfb/index.shtml',
    baseUrl: 'http://www.spp.gov.cn',
    list_slr: ['li', '.ul_list.active'],
    title_slr: 'a span.title',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a span.title',
    time_slr: 'a span.data',
    cn: false,
};

module.exports = template(options);
