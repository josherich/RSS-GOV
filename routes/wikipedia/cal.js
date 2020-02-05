const axios = require('axios');
const cheerio = require('cheerio');
const config = require('../../config');
const wtf = require('wtf_wikipedia');

module.exports = async (ctx) => {
    const doc = await wtf.fetch('2018', 'zh')

    const months = doc.json()['sections'].filter(e => e['title'].match(/\d+月$/))
    const items = months.map(e => {
        e['lists'].map(r => console.log(r))
    })


    const chapter_item = [];

    ctx.state.data = {
        title: 'wikipedia year',
        link: 'wikipedia',
        image: 'http://www.mof.gov.cn/images/mj_02.jpg',
        description: '财政部-政策发布',
        item: chapter_item,
    };
};
