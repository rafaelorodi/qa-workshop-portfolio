const { test, expect } = require('@playwright/test');

test('Navegar a la categoria FISH', async ({ page }) => {

  // 1. Ir a la tienda
  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

  // 2. Hacer clic en la categoria FISH
  await page.locator('#QuickLinks a[href*="categoryId=FISH"]').click();

  // 3. Verificar que aparecen productos de peces
  await expect(page.getByRole('heading', { name: 'Fish' })).toBeVisible();
});

test('Navegar a la categoria DOGS', async ({ page }) => {

  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

  // Hacer clic usando getByText
  await page.locator('#QuickLinks a[href*="categoryId=DOGS"]').click();

  await expect(page.getByText('Dogs')).toBeVisible();

});
