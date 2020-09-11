const axios = require('axios');
const config = require('../../config');

module.exports = async (ctx) => {
    const url = 'http://xxgk.mca.gov.cn:8011/gdnps/searchIndex.jsp?params=%257B%2522goPage%2522%253A1%252C%2522orderBy%2522%253A%255B%257B%2522orderBy%2522%253A%2522scrq%2522%252C%2522reverse%2522%253Atrue%257D%252C%257B%2522orderBy%2522%253A%2522orderTime%2522%252C%2522reverse%2522%253Atrue%257D%255D%252C%2522pageSize%2522%253A15%252C%2522queryParam%2522%253A%255B%257B%2522shortName%2522%253A%2522ownSubjectDn%2522%252C%2522value%2522%253A%2522%252F1%252F3%252F164%252F230%2522%257D%252C%257B%2522shortName%2522%253A%2522fbjg%2522%252C%2522value%2522%253A%2522%252F1%252F3%252F164%252F230%2522%257D%252C%257B%257D%252C%257B%257D%255D%252C%2522doRepeated%2522%253A0%257D&callback=callback';
    const response = await axios({
        method: 'get',
        url: url,
        headers: {
            'User-Agent': config.ua,
        },
    });

    const list = JSON.parse(response.data.match(/callback\((.+)\)/)[1]).resultMap;
    ctx.state.data = {
        title: '民政部-政策',
        link: 'http://xxgk.mca.gov.cn/',
        item: list.map((item) => {
          const date = item.publishTime;
          const year = date.slice(0, 4);
          const month = date.slice(4, 6);
          const day = date.slice(6, 8);
          return {
            title: item.title,
            description: item.htmlContent,
            pubDate: new Date(`${year}/${month}/${day}`).toUTCString(),
            link: `http://xxgk.mca.gov.cn:8011/gdnps/pc/content.jsp?id=${item.id}&mtype=`,
          };
        }),
    };
};
