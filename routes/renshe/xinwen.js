
const template = require('../template_page');

const options = {
    feed_title: '人力社保部 新闻',
    feed_desc: '人力社保部 新闻',
    feed_image: 'http://www.mohrss.gov.cn/images/logo1_20160310.png',
    feed_url: 'http://www.mohrss.gov.cn/SYrlzyhshbzb/dongtaixinwen/buneiyaowen/',
    url: 'http://www.mohrss.gov.cn/SYrlzyhshbzb/dongtaixinwen/buneiyaowen/',
    baseUrl: 'http://www.mohrss.gov.cn/',
    list_slr: ['.serviceMainListTabCon', '.serviceMainListConType'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: '.organMenuTxtLink',
    cn: false,
};

module.exports = template(options);
