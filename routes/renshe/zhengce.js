const template = require('../template_page');

const options = {
    feed_title: '人力社保部 政策文件',
    feed_desc: '人力社保部 政策文件',
    feed_image: 'http://www.mohrss.gov.cn/images/logo1_20160310.png',
    feed_url: 'http://search.mohrss.gov.cn/was5/web/search?page=1&channelid=281924&orderby=-docreltime&perpage=20&outlinepage=10&searchscope=&timescope=&timescopecolumn=&orderby=-docreltime&andsen=&total=&orsen=&exclude=',
    url: 'http://search.mohrss.gov.cn/was5/web/search?page=1&channelid=281924&orderby=-docreltime&perpage=20&outlinepage=10&searchscope=&timescope=&timescopecolumn=&orderby=-docreltime&andsen=&total=&orsen=&exclude=',
    baseUrl: 'http://www.mohrss.gov.cn/',
    list_slr: ['.row', '#documentContainer'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: false,
    desc_slr: 'a',
    time_slr: 'li font',
    cn: false,
};

module.exports = template(options);
