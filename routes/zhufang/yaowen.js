const template = require('../template_page');

const options = {
    feed_title: '住房和城乡建设部 要闻',
    feed_desc: '住房和城乡建设部 要闻',
    feed_image: 'http://www.mohurd.gov.cn/image/top_01.jpg',
    feed_url: 'http://www.mohurd.gov.cn/xwfb/index.html',
    url: 'http://www.mohurd.gov.cn/xwfb/index.html',
    baseUrl: 'http://www.mohurd.gov.cn/',
    list_slr: ['tr', 'table tbody tbody tbody'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: false,
    desc_slr: 'a',
    time_slr: 'td:last-of-type',
    time_map: function(time) {
        return time.slice(1, -1);
    },
    cn: false,
};

module.exports = template(options);
