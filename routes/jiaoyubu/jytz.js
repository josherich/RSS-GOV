const template = require('../template_page');

const options = {
    feed_title: '教育部 公开通知',
    feed_desc: '教育部 公开通知',
    feed_image: 'http://www.moe.gov.cn/images/scy_jyb_lgo_03.png',
    feed_url: 'http://www.moe.gov.cn/jyb_xxgk/s5743/s5972/',
    url: 'http://www.moe.gov.cn/jyb_xxgk/s5743/s5972/',
    baseUrl: 'http://www.moe.gov.cn/jyb_xxgk/s5743/s5972/',
    list_slr: ['li', '.scy_lbsj-right-nr ul'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'span',
    cn: false,
};

module.exports = template(options);
