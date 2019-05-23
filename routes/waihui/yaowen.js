const template = require('../template_page');

const options = {
    feed_title: '外汇管理局 要闻发布',
    feed_desc: '外汇管理局 要闻发布',
    feed_image: 'http://www.chengchen.com.cn/upload/fck/20160311142828_fck.jpg',
    feed_url: 'http://www.safe.gov.cn/safe/ywfb/index.html',
    url: 'http://www.safe.gov.cn/safe/ywfb/index.html',
    baseUrl: 'http://www.safe.gov.cn/',
    list_slr: ['li', '.list_conr ul'],
    list_filter: function(i, item) {
        return item.find('a').length > 0;
    },
    title_slr: 'dt a',
    link_slr: 'dt a',
    link_rel: true,
    desc_slr: 'dt a',
    time_slr: 'dd',
    cn: false,
};

module.exports = template(options);
