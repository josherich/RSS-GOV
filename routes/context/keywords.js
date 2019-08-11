const axios = require('axios');
const config = require('../../config');
const url = 'http://search.mindynode.com/page_entity-*/_search';
// const url = 'http://localhost:9200/page_entity-*/_search';

host_name = (id) => {
    const keys = {
        "1247": "外汇管理局 要闻",
        "1246": "人力资源和社保部 政策文件",
        "1245": "人力资源和社保部 新闻",
        "1244": "人力资源和社保部 工作动态",
        "1243": "纪检委 省管处分",
        "1242": "纪检委 省管审查",
        "1241": "纪检委 中央处分",
        "1240": "纪检委 中央审查",
        "1239": "纪检委 中管处分",
        "1238": "纪检委 中管审查",
        "1237": "纪检委 要闻",
        "1236": "四川省纪检委",
        "1235": "住房和城乡建设部 地方动态",
        "1234": "住房和城乡建设部 信息公示",
        "1233": "住房和城乡建设部 要闻",
        "1232": "国家知识产权局 工作通知",
        "1231": "国家知识产权局 知识产权工作",
        "1230": "海关总署 动态",
        "1229": "国家宗教事务局 宗教界动态",
        "1228": "国家宗教事务局 地方工作动态",
        "1227": "国家宗教事务局 部工作动态",
        "1226": "国家市场监督管理总局 文件发布",
        "1225": "国家市场监督管理总局 新闻发布",
        "1224": "国家市场监督管理总局 通告",
        "1223": "国家市场监督管理总局 公告",
        "1222": "国家市场监督管理总局 召回公告",
        "1221": "国家体育总局 地方动态",
        "1220": "国家体育总局 通知公告",
        "1219": "国家税务总局 税务要闻",
        "1218": "国家广播电视总局 通知公告",
        "1217": "公安部 通知",
        "1216": "教育部 公开通知",
        "1215": "教育部 公开通知",
        "1214": "教育部 教育要闻",
        "1213": "最高人民法院 地方新闻",
        "1212": "最高人民法院 新闻",
        "1211": "外交部 驻外报道",
        "1210": "外交部 司局新闻",
        "1209": "外交部 领导人活动",
        "1208": "国防部 权威发布",
        "1207": "最高人民检察院 权威发布",
        "1206": "上海市经济和信息化委员会 政务公开",
        "1205": "财政部 政策发布",
        "1204": "海淀法院 案件快报",
        "1203": "质量技术监督局 公告公示",
        "1202": "国家统计局 数据解读",
        "1201": "国家统计局 最新发布",
        "1200": "国务院办公厅政府 信息公开",
        "704": "虎扑国际足球",
        "703": "虎扑 NBA",
        "702": "新浪国际足球",
        "701": "人民网体育",
        "608": "央视新闻-世界",
        "607": "朝日新闻-政治经济",
        "606": "朝日新闻-日本社会",
        "605": "多维新闻网",
        "604": "腾讯国际",
        "603": "人民网国际",
        "602": "环球网国际",
        "601": "中国经济网",
        "511": "Recode",
        "510": "MIT Technology Review",
        "509": "Fast Company",
        "508": "The Hill",
        "507": "WSJ Tech",
        "506": "Economist Tech",
        "505": "ABC News",
        "504": "CNN",
        "503": "SlashDot",
        "502": "The Wired",
        "501": "The Atlantic Tech",
        "420": "科学网",
        "419": "动点科技",
        "418": "IBT中文",
        "417": "百度新闻科技",
        "416": "百度新闻互联网",
        "415": "路透科技",
        "414": "TechCrunch中国",
        "413": "cnBeta",
        "412": "新浪科技",
        "411": "Engadget",
        "410": "极客公园",
        "409": "腾讯科技",
        "408": "虎嗅网",
        "407": "Solidot",
        "406": "36kr",
        "405": "品玩",
        "404": "雷锋网",
        "403": "钛媒体",
        "402": "爱范儿",
        "401": "华尔街日报科技",
        "309": "财新网-世界经济",
        "308": "人民网财经",
        "307": "IBT中国",
        "306": "路透最新资讯",
        "305": "路透专栏",
        "304": "路透财经",
        "303": "路透中国",
        "302": "华尔街见闻-经济",
        "301": "华尔街日报",
        "214": "The Guardian - Editorial",
        "213": "WSJ",
        "212": "Economist",
        "211": "Washington Post",
        "210": "ABC News",
        "209": "Reuters",
        "208": "AP",
        "207": "BBC World",
        "206": "NPR",
        "205": "CNN World",
        "204": "VOX",
        "203": "Quartz",
        "202": "The Guardian",
        "201": "New York Times",
        "23": "新浪新闻-国内",
        "22": "人民网评",
        "21": "半月谈-时政讲解",
        "20": "经济观察网-时事",
        "19": "德国之声",
        "18": "韩联社",
        "17": "界面新闻",
        "16": "日经中文",
        "15": "财新网-世界",
        "14": "百度新闻",
        "13": "法广",
        "12": "新浪世界新闻",
        "11": "联合早报",
        "10": "中国新闻网",
        "9": "端媒体",
        "7": "BBC中文",
        "6": "FT中文网",
        "5": "南方周末-社会",
        "4": "纽约时报中文网",
        "3": "新京报",
        "2": "QQ新闻国内",
        "1": "澎湃"
    }
    return keys[id] || ""
}

module.exports = async (ctx) => {
    let lang = 'zh';
    let words = ctx.params.words;
    if (ctx.query.lang) {
        lang = ctx.query.lang;
    }
    words = words.replace(/\+/g, ' +');
    words = words.replace(/-/g, ' -');
    words = words.replace(/\|/g, ' ');

    const response1 = await axios({
        method: 'post',
        url: url,
        headers: {
            'User-Agent': config.ua,
            Referer: 'http://news.mindynode.com',
        },
        data: {
            "min_score": 8.0,
            "query": {
                "query_string": {
                    "query": words,
                    "fields": [ "page_title^2", "page_content" ],
                    "type": "most_fields"
                }
            }
        }
    });

    const min_score = response1.data['hits']['max_score'] / 2

    const response2 = await axios({
        method: 'post',
        url: url,
        headers: {
            'User-Agent': config.ua,
            Referer: 'http://news.mindynode.com',
        },
        data: {
            "min_score": min_score,
            "query": {
                "query_string": {
                    "query": words,
                    "fields": [ "page_title^2", "page_content" ],
                    "type": "most_fields"
                }
            },
            "sort": [
                {"@timestamp": "desc"},
                "_score"
            ]
        }
    });

    const items = response2.data['hits']['hits'].map( page => {
        return {
            "title": page['_source']['page_title'].replace('\"','"').replace('\n',''),
            "content": page['_source']['page_content'].replace('\"','"').replace('\n',''),
            "host": host_name(page['_source']['page_host_id']),
            "url": page['_source']['page_url'],
            "image": page['_source']['page_image'],
            "created_at": page['_source']['created_at']
        }
    });

    ctx.state.data = {
        title: lang === 'zh' ? `上下闻 RSS ${ctx.params.words}` : `Context RSS ${ctx.params.words}`,
        link: `https://news.mindynode.com/zh/trends?q=+random${words}`,
        description: lang === 'zh' ? `上下闻 RSS - 关键词新闻订阅（${ctx.params.words}）` : `Context RSS - Configurable News RSS (${ctx.params.words})`,
        item: items.map((item) => {
            const title = `「${item.host}」${item.title}`;
            const origin_link = `<a href="${item.url}">${item.url}</a><br/>`;
            const description = item.content.replace(/\u3000|\\n/g, '<br/>');
            const sign =
                lang === 'zh'
                    ? '<br/> 由上下闻生成：<a href="https://news.mindynode.com/zh">https://news.mindynode.com/zh</a>'
                    : '<br/> Generated by Context RSS: <a href="https://news.mindynode.com/en">https://news.mindynode.com</a>';
            return {
                title: title,
                description: origin_link + description + sign,
                pubDate: item.created_at,
                link: item.url,
            };
        }),
    };
};
