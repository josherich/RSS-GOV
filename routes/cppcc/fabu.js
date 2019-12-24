const template = require('../template_page');

const options = {
    feed_title: '政协-权威发布',
    feed_desc: '政协-权威发布',
    feed_image: 'http://www.cppcc.gov.cn/photoAlbum/templet/common/DEPA1512120485012874/style/img/zhengxie17370_banner.jpg',
    feed_url: 'http://www.cppcc.gov.cn/zxww/newcppcc/qwfb/index.shtml',
    url: 'http://www.cppcc.gov.cn/zxww/newcppcc/qwfb/index.shtml',
    baseUrl: 'http://www.cppcc.gov.cn/',
    patterns: [new RegExp(/title_arrayELMT1513417890535948\((.+)\);/g),
            new RegExp(/title_arrayELMT1513417869206945\((.+)\);/g),
            new RegExp(/title_arrayELMT1513417907763951\((.+)\);/g)],
    mapper: e => {
        let items = e.split(/',?'?/).filter(e => e.length > 0)
        return {
            title: items[1],
            link: items[0],
            description: items[1],
            pubDate: new Date(items[2])
        }
    },
    link_rel: false,
    cn: false,
};

module.exports = template(options);
