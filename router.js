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
    { url: baseUrl + '/waijiaobu/sjxw', name: '外交部 司局新闻', route: 'http://rss.mindynode.com/waijiaobu/sjxw', param: '' },
    { url: baseUrl + '/waijiaobu/zwbd', name: '外交部 驻外报道', route: 'http://rss.mindynode.com/waijiaobu/zwbd', param: '' },

    { url: baseUrl + '/zgfy/zuigao', name: '最高人民法院 新闻', route: 'http://rss.mindynode.com/zgfy/zuigaoxw', param: '' },
    { url: baseUrl + '/zgfy/difang', name: '最高人民法院 地方新闻', route: 'http://rss.mindynode.com/zgfy/difangxw', param: '' },

    { url: baseUrl + '/jiaoyubu/jyyw', name: '教育部 教育要闻', route: 'http://rss.mindynode.com/jiaoyubu/jyyw', param: '' },
    { url: baseUrl + '/jiaoyubu/jytz', name: '教育部 教育通知', route: 'http://rss.mindynode.com/jiaoyubu/jytz', param: '' },

    { url: baseUrl + '/gonganbu/bulletin', name: '公安部 通知', route: 'http://rss.mindynode.com/gonganbu/bulletin', param: '' },

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

// 外交部
router.get('/waijiaobu/lingdaoren', require('./routes/waijiaobu/lingdaoren'));
router.get('/waijiaobu/sjxw', require('./routes/waijiaobu/sjxw'));
router.get('/waijiaobu/zwbd', require('./routes/waijiaobu/zwbd'));

// 最高人民法院 新闻
router.get('/zgfy/zuigao', require('./routes/zgfy/zuigaoxw'));
router.get('/zgfy/difang', require('./routes/zgfy/difangxw'));

// 教育部 要闻
router.get('/jiaoyubu/jyyw', require('./routes/jiaoyubu/jyyw'));
// 教育部 通知
router.get('/jiaoyubu/jytz', require('./routes/jiaoyubu/jytz'));

// 公安部 通知公告
router.get('/gonganbu/bulletin', require('./routes/gonganbu/bulletin'));

// 科技部工作
// http://appweblogic.most.gov.cn/rss/kjbgz.xml

// 国家发改委
// http://www.ndrc.gov.cn/xwzx/xwfb/rss.xml
// 政策发布 通知
// http://www.ndrc.gov.cn/zcfb/zcfbtz/rss.xml

// 国家统计局 最新发布
// http://www.stats.gov.cn/tjsj/zxfb/rss.xml

// 民委动态
// http://www.seac.gov.cn/col/col32/index.html
// http://www.seac.gov.cn/module/rss/rssfeed.jsp?colid=31

// 工业信息部
// 工作动态
// http://www.miit.gov.cn/n1146290/n1146402/index.html
// 信息公示
// http://www.miit.gov.cn/n1146295/n1652858/n1653100/index.html
// 政府信息公开专栏
// http://www.miit.gov.cn/n1146295/n1146592/index.html
// 数据 统计分析 综合
// http://www.miit.gov.cn/n1146312/n1146904/n1648355/index.html
// 政策解读
// http://www.miit.gov.cn/n1146295/n1652858/n1653018/index.html

// 北京法院 裁判文书
// router.get('/bjfy/wenshu', require('./routes/bjfy/wenshu'));

// 今日头条
// router.get('/jrtt/:category', require('./routes/jinritoutiao/news'));

// 中国裁判文书网
// router.get('/court/wenshu', require('./routes/court/wenshu'));

module.exports = router;
