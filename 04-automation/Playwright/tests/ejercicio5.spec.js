const { test, expect } = require('@playwright/test');

test.describe('Automatización de Carrito por Categorías', () => {

    // Definimos las categorías que queremos recorrer
    const categorias = ['FISH', 'DOGS', 'REPTILES', 'CATS', 'BIRDS'];

    test('Agregar un ítem de cada categoría al carrito', async ({ page }) => {
        // 1. Login previo (opcional, pero recomendado)
        await page.goto('https://petstore.octoperf.com/actions/Account.action?signonForm=');
        await page.locator('input[name="username"]').fill('paelo');
        await page.locator('input[name="password"]').fill('qa.1234');
        await page.getByRole('button', { name: 'Login' }).click();

        // 2. Bucle para recorrer cada categoría
        for (const cat of categorias) {
            console.log(`Agregando producto de la categoría: ${cat}`);

            // Hacer clic en la categoría en el menú lateral usando el atributo href
            await page.locator(`#SidebarContent a[href*="categoryId=${cat}"]`).click();

            // Hacer clic en el primer ID de producto disponible
            await page.locator('table tr td a').first().click();

            // Hacer clic en el primer "Add to Cart" que encontremos
            await page.locator('a.Button:has-text("Add to Cart")').first().click();

            // Verificamos que estamos en el carrito
            await expect(page.getByText('Shopping Cart')).toBeVisible();

            // Volver al inicio para la siguiente categoría
            await page.goto('https://petstore.octoperf.com/actions/Catalog.action');
        }

        // 3. Verificación final: ¿Hay ítems en el carrito?
        await page.locator('a[href*="viewCart"]').click();
        const filasProductos = page.locator('table tr');
        // Verificamos que haya más de una fila (encabezado + productos)
        expect(await filasProductos.count()).toBeGreaterThan(1);

        console.log('¡Todos los ítems fueron agregados con éxito!');
    });
});