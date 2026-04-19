Feature: Actualizar Mascotas

  Scenario: Actualizar una mascota con PUT
    Given url 'https://petstore.swagger.io/v2/pet'
    And request
    """
    {
      "id": 123456,
      "name": "Firulais Actualizado",
      "photoUrls": ["foto1"],
      "tags": [{"id": 1, "name": "perro"}],
      "status": "sold"
    }
    """
    When method PUT
    Then status 200
    And match response.id == 123456
    And match response.name == "Firulais Actualizado"
    And match response.status == "sold"