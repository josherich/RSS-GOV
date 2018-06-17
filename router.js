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
    {
        url: baseUrl + '/guowuyuan/zhengce/all/all',
        name: '国务院办公厅政府信息公开',
        route: 'http://rss.mindynode.com/guowuyuan/zhengce/:topic/:category',
        param: 'topic: all | 国民经济管理-国有资产监管 | 财政-金融-审计 | 国土资源-能源 农业-林业-水利 \n category: all | 国令 | 国发 | 国函 | 国发明电 | 国办发 | 国办函 | 国办发明电',
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
            routes_news: routerlist.slice(0, 1),
            routes_gov: routerlist.slice(1),
            routes_examples: [
                '+贾跃亭+乐视',
                '+中国+美国+关税',
                '+特朗普+朝鲜',
                '+美国+枪杀',
                '+比特币|加密货币',
                '+世界杯+阿根廷',
                '+白宫-特朗普',
                '+亚裔+美国'
            ],
            news_host: [
                { name: '澎湃', url :'http://www.thepaper.cn/'},
                { name: 'QQ新闻国内', url :'http://news.qq.com/china_index.shtml'},
                { name: '新京报', url :'http://www.bjnews.com.cn'},
                { name: '纽约时报中文网', url :'https://cn.nytimes.com'},
                { name: '南方周末-社会', url :'http://www.infzm.com'},
                { name: 'FT中文网', url :'http://www.ftchinese.com'},
                { name: 'BBC中文', url :'http://www.bbc.com/zhongwen/simp'},
                { name: '端媒体', url :'https://theinitium.com'},
                { name: '中国新闻网', url :'https://www.chinanews.com'},
                { name: '联合早报', url :'http://www.zaobao.com.sg'},
                { name: '新浪世界新闻', url :'http://www.sina.com.cn'},
                { name: '法广', url :'http://cn.rfi.fr/'},
                { name: '百度新闻', url :'http://news.baidu.com/'},
                { name: '财新网', url :'http://international.caixin.com/'},
                { name: '日经中文', url :'http://cn.nikkei.com'},
                { name: '界面新闻', url :'http://www.jiemian.com/'},
                { name: '华尔街日报', url :'http://cn.wsj.com/gb'},
                { name: '华尔街见闻-经济', url :'https://wallstreetcn.com/news/economy'},
                { name: '路透中国', url :'http://cn.reuters.com'},
                { name: '路透财经', url :'http://cn.reuters.com'},
                { name: '路透专栏', url :'http://cn.reuters.com'},
                { name: '百度财经', url :'http://cn.reuters.com'},
                { name: 'IBT中国', url :'http://www.ibtimes.com.cn'},
                { name: '人民网财经', url :'http://www.people.com.cn'},
                { name: '华尔街日报科技', url :'http://cn.wsj.com/gb/tech.php'},
                { name: '爱范儿', url :'http://www.ifanr.com/'},
                { name: '钛媒体', url :'http://www.tmtpost.com/'},
                { name: '雷锋网', url :'http://www.leiphone.com'},
                { name: '品玩', url :'http://www.pingwest.com'},
                { name: '36kr', url :'http://www.36kr.com'},
                { name: 'Solidot', url :'http://www.solidot.org'},
                { name: '虎嗅网', url :'http://www.huxiu.com'},
                { name: '腾讯科技', url :'http://tech.qq.com'},
                { name: '极客公园', url :'http://www.geekpark.net'},
                { name: 'Engadget中国', url :'http://cn.engadget.com'},
                { name: '新浪科技', url :'http://tech.sina.com.cn'},
                { name: 'cnBeta', url :'http://www.cnbeta.com'},
                { name: 'TechCrunch中国', url :'http://techcrunch.cn'},
                { name: '路透科技', url :'http://cn.reuters.com/life/technology'},
                { name: '百度新闻互联网', url :'http://news.baidu.com/internet'},
                { name: '百度新闻科技', url :'http://news.baidu.com/tech'},
                { name: 'IBT中文', url :'http://www.ibtimes.com.cn/tech'},

                { name: 'The Atlantic Tech', url :'https://www.theatlantic.com/technology/'},
                { name: 'The Wired', url :'https://www.wired.com'},
                { name: 'SlashDot', url :'http://slashdot.org/'},
                { name: 'CNN', url :'http://rss.cnn.com/rss/edition_technology.rss'},
                { name: 'ABC News', url :'http://abcnews.go.com/abcnews/technologyheadlines'},
                { name: 'Economist', url :'http://www.economist.com/sections/science-technology/rss.xml'},
                { name: 'WSJ', url :'http://www.wsj.com/xml/rss/3_7455.xml'},
                { name: 'The Hill', url :'http://thehill.com/taxonomy/term/27/feed'},
                { name: 'Fast Company', url :'https://www.fastcompany.com/technology'},
                { name: 'New York Times', url :'https://www.nytimes.com'},
                { name: 'The Guardian', url :'https://www.theguardian.com/us'},
                { name: 'Quartz', url :'https://qz.com'},
                { name: 'VOX', url :'https://www.vox.com'},
                { name: 'CNN World', url :'http://www.cnn.com/'},
                { name: 'NPR', url :'http://www.npr.org/'},
                { name: 'BBC World', url :'http://www.bbc.com/news/world'},
                { name: 'AP', url :'https://www.apnews.com/'},
                { name: 'Reuters', url :'http://www.reuters.com/'},
                { name: 'ABC News', url :'http://abcnews.go.com/'},
                { name: 'Washington Post', url :'http://www.washingtonpost.com/'},
                { name: 'Economist', url :'http://www.economist.com'},
                { name: 'WSJ', url :'http://www.wsj.com'},
            ]
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

// 教育部 要闻
router.get('/jiaoyubu/jyyw', require('./routes/jiaoyubu/jyyw'));
// 教育部 通知
router.get('/jiaoyubu/jytz', require('./routes/jiaoyubu/jytz'));

// 公安部 通知公告
router.get('/gonganbu/bulletin', require('./routes/gonganbu/bulletin'));

// 国务院办公厅政府信息公开
router.get('/guowuyuan/zhengce/:topic/:category', require('./routes/guowuyuan/zhengce'));

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
