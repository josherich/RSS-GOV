const template = require('../template_page');

const options = {
    feed_title: '商务部 日常新闻发布',
    feed_desc: '商务部 日常新闻发布',
    feed_image: 'http://www.mofcom.gov.cn/img/bg/logo_01.png',
    feed_url: 'http://www.mofcom.gov.cn/article/ae/ai/',
    url: 'http://www.mofcom.gov.cn/article/ae/ai/',
    baseUrl: 'http://www.mofcom.gov.cn/',
    list_slr: ['li', '.listCon.iListCon.f-mt30 ul'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'span',
    time_map: function(time) {
        return time.slice(1, -1);
    },
};

module.exports = template(options);
