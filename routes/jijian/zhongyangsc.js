const template = require('../template_page');

const options = {
    feed_title: '中共中央纪检委 中央审查',
    feed_desc: '中共中央纪检委 中央审查',
    feed_image: 'http://www.ccdi.gov.cn/banner.png',
    feed_url: 'http://www.ccdi.gov.cn/scdc/zyyj/zjsc/',
    url: 'http://www.ccdi.gov.cn/scdc/zyyj/zjsc/',
    baseUrl: 'http://www.ccdi.gov.cn/zyyj/zjsc/',
    list_slr: ['li', '.list_news_dl.fixed'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'span',
    cn: false,
};

module.exports = template(options);
