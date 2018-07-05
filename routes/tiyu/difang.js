const template = require('../template_page');

const options = {
    feed_title: '国家体育总局 - 地方动态',
    feed_desc: '国家体育总局 - 地方动态',
    feed_image: 'http://www.sport.gov.cn/template/26/674.jpg',
    feed_url: 'http://www.sport.gov.cn/n316/n338/index.html',
    url: 'http://www.sport.gov.cn/n316/n338/index.html',
    baseUrl: 'http://www.sport.gov.cn/',
    list_slr: ['table:not(.sv_line_greydashed)', '.sv_yh_14_30'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: '.sv_brown12_yh',
    time_map: function(time) {
        return time.slice(1, -1);
    },
    cn: false,
};

module.exports = template(options);
