const template = require('../template_page');

const options = {
    feed_title: '国家广播电视总局 - 电影剧本备案',
    feed_desc: '国家广播电视总局 - 电影剧本备案',
    feed_image: 'http://www.sapprft.gov.cn/sapprft/images/jar_logo.png',
    feed_url: 'http://dy.chinasarft.gov.cn/html/www/catalog/0129dffcccb1015d402881cd29de91ec.html',
    url: 'http://dy.chinasarft.gov.cn/html/www/catalog/0129dffcccb1015d402881cd29de91ec.html',
    baseUrl: 'http://dy.chinasarft.gov.cn',
    list_slr: ['div:nth-child(2) ul', '.cc.boxcontent'],
    title_slr: 'li:nth-child(1) a',
    link_slr: 'li:nth-child(1) a',
    link_rel: true,
    desc_slr: 'li:nth-child(1) a',
    time_slr: 'li:nth-child(2)',
    cn: false,
};

module.exports = template(options);
