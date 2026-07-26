# Ejercicio 089: Películas de miedo - Simulación de estados

## ¿Cómo pensé el problema?
Siguiendo los lineamientos del nivel intermedio aplicado, dividí el problema en funciones modulares. Una función valida la integridad de los datos de entrada del personaje, y otra se encarga de simular las transiciones lógicas de estado (como pánico total, huida o enfrentamiento) evaluando dinámicamente el miedo acumulado, la presencia de amenazas y las herramientas de defensa disponibles.

## Reglas aplicadas
1. **Validación estructural:** Comprobar que el objeto recibido contenga un nombre válido y no esté vacío.
2. **Condición de pánico extremo:** Si el nivel de miedo acumulado alcanza o supera los 90 puntos, el personaje entra en estado de bloqueo total.
3. **Gestión táctica:** Decidir si el personaje huye, se defiende o explora de acuerdo con la gravedad de la amenaza y los recursos con los que cuenta.

## Cómo ejecutar o revisar la solución
1. Asegúrate de tener instalado Node.js en tu equipo.
2. Ejecuta el archivo desde la terminal ejecutando el comando:
   ```bash
   node ejercicio-089/resoluciones/irma-arias/irma-arias.js