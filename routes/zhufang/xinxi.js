const template = require('../template_page');

const options = {
    feed_title: '住房和城乡建设部 信息公开',
    feed_desc: '住房和城乡建设部 信息公开',
    feed_image: 'http://www.mohurd.gov.cn/image/top_01.jpg',
    feed_url: 'http://ginfo.mohurd.gov.cn/',
    url: 'http://ginfo.mohurd.gov.cn/',
    baseUrl: 'http://www.mohurd.gov.cn/',
    list_slr: ['tr', '#InfoList tbody'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: false,
    desc_slr: 'a',
    time_slr: 'td:nth-last-of-type(2)',
    time_map: function(time) {
        return time.replace('.', '-');
    },
    cn: false,
};

module.exports = template(options);
