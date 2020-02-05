const template = require('../template_page');

const options = {
    feed_title: '药监局-新闻',
    feed_desc: '药监局-新闻',
    feed_image: 'http://www.ndrc.gov.cn/images/logo1.png',
    feed_url: 'http://www.nmpa.gov.cn/WS04/CL2050/',
    url: 'http://www.nmpa.gov.cn/WS04/CL2050/',
    baseUrl: 'http://www.nmpa.gov.cn/WS04/',
    list_slr: ['.ListColumnClass15', 'tbody'],
    title_slr: 'a',
    link_slr: 'a',
    link_rel: true,
    desc_slr: 'a',
    time_slr: 'span',
    time_map: function(time) {
        return time.slice(1, -1);
    },
    cn: true,
    headers: {
        cookie: 'FSSBBIl1UgzbN7N80S=fDLJSnTuFiqdXCVN5n3W6CdHD0O1c3gVOImhtF9MhE2kkePGW6.b8bWy1p1eRTEK;'
    }
};

module.exports = template(options);
