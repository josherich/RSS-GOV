const template = require('../template_page');

const options = {
    feed_title: '最高人民检察院-新闻',
    feed_desc: '最高人民检察院-新闻',
    feed_image: 'http://www.spp.gov.cn/spp/xhtml/images/public/logo_qwfb.png',
    feed_url: 'http://www.spp.gov.cn/spp/gjybs/index.shtml',
    url: 'http://www.spp.gov.cn/spp/gjybs/index.shtml',
    baseUrl: 'http://www.spp.gov.cn/',
    list_slr: ['li', '.commonList_con ul.li_line'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: false,
    desc_slr: 'a',
    time_slr: 'span',
    cn: false,
};

module.exports = template(options);
