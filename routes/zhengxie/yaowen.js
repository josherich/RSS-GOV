const template = require('../template_page');

const options = {
    feed_title: '政协-要闻',
    feed_desc: '政协-要闻',
    feed_image: 'http://www.cppcc.gov.cn/photoAlbum/templet/common/DEPA1512120485012874/style/img/zhengxie17370_banner.jpg',
    feed_url: 'http://www.cppcc.gov.cn/zxww/newcppcc/zxyw/index.shtml',
    url: 'http://www.cppcc.gov.cn/zxww/newcppcc/zxyw/index.shtml',
    baseUrl: 'http://www.cppcc.gov.cn/',
    list_slr: ['ul li','.txt_list#txtBox'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'span.time',
    cn: false,
};

module.exports = template(options);
