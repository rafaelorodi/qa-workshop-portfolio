const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: 'html',
  use: {
    headless: false,    // false = ver el navegador abrirse
    baseURL: 'https://petstore.octoperf.com',
  },
});
