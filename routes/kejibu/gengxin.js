const template = require('../template_page');

const options = {
    feed_title: '科技部-最近更新',
    feed_desc: '科技部-最近更新',
    feed_image: 'http://www.most.gov.cn/image/header-title-en.png',
    feed_url: 'http://www.most.gov.cn/mostinfo/',
    url: 'http://www.most.gov.cn/mostinfo/',
    baseUrl: 'http://www.ndrc.gov.cn/xwzx/xwfb/',
    list_slr: ['tr[valign="middle"]', '.rowInRecord.clr1 tbody'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'td[width="96"] div',
    cn: false,
};

module.exports = template(options);
