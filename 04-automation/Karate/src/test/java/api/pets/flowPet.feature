Feature: Ejemplo de flujo

  Scenario: Crear y luego consultar mascota
    Given url 'https://petstore.swagger.io/v2/pet'
    And request { "id": 12345, "name": "Firulais", "status": "available" }
    When method POST
    Then status 200
    * def petId = response.id
    
    Given url 'https://petstore.swagger.io/v2/pet/' + petId
    When method GET
    Then status 200
    And match response.name == "Firulais"