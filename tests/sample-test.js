const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://www.bstackdemo.com/');
  console.log('Page loaded successfully!');
  await browser.close();
})();
