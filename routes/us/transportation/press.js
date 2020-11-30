const template = require('../../template_page');

const options = {
    feed_title: 'Transportation Press Release',
    feed_desc: 'Transportation Press Release',
    feed_image: 'https://home.treasury.gov/',
    feed_url: 'https://www.transportation.gov/newsroom/press-releases',
    url: 'https://www.transportation.gov/newsroom/press-releases',
    baseUrl: 'https://www.transportation.gov',
    list_slr: ['article', '.container.list_news'],
    title_slr: 'h1 span',
    link_slr: '.card>a',
    link_rel: true,
    desc_slr: '.node__body',
    time_slr: '.date_format',
};

module.exports = template(options);



