const template = require('../template_page_chrome');

const options = {
    feed_title: '公安部 要闻',
    feed_desc: '公安部 要闻',
    feed_image: 'http://www.mps.gov.cn/template/3500247/3500300.gif',
    feed_url: 'http://www.mps.gov.cn/n2253534/n2253535/index.html',
    url: 'http://www.mps.gov.cn/n2253534/n2253535/index.html',
    baseUrl: 'http://www.mps.gov.cn/n2253534/n2253535/',
    list_slr: ['dd', '#comp_5097045 dl'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'span',
    timeout: 2000,
    time_map: function(time) {
        return time.slice(1, -1);
    },
    cn: false
};

module.exports = template(options);
