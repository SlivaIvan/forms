/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import puppeteer from 'puppeteer';

describe('test to open webserver', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });
  test("test to open server", async () => {
    await page.goto('http://localhost:8080');
  });

  afterAll(async () => {
    await browser.close();
  });
});
