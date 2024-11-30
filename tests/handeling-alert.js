const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://demo.automationtesting.in/Alerts.html');
 
  await page.click('a[href="#CancelTab"]')
  await page.waitForSelector('button[onclick="confirmbox()"]')
  page.on('dialog', async dialog => await dialog.accept());
  await page.click('button[onclick="confirmbox()"]')

  await browser.close();
})();
