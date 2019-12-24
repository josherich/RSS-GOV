const template = require('../template_page');

const options = {
    feed_title: '政协-新闻',
    feed_desc: '政协-新闻',
    feed_image: 'http://www.ndrc.gov.cn/images/logo1.png',
    feed_url: 'http://www.cppcc.gov.cn/zxww/newcppcc/zxyw/index.shtml',
    url: 'http://www.cppcc.gov.cn/zxww/newcppcc/zxyw/index.shtml',
    baseUrl: 'http://www.cppcc.gov.cn/',
    // item[587]=new title_array('http://www.cppcc.gov.cn/zxww/2019/07/04/ARTI1562197710409103.shtml','习近平同保加利亚总统拉德夫举行会谈','2019-07-04');
    patterns: [new RegExp(/title_array\((.+)\);/, 'g')],
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
