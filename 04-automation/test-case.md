# 📋 Plan de Pruebas de Automatización - JPetStore

Este documento detalla la estrategia de pruebas y el mapeo de los casos de prueba automatizados con **Playwright**.

---

## 📂 Mapeo de Archivos y Cobertura
Cada archivo `.spec.js` en este repositorio corresponde a una funcionalidad crítica de la tienda:

| Archivo de Prueba | ID Caso | Funcionalidad Validada |
| :--- | :--- | :--- |
| `ejercicio1.spec.js` | **CP-01** | Disponibilidad y carga del sitio (Smoke Test). |
| `ejercicio2.spec.js` | **CP-02** | Navegación a categorías principales (FISH). |
| | **CP-03** | Navegación a categorías principales (DOGS). |
| `ejercicio3.spec.js` | **CP-04** | Búsqueda funcional de productos. |
| | **CP-05** | Validación de búsqueda sin resultados. |
| `ejercicio4.spec.js` | **CP-06** | Autenticación exitosa (Login). |
| | **CP-07** | Validación de errores en el inicio de sesión. |
| `ejercicio5.spec.js` | **CP-08** | Ciclo completo: Agregado de productos de múltiples categorías al carrito. |

---

## 📝 Detalle de los Casos de Prueba

### **CP-01: Verificación de Carga Inicial**
* **Archivo:** `ejercicio1.spec.js`
* **Objetivo:** Asegurar que el sitio web esté arriba y responda correctamente.
* **Pasos:**
  1. Acceder a la URL de catálogo.
  2. Validar que el título de la página contenga "JPetStore".
* **Resultado Esperado:** La página carga sin errores y la URL es la correcta.

### **CP-02 & CP-03: Navegación por Categorías**
* **Archivo:** `ejercicio2.spec.js`
* **Objetivo:** Validar que los enlaces rápidos de navegación funcionen.
* **Pasos:**
  1. Hacer clic en los enlaces del menú superior/lateral.
  2. Verificar la visibilidad del encabezado de la categoría (Fish/Dogs).
* **Resultado Esperado:** El sistema filtra y muestra solo los animales de la categoría seleccionada.

### **CP-04 & CP-05: Módulo de Búsqueda**
* **Archivo:** `ejercicio3.spec.js`
* **Objetivo:** Probar el motor de búsqueda interno.
* **Pasos:**
  1. Ingresar términos válidos e inválidos en el campo `keyword`.
  2. Ejecutar la búsqueda.
* **Resultado Esperado:** Para términos válidos, debe mostrarse una tabla con resultados; para inválidos, la tabla debe estar vacía o no mostrar el término buscado.

### **CP-06 & CP-07: Login y Gestión de Sesión**
* **Archivo:** `ejercicio4.spec.js`
* **Objetivo:** Validar el acceso seguro a la cuenta de usuario.
* **Credenciales:** `paelo` / `qa.1234`
* **Pasos:**
  1. Ingresar credenciales en el formulario de Sign In.
  2. Validar el cambio de estado de la sesión (aparición de "Sign Out").
* **Resultado Esperado:** El sistema permite el acceso con credenciales válidas y muestra un error descriptivo con las inválidas.

### **CP-08: Flujo E2E de Carrito de Compras**
* **Archivo:** `ejercicio5.spec.js`
* **Objetivo:** Validar la persistencia de datos en el carrito al navegar por múltiples categorías.
* **Pasos:**
  1. Iniciar sesión.
  2. Recorrer las categorías (FISH, DOGS, REPTILES, CATS, BIRDS).
  3. Seleccionar el primer producto de cada una y presionar "Add to Cart".
* **Resultado Esperado:** Al final del proceso, el carrito debe listar todos los artículos seleccionados y el contador de filas debe ser mayor a 1.

---

## 🛠️ Ejecución Técnica
Para replicar estas pruebas localmente:

1. **Instalar dependencias:**
   ```bash
   npm install