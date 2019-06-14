
const template = require('../template_page');

const options = {
    feed_title: '国务院-公开征求意见',
    feed_desc: '国务院-公开征求意见',
    feed_image: 'http://www.gov.cn/govweb/xhtml/2016gov/images/public/logo.jpg',
    feed_url: 'http://zqyj.chinalaw.gov.cn/index',
    url: 'http://zqyj.chinalaw.gov.cn/index',
    baseUrl: 'http://zqyj.chinalaw.gov.cn/',
    list_slr: ['li.listMargin', '.marin > .clearself > div:nth-of-type(2) ul.list'],
    title_slr: 'a',
    link_slr: 'a',
    link_map: function(link)  {
        return link.match(/javascript:loadURL\('(.+)'\)/)[1];
    },
    link_rel: true,
    desc_slr: 'span.spanWidth188',
    time_slr: 'span.spanWidth129',
    time_map: function(time) {
        return time.trim().split(' ')[0];
    },
    cn: false,
};

module.exports = template(options);
