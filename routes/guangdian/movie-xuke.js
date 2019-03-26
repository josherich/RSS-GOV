const template = require('../template_page');

const options = {
    feed_title: '国家广播电视总局 - 电影放映许可',
    feed_desc: '国家广播电视总局 - 电影放映许可',
    feed_image: 'http://www.sapprft.gov.cn/sapprft/images/jar_logo.png',
    feed_url: 'http://dy.chinasarft.gov.cn/html/www/catalog/012996c2a84002724028815629965e99.html',
    url: 'http://dy.chinasarft.gov.cn/html/www/catalog/012996c2a84002724028815629965e99.html',
    baseUrl: 'http://dy.chinasarft.gov.cn',
    list_slr: ['div:nth-child(2) ul', '.cc.boxcontent'],
    title_slr: 'li:nth-child(2) a',
    link_slr: 'li:nth-child(2) a',
    link_rel: true,
    desc_slr: 'li:nth-child(2) a',
    time_slr: 'li:nth-child(1)',
    cn: false,
};

module.exports = template(options);
