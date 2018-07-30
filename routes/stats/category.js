module.exports = async (ctx) => {
    ctx.state.data = {
        title: '统计局',
        link: 'http://data.stats.gov.cn/easyquery.htm?cn=A01',
        description: '统计局',
        item: {
            "国内贸易": {
                "限额以上住宿和餐饮业营业额": "A1507",
                "网上零售额": "A1508"
            },
            "采购经理指数": {
                "制造业采购经理指数": "A1901",
                "非制造业采购经理指数": "A1902",
                "综合PMI产出指数": "A1903"
            },
            "财政": {
                "国家财政预算收入": "A1A01",
                "国家财政预算支出": "A1A02"
            },
            "金融": {
                "货币供应量": "A1B01"
            }
        }
    };
};
