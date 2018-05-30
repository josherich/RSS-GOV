const Router = require('koa-router');
const router = new Router();
const art = require('art-template');
const path = require('path');

const baseUrl = 'http://rss.mindynode.com';

const routerlist = [
    {
        url: baseUrl + '/netease/guoji',
        name: '网易新闻',
        route: 'http://rss.mindynode.com/netease/:category',
        param: 'category: [guoji（国际）| guonei（国内）| shehui（社会）| yaowen（要闻）| tech（科技）| sports（体育）| ent（娱乐）| lady（女性）| auto（汽车）| house（住房）| jiankang（健康）]',
    },
    { url: baseUrl + '/szse/300104', name: '深圳证券交易所上市公司公告', route: 'http://rss.mindynode.com/szse/:secode', param: 'secode: 股票代码' },
    { url: baseUrl + '/shse/600687', name: '上海证券交易所上市公司公告', route: 'http://rss.mindynode.com/shse/:secode', param: 'secode: 股票代码' },
    { url: baseUrl + '/hdfy/anjian', name: '海淀法院 案件快报', route: 'http://rss.mindynode.com/hdfy/anjian', param: '' },
    { url: baseUrl + '/caizhengbu/zhengce', name: '财政部 政策发布', route: 'http://rss.mindynode.com/caizhengbu/zhengce', param: '' },
    { url: baseUrl + '/shgov/bulletin', name: '上海市经济和信息化委员会 政务公开', route: 'http://rss.mindynode.com/shgov/bulletin', param: '' },
    { url: baseUrl + '/jianchayuan/fabu', name: '最高人民检察院 权威发布', route: 'http://rss.mindynode.com/jianchayuan/fabu', param: '' },
    { url: baseUrl + '/guofangbu/fabu', name: '国防部 权威发布', route: 'http://rss.mindynode.com/guofangbu/fabu', param: '' },
    { url: baseUrl + '/waijiaobu/lingdaoren', name: '外交部 领导人活动', route: 'http://rss.mindynode.com/waijiaobu/lingdaoren', param: '' },

    // TODO: fix
    // { url: baseUrl + '/bjfy/wenshu', name: '北京法院 裁判文书', route: '/bjfy/wenshu', param: '' },
    // {url: baseUrl + '/jrtt/sports', name: '今日头条', route: '/jrtt/:category', param: 'category: []'},
    // { url: baseUrl + '/court/wenshu', name: '中国裁判文书网', route: '/court/wenshu', param: '' },
];

router.get('/', async (ctx) => {
    ctx.set({
        'Content-Type': 'text/html; charset=UTF-8',
    });

    ctx.body = art(path.resolve(__dirname, './views/welcome.art'), {
        debug: {
            routes: routerlist,
        },
    });
});

// 网易新闻
router.get('/netease/:category', require('./routes/netease/news'));

// 深圳证券交易所上市公司公告[pdf]
router.get('/szse/:secode', require('./routes/szindex/corp'));

// 上海证券交易所上市公司公告[pdf]
router.get('/shse/:secode', require('./routes/shindex/corp'));

// 海淀法院 案件快报
router.get('/hdfy/anjian', require('./routes/hdfy/anjian'));

// 财政部 政策发布
router.get('/caizhengbu/zhengce', require('./routes/caizhengbu/zhengce'));

// 上海市经济和信息化委员会 政务公开
router.get('/shgov/bulletin', require('./routes/shgov/bulletin'));

// 最高人民检察院权威发布
router.get('/jianchayuan/fabu', require('./routes/jianchayuan/fabu'));

// 国防部权威发布
router.get('/guofangbu/fabu', require('./routes/guofangbu/fabu'));

// 外交部 领导人活动
router.get('/waijiaobu/lingdaoren', require('./routes/waijiaobu/lingdaoren'));

// 北京法院 裁判文书
// router.get('/bjfy/wenshu', require('./routes/bjfy/wenshu'));

// 今日头条
// router.get('/jrtt/:category', require('./routes/jinritoutiao/news'));

// 中国裁判文书网
// router.get('/court/wenshu', require('./routes/court/wenshu'));

// 外交部 驻外报道
// http://www.fmprc.gov.cn/web/wjdt_674879/zwbd_674895/

// 最高人民法院新闻
// http://www.court.gov.cn/zixun-gengduo-24.html

// 科技部工作
// http://appweblogic.most.gov.cn/rss/kjbgz.xml

// 国家发改委
// http://www.ndrc.gov.cn/xwzx/xwfb/rss.xml

// 国家统计局 最新发布
// http://www.stats.gov.cn/tjsj/zxfb/rss.xml

// 教育部要闻
// http://www.moe.gov.cn/jyb_sy/sy_jyyw/
// 教育部 通知
// http://www.moe.gov.cn/jyb_xxgk/s5743/s5972/

// 民委动态
// http://www.seac.gov.cn/col/col32/index.html

// 工业信息部
// 信息公示
// http://www.miit.gov.cn/n1146295/n1652858/n1653100/index.html
// 政府信息公开专栏
// http://www.miit.gov.cn/n1146295/n1146592/index.html
// 数据 统计分析 综合
// http://www.miit.gov.cn/n1146312/n1146904/n1648355/index.html
// 政策解读
// http://www.miit.gov.cn/n1146295/n1652858/n1653018/index.html

// 公安部要闻
// http://www.mps.gov.cn/n2253534/n2253535/index.html

module.exports = router;
