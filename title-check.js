const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true }); // set to false to see the browser
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.ashbyhq.com');

  const title = await page.title();
  console.log(`Page title: ${title}`);

  if (title.includes('Ashby')) {
    console.log('✅ Title test passed!');
  } else {
    console.log('❌ Title test failed!');
  }

  await browser.close();
})();

