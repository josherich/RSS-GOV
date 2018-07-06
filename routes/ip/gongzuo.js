const template = require('../template_page');

const options = {
    feed_title: '国家知识产权局 - 知识产权工作',
    feed_desc: '国家知识产权局 - 知识产权工作',
    feed_image: 'http://www.sipo.gov.cn/images/index_13102156.png',
    feed_url: 'http://www.sipo.gov.cn/zscqgz/index.htm',
    url: 'http://www.sipo.gov.cn/zscqgz/index.htm',
    baseUrl: 'http://www.sipo.gov.cn/zscqgz/',
    list_slr: ['li', '.index_articl_list ul'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'span',
    cn: false,
};

module.exports = template(options);
