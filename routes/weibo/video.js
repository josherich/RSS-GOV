const template = require('../template_page');

const options = {
    feed_title: query => `微博 视频 [${query.split(',').join(' ')}]`,
    feed_desc: '微博 视频',
    feed_image: 'https://imgs.t.sinajs.cn/t6/style/images/global_nav/WB_logo-x2.png?id=1404211047727',
    feed_url: 'http://s.weibo.com',
    url: query => encodeURI(`https://s.weibo.com/video?q=${query.split(',').join(' ')}&xsort=hot&hasvideo=1&tw=video`),
    baseUrl: 'http://s.weibo.com',
    list_slr: ['.card-wrap', '#pl_feedlist_index'],
    title_slr: '.content .info .name',
    link_slr: '.content .txt a:last-of-type',
    desc_slr: '.content .txt',
    time_slr: '.content .from a:last-of-type',
    time_map: function(time) {
        return time
    },
    cn: false,
};

module.exports = template(options);
