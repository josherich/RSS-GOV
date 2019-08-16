const template = require('../template_page');

const options = {
    feed_title: '参考消息',
    feed_desc: '参考消息',
    feed_image: 'http://img.cankaoxiaoxi.com/templates/cankaoxiaoxi/css/images/logo0728.png',
    feed_url: 'http://www.cankaoxiaoxi.com/roll/',
    url: 'http://www.cankaoxiaoxi.com/roll/',
    baseUrl: 'http://www.cankaoxiaoxi.com/roll/',
    list_slr: ['li','#tab-cont-1 div:nth-of-type(1) .txt-list-a.fz-14.clear'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: false,
    desc_slr: 'a',
    time_slr: 'span',
    cn: false,
};

// item[1]=new title_array('http://www.cppcc.gov.cn/zxww/2019/03/18/ARTI1552867359572109.shtml','加快推动媒体融合发展 构建全媒体传播格局','2019-03-18');

module.exports = template(options);
