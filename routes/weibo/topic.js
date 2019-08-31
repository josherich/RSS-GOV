const template = require('../template_page');

const options = {
    feed_title: query => `微博 话题 [${query.split(',').join(' ')}]`,
    feed_desc: '微博 话题',
    feed_image: 'https://imgs.t.sinajs.cn/t6/style/images/global_nav/WB_logo-x2.png?id=1404211047727',
    feed_url: 'http://s.weibo.com',
    url: query => encodeURI(`https://s.weibo.com/topic?q=${query.split(',').join(' ')}&pagetype=topic&topic=1`),
    baseUrl: 'http://s.weibo.com',
    list_slr: ['.card', '.card-wrap.s-pg16'],
    title_slr: '.info a',
    link_slr: '.info a',
    desc_slr: '.info p',
    time_slr: '.info a',
    time_map: function(time) {
        return null
    },
    cn: false,
};

module.exports = template(options);
