const { test, expect } = require('@playwright/test');

test('Buscar el producto fish en la tienda', async ({ page }) => {

  // 1. Ir a la tienda
  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

  // 2. Encontrar el campo de busqueda (name="keyword") y escribir 'fish'
  await page.locator('input[name="keyword"]').fill('fish');

  // 3. Hacer clic en el boton Search para enviar el formulario
  await page.locator('input[name="searchProducts"]').click();

  // 4. Verificar que hay resultados visibles de peces (puede haber multiples, usamos first())
  await expect(page.getByText('fish', { exact: false }).first()).toBeVisible();

  // 5. Verificar que hay al menos un resultado (link a producto)
  await expect(page.locator('table a').first()).toBeVisible();

});

test('Buscar un producto que no existe', async ({ page }) => {

  await page.goto('https://petstore.octoperf.com/actions/Catalog.action');

  await page.locator('input[name="keyword"]').fill('xyzproductofalso');
  await page.locator('input[name="searchProducts"]').click();

  // Verificar que no hay resultados con ese texto
  await expect(page.getByText('xyzproductofalso')).not.toBeVisible();

});
