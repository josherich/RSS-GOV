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
    // 国务院
    {
        url: '/guowuyuan/xinwen',
        name: '国务院-新闻-要闻',
        route: 'http://rss.mindynode.com/guowuyuan/xinwen',
        param: '',
    },
    {
        url: '/guowuyuan/dongtai',
        name: '国务院-动态',
        route: 'http://rss.mindynode.com/guowuyuan/dongtai',
        param: '',
    },
    {
        url: '/guowuyuan/zhengce-zuixin',
        name: '国务院-政策-最新',
        route: 'http://rss.mindynode.com/guowuyuan/zhengce-zuixin',
        param: '',
    },
    {
        url: '/guowuyuan/shuju',
        name: '国务院-数据-要闻',
        route: 'http://rss.mindynode.com/guowuyuan/shuju',
        param: '',
    },
    // 政协
    // {
    //     url: '/zhengxie/yaowen',
    //     name: '政协-要闻',
    //     route: 'http://rss.mindynode.com/zhengxie/yaowen',
    //     param: '',
    // },
    // {
    //     url: '/zhengxie/lingdao',
    //     name: '政协-领导讲话',
    //     route: 'http://rss.mindynode.com/zhengxie/lingdao',
    //     param: '',
    // },
    // {
    //     url: '/zhengxie/renshi',
    //     name: '政协-人事任免',
    //     route: 'http://rss.mindynode.com/zhengxie/renshi',
    //     param: '',
    // },
    // {
    //     url: '/zhengxie/tongzhi',
    //     name: '政协-通知公告',
    //     route: 'http://rss.mindynode.com/zhengxie/tongzhi',
    //     param: '',
    // },
    // 其它
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
        url: '/shgov/bulletin',
        name: '上海市经济和信息化委员会 政务公开',
        route: '/shgov/bulletin',
        param: '',
    },
    {
        url: '/gov/sichuan/jijian',
        name: '四川省纪检委',
        route: '/gov-sichuan/jijian',
        param: '',
    },
    // 科技部
    {
        url: '/kejibu/gengxin',
        name: '科技部 最近更新',
        route: '/kejibu/gengxin',
        param: '',
    },
    // 工信部
    {
        url: '/gongxinbu/dongtai',
        name: '工信部 工作动态',
        route: '/gongxinbu/dongtai',
        param: '',
    },
    {
        url: '/gongxinbu/duiwai',
        name: '工信部 对外交流',
        route: '/gongxinbu/duiwai',
        param: '',
    },
    {
        url: '/gongxinbu/gongzuo',
        name: '工信部 重点工作',
        route: '/gongxinbu/gongzuo',
        param: '',
    },
    {
        url: '/gongxinbu/lingdao',
        name: '工信部 领导活动',
        route: '/gongxinbu/lingdao',
        param: '',
    },
    {
        url: '/gongxinbu/wenjian',
        name: '工信部 政策文件',
        route: '/gongxinbu/wenjian',
        param: '',
    },
    {
        url: '/gongxinbu/tongji-zonghe',
        name: '工信部 统计 综合',
        route: '/gongxinbu/tongji-zonghe',
        param: '',
    },
    {
        url: '/gongxinbu/tongji-dianzi',
        name: '工信部 统计 电子',
        route: '/gongxinbu/tongji-dianzi',
        param: '',
    },
    {
        url: '/gongxinbu/tongji-ruanjian',
        name: '工信部 统计 软件',
        route: '/gongxinbu/tongji-ruanjian',
        param: '',
    },
    {
        url: '/gongxinbu/tongji-tongxin',
        name: '工信部 统计 通信',
        route: '/gongxinbu/tongji-tongxin',
        param: '',
    },
    {
        url: '/gongxinbu/tongji-xiaofeipin',
        name: '工信部 统计 消费品',
        route: '/gongxinbu/tongji-xiaofeipin',
        param: '',
    },
    {
        url: '/gongxinbu/tongji-yuancailiao',
        name: '工信部 统计 原材料',
        route: '/gongxinbu/tongji-yuancailiao',
        param: '',
    },
    {
        url: '/gongxinbu/tongji-zhuangbei',
        name: '工信部 统计 装备',
        route: '/gongxinbu/tongji-zhuangbei',
        param: '',
    },
    // 纪检委
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
    // 财政部
    {
        url: '/caizhengbu/zhengce',
        name: '财政部 政策发布',
        route: '/caizhengbu/zhengce',
        param: '',
    },
    // 最高检
    {
        url: '/jianchayuan/fabu',
        name: '最高人民检察院 权威发布',
        route: '/jianchayuan/fabu',
        param: '',
    },
    {
        url: '/jianchayuan/xinwen',
        name: '最高人民检察院 新闻',
        route: '/jianchayuan/xinwen',
        param: '',
    },
    // 发改委
    {
        url: '/fagaiwei/xinwen',
        name: '发改委 新闻',
        route: '/fagaiwei/xinwen',
        param: '',
    },
    // 国防部
    {
        url: '/guofangbu/fabu',
        name: '国防部 权威发布',
        route: '/guofangbu/fabu',
        param: '',
    },
    // 外交部
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
    // 最高法
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
    // 教育部
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
    // 公安部
    {
        url: '/gonganbu/bulletin',
        name: '公安部 通知',
        route: '/gonganbu/bulletin',
        param: '',
    },
    // 广电总局
    {
        url: '/guangdian/tongzhi',
        name: '国家广播电视总局 通知公告',
        route: '/guangdian/tongzhi',
        param: '',
    },
    // 税务总局
    {
        url: '/shuiwu/yaowen',
        name: '国家税务总局 税务要闻',
        route: '/shuiwu/yaowen',
        param: '',
    },
    // 体育总局
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
    // 市监局
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
    // 宗教事务局
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
    // 海关
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
router.get('/jianchayuan/xinwen', require('./routes/jianchayuan/xinwen'));

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

// 发改委 新闻
router.get('/fagaiwei/xinwen', require('./routes/fagaiwei/xinwen'));

// 科技部 最近更新
router.get('/kejibu/gengxin', require('./routes/kejibu/gengxin'));

// 工业和信息化部
router.get('/gongxinbu/dongtai', require('./routes/gongxinbu/dongtai'));
router.get('/gongxinbu/duiwai', require('./routes/gongxinbu/duiwai'));
router.get('/gongxinbu/gongzuo', require('./routes/gongxinbu/gongzuo'));
router.get('/gongxinbu/lingdao', require('./routes/gongxinbu/lingdao'));
router.get('/gongxinbu/wenjian', require('./routes/gongxinbu/wenjian'));
router.get('/gongxinbu/tongji-zonghe', require('./routes/gongxinbu/tongji-zonghe'));
router.get('/gongxinbu/tongji-dianzi', require('./routes/gongxinbu/tongji-dianzi'));
router.get('/gongxinbu/tongji-ruanjian', require('./routes/gongxinbu/tongji-ruanjian'));
router.get('/gongxinbu/tongji-tongxin', require('./routes/gongxinbu/tongji-tongxin'));
router.get('/gongxinbu/tongji-xiaofeipin', require('./routes/gongxinbu/tongji-xiaofeipin'));
router.get('/gongxinbu/tongji-yuancailiao', require('./routes/gongxinbu/tongji-yuancailiao'));
router.get('/gongxinbu/tongji-zhuangbei', require('./routes/gongxinbu/tongji-zhuangbei'));

// 公安部 通知公告
router.get('/gonganbu/bulletin', require('./routes/gonganbu/bulletin'));

// 国务院办公厅政府信息公开
router.get('/guowuyuan/zhengce/:topic/:category', require('./routes/guowuyuan/zhengce'));
router.get('/guowuyuan/dongtai', require('./routes/guowuyuan/dongtai'));
router.get('/guowuyuan/shuju', require('./routes/guowuyuan/shuju'));
router.get('/guowuyuan/xinwen', require('./routes/guowuyuan/xinwen'));
router.get('/guowuyuan/zhengce-zuixin', require('./routes/guowuyuan/zhengce-zuixin'));

// 政协
// code in html code
router.get('/zhengxie/lingdao', require('./routes/zhengxie/lingdao'));
router.get('/zhengxie/renshi', require('./routes/zhengxie/renshi'));
router.get('/zhengxie/tongzhi', require('./routes/zhengxie/tongzhi'));
router.get('/zhengxie/yaowen', require('./routes/zhengxie/yaowen'));

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
// 领导活动
// http://www.miit.gov.cn/n1146290/n1146397/index.html
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
