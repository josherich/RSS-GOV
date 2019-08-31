const template = require('../template_page');

const options = {
    feed_title: '微博 头条',
    feed_desc: '微博 头条',
    feed_image: 'https://imgs.t.sinajs.cn/t6/style/images/global_nav/WB_logo-x2.png?id=1404211047727',
    feed_url: 'http://s.weibo.com',
    url: query => encodeURI(`https://s.weibo.com/article?q=${query.split(',').join(' ')}&limitType=article`),
    baseUrl: 'http://s.weibo.com',
    list_slr: ['.card-wrap', '#pl_feedlist_index'],
    title_slr: 'h3 a',
    link_slr: 'h3 a',
    desc_slr: '.content .detail .txt',
    time_slr: '.content .detail .act div span:last-of-type',
    cn: false,
};

module.exports = template(options);
