const template = require('../template_page');

const options = {
    feed_title: '国家广播电视总局 - 通知公告',
    feed_desc: '国家广播电视总局 - 通知公告',
    feed_image: 'http://www.sapprft.gov.cn/sapprft/images/jar_logo.png',
    feed_url: 'http://www.sapprft.gov.cn/sapprft/channels/6588.shtml',
    url: 'http://www.sapprft.gov.cn/sapprft/channels/6588.shtml',
    baseUrl: 'http://www.sapprft.gov.cn',
    list_slr: ['li', '.jar2l_list ul'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'span',
    cn: false,
};

module.exports = template(options);
