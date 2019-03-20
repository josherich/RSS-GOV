const template = require('../template_page');

const options = {
    feed_title: '工信部-重点工作',
    feed_desc: '工信部-重点工作',
    feed_image: 'http://www.miit.gov.cn/dbsource/3520794/4332284.jpg',
    feed_url: 'http://www.miit.gov.cn/n1146290/n4388791/index.html',
    url: 'http://www.miit.gov.cn/n1146290/n4388791/index.html',
    baseUrl: 'http://www.miit.gov.cn/',
    list_slr: ['li', '#comp_5976868 .clist_con'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'span a',
    cn: false,
};

module.exports = template(options);
