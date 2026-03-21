# Risk Matrix

| ID | Riesgo | Impacto | Probabilidad | Nivel | Justificación |
|----|--------|---------|--------------|-------|---------------|
| R1 | El sistema permite crear cuentas aunque las contraseñas no coincidan | 4 | 3 | 12 | Puede generar problemas de acceso y mala experiencia del usuario |
| R2 | El sistema falla al intentar registrar un usuario ya existente | 3 | 3 | 9 | Indica falta de validación y puede romper la aplicación |
| R3 | Se permite crear múltiples cuentas con el mismo correo electrónico | 2 | 2 | 4 | Genera inconsistencias en la gestión de usuarios |
| R4 | El sistema permite crear usuarios con datos inválidos (símbolos o sin restricciones) | 2 | 2 | 4 | Afecta la calidad de los datos y la seguridad |
| R5 | El carrito no agrega correctamente ciertos productos (ej: Large Fish) | 5 | 3 | 15 | Impacta directamente en el flujo de compra |
| R6 | Se pueden realizar compras con productos sin stock disponible | 5 | 2 | 10 | Afecta ingresos y genera mala experiencia del usuario |
| R7 | No existen políticas de seguridad para contraseñas | 2 | 2 | 4 | Riesgo de seguridad y posibles vulnerabilidades |


## Criterios de Evaluación de Riesgos

Para la asignación de los niveles de Impacto y Probabilidad en la matriz de riesgos, se utilizaron los siguientes criterios:

### Evaluación de Probabilidad

Se consideraron los siguientes factores:

- Complejidad de la funcionalidad (features con múltiples pasos o validaciones)
- Existencia previa de fallos detectados durante pruebas exploratorias
- Cantidad de interacciones o integraciones involucradas (por ejemplo: carrito, stock, usuarios)
- Tamaño de la funcionalidad
- Nivel de validaciones implementadas en el sistema


### Evaluación de Impacto

Se consideraron los siguientes factores:

- Impacto directo en el negocio (especialmente en el proceso de ventas)
- Posibles pérdidas económicas
- Frecuencia de uso por parte del usuario
- Visibilidad del problema para el usuario final
- Costo de corrección (retrabajo)

Los riesgos que afectan directamente el flujo de compra, autenticación o datos del usuario fueron clasificados con alto impacto.

---
