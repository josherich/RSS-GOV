const template = require('../template_page');

const options = {
    feed_title: '农业农村部 国际交流',
    feed_desc: '农业农村部 国际交流',
    feed_image: 'http://www.moa.gov.cn/images/nyb_logo_V2018.png',
    feed_url: 'http://www.moa.gov.cn/xw/gjjl/',
    url: 'http://www.moa.gov.cn/xw/gjjl/',
    baseUrl: 'http://www.moa.gov.cn/xw/gjjl/',
    list_slr: ['li', '.pub-media1-txt-list ul'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'span',
};

module.exports = template(options);
