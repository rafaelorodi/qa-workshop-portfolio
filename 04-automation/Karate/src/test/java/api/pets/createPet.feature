Feature: Creacion de mascotas

  Scenario: Crear una mascota con POST
    Given url 'https://petstore.swagger.io/v2/pet'
    And request { "id": 123456, "name": "Firulais", "status": "available" }
    When method POST
    Then status 200