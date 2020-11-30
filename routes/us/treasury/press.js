const template = require('../../template_page');

const options = {
    feed_title: 'Treasury Press Release',
    feed_desc: 'Treasury Press Release',
    feed_image: 'https://home.treasury.gov/',
    feed_url: 'https://home.treasury.gov/news/press-releases',
    url: 'https://home.treasury.gov/news/press-releases',
    baseUrl: 'https://home.treasury.gov/',
    list_slr: ['.content--2col__body div', '.featured-stories'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: '.date-format',
};

module.exports = template(options);

