const template = require('../template_page');

const options = {
    feed_title: '教育部 教育要闻',
    feed_desc: '教育部 教育要闻',
    feed_image: 'http://www.moe.gov.cn/images/scy_jyb_lgo_03.png',
    feed_url: 'http://www.moe.gov.cn/jyb_sy/sy_jyyw/',
    url: 'http://www.moe.gov.cn/jyb_sy/sy_jyyw/',
    baseUrl: 'http://www.moe.gov.cn/jyb_sy/sy_jyyw/',
    list_slr: ['li', '.scy_tylb-nr ul'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'span',
    cn: false,
};

module.exports = template(options);
