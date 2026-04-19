# 🐾 Automatización de API Petstore con Karate DSL

Este proyecto contiene la automatización de pruebas para la API de **Swagger Petstore**, realizada como parte del **Ejercicio 5.2.2** del workshop de Ingeniería de Pruebas. Se utiliza el framework **Karate** para validar los endpoints principales de gestión de mascotas.

## 🚀 Tecnologías Utilizadas

* **Karate DSL**: Framework de automatización de pruebas basado en BDD (Gherkin).
* **Maven**: Gestión de dependencias y ejecución de pruebas.
* **JUnit 5**: Motor de ejecución para los Runners de Karate.
* **Java**: Entorno base para el proyecto.

## 📋 Escenarios de Prueba

Se implementaron archivos `.feature` para cubrir el ciclo de vida de una mascota:

1.  **Consultar Mascota (`getPetById.feature`)**: Validación de respuesta exitosa (Status 200) y coincidencia de ID al consultar por un identificador específico.
2.  **Crear Mascota (`createPet.feature`)**: Envío de un `POST` con un cuerpo JSON para dar de alta un nuevo registro.
3.  **Actualizar Mascota (`updatePet.feature`)**: Uso del método `PUT` para modificar datos existentes (Nombre y Estatus) de una mascota.
4.  **Flujo Completo (`flowPet.feature`)**: Escenario dinámico que crea una mascota, captura su ID de la respuesta y lo utiliza automáticamente para realizar una consulta `GET`.