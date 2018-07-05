const template = require('../template_page');

const options = {
    feed_title: '国家税务总局 - 税务要闻',
    feed_desc: '国家税务总局 - 税务要闻',
    feed_image: 'http://www.chinatax.gov.cn/template/1055094/2531624.png',
    feed_url: 'http://www.chinatax.gov.cn/n810219/n810724/index.html',
    url: 'http://www.chinatax.gov.cn/n810219/n810724/index.html',
    baseUrl: 'http://www.chinatax.gov.cn/',
    list_slr: ['dd:not(.sv_linel)', '#comp_831221 dl'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'a span',
    time_map: function(time) {
        return [new Date().getFullYear(), time.slice(1, -1)].join('-');
    },
    cn: false,
    headers: {
        'Accept-Encoding': 'gzip, deflate',
    },
};

module.exports = template(options);
