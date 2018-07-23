
const template = require('../template_page');

const options = {
    feed_title: '外汇管理局 要闻发布',
    feed_desc: '外汇管理局 要闻发布',
    feed_image: 'http://www.chengchen.com.cn/upload/fck/20160311142828_fck.jpg',
    feed_url: 'http://www.safe.gov.cn/wps/portal/sy/news_ywfb',
    url: 'http://www.safe.gov.cn/wps/portal/sy/news_ywfb',
    baseUrl: 'http://www.safe.gov.cn/',
    list_slr: ['tr', '.menulist tbody'],
    list_filter: function(item) {
        return item.find('a li').length > 0;
    },
    title_slr: 'a li',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a li',
    time_slr: 'td[align=right]',
    time_map: function(time) {
        return time.slice(2, -1);
    },
    cn: false,
};

module.exports = template(options);
