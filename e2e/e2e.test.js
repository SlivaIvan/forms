import puppeteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:8080';

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  test('should add do something', async () => {
    await page.goto(baseUrl);
    const button = await page.$('.btn');
    await button.click();
    await page.waitForSelector('.popover');
  });
  afterAll(async () => {
    await browser.close();
  });
});
