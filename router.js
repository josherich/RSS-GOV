const Router = require('koa-router');
const router = new Router();
const art = require('art-template');
const path = require('path');

const baseUrl = 'http://rss.mindynode.com';

const routerlist = [
    {
        url: '/netease/guoji',
        name: '网易新闻',
        route: 'http://rss.mindynode.com/netease/:category',
        param: 'category: [guoji（国际）| guonei（国内）| shehui（社会）| yaowen（要闻）| tech（科技）| sports（体育）| ent（娱乐）| lady（女性）| auto（汽车）| house（住房）| jiankang（健康）]',
    },
    {
        url: '/guowuyuan/zhengce/all/all',
        name: '国务院办公厅政府信息公开',
        route: 'http://rss.mindynode.com/guowuyuan/zhengce/:topic/:category',
        param: 'topic: all | 国民经济管理-国有资产监管 | 财政-金融-审计 | 国土资源-能源 农业-林业-水利 \n category: all | 国令 | 国发 | 国函 | 国发明电 | 国办发 | 国办函 | 国办发明电',
    },
    {
        url: '/szse/300104',
        name: '深圳证券交易所上市公司公告',
        route: '/szse/:secode',
        param: 'secode: 股票代码',
    },
    {
        url: '/shse/600687',
        name: '上海证券交易所上市公司公告',
        route: '/shse/:secode',
        param: 'secode: 股票代码',
    },

    {
        url: '/hdfy/anjian',
        name: '海淀法院 案件快报',
        route: '/hdfy/anjian',
        param: '',
    },
    {
        url: '/caizhengbu/zhengce',
        name: '财政部 政策发布',
        route: '/caizhengbu/zhengce',
        param: '',
    },
    {
        url: '/shgov/bulletin',
        name: '上海市经济和信息化委员会 政务公开',
        route: '/shgov/bulletin',
        param: '',
    },
    {
        url: '/jianchayuan/fabu',
        name: '最高人民检察院 权威发布',
        route: '/jianchayuan/fabu',
        param: '',
    },
    {
        url: '/guofangbu/fabu',
        name: '国防部 权威发布',
        route: '/guofangbu/fabu',
        param: '',
    },

    {
        url: '/waijiaobu/lingdaoren',
        name: '外交部 领导人活动',
        route: '/waijiaobu/lingdaoren',
        param: '',
    },
    {
        url: '/waijiaobu/sjxw',
        name: '外交部 司局新闻',
        route: '/waijiaobu/sjxw',
        param: '',
    },
    {
        url: '/waijiaobu/zwbd',
        name: '外交部 驻外报道',
        route: '/waijiaobu/zwbd',
        param: '',
    },

    {
        url: '/zgfy/zuigao',
        name: '最高人民法院 新闻',
        route: '/zgfy/zuigao',
        param: '',
    },
    {
        url: '/zgfy/difang',
        name: '最高人民法院 地方新闻',
        route: '/zgfy/difang',
        param: '',
    },
    {
        url: '/zgfy/jieshi',
        name: '最高人民法院 司法解释',
        route: '/zgfy/jieshi',
        param: '',
    },
    {
        url: '/zgfy/zhongda',
        name: '最高人民法院 重大案件',
        route: '/zgfy/zhongda',
        param: '',
    },

    {
        url: '/jiaoyubu/jyyw',
        name: '教育部 教育要闻',
        route: '/jiaoyubu/jyyw',
        param: '',
    },
    {
        url: '/jiaoyubu/jytz',
        name: '教育部 教育通知',
        route: '/jiaoyubu/jytz',
        param: '',
    },

    {
        url: '/gonganbu/bulletin',
        name: '公安部 通知',
        route: '/gonganbu/bulletin',
        param: '',
    },

    {
        url: '/guangdian/tongzhi',
        name: '国家广播电视总局 通知公告',
        route: '/guangdian/tongzhi',
        param: '',
    },
    {
        url: '/shuiwu/yaowen',
        name: '国家税务总局 税务要闻',
        route: '/shuiwu/yaowen',
        param: '',
    },

    {
        url: '/tiyu/tongzhi',
        name: '国家体育总局 通知公告',
        route: '/tiyu/tongzhi',
        param: '',
    },
    {
        url: '/tiyu/difang',
        name: '国家体育总局 地方动态',
        route: '/tiyu/difang',
        param: '',
    },

    {
        url: '/shichang/zhaohui',
        name: '国家市场监督管理总局 召回公告',
        route: '/shichang/zhaohui',
        param: '',
    },
    {
        url: '/shichang/gonggao',
        name: '国家市场监督管理总局 公告',
        route: '/shichang/gonggao',
        param: '',
    },
    {
        url: '/shichang/tonggao',
        name: '国家市场监督管理总局 通告',
        route: '/shichang/tonggao',
        param: '',
    },
    {
        url: '/shichang/xinwen',
        name: '国家市场监督管理总局 新闻发布',
        route: '/shichang/xinwen',
        param: '',
    },
    {
        url: '/shichang/wenjian',
        name: '国家市场监督管理总局 文件发布',
        route: '/shichang/wenjian',
        param: '',
    },

    {
        url: '/zongjiao/bu',
        name: '国家宗教事务局 部工作动态',
        route: '/zongjiao/bu',
        param: '',
    },
    {
        url: '/zongjiao/difang',
        name: '国家宗教事务局 地方工作动态',
        route: '/zongjiao/difang',
        param: '',
    },
    {
        url: '/zongjiao/zongjiao',
        name: '国家宗教事务局 宗教界动态',
        route: '/zongjiao/zongjiao',
        param: '',
    },

    {
        url: '/haiguan/dongtai',
        name: '海关总署 动态',
        route: '/haiguan/dongtai',
        param: '',
    },

    {
        url: '/ip/gongzuo',
        name: '国家知识产权局 - 知识产权工作',
        route: '/ip/gongzuo',
        param: '',
    },
    {
        url: '/ip/tongzhi',
        name: '国家知识产权局 - 工作通知',
        route: '/ip/tongzhi',
        param: '',
    },

    {
        url: '/zhufang/yaowen',
        name: '住房和城乡建设部 要闻',
        route: '/zhufang/yaowen',
        param: '',
    },
    {
        url: '/zhufang/xinxi',
        name: '住房和城乡建设部 信息公示',
        route: '/zhufang/xinxi',
        param: '',
    },
    {
        url: '/zhufang/difang',
        name: '住房和城乡建设部 地方动态',
        route: '/zhufang/difang',
        param: '',
    },

    {
        url: '/gov/sichuan/jijian',
        name: '四川省纪检委',
        route: '/gov-sichuan/jijian',
        param: '',
    },

    {
        url: '/jijian/yaowen',
        name: '纪检委 要闻',
        route: '/jijian/yaowen',
        param: '',
    },
    {
        url: '/jijian/zhongguansc',
        name: '纪检委 中管审查',
        route: '/jijian/zhongguansc',
        param: '',
    },
    {
        url: '/jijian/zhongguancf',
        name: '纪检委 中管处分',
        route: '/jijian/zhongguancf',
        param: '',
    },
    {
        url: '/jijian/zhongyangsc',
        name: '纪检委 中央审查',
        route: '/jijian/zhongyangsc',
        param: '',
    },
    {
        url: '/jijian/zhongyangcf',
        name: '纪检委 中央处分',
        route: '/jijian/zhongyangcf',
        param: '',
    },
    {
        url: '/jijian/shenguansc',
        name: '纪检委 省管审查',
        route: '/jijian/shenguansc',
        param: '',
    },
    {
        url: '/jijian/shenguancf',
        name: '纪检委 省管处分',
        route: '/jijian/shenguancf',
        param: '',
    },
    {
        url: '/renshe/shebao',
        name: '人力资源和社保部 工作动态',
        route: '/renshe/shebao',
        param: '',
    },
    {
        url: '/renshe/xinwen',
        name: '人力资源和社保部 新闻',
        route: '/renshe/xinwen',
        param: '',
    },
    {
        url: '/renshe/zhengce',
        name: '人力资源和社保部 政策文件',
        route: '/renshe/zhengce',
        param: '',
    },

    {
        url: '/waihui/yaowen',
        name: '外汇管理局 要闻',
        route: '/waihui/yaowen',
        param: '',
    },
];

// TODO: fix
// { "url": "/bjfy/wenshu", "name": "北京法院 裁判文书", "route": "/bjfy/wenshu", "param": "" },
// {"url": "/jrtt/sports", "name": "今日头条", "route": "/jrtt/:category", "param": "category: []"},
// { "url": "/court/wenshu", "name": "中国裁判文书网", "route": "/court/wenshu", "param": "" },
const startTime = +new Date();
router.get('/', async (ctx) => {
    ctx.set({
        'Content-Type': 'text/html; charset=UTF-8',
    });
    // https://github.com/DIYgod/RSSHub/blob/master/router.js
    const time = (+new Date() - startTime) / 1000;
    const routes = Object.keys(ctx.debug.routes).sort((a, b) => ctx.debug.routes[b] - ctx.debug.routes[a]);
    const hotRoutes = routes.slice(0, 100).map((e) => decodeURIComponent(e));
    let hotRoutesValue = '';
    hotRoutes.forEach((item) => {
        hotRoutesValue += `${ctx.debug.routes[item]}&nbsp;&nbsp;${item}<br>`;
    });

    const ips = Object.keys(ctx.debug.ips).sort((a, b) => ctx.debug.ips[b] - ctx.debug.ips[a]);
    const hotIPs = ips.slice(0, 100);
    let hotIPsValue = '';
    hotIPs.forEach((item) => {
        hotIPsValue += `${ctx.debug.ips[item]}&nbsp;&nbsp;${item}<br>`;
    });

    ctx.set({
        'Cache-Control': 'no-cache',
    });

    ctx.body = art(path.resolve(__dirname, './views/welcome.art'), {
        debug: {
            routes_news: routerlist.slice(0, 1),
            routes_gov: routerlist.slice(1),
            hotRoutes: hotRoutes,
            hotIPs: hotIPs,
            status: [
                {
                    name: '请求数',
                    value: ctx.debug.request,
                },
                {
                    name: '请求频率',
                    value: ((ctx.debug.request / time) * 60).toFixed(3) + ' 次/分钟',
                },
                {
                    name: '缓存命中率',
                    value: ctx.debug.request ? (ctx.debug.hitCache / ctx.debug.request).toFixed(3) : 0,
                },
                {
                    name: '内存占用',
                    value: process.memoryUsage().rss / 1000000 + ' MB',
                },
                {
                    name: '运行时间',
                    value: time + ' 秒',
                },
            ],
        },
    });
});

// context news
router.get('/context/:words', require('./routes/context/keywords'));

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
router.get('/zgfy/jieshi', require('./routes/zgfy/jieshi'));
router.get('/zgfy/zhongda', require('./routes/zgfy/zhongda'));

// 教育部 要闻
router.get('/jiaoyubu/jyyw', require('./routes/jiaoyubu/jyyw'));
// 教育部 通知
router.get('/jiaoyubu/jytz', require('./routes/jiaoyubu/jytz'));

// 公安部 通知公告
router.get('/gonganbu/bulletin', require('./routes/gonganbu/bulletin'));

// 国务院办公厅政府信息公开
router.get('/guowuyuan/zhengce/:topic/:category', require('./routes/guowuyuan/zhengce'));

// 国家广播电视总局
router.get('/guangdian/tongzhi', require('./routes/guangdian/tongzhi'));

// 国家税务总局
router.get('/shuiwu/yaowen', require('./routes/shuiwu/yaowen'));

// 国家体育总局
router.get('/tiyu/tongzhi', require('./routes/tiyu/tongzhi'));
router.get('/tiyu/difang', require('./routes/tiyu/difang'));

// 国家市场监督管理总局 通告
router.get('/shichang/zhaohui', require('./routes/shichang/zhaohui'));
router.get('/shichang/gonggao', require('./routes/shichang/gonggao'));
router.get('/shichang/tonggao', require('./routes/shichang/tonggao'));
router.get('/shichang/xinwen', require('./routes/shichang/xinwen'));
router.get('/shichang/wenjian', require('./routes/shichang/wenjian'));

// 国家宗教事务局
router.get('/zongjiao/bu', require('./routes/zongjiao/bu'));
router.get('/zongjiao/difang', require('./routes/zongjiao/difang'));
router.get('/zongjiao/zongjiao', require('./routes/zongjiao/zongjiao'));

// 海关总署
router.get('/haiguan/dongtai', require('./routes/haiguan/dongtai'));

// 国家知识产权局
router.get('/ip/gongzuo', require('./routes/ip/gongzuo'));
router.get('/ip/tongzhi', require('./routes/ip/tongzhi'));

// 住房和城乡建设部
router.get('/zhufang/yaowen', require('./routes/zhufang/yaowen'));
router.get('/zhufang/xinxi', require('./routes/zhufang/xinxi'));
router.get('/zhufang/difang', require('./routes/zhufang/difang'));

// 四川省纪检委
router.get('/gov/sichuan/jijian', require('./routes/gov-sichuan/jijian'));

// 纪检委
router.get('/jijian/yaowen', require('./routes/jijian/yaowen'));
router.get('/jijian/zhongguansc', require('./routes/jijian/zhongguansc'));
router.get('/jijian/zhongguancf', require('./routes/jijian/zhongguancf'));
router.get('/jijian/zhongyangsc', require('./routes/jijian/zhongyangsc'));
router.get('/jijian/zhongyangcf', require('./routes/jijian/zhongyangcf'));
router.get('/jijian/shenguansc', require('./routes/jijian/shenguansc'));
router.get('/jijian/shenguancf', require('./routes/jijian/shenguancf'));

// 人力资源和社保部
router.get('/renshe/shebao', require('./routes/renshe/shebao'));
router.get('/renshe/xinwen', require('./routes/renshe/xinwen'));
router.get('/renshe/zhengce', require('./routes/renshe/zhengce'));

// 外汇管理局
router.get('/waihui/yaowen', require('./routes/waihui/yaowen'));

// 进出口图表
router.get('/chart/exports', require('./routes/datajournal/exports'));

router.get('/chart/stats/category', require('./routes/stats/category'));
router.get('/chart/stats/:sourceid/:sessionid', require('./routes/stats/easyquery'));

// 网信办 相关部门发布
// http://search.cac.gov.cn/was5/web/search?channelid=246506&prepage=36&searchword=extend5%3D%27%251192649%25%27
// 办公室发布
// http://search.cac.gov.cn/was5/web/search?channelid=246506&prepage=36&searchword=extend5%3D%27%251192648%25%27

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
