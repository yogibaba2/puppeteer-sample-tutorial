const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://www.bstackdemo.com/signin');
  // Start recording.
  const recorder = await page.screencast({path: 'bstack-login-form.webm'});
  await page.type('#react-select-2-input','demouser', {delay: 100})
  await page.keyboard.press('Enter');
  await page.type('#react-select-3-input','testingisfun99', {delay: 100})
  await page.keyboard.press('Enter');
  await page.click('#login-btn')
  await page.waitForNavigation();
  // Stop recording.
  await recorder.stop();
  await browser.close();
})();
