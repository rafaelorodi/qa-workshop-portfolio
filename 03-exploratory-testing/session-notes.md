# Sesión 1 - Reporte de Exploración
## Charter
Explorar el formulario de contacto de la plataforma usando formatos de correo inválidos, longitudes de texto extremas y carga de archivos para descubrir errores en la validación de datos, mensajes de error confusos o fallos en las restricciones de carga.
## ÁREAS
- **Sistema:** https://practicesoftwaretesting.com/contact
- **Entorno:** Web (Chrome)
- **Herramientas:** Google DevTools (Emulación de dispositivos iOS)
## INICIO
11/04/2026 - [Ingresa tu hora de inicio]
## TESTER
Rafael Rodi
## DESGLOSE DE TAREAS
- **Duración total:** 30 minutos
- **Ejecución y exploración:** 20 minutos
- **Documentación de hallazgos:** 10 minutos
## ARCHIVOS DE DATOS
- Datos manuales (nombres largos, correos incompletos).
- Archivos .txt (vacíos y con contenido).
## NOTAS DE PRUEBA
- Se realizó una prueba de adaptabilidad (Responsive Design) utilizando las herramientas de desarrollador para simular modelos de iPhone/iOS; el sitio responde correctamente al cambio de resolución.
- Se verificó el comportamiento de los campos de texto y la lógica de validación del formulario de contacto.
- Se realizaron pruebas de carga de archivos adjuntos para verificar restricciones de formato y tamaño.
## LISTA DE RIESGOS
- **Riesgo de comunicación:** La falta de validación estricta en el dominio del correo electrónico puede resultar en una base de datos con contactos erróneos, impidiendo que el soporte se comunique con el cliente.
## DEFECTOS (BUGS)
- **BUG 01 - Validación de Email insuficiente:** El sistema permite el envío del formulario con correos electrónicos incompletos (ejemplo: `rafaelrodi@gmail`). El sistema no valida la existencia del dominio de nivel superior (TLD como .com, .net, etc).
- **BUG 02 - Inconsistencia en límite de caracteres:** La interfaz indica que los campos de Nombre y Apellido aceptan un máximo de 120 caracteres. Sin embargo, el sistema rechaza la entrada incluso reduciendo considerablemente la cantidad de caracteres, impidiendo el envío. Se desconoce el límite real implementado.
## INCIDENTES (ISSUES)
- **Incertidumbre funcional en File Upload:** El sistema especifica explícitamente que solo permite cargar archivos `.txt` que estén **vacíos**. No se comprende el propósito de negocio de esta restricción (¿por qué prohibir archivos con texto?), lo que genera confusión en la experiencia del usuario.