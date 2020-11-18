const template = require('../template_page');

const options = {
    feed_title: '工信部-统计分析-消费品',
    feed_desc: '工信部-统计分析-消费品',
    feed_image: 'http://www.miit.gov.cn/dbsource/3520794/4332284.jpg',
    feed_url: 'https://www.miit.gov.cn/gxsj/tjfx/xfpgy/index.html',
    url: 'https://www.miit.gov.cn/api-gateway/jpaas-publish-server/front/page/build/unit?parseType=bulidstatic&webId=8d828e408d90447786ddbe128d495e9e&tplSetId=209741b2109044b5b7695700b2bec37e&pageType=column&tagId=%E5%8F%B3%E4%BE%A7%E5%86%85%E5%AE%B9&editType=null&pageId=fd9f361e098341678659dd2684b6ffe0',
    baseUrl: 'http://www.miit.gov.cn/',
    data_slr: 'data.html',
    list_slr: ['li', '.page-content ul'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'span',
    cn: false,
};

module.exports = template(options);
