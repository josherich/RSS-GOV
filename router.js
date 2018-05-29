const Router = require('koa-router');
const router = new Router();
const art = require('art-template');
const path = require('path');
const config = require('./config');
const logger = require('./utils/logger');

let gitHash;
try {
    gitHash = require('git-rev-sync').short();
} catch (e) {
    gitHash = (process.env.HEROKU_SLUG_COMMIT && process.env.HEROKU_SLUG_COMMIT.slice(0, 7)) || 'unknown';
}
const startTime = +new Date();
const baseUrl = 'http://rss.mindynode.com';

routerlist = [
    {
        url: baseUrl + '/netease/guoji',
        name: '网易新闻',
        route: '/netease/:category',
        param: 'category: [guoji（国际）; guonei（国内）; shehui（社会）; yaowen（要闻）; tech（科技）; sports（体育）; ent（娱乐）; lady（女性）; auto（汽车）; house（住房）; jiankang（健康）]',
    },
    // {url: baseUrl + '/jrtt/sports', name: '今日头条', route: '/jrtt/:category', param: 'category: []'},
    { url: baseUrl + '/szse/300104', name: '深圳证券交易所上市公司公告', route: '/szse/:secode', param: 'secode: 股票代码' },
    { url: baseUrl + '/shse/600687', name: '上海证券交易所上市公司公告', route: '/shse/:secode', param: 'secode: 股票代码' },
    { url: baseUrl + '/hdfy/anjian', name: '海淀法院 案件快报', route: '/jdfy/anjian', param: '' },
    { url: baseUrl + '/bjfy/wenshu', name: '北京法院 裁判文书', route: '/bjfy/wenshu', param: '' },
    { url: baseUrl + '/caizhengbu/zhengce', name: '财政部 政策发布', route: '/caizhengbu/zhengce', param: '' },
    { url: baseUrl + '/shgov/bulletin', name: '上海市经济和信息化委员会 政务公开', route: '/shgov/bulletin', param: '' },
    { url: baseUrl + '/court/wenshu', name: '中国裁判文书网', route: '/court/wenshu', param: '' },
];

router.get('/', async (ctx) => {
    ctx.set({
        'Content-Type': 'text/html; charset=UTF-8',
    });

    const time = (+new Date() - startTime) / 1000;

    const routes = ctx.debug.routes;

    const hotRoutes = routes.slice(0, 10);
    let hotRoutesValue = '';
    hotRoutes.forEach((item) => {
        hotRoutesValue += `${ctx.debug.routes[item]}&nbsp;&nbsp;${item}<br>`;
    });

    const ips = Object.keys(ctx.debug.ips).sort((a, b) => ctx.debug.ips[b] - ctx.debug.ips[a]);
    const hotIPs = ips.slice(0, 10);
    let hotIPsValue = '';
    hotIPs.forEach((item) => {
        hotIPsValue += `${ctx.debug.ips[item]}&nbsp;&nbsp;${item}<br>`;
    });

    ctx.body = art(path.resolve(__dirname, './views/welcome.art'), {
        debug: {
            routes: routerlist,
        },
    });
});

// RSSHub
router.get('/rsshub/rss', require('./routes/rsshub/rss'));

// 网易新闻
router.get('/netease/:category', require('./routes/netease/news'));

// 今日头条
router.get('/jrtt/:category', require('./routes/jinritoutiao/news'));

// 深圳证券交易所上市公司公告[pdf]
router.get('/szse/:secode', require('./routes/szindex/corp'));

// 上海证券交易所上市公司公告[pdf]
router.get('/shse/:secode', require('./routes/shindex/corp'));

// 海淀法院 案件快报
router.get('/hdfy/anjian', require('./routes/hdfy/anjian'));

// 北京法院 裁判文书
router.get('/bjfy/wenshu', require('./routes/bjfy/wenshu'));

// 财政部 政策发布
router.get('/caizhengbu/zhengce', require('./routes/caizhengbu/zhengce'));

// 上海市经济和信息化委员会 政务公开
router.get('/shgov/bulletin', require('./routes/shgov/bulletin'));

// 中国裁判文书网
router.get('/court/wenshu', require('./routes/court/wenshu'));

module.exports = router;
