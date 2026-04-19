const { test, expect } = require('@playwright/test');

test.describe('Pruebas de Login PetStore', () => {

  test('Login exitoso con paelo', async ({ page }) => {
    // 1. Navegar directamente al formulario de login
    await page.goto('https://petstore.octoperf.com/actions/Account.action?signonForm=');

    // 2. Localizar por atributo name y completar campos
    const userInput = page.locator('input[name="username"]');
    const passInput = page.locator('input[name="password"]');

    await userInput.clear();
    await userInput.fill('paelo');

    await passInput.clear();
    await passInput.fill('qa.1234');

    // 3. Click en el botón de Login
    // En este sitio, el botón es un <input type="submit" name="update" value="Login">
    await page.getByRole('button', { name: 'Login' }).click();

    // 4. Verificaciones finales
    await expect(page).toHaveURL(/Catalog.action/);
    await expect(page.getByText('Sign Out')).toBeVisible();
  });

  test('Login fallido - Credenciales incorrectas', async ({ page }) => {
    await page.goto('https://petstore.octoperf.com/actions/Account.action?signonForm=');

    await page.locator('input[name="username"]').fill('usuario_erroneo');
    await page.locator('input[name="password"]').fill('clave_falsa');
    await page.getByRole('button', { name: 'Login' }).click();

    // Verificamos que el mensaje de error aparezca en el contenedor de mensajes
    const errorMessage = page.locator('.messages li');
    await expect(errorMessage).toContainText('Invalid username or password');
  });

});
