const template = require('../../utils/template-page');

const getOptions = () => ({
    rss_title: '四川省检查委员会',
    rss_desc: '四川省检查委员会',
    rss_image: 'http://www.scjc.gov.cn/public/images/image/logo.jpg',
    rss_url: 'http://www.scjc.gov.cn/scdc',
    url: 'http://www.scjc.gov.cn/scdc',
    base_url: 'http://www.scjc.gov.cn/',
    list_selector: ['h4', '.data-list.pd_top13'],
    title_selector: 'a',
    link_selector: 'a',
    desc_selector: 'a',
    time_selector: '.right.color_7',
});

module.exports = template(getOptions);
