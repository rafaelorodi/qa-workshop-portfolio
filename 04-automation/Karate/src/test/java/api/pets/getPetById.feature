Feature: Obtener Mascotas

  Scenario: Obtener una mascota existente
    Given url 'https://petstore.swagger.io/v2/pet/1'
    When method GET
    Then status 200
    And match response.id == 1