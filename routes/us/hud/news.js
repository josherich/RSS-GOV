const template = require('../../template_page');

const options = {
    feed_title: 'HUD Press Release',
    feed_desc: 'HUD Press Release',
    feed_image: 'https://www.hud.gov/sites/dfiles/images/HUD-HEADER-opensans.jpg',
    feed_url: 'https://www.hud.gov/press/press_releases_media_advisories',
    url: 'https://www.hud.gov/press/press_releases_media_advisories',
    baseUrl: 'https://www.hud.gov/',
    list_slr: ['p', '.col-md-12'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: '',
    time_map: (timeString) => {
        return timeString.split('\n')[0];
    }
};

module.exports = template(options);
