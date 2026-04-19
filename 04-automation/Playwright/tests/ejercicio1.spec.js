const { test, expect } = require('@playwright/test');

test('La tienda Pet Store carga correctamente', async ({ page }) => {

  // 1. Navegar a la tienda
  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

  // 2. Verificar que el titulo contiene 'JPetStore'
  await expect(page).toHaveTitle(/JPetStore/);

  // 3. Verificar que la URL es la correcta
  await expect(page).toHaveURL(/Catalog.action/);

});
