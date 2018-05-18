const puppeteer = require('puppeteer');

module.exports = async () => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    return page;
};
