# Ejercicio 090: Viajes y turismo - Lectura de instrucciones

## ¿Cómo pensé el problema?
Siguiendo los lineamientos del nivel intermedio aplicado, dividí el problema en funciones modulares. La primera función valida la integridad y existencia de las instrucciones de reserva enviadas por el cliente, mientras que la segunda interpreta las reglas comerciales (número de viajeros, costos base, servicios adicionales como guía VIP e incremento por temporada alta) para calcular el resultado final.

## Reglas aplicadas
1. **Validación estructural:** Comprobar que el objeto de entrada contenga un destino turístico válido y no esté vacío.
2. **Control de aforo:** Asegurar que la cantidad de viajeros sea superior a cero para proceder con el cálculo.
3. **Cálculo de tarifas:** Aplicar recargos personalizados según los requerimientos especificados en el paquete vacacional.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-090/resoluciones/irma-arias/irma-arias.js