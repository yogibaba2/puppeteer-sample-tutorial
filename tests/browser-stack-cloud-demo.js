const puppeteer = require('puppeteer');

(async () => {

    const caps = {
        'browser': 'chrome',  // You can choose `chrome`, `edge` or `firefox` in this capability
        'browser_version': 'latest',  // We support v83 and above. You can choose `latest`, `latest-beta`, `latest-1`, `latest-2` and so on, in this capability
        'os': 'os x',
        'os_version': 'big sur',
        'build': 'puppeteer-build-1',
        'name': 'My first Puppeteer test',  // The name of your test and build. See browserstack.com/docs/automate/puppeteer/organize tests for more details
        'browserstack.username': process.env.BROWSERSTACK_USERNAME || 'USER_NAME',
        'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY || 'ACCESS_KEY'
    };
    const browser = await puppeteer.connect({
    browserWSEndpoint:
    `wss://cdp.browserstack.com/puppeteer?caps=${encodeURIComponent(JSON.stringify(caps))}`,  // The BrowserStack CDP endpoint gives you a `browser` instance based on the `caps` that you specified
    });

    
    const page = await browser.newPage();
  await page.goto('https://demo.automationtesting.in/Alerts.html');
 
  await page.click('a[href="#CancelTab"]')
  await page.waitForSelector('button[onclick="confirmbox()"]')
  page.on('dialog', async dialog => await dialog.accept());
  await page.click('button[onclick="confirmbox()"]')

  await browser.close();
})();