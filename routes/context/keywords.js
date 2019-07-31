const axios = require('axios');
const config = require('../../config');
const url = 'http://search.mindynode.com/page_entity-*/_search';
// const url = 'http://localhost:7000/1.0/rss/search';

host_name = (id) => {
    const keys = {
        "1": '澎湃',
        "2": 'QQ新闻国内',
        "3": '新京报',
        "4": '纽约时报中文网',
        "5": '南方周末-社会',
        "6": 'FT中文网',
        "7": 'BBC中文',
        "9": '端媒体',
        "10": '中国新闻网',
        "11": '联合早报',
        "12": '新浪世界新闻',
        "13": '法广',
        "14": '百度新闻',
        "15": '财新网',
        "16": '日经中文',
        "17": '界面新闻',
        "18": '韩联社',
        "19": '德国之声',
        "20": "经济观察网-时事",
        "21": "半月谈-时政讲解",
        "22": "人民网评",
        "23": "新浪新闻-国内",

        "1232": "国家知识产权局",
        "1231": "国家知识产权局",
        "1230": "海关总署",
        "1229": "国家宗教事务局",
        "1228": "国家宗教事务局",
        "1227": "国家宗教事务局",
        "1226": "国家市场监督管理总局",
        "1225": "国家市场监督管理总局",
        "1224": "国家市场监督管理总局",
        "1223": "国家市场监督管理总局",
        "1222": "国家市场监督管理总局",
        "1221": "国家体育总局",
        "1220": "国家体育总局",
        "1219": "国家税务总局",
        "1218": "国家广播电视总局",
        "1217": "公安部",
        "1216": "教育部",
        "1215": "教育部",
        "1214": "教育部",
        "1213": "最高人民法院",
        "1212": "最高人民法院",
        "1211": "外交部",
        "1210": "外交部",
        "1209": "外交部",
        "1208": "国防部",
        "1207": "最高人民检察院",
        "1206": "上海市经济和信息化委员会",
        "1205": "财政部",
        "1204": "海淀法院",
        "1203": "质量技术监督局",
        "1202": "国家统计局",
        "1201": "国家统计局",
        "1200": "国务院办公厅政府",

        "704": "虎扑国际足球",
        "703": "虎扑",
        "702": "新浪国际足球",
        "701": "人民网体育",

        "605": "多维新闻网",
        "606": "朝日新闻-日本社会",
        "607": "朝日新闻-政治经济",
        "608": "央视新闻-世界",
        "604": "腾讯国际",
        "603": "人民网国际",
        "602": "环球网国际",
        "601": "中国经济网",

        "511": "Recode",
        "510": "MIT Tech Review",
        "509": "Fast Company",
        "508": "The Hill",
        "507": "WSJ Tech",
        "506": "Economist Tech",
        "505": "ABC Tech",
        "504": "CNN Tech",
        "503": "SlashDot",
        "502": "The Wired",
        "501": "The Atlantic Tech",

        "420": "动点科技",
        "419": "科学网",
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
        "302": "华尔街见闻",
        "301": "华尔街日报",

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
    }
    return keys[id] || " "
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

    const response = await axios({
        method: 'post',
        url: url,
        headers: {
            'User-Agent': config.ua,
            Referer: 'http://news.mindynode.com',
        },
        data: {
          "min_score": 15.0,
          "query": {
            "multi_match": {
              "query": words,
              "fields": [ "page_title", "page_content" ]
            }
          },
          "sort": [
            {"@timestamp": "desc"},
            "_score"
          ],
          "highlight": {
            "pre_tags": ["<strong>", "<em>"],
            "post_tags": ["</strong>", "</em>"],
            "fields": {
              "page_content": {}
            }
          }
        }
    });

    const items = response.data['hits']['hits'].map( page => {
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
