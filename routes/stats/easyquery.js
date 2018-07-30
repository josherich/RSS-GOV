const axios = require('axios');
const config = require('../../config');

const baseUrl = 'http://data.stats.gov.cn/';
const url = 'http://data.stats.gov.cn/easyquery.htm';
const referer = 'http://data.stats.gov.cn/easyquery.htm?cn=A01';

module.exports = async (ctx) => {
    const sessionid = ctx.params.sessionid;
    const sourceid = ctx.params.sourceid;
    const now = Date.now()
    const response = await axios({
        method: 'get',
        url: url + `?m=QueryData&dbcode=hgyd&rowcode=zb&colcode=sj&wds=%5B%5D&dfwds=%5B%7B%22wdcode%22%3A%22zb%22%2C%22valuecode%22%3A%22${sourceid}%22%7D%2C%7B%22wdcode%22%3A%22sj%22%2C%22valuecode%22%3A%222018-%2Clast120%22%7D%5D&k1=${now}`,
        headers: {
            'User-Agent': config.ua,
            'Referer': referer,
            'Cookie': `SESSIONID=${sessionid}; u=1`
        }
    });

    const data = response.data['returndata'];
    const nodes = data['wdnodes'][0]['nodes'];
    const datap = data['datanodes'];

    const result = nodes.map(node => {
        return {
            id: node['code'],
            name: node['name'],
            unit: node['unit'],
            desc: node['exp'],
            data: datap.filter(p => {
                return p['wds'][0]['valuecode'] === node['code'];
            })
        }
    })

    ctx.state.data = {
        title: '统计局',
        link: url,
        image: baseUrl + '/images/index_logo.png',
        description: '统计局',
        item: result,
    };
};
